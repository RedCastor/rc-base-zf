const hotMiddlewareScript = require('webpack-hot-middleware/client?noInfo=true&timeout=20000&reload=true&overlay=false');

hotMiddlewareScript.subscribe(event => {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
