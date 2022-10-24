document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var cn = document.getElementById("cookie-notif");

cn.addEventListener("mouseenter", () => {
  anime({
    targets: ".cookie",
    opacity: 100,
    fontSize: "18px",
    easing: "linear",
    duration: 200,
    delay: 200,
  });
  anime({
    targets: "#cookie-txt",
    opacity: 100,
    fontSize: "10px",
    easing: "linear",
    duration: 200,
    delay: 200,
  });
  anime({
    targets: "#cookie-notif",
    height: "300px",
    width: "200px",
    borderRadius: "10px",
    easing: "easeInOutQuad",
    duration: 400,
  });
  anime({
    targets: "#cookie-notif > img",
    top: "3.5%",
    left: "5%",
    width: "20px",
    height: "20px",
    easing: "easeInOutQuad",
    duration: 400,
  });
});

cn.addEventListener("mouseleave", () => {
  anime({
    targets: ".cookie",
    opacity: 0,
    fontSize: "0px",
    easing: "linear",
    duration: 200,
    enddelay: 200,
  });
  anime({
    targets: "#cookie-txt",
    opacity: 0,
    fontSize: "0px",
    easing: "linear",
    duration: 200,
    enddelay: 200,
  });
  anime({
    targets: "#cookie-notif",
    height: "50px",
    width: "50px",
    borderRadius: "30px",
    easing: "easeInOutQuad",
    duration: 400,
  });
  anime({
    targets: "#cookie-notif > img",
    top: "15%",
    left: "15%",
    width: "35px",
    height: "35px",
    easing: "easeInOutQuad",
    duration: 400,
  });
});

let k = 0;

Array.from(document.getElementsByClassName("cookie")).forEach((e) => {
  e.addEventListener("click", () => {
    anime({
      targets: e,
      translateX: -240,
      complete: () => {
        for (let i = parseInt(e.id[1], 10) + 1; i <= 4; i += 1) {
          anime({
            targets: "#c" + i,
            translateY: -40 - k,
          });
        }
        k += 40;
      },
      easing: "easeOutQuad",
      duration: 250,
    });
  });
});
