chrome.storage.local.get({
    pattern_para: '',
    server_url_para: ''
}, function(items) {
    pattern = new RegExp(items.pattern_para, 'i');
    server_url = items.server_url_para;
});

function redirect(requestDetails) {
    if (!pattern.test(requestDetails.url)) return;
    console.log("Redirecting: " + requestDetails.url);
    return {
        redirectUrl: server_url + requestDetails.url.match(pattern)[0].toUpperCase()
    };
}

chrome.webRequest.onBeforeRequest.addListener(  // for Chrome
    // browser.webRequest.onBeforeRequest.addListener(  // for Firefox
    redirect,
    {urls:["https://www.google.com/search?*"]},
    ["blocking"]
);
