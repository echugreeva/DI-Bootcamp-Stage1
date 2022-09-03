var items = document.querySelectorAll(".has-animation");

items.forEach((item)=>{
  item.addEventListener("mouseover",  (e) => {
    item.classList.add("animate-in", "had-animation");
  })
  item.addEventListener("mouseout",  (e) => {
    item.classList.remove("animate-in");
    item.style.opacity = 1;
  })
})

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

//function is in viewport return true or false
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }




