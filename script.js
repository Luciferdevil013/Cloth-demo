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

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  
  
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
    var data = `
    ./ani/Animation - Made with Clipchamp_000.jpg
./ani/Animation - Made with Clipchamp_001.jpg
./ani/Animation - Made with Clipchamp_002.jpg
./ani/Animation - Made with Clipchamp_003.jpg
./ani/Animation - Made with Clipchamp_004.jpg
./ani/Animation - Made with Clipchamp_005.jpg
./ani/Animation - Made with Clipchamp_006.jpg
./ani/Animation - Made with Clipchamp_007.jpg
./ani/Animation - Made with Clipchamp_008.jpg
./ani/Animation - Made with Clipchamp_009.jpg
./ani/Animation - Made with Clipchamp_010.jpg
./ani/Animation - Made with Clipchamp_011.jpg
./ani/Animation - Made with Clipchamp_012.jpg
./ani/Animation - Made with Clipchamp_013.jpg
./ani/Animation - Made with Clipchamp_014.jpg
./ani/Animation - Made with Clipchamp_015.jpg
./ani/Animation - Made with Clipchamp_016.jpg
./ani/Animation - Made with Clipchamp_017.jpg
./ani/Animation - Made with Clipchamp_018.jpg
./ani/Animation - Made with Clipchamp_019.jpg
./ani/Animation - Made with Clipchamp_020.jpg
./ani/Animation - Made with Clipchamp_021.jpg
./ani/Animation - Made with Clipchamp_022.jpg
./ani/Animation - Made with Clipchamp_023.jpg
./ani/Animation - Made with Clipchamp_024.jpg
./ani/Animation - Made with Clipchamp_025.jpg
./ani/Animation - Made with Clipchamp_026.jpg
./ani/Animation - Made with Clipchamp_027.jpg
./ani/Animation - Made with Clipchamp_028.jpg
./ani/Animation - Made with Clipchamp_029.jpg
./ani/Animation - Made with Clipchamp_030.jpg
./ani/Animation - Made with Clipchamp_031.jpg
./ani/Animation - Made with Clipchamp_032.jpg
./ani/Animation - Made with Clipchamp_033.jpg
./ani/Animation - Made with Clipchamp_034.jpg
./ani/Animation - Made with Clipchamp_035.jpg
./ani/Animation - Made with Clipchamp_036.jpg
./ani/Animation - Made with Clipchamp_037.jpg
./ani/Animation - Made with Clipchamp_038.jpg
./ani/Animation - Made with Clipchamp_039.jpg
./ani/Animation - Made with Clipchamp_040.jpg
./ani/Animation - Made with Clipchamp_041.jpg
./ani/Animation - Made with Clipchamp_042.jpg
./ani/Animation - Made with Clipchamp_043.jpg
./ani/Animation - Made with Clipchamp_044.jpg
./ani/Animation - Made with Clipchamp_045.jpg
./ani/Animation - Made with Clipchamp_046.jpg
./ani/Animation - Made with Clipchamp_047.jpg
./ani/Animation - Made with Clipchamp_048.jpg
./ani/Animation - Made with Clipchamp_049.jpg
./ani/Animation - Made with Clipchamp_050.jpg
./ani/Animation - Made with Clipchamp_051.jpg
./ani/Animation - Made with Clipchamp_052.jpg
./ani/Animation - Made with Clipchamp_053.jpg
./ani/Animation - Made with Clipchamp_054.jpg
./ani/Animation - Made with Clipchamp_055.jpg
./ani/Animation - Made with Clipchamp_056.jpg
./ani/Animation - Made with Clipchamp_057.jpg
./ani/Animation - Made with Clipchamp_058.jpg
./ani/Animation - Made with Clipchamp_059.jpg
./ani/Animation - Made with Clipchamp_060.jpg
./ani/Animation - Made with Clipchamp_061.jpg
./ani/Animation - Made with Clipchamp_062.jpg
./ani/Animation - Made with Clipchamp_063.jpg
./ani/Animation - Made with Clipchamp_064.jpg
./ani/Animation - Made with Clipchamp_065.jpg
./ani/Animation - Made with Clipchamp_066.jpg
./ani/Animation - Made with Clipchamp_067.jpg
./ani/Animation - Made with Clipchamp_068.jpg
./ani/Animation - Made with Clipchamp_069.jpg
./ani/Animation - Made with Clipchamp_070.jpg
./ani/Animation - Made with Clipchamp_071.jpg
./ani/Animation - Made with Clipchamp_072.jpg
./ani/Animation - Made with Clipchamp_073.jpg
./ani/Animation - Made with Clipchamp_074.jpg
./ani/Animation - Made with Clipchamp_075.jpg
./ani/Animation - Made with Clipchamp_076.jpg
./ani/Animation - Made with Clipchamp_077.jpg
./ani/Animation - Made with Clipchamp_078.jpg
./ani/Animation - Made with Clipchamp_079.jpg
./ani/Animation - Made with Clipchamp_080.jpg
./ani/Animation - Made with Clipchamp_081.jpg
./ani/Animation - Made with Clipchamp_082.jpg
./ani/Animation - Made with Clipchamp_083.jpg
./ani/Animation - Made with Clipchamp_084.jpg
./ani/Animation - Made with Clipchamp_085.jpg
./ani/Animation - Made with Clipchamp_086.jpg
./ani/Animation - Made with Clipchamp_087.jpg
./ani/Animation - Made with Clipchamp_088.jpg
./ani/Animation - Made with Clipchamp_089.jpg
./ani/Animation - Made with Clipchamp_090.jpg
./ani/Animation - Made with Clipchamp_091.jpg
./ani/Animation - Made with Clipchamp_092.jpg
./ani/Animation - Made with Clipchamp_093.jpg
./ani/Animation - Made with Clipchamp_094.jpg
./ani/Animation - Made with Clipchamp_095.jpg
./ani/Animation - Made with Clipchamp_096.jpg
./ani/Animation - Made with Clipchamp_097.jpg
./ani/Animation - Made with Clipchamp_098.jpg
./ani/Animation - Made with Clipchamp_099.jpg
./ani/Animation - Made with Clipchamp_100.jpg
./ani/Animation - Made with Clipchamp_101.jpg
./ani/Animation - Made with Clipchamp_102.jpg
./ani/Animation - Made with Clipchamp_103.jpg
./ani/Animation - Made with Clipchamp_104.jpg
./ani/Animation - Made with Clipchamp_105.jpg
./ani/Animation - Made with Clipchamp_106.jpg
./ani/Animation - Made with Clipchamp_107.jpg
./ani/Animation - Made with Clipchamp_108.jpg
./ani/Animation - Made with Clipchamp_109.jpg
./ani/Animation - Made with Clipchamp_110.jpg
./ani/Animation - Made with Clipchamp_111.jpg
./ani/Animation - Made with Clipchamp_112.jpg
./ani/Animation - Made with Clipchamp_113.jpg
./ani/Animation - Made with Clipchamp_114.jpg
./ani/Animation - Made with Clipchamp_115.jpg
./ani/Animation - Made with Clipchamp_116.jpg
./ani/Animation - Made with Clipchamp_117.jpg
./ani/Animation - Made with Clipchamp_118.jpg
./ani/Animation - Made with Clipchamp_119.jpg
./ani/Animation - Made with Clipchamp_120.jpg
./ani/Animation - Made with Clipchamp_121.jpg
./ani/Animation - Made with Clipchamp_122.jpg
./ani/Animation - Made with Clipchamp_123.jpg
./ani/Animation - Made with Clipchamp_124.jpg
./ani/Animation - Made with Clipchamp_125.jpg
./ani/Animation - Made with Clipchamp_126.jpg
./ani/Animation - Made with Clipchamp_127.jpg
./ani/Animation - Made with Clipchamp_128.jpg
./ani/Animation - Made with Clipchamp_129.jpg
./ani/Animation - Made with Clipchamp_130.jpg
./ani/Animation - Made with Clipchamp_131.jpg
./ani/Animation - Made with Clipchamp_132.jpg
./ani/Animation - Made with Clipchamp_133.jpg
./ani/Animation - Made with Clipchamp_134.jpg
./ani/Animation - Made with Clipchamp_135.jpg
./ani/Animation - Made with Clipchamp_136.jpg
./ani/Animation - Made with Clipchamp_137.jpg
./ani/Animation - Made with Clipchamp_138.jpg
./ani/Animation - Made with Clipchamp_139.jpg
./ani/Animation - Made with Clipchamp_140.jpg
./ani/Animation - Made with Clipchamp_141.jpg
./ani/Animation - Made with Clipchamp_142.jpg
./ani/Animation - Made with Clipchamp_143.jpg
./ani/Animation - Made with Clipchamp_144.jpg
./ani/Animation - Made with Clipchamp_145.jpg
./ani/Animation - Made with Clipchamp_146.jpg
./ani/Animation - Made with Clipchamp_147.jpg
./ani/Animation - Made with Clipchamp_148.jpg
./ani/Animation - Made with Clipchamp_149.jpg
./ani/Animation - Made with Clipchamp_150.jpg
./ani/Animation - Made with Clipchamp_151.jpg
./ani/Animation - Made with Clipchamp_152.jpg
./ani/Animation - Made with Clipchamp_153.jpg
./ani/Animation - Made with Clipchamp_154.jpg
./ani/Animation - Made with Clipchamp_155.jpg
./ani/Animation - Made with Clipchamp_156.jpg
./ani/Animation - Made with Clipchamp_157.jpg
./ani/Animation - Made with Clipchamp_158.jpg
./ani/Animation - Made with Clipchamp_159.jpg
./ani/Animation - Made with Clipchamp_160.jpg
./ani/Animation - Made with Clipchamp_161.jpg
./ani/Animation - Made with Clipchamp_162.jpg
./ani/Animation - Made with Clipchamp_163.jpg
./ani/Animation - Made with Clipchamp_164.jpg
./ani/Animation - Made with Clipchamp_165.jpg
./ani/Animation - Made with Clipchamp_166.jpg
./ani/Animation - Made with Clipchamp_167.jpg
./ani/Animation - Made with Clipchamp_168.jpg
./ani/Animation - Made with Clipchamp_169.jpg
./ani/Animation - Made with Clipchamp_170.jpg
./ani/Animation - Made with Clipchamp_171.jpg
./ani/Animation - Made with Clipchamp_172.jpg
./ani/Animation - Made with Clipchamp_173.jpg
./ani/Animation - Made with Clipchamp_174.jpg
./ani/Animation - Made with Clipchamp_175.jpg
./ani/Animation - Made with Clipchamp_176.jpg
./ani/Animation - Made with Clipchamp_177.jpg
./ani/Animation - Made with Clipchamp_178.jpg
./ani/Animation - Made with Clipchamp_179.jpg
./ani/Animation - Made with Clipchamp_180.jpg
./ani/Animation - Made with Clipchamp_181.jpg
./ani/Animation - Made with Clipchamp_182.jpg
./ani/Animation - Made with Clipchamp_183.jpg
./ani/Animation - Made with Clipchamp_184.jpg
./ani/Animation - Made with Clipchamp_185.jpg
./ani/Animation - Made with Clipchamp_186.jpg
./ani/Animation - Made with Clipchamp_187.jpg
./ani/Animation - Made with Clipchamp_188.jpg
./ani/Animation - Made with Clipchamp_189.jpg
./ani/Animation - Made with Clipchamp_190.jpg
./ani/Animation - Made with Clipchamp_191.jpg
./ani/Animation - Made with Clipchamp_192.jpg
./ani/Animation - Made with Clipchamp_193.jpg
./ani/Animation - Made with Clipchamp_194.jpg
./ani/Animation - Made with Clipchamp_195.jpg
./ani/Animation - Made with Clipchamp_196.jpg
./ani/Animation - Made with Clipchamp_197.jpg
./ani/Animation - Made with Clipchamp_198.jpg
./ani/Animation - Made with Clipchamp_199.jpg
./ani/Animation - Made with Clipchamp_200.jpg
./ani/Animation - Made with Clipchamp_201.jpg
./ani/Animation - Made with Clipchamp_202.jpg
./ani/Animation - Made with Clipchamp_203.jpg
./ani/Animation - Made with Clipchamp_204.jpg
  `;
    return data.split("\n")[index];
  }

const frameCount = 184;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 3,
    trigger: `#page1>canvas`,
    start: `top top`,
    end: `400% bottom`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;


function render() {
    scaleImage(images[imageSeq.frame], context);
  }

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }



ScrollTrigger.create({
    trigger: "#page1>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `400% bottom`,
  });


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


// gsap.from('#page8 #data',{
//   width:'60%',
//   height:'100%',
//   duration:2,
//   scrollTrigger:{
//     trigger:'#page8',
//     start:'center center',
//     end:'bottom center',
//     scroller:'#main',
//     markers:true
//   }
// })

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
  element.addEventListener('mouseover', () =>{
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
  element.addEventListener('mouseover', () =>{
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

gsap.from('#scroller',{
  y:'30%',
  scrollTrigger:{
    trigger:'#scroller',
    start:'top bottom',
    end:'center center',
    scroller:'#main',
    scrub:true
  }
})
