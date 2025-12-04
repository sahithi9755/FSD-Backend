function userdetails(id){
    return new Promise((resolve,result)=>{
        setTimeout(()=>{
            resolve({rollno:"789"})
        },2000);
    })
};
const fun=async()=>{
    console.log("123");
    const result=await userdetails("123");
    console.log(result);
    console.log("456");
}
fun();