function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

ScrollTrigger.create({
    trigger: "#page5 .page-pin",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `300% bottom`,
    pinSpacing:false,
});

ScrollTrigger.create({
    trigger: "#page6 .page-pin",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `300% bottom`,
    pinSpacing:false,
});

ScrollTrigger.create({
    trigger: "#page7 .page-pin",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `300% bottom`,
    pinSpacing:false,
});


// gsap.to('#page8 #data',{
//   width:'60%',
//   height:'100%',
//   duration:2,
//   scrollTrigger:{
//     trigger:'#page8',
//     start:'center center',
//     end:'bottom center',
//     markers:true
//   },
// })

var xscale = 1;
var yscale = 1;
var xprev = 0;
var yprev = 0;
var timeout;

window.addEventListener('mousemove',(details) => {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(.8,1.2,details.clientX - xprev);
    yscale = gsap.utils.clamp(.8,1.2,details.clientY - yprev);
    xprev = details.clientX;
    yprev = details.clientY;
    mouseMove(xscale,yscale);
    timeout = setTimeout(()=>{
        document.querySelector('#mini-cicle').style.transform = `translate(${details.clientX - 7}px,${details.clientY - 7}px) scale(1,1)`;
    },100)
})

function mouseMove(xscale,yscale){
  window.addEventListener('mousemove',(details) => {
      document.querySelector('#mini-cicle').style.transform = `translate(${details.clientX - 7}px,${details.clientY - 7}px) scale(${xscale},${yscale})`;
  });
}

const left = document.querySelectorAll('.products-left');
console.log(left);
const move = document.querySelector('#mini-circle');
// left.addEventListener('mouseover',() =>{
//   document.querySelector('#mini-cicle').style.width = '200px'
//   console.log('enter')
//   document.querySelector('#mini-cicle').style.height = '200px'
// })
