//  Ex 1

let obj1 = {
    fullName: 'Jenny Johnes',
    mass: 50,
    height: 1.60,
    BMI: function () {
        return this.mass/(this.height*this.height);

    }
}

let obj2 = {
    fullName: 'Josh Johnes',
    mass: 90,
    height: 1.80,
    BMI: function () {
        return this.mass/(this.height*this.height);

    }
}

let compareBMI = function(BMI){
   if (obj1.BMI()>obj2.BMI()) {
       console.log(`${obj1['fullName']} has a higher BMI of ${obj1.BMI()}`);
   } else {
     console.log(`${obj2['fullName']} has a higher BMI of ${obj2.BMI()}`);
   }
}

