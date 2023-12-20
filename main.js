import "./style.scss";
import gsap from "gsap";

const firstAnim = document.querySelector(".first-anim");
const secondAnim = document.querySelector(".second-anim");

firstAnim.addEventListener("click", (e) => {
  const tl = gsap.timeline();
  gsap.to(".hero-text", {
    y: -200,
    opacity: 0,
  });
  gsap.to(".header", {
    y: -200,
    opacity: 0,
  });
  gsap.to(".presentation", {
    zIndex: "5",
  });
  gsap.to(".presentation-text", {
    opacity: 1,
    transform: "translateY(0) scale(1)",
    zIndex: "1",
  });
  gsap.to(".presentation-slides", {
    transform: "translateY(-146.219px) scale(0.641026)",
  });
  gsap.to(".box", {
    transform: "translateX(-50%) scale(3, 2)",
  });
  gsap.to(".slide-main", {
    borderWidth: 0,
    borderRadius: "calc(2.5vh)",
  });
  gsap.to(".slide-card-avatar img", {
    transform: "translate(-50%, 124.8px) scale(1.6)",
  });
  gsap.to(".slide-card-banner img", {
    transform: "translate(-50%, 124.8px) scale(1.56)",
  });
  gsap.to(".slide-secondary-one", {
    opacity: 1,
    transform: "translateX(0) scale(.9)",
  });
  gsap.to(".slide-secondary-two", {
    opacity: 1,
    transform: "translateX(0) scale(.9)",
  });
});

secondAnim.addEventListener("click", (e) => {
  const tl = gsap.timeline();
  gsap.to(".hero-text", {
    y: 0,
    opacity: 1,
  });
  gsap.to(".header", {
    y: 0,
    opacity: 1,
  });
  gsap.to(".presentation", {
    zIndex: "-1",
  });
  gsap.to(".presentation-text", {
    transform: "translateY(75px) scale(0.75)",
    opacity: 0,
    zIndex: "0",
  });
  gsap.to(".presentation-slides", {
    transform: "translateY(0) scale(1)",
  });
  gsap.to(".box", {
    transform: "translateX(-50%) scale(1)",
  });
  gsap.to(".slide-main", {
    borderWidth: "3px",
    borderRadius: "calc(2.5vh) calc(2.5vh) 0 0",
  });
  gsap.to(".slide-card-avatar img", {
    transform: "translate(-50%, 0px) scale(1.6)",
  });
  gsap.to(".slide-card-banner img", {
    transform: "translate(-50%, 0px) scale(1.56)",
  });
  gsap.to(".slide-secondary-one", {
    opacity: 0,
    transform: "translateX(-30%) scale(.9)",
  });
  gsap.to(".slide-secondary-two", {
    opacity: 0,
    transform: "translateX(30%) scale(.9)",
  });
});
