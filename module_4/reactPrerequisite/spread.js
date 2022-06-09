//spread operator with an array

// let arr = [1, 2, 3];

// let arr2 = [...arr]; //this will create a copy of arr in heap

// arr2[2] = 10;
// console.log(arr);
// console.log(arr2);

//Spread operator with objects

let obj = {
    name : "Adam",
    address:{
        country: "USA",
        state:{
            stateName:"NewYork",
            pincode: 123456
        }
    }
}
//shallow copy
let obj2 = {...obj};
obj2.name = "Aniket";
obj2.address.country = "India";

console.log(obj.name);
console.log(obj.address);
console.log("####################")
console.log(obj2.name);
console.log(obj2.address);
//Only first level that is name will be changed in obj2, obj name will reamin Adam 
//and rest is refernces will be pointing
//to the heap so changes in obj.addresses and country will be reflected in obj2 and as well as in obj1 i.e obj

//Deep copy
let obj3 = JSON.parse(JSON.stringify(obj));
obj3.address.country = "Japan";
console.log(obj.address.country);
console.log(obj3.address.country);