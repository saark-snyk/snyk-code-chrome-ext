console.log("Hello from the content-script");

// function copyToClipboard(text) {
//   const textarea = document.createElement("textarea");
//   document.body.appendChild(textarea);
//   textarea.value = text;
//   textarea.select();
//   textarea.setSelectionRange(0, 99999);
//   document.execCommand("copy");
//   document.body.removeChild(textarea);
// }

// from James, intended to be used in the ctx menu
// function getSelectionText() {
//     var text = "";
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     return text;
// }

// copyToClipboard("test");
