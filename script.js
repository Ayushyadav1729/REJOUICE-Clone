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

function page2Animation() {
    var tl = gsap.timeline();
    tl.from("#page2-text h3",{
        y:120,
        duration:1.3,
        opacity:0,
        ease: "power2",
        scrollTrigger:{
            trigger:"#page2-content",
            // scroller:"#body",
            start: "top 80%",
            end: "top 60%",
            scrub: 2,
            markers:true,
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
    //   scroller: "#body",
      start: "top 70%",
      end: "top 30%",
      scrub: 2,
      markers:true,
    },
  });
}
page2Animation();