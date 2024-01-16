const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:0.2,
    y:10,
    opacity:0,
    duration: 1,
    ease: Power3,
})

Shery.textAnimate("#headings h1",{
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anime2",{
    y:30,
    stagger:0.3,
    opacity:0,
    ease: Expo,
    duration:1
})

Shery.imageEffect("#imgntext img",{
    style:3,
    config:{"uFrequencyX":{"value":9.92,"range":[0,100]},"uFrequencyY":{"value":9.92,"range":[0,100]},"uFrequencyZ":{"value":38.84,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    // debug:true
})

Shery.imageEffect(".imgeff",{
    style:5,
    config:{"a":{"value":2.73,"range":[0,30]},"b":{"value":-0.27,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7202572347266881},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})

Shery.imageEffect("#bimg",{
    style:5,
    gooey:true,
    config:{"a":{"value":0.5,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9507075669188043},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.08,"range":[1,15]},"durationOut":{"value":0.55,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":34}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})

gsap.from("#imgntext img",{
    z:-7,
    y:"+=100",
    opacity:0,
    duration:2,
    ease: Expo.easenInOut
})

document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1.5,
        ease: Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1.5,
        ease: Power4
    })
    
})





