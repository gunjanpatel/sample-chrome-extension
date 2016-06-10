var info = {
  person: {
    name: document.getElementById("name-container").innerHTML
  }
};

// Save it using the Chrome extension storage API.
chrome.storage.local.set({'info': info}, function() {
  // Notify that we saved.
  //alert('Settings saved');
});
