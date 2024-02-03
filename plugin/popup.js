document.getElementById('replaceButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: replaceContent
      });
    });
  });
  
  function replaceContent() {
    fetch(chrome.runtime.getURL('assets/replacerules.json'))
      .then(response => response.json())
      .then(data => {
        data.forEach(rule => {
          let searchPattern = new RegExp(rule.origin, 'g');
          let replacement = `<img src="${chrome.runtime.getURL('assets/' + rule.replace)}" style="width: 100px; height: 100px;">`;
          document.body.innerHTML = document.body.innerHTML.replace(searchPattern, replacement);
        });
      })
      .catch(error => console.error('Error loading replacement rules:', error));
  }
  