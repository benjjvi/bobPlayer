var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if (isIOSChrome) {
    console.log("ios chrome -- not displaying message")
 } 
else if ( 
   isChromium !== null &&
   typeof isChromium !== "undefined" &&
   vendorName === "Google Inc." &&
   isOpera === false &&
   isIEedge === false
 ) {
    document.getElementById("chromebanner").outerHTML = '<h4 id="chromebanner">Chrome, Opera, Modern Microsoft Edge, and all chromium based browser users, please read <a href="./chromeissues">this article.</a></h4>';
 } else { 
    console.log("not chrome") 
 }