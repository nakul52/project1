 var crsr= document.querySelector("#cursor ")
 
 document.addEventListener("mousemove",function(dets){
  crsr.style.left= dets.x+"px"
  crsr.style.top= dets.y+"px"

 })

gsap.to("#nav",{
 backgroundColor:"#000",
 height:"60px",

duration:1,
scrollTrigger:{
 scroller: "#nav",
trigger:"body",
marks: true 
}

})
gsap.to("main",{
backgroundColor:"#000",
scrollTrigger:{
    Trigger:"#main ",
    scroller:"body",
}




})

