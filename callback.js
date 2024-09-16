// function success(){
//     console.log("success")
// }
// function fail(){
//     console.log("fail")
// }
// function error(){
//     console.log("error")
// }

// function exec(data,callback){
//     if(data)
//     {
//         console.log(`balance : ${data}`)
//     }

//     setTimeout(callback,3000)
// }

// function trigger(){
//     const data=0
//     if(data>0)
//     {
//         exec(data,success)
//     }
//     else if(data<=0)  
//     {
//         exec(data,fail)
//     }
//     else{
//         exec("error",error)
//     }
// }
// trigger()


async function API()
{
    const req=await fetch('https://66e527265cc7f9b6273c6e6b.mockapi.io/register')
    const data=await req.json()
    // const s=data.map((data)=>{console.log(data)})
    for(let i=0;i<data.length;i++)
    {

        console.table(data[i])
    }
}



API()