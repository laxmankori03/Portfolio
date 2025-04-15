gsap.to("#moon",{
    x:5,
    repeat:-1,
    duration:1,
    yoyo:true
})

// navbar animation 
let menu_icon = document.querySelector("#menu_icon a");
let close_icon = document.querySelector("#mobile_menu .close_icon")
let tl = gsap.timeline();
tl.to("#mobile_menu",{
    x:"100%",
    duration:0.8,
})
tl.from(".nav_list ul li",{
    x:-20,
    opacity:0,
    stagger:0.1
});
tl.from("#close_icon",{
    x:-20,
    opacity:0,
});

menu_icon.addEventListener("click",function(){
   tl.play(); 
});
close_icon.addEventListener("click",function () {
    tl.reverse();
})
tl.pause();

console.log(document.querySelector("#close_icon"));
