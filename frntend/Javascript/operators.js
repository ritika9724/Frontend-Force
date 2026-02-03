       
       //using arithmetic operators (+,-,*,/,%,**)
        // (**)check the power

let v1=31;
let v2=2;
console.log(v1,v2)
console.log(v1+v2)
console.log(v1-v2)
console.log(v1*v2)
console.log(v1/v2)
console.log(v1%v2)
console.log(v1**v2)


    // using assignment Operators (=,+=,-=,*=,/=,%=,**=)

let n=10;  //= is used to assign the value
console.log(n)

n+=5;     // adding the 5 in the above value of n (10)
console.log(n)

n-=5;
console.log(n)


    //using comparision operators (==,===,!=,!==,>=,<=,>,<)

let b=10;
let c=20;
console.log(b==c)   // == is used to compare two values

let a=10;
let d='10';
console.log(a===d)  //=== is ued to compare the values and datatype also
console.log(a!=d)
console.log(a!==d)

let per=60;
console.log(per<61)
console.log(per>56)
console.log(per>=60)
console.log(per<=50)


    //using logica operators(or(||), not(!), and(&&))

let usrname="Riya"
let pasword="Riya1234"
console.log(usrname=="Riya" && pasword=="Riya124")  // if all conditions are true it will give the true output otherwise it is false


let uname="Riya"
let password="Riya1234"
console.log(uname=="Riya" || password=="Riya124") // if any one condition is true it will give the true output otherwise it is  false

console.log(!(10==20))   // (!) symbol is used to reverse the value it means if the value is true it will give the false output 


    //using conditional (ternary) operator (?)

let num1=10;
let out=(num1%2==0) ? "Even number" : "odd number";
console.log(out)

let r=4;
let s=2;
let output=(r<s) ? "r" : "s";
console.log(output)


    //using string operator (+)
let t=2;
let u=4;
let i="Riya";
let j="Thakur";
console.log(i+j+t+u)  //in string the (+) operator is used to combine the values (concetnate)