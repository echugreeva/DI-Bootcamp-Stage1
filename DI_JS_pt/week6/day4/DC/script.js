let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries =() => {
  groceries['fruits'].forEach((i)=>console.log(i));
}

const cloneGroceries =()=> {
  let user = client;
  user = 'Betty';
  console.log(client);
  console.log(user);
// client won't change cause string data is primitive
  let shopping = groceries;
  groceries['totalPrice']="35$";
  console.log(groceries);
  console.log(shopping);
  groceries['other']['payed']=false;
  console.log(groceries);
  console.log(shopping);
// changes on groceries object also affect shopping object cause they are passed by reference
// changes that will happen on objClone won't affect groceries/shopping
let objClone = Object.assign({},groceries);
return objClone;
}

cloneGroceries();