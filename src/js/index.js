function configureBannerRibbon() {
  var bannerHeight = $("#banner").height();
  $("#banner-ribbon-container").height(bannerHeight);
  $("#banner-ribbon").height(bannerHeight * 0.51);
}

function indexOnResize() {
  defaultOnResize();
  configureBannerRibbon();
}