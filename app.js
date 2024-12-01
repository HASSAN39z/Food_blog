const mobileMenu = document.querySelector('.mobile-menu')
const scrollBtn= document.querySelector('.scroll-top')
mobileMenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')
})


// first fuctionn/
window.addEventListener('scroll',function(){
    if (document.body.scrollTop>150||document.documentElement.scrollTop>150) {
        scrollBtn.style.display="block"
    } else {
        scrollBtn.style.display="none"
        
    }
})

// 2nd fuction

scrollBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
})