/*script for locomotivScroll*/ 

function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



}

locoscroll();

/* Script for 1st cursor*/

function cursorEffect(){
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })

})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect();
/*script for page2
 */
function page2Animation() {
    var tl = gsap.timeline();
    tl.from("#page2-text h3",{
        y:120,
        duration:1.3,
        opacity:0,
        ease: "power2",
        scrollTrigger:{
            trigger:"#page2-content",
            scroller:"#main",
            start: "top 80%",
            end: "top 60%",
            scrub: 2,
            // markers:true,
        },
    });
 tl.from(".line1, .line2, .line3, .line4, .line5", {
    y: 240,
    duration: 3.6,
    stagger: 0.2,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#page2-content",
      scroller: "#main",
      start: "top 70%",
      end: "top 30%",
      scrub: 2,
    //   markers:true,
    },
  });
}
page2Animation();



/* Script for 2nd cursor*/

function cursorEffect2(){
    var page4 = document.querySelector("#page4-item")
var cursor2 = document.querySelector("#cursor2")

page4.addEventListener("mousemove",function(dets){
    gsap.to(cursor2,{
        x:dets.x,
        y:dets.y,
    })

})
page4.addEventListener("mouseenter",function(){
    gsap.to(cursor2,{
        scale:1,
        opacity:1
    })
})
page4.addEventListener("mouseleave",function(){
    gsap.to(cursor2,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect2();

/* Script using swipperjs for slider*/ 

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
}
sliderAnimation()

/* Script for loader */
 var tl = gsap.timeline()

 tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
 })
 tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
 })
 tl.to("#loader",{
    opacity:0
 })
  tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    durationo:0.5,
    delay:-0.5
 })
  tl.to("#loader",{
    display:"none"
 })
