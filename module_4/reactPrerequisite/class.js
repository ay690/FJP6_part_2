class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    welcome(){
        console.log("hello "+ this.name);
    }
}

class Teacher extends Person{
    constructor(name,age,classStrength){ //ab teacher waale constructor mein name and age nahi hai only class Strength hai
        super(name,age); //ye person ka property inherit karega by using super()
        this.classStrength = classStrength;
    }
}

class Student extends Person{
    constructor(name,age,cgpa){
        super(name,age)
        this.cgpa = cgpa;
    }
}

let person = new Person("Adam",25);
console.log(person);

let teacher = new Teacher("Aman",23,58);
console.log(teacher);

let student = new Student("Ayush",22,8.44);
console.log(student);

person.welcome();
student.welcome();