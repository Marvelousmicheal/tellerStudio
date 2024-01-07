import { lerp } from "./utilis.js";
import { createProjects } from "./project.js";
import { createBlogPosts } from "./blog.js";

const main = document.querySelector("main");
const video = document.querySelector("video");
const videoSection = document.querySelector("#video");
const headerLeft = document.querySelector(".text__header__left");
const headerright = document.querySelector(".text__header__right ");

main.addEventListener("scroll", () => {
  animateVideo();
});

createProjects();
createBlogPosts();

function animateVideo() {
  let { bottom } = videoSection.getBoundingClientRect();
  let scale = 1 - (bottom - window.innerHeight) * 0.0005;
  scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
  video.style.transform = ` scale(${scale})`;
  ////Text-transform

  let textTrans = bottom - window.innerHeight;

  textTrans = textTrans < 0 ? 0 : textTrans;
  headerLeft.style.transform = `translateX(${-textTrans}px)`;
  headerright.style.transform = `translateX(${textTrans}px)`;
}

//projects

const projectsSticky = document.querySelector(".projects__sticky");
const projectSlider = document.querySelector(".project__slider");

let projectTargetX = 0;
let projectCurrentX = 0;

let percentages = {
  small: 700,
  medium: 300,
  large: 100,
};
let limit =
  window.innerWidth <= 600
    ? percentages.small
    : window.innerWidth <= 1100
    ? percentages.medium
    : percentages.large;

function setLimit() {
  limit =
    window.innerWidth <= 600
      ? percentages.small
      : window.innerWidth <= 1100
      ? percentages.medium
      : percentages.large;
}

window.addEventListener("resize", setLimit);

function animateProjects() {
  let offsetTop = projectsSticky.parentElement.offsetTop;
  let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
  projectTargetX = percentage;
  projectCurrentX = lerp(projectCurrentX, projectTargetX, 0.1);
  projectSlider.style.transform = `translate3d(${-projectCurrentX}vw,0,0)`;
}

//post animation

const blogSection = document.getElementById("blog");
const blogPost = [...document.querySelectorAll(".post")];

function scrollingPost() {
  let blogsectionTop = blogSection.getBoundingClientRect().top;
  for (let i = 0; i < blogPost.length; i++) {
    if (blogPost[i].parentElement.getBoundingClientRect().top <= 1) {
      // adding +1 to account for the first blog title div
      let offset = (blogsectionTop + window.innerHeight * (i + 1)) * 0.0005;
      offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
      blogPost[i].style.transform = `scale(${1 + offset})`;
    }
  }
}

///circle section

const circleSection = document.getElementById("circle__section");
const circle = document.querySelector(".circle");

function scrollCircle() {
  let { top } = circleSection.getBoundingClientRect();
  let scaleTop = Math.abs(top);
  let scale = scaleTop / window.innerHeight;
  scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
  if (top <= 0) {
    circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
  } else {
    circle.style.transform = `translate(-50%, -50%) scale(${0})`;
  }
}

// discover text animation

const discoverContainer = document.querySelector(".discover__container");
const leftText = document.querySelector(".text__left");
const rightText = document.querySelector(".text__right");

function scrollDiscover() {
  let { bottom } = discoverContainer.getBoundingClientRect();
  let textTrans = bottom - window.innerHeight;
  textTrans = textTrans < 0 ? 0 : textTrans;
  leftText.style.transform = `translateX(${-textTrans}px)`;
  rightText.style.transform = `translateX(${textTrans}px)`;
}

// text-reveal

const textReveals = [...document.querySelectorAll(".text__reveal")];
console.log(textReveals)
let callback =( (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      [...entry.target.querySelectorAll("span")].forEach((span, idx) => {
        setTimeout(() => {
          span.style.transform = `translateY(0)`;
        }, (idx + 1) * 50);
      });
    }
  });
});

let options = {
  rootMargin: `0px`,
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);

textReveals.forEach((text) => {
  let string = text.innerText;
  let html = "";
  for (let i = 0; i < string.length; i++) {
    html += `<span>${string[i]}</span>`;
  }
  text.innerHTML = html;
  observer.observe(text);
});

function animate() {
  animateProjects();

  requestAnimationFrame(animate);
}
main.addEventListener("scroll", () => {
  scrollingPost();
  scrollCircle();
  scrollDiscover();
});
animate();
