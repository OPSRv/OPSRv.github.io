let main = document.querySelector(".main");

window.onload = function () {
  setTimeout(function () {
    main.classList.add("main_visible");
  }, 500);

  const youtubeIcon = new Vivus("youtube", {
    type: "delayed",
    duration: 200,
  });

  const facebookIcon = new Vivus("facebook", {
    type: "delayed",
    duration: 200,
  });

  const soundcloudIcon = new Vivus("soundcloud", {
    type: "delayed",
    duration: 200,
  });
  const whatsappIcon = new Vivus("whatsapp", {
    type: "delayed",
    duration: 200,
  });
  const telegramIcon = new Vivus("telegram", {
    type: "delayed",
    duration: 200,
  });
  const gmailIcon = new Vivus("gmail", {
    type: "delayed",
    duration: 200,
  });
  const instagramIcon = new Vivus("instagram", {
    type: "delayed",
    duration: 200,
  });
  const youtube_сopyIcon = new Vivus("youtube_сopy", {
    type: "delayed",
    duration: 200,
  });
};
