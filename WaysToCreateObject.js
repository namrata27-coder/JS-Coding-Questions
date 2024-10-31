function MyConstructor(name,age){
    this.name = name;
    this.age = age;
}

const testObj = new MyConstructor("namrata","21");
console.log(testObj,"test");

class MyClass{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
}

const testClass = new MyClass("namrata",21);
console.log(testClass)


const randomObj = {
    name:"namrata",
    age:7
}

const testRandom = Object.create(randomObj);
testRandom.name="ora";
testRandom.age=12;

console.log(testRandom,"testRandom",navigator.geolocation);

