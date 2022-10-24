const getVideo = async (q) => {
  q += " osu cpol";
  let res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyDdXD4sVVOY6m8Tob_WCBcPPjHZ6Olk-l4&maxResults=1&type=video`
  );
  return await res.json();
};

document.getElementById("map-id").addEventListener("input", async (value) => {
  if (document.getElementById("map-id").value.length < 5) return;
  getVideo(document.getElementById("map-id").value).then((res) => {
    if (res.items[0].snippet.channelId == "UC8JgvW-qJJIl6pnU48tjqFA") playVideo(res.items[0].id.videoId);
  });
});

const playVideo = (id) => {
  document.getElementById("player").setAttribute("src", `http://www.youtube.com/embed/${id}?enablejsapi=1`);
};
