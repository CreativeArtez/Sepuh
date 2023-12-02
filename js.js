
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

//untuk gsap

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
gsap.to('.gsap', {
  y: -400,

  scrollTrigger: {
  trigger: '.co',
  start: 'center 40%',
  end: 'bottom top',
  scrub: 1,
  }
  });
  gsap.to('.yuta', {
    rotate: 600,
  
    scrollTrigger: {
    trigger: '.co',
    start: 'center 40%',
    end: 'bottom top',
    scrub:1,
    }
    });
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
      gsap.from('.lines', {
       scaleY:0,
       transformOrigin:'top',
      scrollTrigger: {
        trigger: '.line',
        start: 'top center',
        end: 'bottom center',
        scrub: true
        }

      });

    function setBgColor(color) {
    gsap.to('.bg-color', {
    backgroundColor: color,
  });
}

    gsap.to('.bg-color', {
    scrollTrigger: {
        trigger: '.kelas-desc',
        start: '0% 60%',
        end: '90% bottom',
        toggleActions: 'play none none reverse',
        onEnter: () => setBgColor('rgb(255, 253, 144)'), 
        onLeaveBack: () => setBgColor('rgb(82, 249, 127)'),
    },
    });
    gsap.to('.bg-color', {
    scrollTrigger: {
        trigger: '.kelas-def',
        start: '0% 60%',
        end: '90% bottom',
        toggleActions: 'play none none reverse',
        onEnter: () => setBgColor('rgb(164, 255, 255)'), 
        onLeaveBack: () => setBgColor('rgb(255, 253, 144)'),
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
        end: 'bottom 50%',
        scrub:1,
        toggleActions: 'play play reverse reverse',
      }
    })
})


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

//

gsap.from(".simle .char" ,{
    scrollTrigger:{
        trigger: '.kesimpulan',
        start:'top 80%',
        end: 'bottom center',
        scrub: true,

    },
    color:'rgb(255, 255, 255',stagger: 0.03,
})
gsap.to(".bing" ,{
  scrollTrigger:{
      trigger: '.bing',
      start:'top 80%',
      end: 'bottom center',
      scrub: 3,

  },
  color:'rgb(255, 255, 255',stagger: 0.03,
  x:400
})
gsap.from(".bg-bang" ,1,{
  scrollTrigger:{
      trigger: '.kesimpulan',
      start:'top center',
      end: 'bottom center',
      scrub: false,

  },
 scaleY:0,
 transformOrigin: 'top'

 
})