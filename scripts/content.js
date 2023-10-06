var obs = new MutationObserver(function (mutations) {
  const videoList = document.getElementsByClassName(
    "style-scope ytd-rich-grid-row"
  );
  console.log(videoList);
  for (let i = 0; i < videoList.length; i++) {
    let hide = false;
    let author = videoList[i].querySelector(
      ".yt-simple-endpoint.style-scope.yt-formatted-string"
    ).text;
    if (author === "The Wild Project") {
      let length = videoList[i]
        .querySelector(
          "#text.style-scope.ytd-thumbnail-overlay-time-status-renderer"
        )
        .innerText.toString();
      let lengthDivided = length.split(":").map((x) => parseInt(x));

      let time = 0;
      if (lengthDivided.length == 2) {
        time = lengthDivided[0] * 60 + lengthDivided[1];
      }
      if (lengthDivided.length == 3) {
        time =
          lengthDivided[0] * 60 * 60 + lengthDivided[1] * 60 + lengthDivided[2];
      }
      if (time < 3600) {
        videoList[i].style.display = "none";
      }
    }
  }
});
obs.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});
