var myObject = {
    name:"John Doe",
    age:15,
    email:"geyhvshgfgwfbh",
    job:"Auditor",
};
try{
 let userJOSN =JOSN.stringify(myObject);

 let userObj = JOSN.parse(userJOSN);
 console.log(userJOSN);
}
catch(e){
console.error(`Invalid data!`);
}