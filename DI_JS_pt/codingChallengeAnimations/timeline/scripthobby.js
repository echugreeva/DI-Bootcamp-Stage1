var items = document.querySelectorAll(".has-animation");
//try hover instead of scroll

items.forEach((item)=>{
  item.addEventListener("hover",  (e) => {
    e.AT_TARGET
    item.classList.add("animate-in");
  })
  item.addEventListener("mouse out",  (e) => {
    item.classList.remove("animate-in");
  })
})

// window.addEventListener('scroll', function() {
//   let scrollPos = window.scrollY;
//   items.forEach((item, index)=>{
    
//     if (scrollPos > (item.offsetHeight)) {
//       console.log(`scroll ${scrollPos} offset ${item.offsetHeight}` )
//       console.log(`added class to${index} `);
//       item.classList.add("animate-in");
//     } else {
//       console.log(`removed class${index}`);
//       item.classList.remove("animate-in")
//     }
  
//   })
// })





// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function callbackFunc() {
//   for (var i = 0; i < items.length; i++) {
//     if (isElementInViewport(items[i])) {
//       if(!items[i].classList.contains("in-view")){
//         items[i].classList.add("in-view");
//       }
//     } else if(items[i].classList.contains("in-view")) {
//         items[i].classList.remove("in-view");
//     }
//   }
// }
 
// window.addEventListener("load", callbackFunc);
// window.addEventListener("scroll", callbackFunc);
