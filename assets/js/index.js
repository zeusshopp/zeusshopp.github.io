function set(){
    var user_name,result;
    result = document.getElementById("user_name");
    user_name = prompt("نام خود را وارد کنید");
    if( user_name == null || user_name == "" ){
     result.innerHTML ="بدون نام";
    }
    else{
     localStorage.setItem("UserName", user_name);
     get();
    }
}
   
function get(){
    var result = document.getElementById("user_name");
    var Uname = localStorage.getItem("UserName");
    result.innerHTML = Uname;
}

function Del(){
    localStorage.removeItem("user_name");
   }

const newLocal = document.getElementById("details").innerText = navigator.userAgent;