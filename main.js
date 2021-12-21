$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
    })

    // toggle menu/navbarscript
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    /// owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav:false
            }

        }
    })




});


const skillsdata = document.getElementsByClassName("skills__data"),
      skillsHeader = document.querySelectorAll('.skills__header')


console.log(skillsdata.length)

function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0; i< skillsdata.length; i++){
        skillsdata[i].className ='skills__data skills__close'
    }
    if(itemClass === 'skills__data skills__close'){
        this.parentNode.className = 'skills__data skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

