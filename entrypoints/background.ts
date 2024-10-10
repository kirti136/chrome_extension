export default defineBackground(() => {
  console.log("Hello background!");

  // When the extension is clicked, send a message to the content script
  browser.action.onClicked.addListener((tab) => {
    if (tab.id) {
      browser.tabs.sendMessage(tab.id, "highlight");
      console.log("Message sent to highlight input field.");
    }
  });
});
