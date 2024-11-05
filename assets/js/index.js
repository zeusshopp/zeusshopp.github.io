function set(){
    var user_name,result;
    result = document.getElementById("Result");
    user_name = prompt("اسم شما چیه؟");
    if( user_name == null || user_name == "" ){
     result.innerHTML ="بدون نام";
    }
    else{
     localStorage.setItem("UserName", user_name);
     get();
    }
   }
   
   function get(){
    var result = document.getElementById("Result");
    var Uname = localStorage.getItem("UserName");
    result.innerHTML = " سلام " + Uname + " خوبی؟ ";
   }

const newLocal = document.getElementById("details").innerText = navigator.userAgent;