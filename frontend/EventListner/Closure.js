var sum=function(a){
    console.log("Live Viewer " +a);
    var c=4;
    return function(b){
        return a+b+c;

    }
}
var store=sum(200);
console.log(store(5))