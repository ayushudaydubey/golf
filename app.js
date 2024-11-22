var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets) {
   crsr.style.left = dets.x + 30 + "px"
   crsr.style.top = dets.y + "px"
   blur.style.left = dets.x - 250 + "px"
   blur.style.top = dets.y - 250 + "px"
})

gsap.to(".navbar", {
  backgroundColor: "black",
  duration: 0.5,
  height: "120px",
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    start: "top -10%",
    end:"top -20%",
    scrub: 1
  }
})

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2
  }
})

var h4all = document.querySelectorAll(".navbar h4");
h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crsr.style.transform = "scale(3)";
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function() {
    crsr.style.transform = "scale(1)";
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-us img, .about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 3
  }
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2
  }
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
});

gsap.from(".page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3
  }
});
