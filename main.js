const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);