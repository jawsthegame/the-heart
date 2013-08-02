rate = 0;
interval = null;
pr_interval = 1.0; // for purposes of this app, 'normal' is 1.0

function beat($la, $ra, $lv, $rv) {
  var laInRate        = parseInt(200 * (rate / 800));
  var laOutRate       = parseInt(400 * (rate / 800));
  var laOutRatePR     = parseInt(laOutRate * pr_interval);
  var laOutRatePRDiff = laOutRatePR - laOutRate;

  var lvInRate  = parseInt(200 * (rate / 800));
  var lvOutRate = parseInt(400 * (rate / 800));

  var raInRate        = parseInt(200 * (rate / 800));
  var raOutRate       = parseInt(400 * (rate / 800));
  var raOutRatePR     = parseInt(raOutRate * pr_interval);
  var raOutRatePRDiff = raOutRatePR - raOutRate;

  var rvInRate  = parseInt(200 * (rate / 800));
  var rvOutRate = parseInt(400 * (rate / 800));

  var lvTimeout = parseInt(75 * (rate / 800) + laOutRatePRDiff);
  var raTimeout = parseInt(150 * (rate / 800) + laOutRatePRDiff);
  var rvTimeout = parseInt(225 * (rate / 800) + laOutRatePRDiff + raOutRatePRDiff);

  $la.animate({backgroundColor: "#82416D"}, laInRate);
  $la.animate({backgroundColor: "#999"}, laOutRatePR);

  setTimeout(function() {
    $lv.animate({backgroundColor: "#82416D"}, lvInRate);
    $lv.animate({backgroundColor: "#999"}, lvOutRate);
  }, lvTimeout);

  setTimeout(function() {
    $ra.animate({backgroundColor: "#C93030"}, raInRate);
    $ra.animate({backgroundColor: "#999"}, raOutRatePR);
  }, raTimeout);

  setTimeout(function() {
    $rv.animate({backgroundColor: "#C93030"}, rvInRate);
    $rv.animate({backgroundColor: "#999"}, rvOutRate);
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
