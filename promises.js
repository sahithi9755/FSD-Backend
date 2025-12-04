function UserDetails(id){
    return new Promise((resolve,reject)=>{
        console.log("Fun1 is  executed");
        resolve({rollno:"457"});
    })
}
function usersub(rollno){
    return new Promise((resolve,reject)=>{
        console.log("fun2 is executed");
        resolve({sub_id:'en1'});
    })
}
function usermarks(sub_id){
    return new Promise((resolve,reject)=>{
        console.log("fun3 is executed");
        resolve("getting sub marks by id",sub_id);
    })
};
UserDetails("123").then((result)=>{
    return usersub(result.rollno)
}).then((result)=>{
    return usermarks(result.sub_id)
}).then((result)=>console.log(result))
  .catch((error)=>console.log(error))