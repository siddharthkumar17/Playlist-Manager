const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

var ytlist = [{name:"hello"}, {name:"hello2"}]

var slist = [{name:"hello"}, {name:"hello2"}]

let win

function createWindow () {

  win = new BrowserWindow({width: 1600, height: 900, autoHideMenuBar: true})


  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  /*
  document.getElementById('slist').appendChild(makeList(slist));
  document.getElementById('ytlist').appendChild(makeList(ytlist));



*/




  win.on('closed', () => {

    win = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (win === null) {
    createWindow()
  }
})
