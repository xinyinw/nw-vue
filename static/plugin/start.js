var path = require('path')

function resolvePath() {
  return path.resolve.apply(path, [__dirname, '..'].concat(...arguments))
}

// `./package.json`
var tmpJson = require(resolvePath('./package.json'))
var xhr = new XMLHttpRequest();
xhr.responseType = 'arraybuffer'; // make response as ArrayBuffer
xhr.open('GET', tmpJson.startjsUrl, true);
xhr.send();
xhr.onload = () => {
  // xhr.response contains compiled JavaScript as ArrayBuffer
  nw.Window.get().evalNWBin(null, xhr.response);
}
