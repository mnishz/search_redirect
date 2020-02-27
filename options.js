// Saves options to chrome.storage
function save_options() {
    var pattern = document.getElementById('pattern').value;
    var server_url = document.getElementById('server_url').value
    chrome.storage.local.set({
        pattern_para: pattern,
        server_url_para: server_url
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved. Please restart the browser or this extension.';
    });
}

// Restores options using the preferences stored in chrome.storage.
function restore_options() {
    chrome.storage.local.get({
        pattern_para: '',
        server_url_para: ''
    }, function(items) {
        document.getElementById('pattern').value = items.pattern_para;
        document.getElementById('server_url').value = items.server_url_para;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
