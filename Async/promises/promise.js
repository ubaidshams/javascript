//sync

console.log("sync start");
function test()
{
    console.log("hello");
}
test()

function demo()
{
    console.log("world");

}
demo()

console.log("sync end");


//Async

console.log("async start");
setTimeout(()=>{
    console.log("i have a waiting time of 8s");
},8000)
function test()
{
    console.log("hello");
}
test()

setTimeout(()=>{
    console.log("i have a waiting time of 5s");
},5000)

function demo()
{
    console.log("world");

}
demo()

console.log("async end");