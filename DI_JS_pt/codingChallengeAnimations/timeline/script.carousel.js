// document.querySelector('#projectCarousel').carousel({
//   interval: 10000
// })

document.querySelector('.carousel .carousel-item').forEach((e)=>{
    var minPerSlide = 3;
    var next = document.querySelector(this).nextElementSibling;
    if (!next.length) {
    next = document.querySelector(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo(document.querySelector(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.nextElementSibling;
        if (!next.length) {
        	next = document.querySelector(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo(document.querySelector(this));
      }
});
