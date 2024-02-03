chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed.");
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // if (changeInfo.status === "complete") {
  //   chrome.scripting.executeScript({
  //     target: { tabId: tabId },
  //     function: executeContentScript
  //   });
  // }
});

function executeContentScript() {
  // Content script logic goes here
  console.log("Content script executed.");
}
