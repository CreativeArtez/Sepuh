
Splitting();
gsap.registerPlugin(ScrollTrigger);

//for scroll from lenis
const lenis = new Lenis()
  lenis.on('scroll', (e) => {
  console.log(e)
})

  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

//image landing page
Array.from(document.querySelectorAll('.disp')).forEach((e) => {
    const imgs = Array.from(e.querySelectorAll('img'));
    new hoverEffect({
        parent : e,
        intensity: 0.3,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage : 'six.jpg',
        imagesRatio: 1440 / 2560
    })
})

//gsap scroll 
function All () {

  //preloader
    
jQuery(document).ready(function( $ ) {
  $('.counter-two').counterUp({
      delay: 20,
      time: 2000
  });

  const preloader = gsap.timeline();
  
  preloader.to('.counter-two', {
    delay: 3.3,
    opacity:0,
    display: 'none'
  })
  preloader.to('.preloader', {
    delay: '0.5',
    scaleY:0,
    transformOrigin:'bottom',
    display:'none'
  })
});

  //untuk navbar
  const menuBtn = document.querySelector('.menu');
  const bgOne = document.querySelector('.bg-nav');
  const bgTwo = document.querySelector('.bg-nav-two');
  const href = gsap.utils.toArray ('.nav')
  const lineMenu = document.querySelectorAll('.line-nav')

  let menuOpen = false ;
  gsap.set(bgOne, {
    display:'none',
    scaleY:0,
    transformOrigin: 'bottom'
  })
  gsap.set(bgTwo ,{
    scaleY:0,
    transformOrigin: 'bottom'
  })
  gsap.set(href ,{
    opacity:0,
    y:100
  })

  const navTl = gsap.timeline({
    defaults:{
      ease:'power4.inOut',
    }
  });
  navTl
  .to(bgOne, {
    display: 'flex',
    duration:1.5,
    scaleY:1
  })
  .to(bgTwo, {
    duration:1.1,
    scaleY:1
  })
  .to(lineMenu ,{
    duration:0.1,
    backgroundColor:'rgb(0, 0, 0)'
  })
  .to(href ,{
    stagger: 0.3,
    duration:1,
    opacity:1,
    y:0,
  })


  navTl.pause();
  menuBtn.addEventListener('click', () => {
    if (!menuOpen){
      navTl.play();
      menuOpen = true ;
    } else {
      navTl.reverse();
      menuOpen = false;
    }
  })

  //untuk teks
  gsap.from('.text', {
    opacity: 0,
    y: 100,
    stagger:0.1,
    scrollTrigger: {
      trigger: '.kelas-desc',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 3,
      }
    });
    gsap.from('.batang-b',3, {
      ease:'circ.inOut',
      stagger:0.2,
      y: 800,
      scrollTrigger: {
        trigger: '.kelas-satu',
        start: '40% 40%',
        end: '130% center',
        scrub: 1,
        }
      });
    gsap.from('.smile', {
      rotate: 760,
      scrollTrigger: {
        trigger: '.kelas-desc',
        start: 'top center',
        end: 'bottom center',
        scrub: 5
        }
      });
    gsap.from('.visi', {
      opacity: 0,
      y: 100,
      stagger:0.1,
      scrollTrigger: {
        trigger: '.kelas-visi',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 3,
        }
      });
    
 //untuk bg dan navbar
 function setBgColor(color) {
  gsap.to('.bg-color', {
    backgroundColor: color,
  });
}

gsap.to('.bg-color', {
  scrollTrigger: {
    trigger: '.kelas-visi',
    start: '0% 60%',
    end: '90% bottom',
    toggleActions: 'play none none reverse',
    onEnter: () => setBgColor('rgb(255, 253, 144)'), 
    onLeaveBack: () => setBgColor('rgb(82, 249, 127)'),
  },
});
gsap.to('.bg-color', {
  scrollTrigger: {
    trigger: '.kelas-desc-two',
    start: '0% 60%',
    end: '90% bottom',
    toggleActions: 'play none none reverse',
    onEnter: () => setBgColor('rgb(139, 243, 255)'), 
    onLeaveBack: () => setBgColor('rgb(255, 253, 144)'),
  },
});
gsap.to('.bg-color', {
  scrollTrigger: {
    trigger: '.kelas-desc-three',
    start: '10% 60%',
    end: '90% bottom',
    toggleActions: 'play none none reverse',
    onEnter: () => setBgColor('rgb(38, 38, 38)'),
    onLeaveBack: () => setBgColor('rgb(139, 243, 255)'),
  },
});

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {
  
  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars'})

  gsap.fromTo(text.chars, {
    color: '#ffffff',
    opacity:0.05,
    y:-20,
    scaleY:0,
    transformOrigin: 'top'
    },
    { 
      opacity:1,
      y:0,
      scaleY:1,
      color: '#000',
      duration:0.3,
      stagger:0.02,
      scrollTrigger:{
        trigger: char,
        start:'top 80%',
        end: 'center 40%',
        scrub:true,
        toggleActions: 'play play reverse reverse',
      }
    })
})

//untuk inf
gsap.from (".counter" ,2 ,{
  scrollTrigger:{
    trigger:'.kelas-desc-three',
    start:'top 40%',
    end:'bottom 70%',
    scrub: true,
  },
  opacity: 0 ,y:-100,stagger: 0.08,ease:"back.out" 
});
gsap.from (".line-a" ,5 ,{
  scrollTrigger:{
    trigger:'.kelas-desc-three',
    start:'top center',
    end:'70% 70%',
    scrub: 2,
  },
  stagger:0.2,
  width:0
});

jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

/* untuk ScrollX jurusan*/
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const reveal = document.querySelectorAll(".span");


let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: "+=8000",
    //snap: 1 / (sections.length - 1),
  }
});
gsap.from(reveal, {
  y: 100,
  opacity:0,
  scrollTrigger: {
    trigger: ".container",
    start: "top center",
    end: "center center",
    scrub: 1,

  }
});

/* untuk Murid Berprestasi */
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
//soul

gsap.from('.line-to-c', {
  scrollTrigger: {
    trigger: '.apresiasi',
    start: '10% 70%',
    end: '90% bottom',
    scrub:2
  },
  scaleY:0,
  transformOrigin:'top'
});
gsap.from('.contact', {
  scrollTrigger: {
    trigger: '.contact',
    start: '10% 70%',
    end: '90% bottom',
    scrub:1
  },
  backgroundColor: 'rgb(202, 202, 202)'
});


}
All();
