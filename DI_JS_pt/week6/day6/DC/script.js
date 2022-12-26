
const isItTrue1 = (p1,p2,p3) => {
  let arr =[];
  arr.push(p1);
  arr.push(p2);
  arr.push(p3);


  !arr.some(x=>x===false) ?console.log(true): console.log(false);

}

isItTrue1 (true, false, true);


