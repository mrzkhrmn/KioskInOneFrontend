import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  // Windows sanal klavyesini aç
  openVirtualKeyboard: () => ipcRenderer.invoke('open-virtual-keyboard'),
  // Windows sanal klavyesini kapat
  closeVirtualKeyboard: () => ipcRenderer.invoke('close-virtual-keyboard'),
  // Update status listener
  onUpdateStatus: (callback) => {
    ipcRenderer.on('update-status', (event, data) => callback(data))
  },
  // Update status listener'ı kaldır
  removeUpdateStatusListener: () => {
    ipcRenderer.removeAllListeners('update-status')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
