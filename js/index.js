rate = 0;
interval = null;

function beat($la, $ra, $lv, $rv) {
  inRate = parseInt(200 * (rate / 800));
  outRate = parseInt(400 * (rate / 800));

  lvTimeout = parseInt(75 * (rate / 800));
  raTimeout = parseInt(150 * (rate / 800));
  rvTimeout = parseInt(225 * (rate / 800));

  $la.animate({backgroundColor: "#82416D"}, inRate);
  $la.animate({backgroundColor: "#999"}, outRate);

  setTimeout(function() {
    $lv.animate({backgroundColor: "#82416D"}, inRate);
    $lv.animate({backgroundColor: "#999"}, outRate);
  }, lvTimeout);

  setTimeout(function() {
    $ra.animate({backgroundColor: "#C93030"}, inRate);
    $ra.animate({backgroundColor: "#999"}, outRate);
  }, raTimeout);

  setTimeout(function() {
    $rv.animate({backgroundColor: "#C93030"}, inRate);
    $rv.animate({backgroundColor: "#999"}, outRate);
  }, rvTimeout);
}

function updateInterval(value) {
  rate = 60000 / parseInt(value);
  if (interval) {
    clearInterval(interval);
  }
  start();
}

function start() {
  interval = setInterval(function() {
    beat($('#atria #left'),
         $('#atria #right'),
         $('#ventricles #left'),
         $('#ventricles #right'));
  }, rate);
}
