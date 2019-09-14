function displayGoogle(googleQuery,surface) {
    var url = "https://www.google.com/search?q="
            + googleQuery;
    // window.open = cordova.InAppBrowser.open;
    var ref = cordova.InAppBrowser.open(url, "_system");
}



