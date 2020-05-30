let box=document.getElementById('watches');
window.onload=function (){
    show();
}

function show(){
    let time=new Date();
    
    // console.log(time);
    // 补零
    function timeAddZero(str) {
        if(str<=10){
            str='0'+str;
        }
        return str
    }
    // console.log(timeAddZero(time.getSeconds()));

    box.innerHTML=timeAddZero(time.getHours())+":"+timeAddZero(time.getMinutes())+":"+timeAddZero(time.getSeconds());
    setTimeout(show,1000);
}