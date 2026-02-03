
//primitive datatypes

                        //using number
let num=100;
console.log(num)
console.log(typeof num)

let num1='100';
console.log(typeof num1)

let num2=20.5;
console.log(num2, typeof num2)


                        //using string
let cName='WScubetech';
let cNameone="WScubetech";
let cNametwo=`WScubetech`;
console.log(cName, cNameone, cNametwo,
     typeof cName,typeof cNameone,typeof cNametwo)


                        //using boolean

  let s=false;  
  console.log(s, typeof s) 
  console.log(s*5)                  

    let a=true;  
  console.log(a, typeof s) 
  console.log(a*5)  


                        //using null
let n=null;
console.log(n, typeof n)


                        //using undefined
let num3;
console.log(num3, typeof num3)


                        //using symbol
let uid=Symbol('123');
let cid=Symbol('123');
console.log(uid==cid)


                        //using bigint
let bigint=6284298468n;
console.log(bigint, typeof bigint)


//Non-Primitive datatypes


                    //using array
let users=["Riya","Jiya",2,4]
console.log(users, typeof users)


                    //using object
let obj={
    name:'Riya',
    coursename:'JS'
}
console.log(obj, typeof obj)