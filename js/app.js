let main = document.querySelector(".main");
let menu__item = document.querySelector(".menu__item");
let menu__item_two = document.querySelector(".menu__item_two");

setTimeout(function () {
  document.body.classList.add("body_visible");
}, 200);

window.onload = function () {
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
