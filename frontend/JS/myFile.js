function HelloWorld(){
    return new Promise((resolve)=>{
     setTimeout(()=>{
     resolve("Hello World");
    },2000)
});

}
 async function msg(){
   
    const msg = await HelloWorld();
      console.log(` ${msg} from msg  Function 1 `);
    }
    function msg1(){
        console.log(" msg1 Function ");
    }
    msg();
    msg1();