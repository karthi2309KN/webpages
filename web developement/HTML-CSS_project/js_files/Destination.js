/* //ExitNotification-Alert
window.onmousemove=function(e){
    if(e.pageY < 5){
        alert("Don't miss our future updates!!!")
    }
} */


document.getElementById("icon1").onmouseover=function(){
    document.getElementById("content1").style.visibility="visible";
};

document.getElementById("icon1").onmouseout=function(){
    document.getElementById("content1").style.visibility="hidden";
};


document.getElementById("icon2").onmouseover=function(){
    document.getElementById("content2").style.visibility="visible";
};

document.getElementById("icon2").onmouseout=function(){
    document.getElementById("content2").style.visibility="hidden";
};


document.getElementById("icon3").onmouseover=function(){
    document.getElementById("content3").style.visibility="visible";
};

document.getElementById("icon3").onmouseout=function(){
    document.getElementById("content3").style.visibility="hidden";
};
