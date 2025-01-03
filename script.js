function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"), // Your container
      smooth: true, // Enable smooth scrolling
      multiplier: 2, // Adjust the scroll speed (lower = slower, smoother)
      smoothMobile: true, // Enable smooth scrolling on mobile
      smartphone: {
        smooth: true, // Smooth scrolling for smartphones
      },
      tablet: {
        smooth: true, // Smooth scrolling for tablets
      },
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
    scrub:0.5,
    anticipatePin: 1,
    ease: "power3.out",
});

ScrollTrigger.create({
    trigger: "#page6 .page-pin",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `300% bottom`,
    pinSpacing:false,
    scrub:0.5,
    anticipatePin: 1,
    ease: "power3.out",
});

ScrollTrigger.create({
    trigger: "#page7 .page-pin",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `300% bottom`,
    pinSpacing:false,
    scrub:0.5,
    anticipatePin: 1,
    ease: "power3.out",
});


var xscale = 1;
var yscale = 1;
var xprev = 0;
var yprev = 0;
var timeout;

window.addEventListener('mousemove',(details) => {
    xprev = details.clientX;
    yprev = details.clientY;
    document.querySelector('#mini-cicle').style.transform = `translate(${details.clientX - 7}px,${details.clientY - 7}px) scale(1,1)`;
})

const left = document.querySelectorAll('.products-left');

const right = document.querySelectorAll('.products-right');

let move = document.querySelector('#mini-cicle');
let text = document.querySelector('#mini-cicle p');
left.forEach(element => {
  element.addEventListener('mouseenter', () =>{
    move.style.width = `${200}px`;
    move.style.height = '200px';
    move.style.color = '#fff';
    text.style.display = 'block';
  });
});
left.forEach(element => {
  element.addEventListener('mouseout', () =>{
    move.style.width = `${15}px`;
    move.style.height = '15px';
    move.style.color = '#000';
    text.style.display = 'none';
  });
});

right.forEach(element => {
  element.addEventListener('mouseenter', () =>{
    move.style.width = `${200}px`;
    move.style.height = '200px';
    move.style.color = '#fff';
    text.style.display = 'block';
  });
});
right.forEach(element => {
  element.addEventListener('mouseout', () =>{
    move.style.width = `${15}px`;
    move.style.height = '15px';
    move.style.color = '#000';
    text.style.display = 'none';
  });
});


window.addEventListener("load", function(){
  document.querySelector('#main').style.height = 'auto';
        gsap.to('.loader',{
          y:'-100%',
        })
})

let product = document.querySelector('.product-show')
function productShow(data){
  const productImg = product.querySelector('img')
  productImg.setAttribute('src',`${data}`)
  gsap.to(product,{
    x:'-100%',
    opacity:1,
    duration:1,
  })
}


left.forEach(element => {
  element.addEventListener('click',function () {
    const ImgPath = this.dataset.value;
    productShow(ImgPath);
  })
})

right.forEach(element => {
  element.addEventListener('click',function () {
    const ImgPath = this.dataset.value;
    productShow(ImgPath);
  })
})

const Close = document.querySelector('#close');

Close.addEventListener('click',() => {
  gsap.to(product,{
    x:'100%',
    opacity:0,
    duration:1
  })
})