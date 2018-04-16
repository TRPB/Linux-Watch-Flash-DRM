const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, 'libpepflashplayer.so'));
app.commandLine.appendSwitch('ppapi-flash-version', '29.0.0.113');

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768 });
  mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
});
