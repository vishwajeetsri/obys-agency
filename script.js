function loadingAnimation (){
    
var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.5,
    duration:0.6,
    delay:0.5
})

tl.from("#line1-part1",{
    opacity:0,
    onStart: function () {

var h5timer = document.querySelector("#line1-part1 h5")
var grow = 0
setInterval(function(){
    if(grow<100){
        h5timer.innerHTML = grow++
    }else{
        h5timer.innerHTML = grow
    }
},33);
    },
});

tl.to(".line h2",{
    opacity:1,
    animationName:"anime",

})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3.5
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})

tl.from("#nav",{
    opacity:0
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.2
})
}
function CursorAnimtion(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
CursorAnimtion();







