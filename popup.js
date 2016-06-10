window.addEventListener('DOMContentLoaded', function(e) {

  chrome.tabs.executeScript({
      file: 'crawler.js'
    },
    function (ps1) {
      chrome.storage.local.get('info', function (result) {
        document.getElementById('linkedIn').innerHTML = result.info.person.name;
     });
    }
  );
});
