let main = document.querySelector(".main");
let facebook = document.querySelector("#facebook");

setTimeout(function () {
  main.classList.add("main_visible");
}, 500);

facebook.addEventListener("click", () => {
  console.log("object");
});

window.onload = function () {
  const youtubeIcon = new Vivus("youtube", {
    file: "./img/youtube.svg",
    duration: 200,
  });

  const facebookIcon = new Vivus("facebook", {
    duration: 200,
    file: "./img/facebook.svg",
  });

  const soundcloudIcon = new Vivus("soundcloud", {
    file: "./img/soundcloud.svg",
    duration: 200,
  });
  const whatsappIcon = new Vivus("whatsapp", {
    file: "./img/whatsapp.svg",
    duration: 200,
  });
  const telegramIcon = new Vivus("telegram", {
    file: "./img/telegram.svg",
    duration: 200,
  });
  const gmailIcon = new Vivus("gmail", {
    file: "./img/gmail.svg",
    duration: 200,
  });
  const instagramIcon = new Vivus("instagram", {
    file: "./img/instagram.svg",
    duration: 200,
  });
  const youtube_сopyIcon = new Vivus("youtube_сopy", {
    file: "./img/youtube_сopy.svg",
    duration: 200,
  });
};
