// when fill-now-btn is clicked
document.getElementById("fill-now-btn").addEventListener("click", function () {
  var feedbackValue = document.getElementById("feedback-value").value || "bad";
  chrome.tabs.executeScript(
    {
      // send value to script to fill feedback
      code: "var feedbackValue = " + JSON.stringify(feedbackValue),
    },
    function () {
      // run script to fill feedback
      chrome.tabs.executeScript({
        file: "academia.js",
      });
    }
  );
  //   fill feedback-status with success
  document.getElementById("feedback-status").innerHTML = "Boong Success!";
});
