import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { exec } from 'child_process'
import icon from '../../resources/icon.png?asset'
import { autoUpdater } from 'electron-updater'

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    kiosk: true,
    frame: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
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

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  // Windows sanal klavyesini açma handler'ı
  ipcMain.handle('open-virtual-keyboard', async () => {
    if (process.platform === 'win32') {
      try {
        // Windows 10/11 sanal klavyesini aç
        exec('osk.exe', (error) => {
          if (error) {
            console.error('Sanal klavye açılamadı:', error)
            return false
          }
        })
        return true
      } catch (error) {
        console.error('Sanal klavye açılırken hata:', error)
        return false
      }
    }
    return false
  })

  // Windows sanal klavyesini kapatma handler'ı
  ipcMain.handle('close-virtual-keyboard', async () => {
    if (process.platform === 'win32') {
      try {
        // Windows sanal klavyesini kapat
        exec('taskkill /f /im osk.exe', (error) => {
          if (error) {
            console.error('Sanal klavye kapatılamadı:', error)
            return false
          }
        })
        return true
      } catch (error) {
        console.error('Sanal klavye kapatılırken hata:', error)
        return false
      }
    }
    return false
  })

  createWindow()

  if (!is.dev) {
    setupAutoUpdater()
  }

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// EKLENECEK: autoUpdater kurulum fonksiyonu
function setupAutoUpdater() {
  // Otomatik indirmeyi aç
  autoUpdater.autoDownload = true
  autoUpdater.allowDowngrade = false

  const send = (type, payload) => {
    try {
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('update-status', { type, payload })
      }
    } catch (_) {}
  }

  autoUpdater.on('checking-for-update', () => send('checking-for-update'))
  autoUpdater.on('update-available', (info) => send('update-available', info))
  autoUpdater.on('update-not-available', (info) => send('update-not-available', info))
  autoUpdater.on('error', (err) => send('error', err?.stack || String(err)))
  autoUpdater.on('download-progress', (progress) => send('download-progress', progress))
  autoUpdater.on('update-downloaded', () => {
    send('update-downloaded')
    setImmediate(() => {
      // İndirilen güncellemeyi hemen uygula ve yeniden başlat
      autoUpdater.quitAndInstall()
    })
  })

  // Başlangıçta kontrol et
  autoUpdater.checkForUpdates()

  // Periyodik olarak kontrol (örn. her saat)
  setInterval(
    () => {
      autoUpdater.checkForUpdates()
    },
    60 * 60 * 1000
  )
}
