let main = document.querySelector(".main");
let band_name = document.querySelector(".band-name");
const animate = {
  duration: 200,
  type: "sync",
  animTimingFunction: Vivus.EASE_IN,
};

window.onload = function () {
  setTimeout(function () {
    main.classList.add("main_visible");
    band_name.classList.add("main_visible");
  }, 500);

  const youtubeIcon = new Vivus("youtube", {
    file: "./img/youtube.svg",
    ...animate,
  });

  const facebookIcon = new Vivus("facebook", {
    ...animate,
    file: "./img/facebook.svg",
  });

  const soundcloudIcon = new Vivus("soundcloud", {
    file: "./img/soundcloud.svg",
    ...animate,
  });
  const whatsappIcon = new Vivus("whatsapp", {
    file: "./img/whatsapp.svg",
    ...animate,
  });
  const telegramIcon = new Vivus("telegram", {
    file: "./img/telegram.svg",
    ...animate,
  });
  const gmailIcon = new Vivus("gmail", {
    file: "./img/gmail.svg",
    ...animate,
  });
  const instagramIcon = new Vivus("instagram", {
    file: "./img/instagram.svg",
    ...animate,
  });
  const youtube_сopyIcon = new Vivus("youtube_сopy", {
    file: "./img/youtube_сopy.svg",
    ...animate,
  });
};
