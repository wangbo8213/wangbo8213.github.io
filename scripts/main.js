/*变量 是存储值的容器。要声明一个变量，先输入关键字 let 或 var，然后输入合适的名称：*/

let myString='wb';
let myNumber=111;
let myBoolean=true;
let myArrary=['a','b','c','d'];

/*切换图片*/
let myImg=document.querySelector('img');
myImg.onclick=function(){
    let mySrc=myImg.getAttribute('src');
    if(mySrc==='image/my tour.png'){
        myImg.setAttribute('src','image/111.png');
    }else{
        myImg.setAttribute('src','image/my tour.png');
    }

}

/*切换用户*/
let myHeading=document.querySelector('h1');
let myBotton=document.querySelector('button');

function getUsername(){
    let myName=prompt('输入你的名字');
    if(!myName){
        getUsername();
    }else{
    myHeading.textContent='hello '+ myName;
    /*实现保留前回信息功能*/
    localStorage.setItem('name',myName);
    }
}

myBotton.onclick=function(){
    getUsername();
}

if(!localStorage.getItem('name')){
    alert('ppp');
    getUsername();
}else{
    let myStorageName=localStorage.getItem('name');
    myHeading.textContent='hello '+myStorageName;
}


/*document.querySelector('html').addEventListener('click',()=>{alert('别戳我')});*/