var items = document.querySelectorAll(".has-animation");
//try hover instead of scroll

//function is in viewport return true or false
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// this works but not smooth
// window.addEventListener('scroll', function() {
//   items.forEach((item)=>{
//     if (isInViewport(item)) {
//       item.classList.add("animate-in");
//     } else {
//       item.classList.remove("animate-in");
//     }
//   })

// })
// this works
items.forEach((item)=>{
  item.addEventListener("mouseover",  (e) => {
    item.classList.add("animate-in");
  })
  item.addEventListener("mouseout",  (e) => {
    item.classList.remove("animate-in");
    item.style.opacity = 1;
  })
})


//this doesn't fully work
// window.addEventListener('scroll', function() {
  
//   items.forEach((item, index)=>{
//     let scrollPos = window.scrollY;
//     if (scrollPos >= (item.offsetHeight)) {
//       console.log(`scroll ${scrollPos} offset ${item.offsetHeight}` )
//       console.log(`added class to${index} `);
//       item.classList.add("animate-in");
//     } else {
//       console.log(`scroll ${scrollPos} removed class${index}`);
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
