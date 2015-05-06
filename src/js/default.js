function configureTextRibbon() {
  $(".ribbon-background").each(function(index, element) {
    var ribbon = $(element).parent();
    $(element).height(ribbon.height()).width(ribbon.width());
  });
  $(".ribbon-text-container").each(function(index, element) {
    var ribbon = $(element).parent();
    $(element).height(ribbon.height()).width(ribbon.width());
  });
  $(".ribbon-text-container > h1").each(function(index, element) {
    var ribbonHeight = $(element).parent().height();
    var ribbonWidth = $(element).parent().width();
    var fontSize = Math.sqrt(ribbonHeight * ribbonWidth) * 0.12;
    $(element).css("font-size", fontSize + "px");
  });
  $(".ribbon-text-container > p").each(function(index, element) {
    var ribbonHeight = $(element).parent().height();
    var ribbonWidth = $(element).parent().width();
    var fontSize = Math.sqrt(ribbonHeight * ribbonWidth) * 0.053;
    $(element).css("font-size", fontSize + "px");
  });
}

function defaultOnResize() {
  configureTextRibbon();
}