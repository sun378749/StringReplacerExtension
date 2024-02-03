//TODO:有的页面内容在DOMContentLoaded后也没有加载成功，统一使用popup.js中按钮触发替换
document.addEventListener('DOMContentLoaded', function() {
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
});
