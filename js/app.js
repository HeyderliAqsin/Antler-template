
//Loading effect
$(window).on("load",function(){
    setTimeout(() => {
    $(".loader").fadeOut(200)
    }, 1000);
})



//Accordion menu
$("#Accordion .accord-item").click(function(){
    $("#Accordion p").stop().slideUp()
    $(this).next().stop().slideToggle()

   
})
var btn=document.querySelectorAll(".accord-item")
for (let i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        for (let j=0;j<btn.length;j++){
            btn[j].style.color="black"
        }
        this.style="color:red","border-bottom:1px solid red"
    
    }
}

//Tab menu  
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//Header scroll
const header=document.querySelector("#header .bottom-header")

window.onscroll=function(){
    if(this.scrollY>120 ){
        header.classList.add("head-active")
    }else{
        header.classList.remove("head-active")

    }
}

//Menu-bar
const navMenu=document.querySelector(".bottom-header .menu-bar")
const menu=document.querySelector(".bottom-header .mobile")

navMenu.addEventListener("click",function(){
    menu.classList.toggle("mobile-active")
    console.log("mobile-active");
})  
//Mobile menu
$("#header  .mobile .dropped>a").click(function(e){
    e.preventDefault()
    $(".dropped-item").stop().slideUp()
    $(this).parent().find(".dropped-item").stop().slideToggle()
})

//bottom-scroll
$(function(){
    var aTop = $('.bottom-scroll');
  aTop.click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })
});


//Change Icon
$('.menu-bar').click(function(){
    $('.fas fa-bars').toggle('1000');
    $("i", this).toggleClass("fas fa-bars fas fa-times");
   
})