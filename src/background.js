browser.runtime.onMessage.addListener(function () {
  console.log("Hello from the background");

  browser.tabs.executeScript({
    file: "js/content-script.js",
  });

  // function getSelectionText() {
  //   var text = "";
  //   if (window.getSelection) {
  //     text = window.getSelection().toString();
  //   } else if (document.selection && document.selection.type != "Control") {
  //     text = document.selection.createRange().text;
  //   }
  //   return text;
  // }
});

const CONTEXT_MENU_ID = "SNYK_CODE_EXT_CONTEXT_MENU";

function getWord(info) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  console.log("Word " + info.selectionText + " was clicked.");
}

chrome.contextMenus.create({
  title: "Analyze with Snyk Code",
  contexts: ["selection"],
  id: CONTEXT_MENU_ID,
});

chrome.contextMenus.onClicked.addListener(getWord);
