chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('beta.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});
