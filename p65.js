gsap.from(".largetxt>h1",{
    onstart:function(){
        $('.largetxt>h1').textillate({ 
            in: { effect: 'fadeInUp' } });
    },
    opacity:0

})


gsap.from(".txt>h1",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true
        

    },
    y:"50",
    opacity:0
    

    // onstart:function(){
    //     $('.txt>h1').textillate({ 
    //         in: { effect: 'fadeInUp' } });
    // },
    // opacity:0

})

flag=0;

document.querySelector(".cir").addEventListener("click",function(){
    if(flag===0){
        gsap.to(".layer",{
            y:"100%",
            ease: "power1.out"
            
        })

     
        gsap.to(".m",{
            rotation:180,
            opacity:0
        })
        gsap.to(".c",{
            rotation:-180,
            opacity:1
        })
        gsap.from(".layer>h1",{
            onstart:function(){
                $('.layer>h1').textillate({ 
                    in: { effect: 'fadeInUp' } });
            },
            // opacity:0
        
        })
        flag=1
    }
    else{
        gsap.to(".layer",{
            y:"-100%",
            ease: "power1.out"
            
        })
      
        gsap.to(".m",{
            rotation:-180,
            opacity:1
        })
        gsap.to(".c",{
            rotation:180,
            opacity:0
        })
        flag=0

    }
})



gsap.from(".first",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3,
        

    },
    rotateX:90,
    y:"500",
    duration:2
    // delay:2
})
gsap.from(".sec",{

    scrollTrigger:{
        scroll:"body",
        trigger:".first",
        markers:true,
        start:"top 70%",
        end:"bottom 40%",
        scrub:3,
        

    },
    rotateX:90,
    y:"500",
    duration:2
    // delay:2
})

gsap.from(".txt2>h1",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

        

    },
    y:"50",
    opacity:0

    // onstart:function(){
    //     $('.txt2>h1').textillate({ 
    //         in: { effect: 'fadeInUp' } });
    // },
    // opacity:0

})

gsap.from(".txt3>h1",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

        

    },
    y:"50",
    opacity:0

    // onstart:function(){
    //     $('.txt2>h1').textillate({ 
    //         in: { effect: 'fadeInUp' } });
    // },
    // opacity:0

})

document.querySelector("svg").addEventListener("mouseover",function(){
    gsap.to("svg",{
        x:"40",
        duration:2
    })

})

document.querySelector("svg").addEventListener("mouseout",function(){
    gsap.to("svg",{
        x:"0",
        duration:2
    })

})


gsap.from(".third",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3,
        

    },
    rotateX:90,
    y:"500",
    duration:2
    // delay:2
})
gsap.from(".fourth",{

    scrollTrigger:{
        scroll:"body",
        trigger:".third",
        markers:true,
        start:"top 70%",
        end:"bottom 40%",
        scrub:3,
        

    },
    rotateX:90,
    y:"500",
    duration:2
    // delay:2
})

gsap.from(".navbar1>ul>li",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

        

    },
    // onstart:function(){
    //     $('.navbar1>ul>li').textillate({ 
    //         in: { effect: 'fadeInUp' } });
    // },
    y:"50",
    opacity:0

})
gsap.from(".navbar2>ul>li",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true
        

    },
    // onstart:function(){
    //     $('.navbar2>ul>li').textillate({ 
    //         in: { effect: 'fadeInUp' } });
    // },
    y:"50",
    opacity:0
    

})
gsap.from(".navbar3>ul>li",{

    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

        

    },
    // onstart:function(){
    //     $('.navbar3>ul>li').textillate({ 
    //         in: { effect: 'fadeInUp' } });
    // },
    y:"50",
    opacity:0

})



