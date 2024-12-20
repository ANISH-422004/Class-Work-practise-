// new Promise ((resolve,reject)=>{
//     console.log('I am running ....');
//     setTimeout (function(){
        
//         console.log("After 3sec taked to run async code ");
//         err = true
//         if(!err){
//             resolve({user:"anish"})
//         }
//         else{
//             reject("Something happend")
//         }
        
//     },3000)
// }).then((obj)=>{
    
//     console.log(obj.user);
     
// }).catch((e)=>{
//     console.log(e);
    
// })



//  const promiseFive = new Promise ((resolve,reject)=>{
//     console.log('I am running ....');
//     setTimeout (function(){
        
//         console.log("After 3sec taked to run async code ");
//         err = false
//         if(!err){
//             resolve({user:"anish"})
//         }
//         else{
//             reject("Something happend")
//         }
        
//     },3000)
// })


// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }   
// }
// consumePromiseFive()