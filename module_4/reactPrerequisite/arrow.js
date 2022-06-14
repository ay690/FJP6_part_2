//write a func to add two numbers and print their sum

// let regularFunction = function(a,b){
//     console.log(a+b);
// }

// regularFunction(1,2);

// let add = (a,b)=>{
//     console.log(a+b);
// }

// add(1,2);


// let arrowFunction = ()=>{
//     console.log(this);
// }

// arrowFunction();

let obj = {
    name:"Aman",
    age:23,
    showDetails:function(){
        console.log(this.name+" "+this.age); //this will give you obj since its a regular function and method invocation hence,
        //objs will be printed
    },
    showDetailsArrow:()=>{
        console.log(this); //Empty
        console.log(this.name+" "+this.age); //UD, UD
    }
}
//showDetails(); this is function invocation
obj.showDetails();//method invocation 
obj.showDetailsArrow(); //arrow function do not worry about whether it is function or method invocation