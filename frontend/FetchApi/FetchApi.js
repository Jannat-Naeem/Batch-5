let url = ''
let data ={}
fetch(url,{
    method:"POST",
    header:{
        "Contant-type":"application/json",

    },
    body:data,
}).then(
    (response)=>{
        if(response.ok){
            return response.json();
        }
        throw new Error("Request failed");
    },
    (networkError)=>{
    console.log(networkError.message);
    }
);