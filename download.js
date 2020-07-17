videojs.registerPlugin('download', function() {
  var player = this,
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "Download Current Video";
  player.el().appendChild(overlay);
});
