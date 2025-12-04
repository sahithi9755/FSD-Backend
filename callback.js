//basic Example
// function fun1(fun2){
//     console.log("fun1 executed");
//     fun2();
// }
// function fun2(){
//     console.log("fun2 executed");
// }
// fun1(fun2);
function UserDetails(id,usersub){
    console.log("getting details by user id",id);
    usersub({rollno:"657"});
}
function usersub(rollno,usermarks){
    console.log("getting subjects by userroll",rollno);
    usermarks({sub_id:"en"});
}
function usermarks(sub_id){
    console.log("getting sub marks by id",sub_id);
}
UserDetails("123",function(rollno){
    usersub(rollno,function(sub_id){
        usermarks(sub_id);
    })
});

