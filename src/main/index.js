import { app, shell, BrowserWindow, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { autoUpdater } from 'electron-updater'

let mainWindow

if (is.dev) {
  app.commandLine.appendSwitch('ignore-certificate-errors', 'true')
  app.commandLine.appendSwitch('allow-insecure-localhost', 'true')
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    kiosk: false,
    frame: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      allowRunningInsecureContent: true,
      experimentalFeatures: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  if (!is.dev) {
    setupAutoUpdater()
  }

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function setupAutoUpdater() {
  autoUpdater.autoDownload = true
  autoUpdater.allowDowngrade = false

  const send = (type, payload) => {
    try {
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('update-status', { type, payload })
      }
    } catch (error) {
      console.warn('update-status gönderilemedi:', error)
    }
  }

  autoUpdater.on('checking-for-update', () => send('checking-for-update'))
  autoUpdater.on('update-available', (info) => send('update-available', info))
  autoUpdater.on('update-not-available', (info) => send('update-not-available', info))
  autoUpdater.on('error', (err) => send('error', err?.stack || String(err)))
  autoUpdater.on('download-progress', (progress) => send('download-progress', progress))
  autoUpdater.on('update-downloaded', async (info) => {
    send('update-downloaded', info)
    try {
      if (mainWindow && !mainWindow.isDestroyed()) {
        const result = await dialog.showMessageBox(mainWindow, {
          type: 'question',
          buttons: ['Evet', 'Hayır'],
          defaultId: 0,
          cancelId: 1,
          title: 'Güncelleme hazır',
          message:
            'Yeni bir sürüm indirildi. Uygulama kapanacak ve arka planda güncelleme yapılacak. Kurulum tamamlandığında uygulama otomatik olarak yeniden açılacak.',
          detail: `Mevcut sürüm: ${app.getVersion()}\nYeni sürüm: ${info?.version || ''}`
        })

        if (result.response === 0) {
          send('update-installing')

          setTimeout(() => {
            autoUpdater.quitAndInstall(true, true)
          }, 500)
        } else {
          send('update-postponed')
        }
      } else {
        setImmediate(() => {
          autoUpdater.quitAndInstall(true, true)
        })
      }
    } catch (err) {
      send('error', err?.stack || String(err))
    }
  })

  autoUpdater.checkForUpdates()

  setInterval(
    () => {
      autoUpdater.checkForUpdates()
    },
    60 * 60 * 1000
  )
}
