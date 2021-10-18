'use strict';

const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');
const wrp =document.getElementsByClassName('wrapper');

const circle= document.getElementsByClassName('circle');
const hatns=document.getElementsByClassName('heart');
const tex=document.getElementById('tex');


circle[0].style.backgroundColor='green';

wrp[0].style.backgroundColor ='yellow';

hatns[1].style.backgroundColor='purple';

box.style.backgroundColor="gray";
box.style.width="300px";
box.style.height="100px";
box.style.cssText='background-color:blue';

btns[1].style.borderRadius="20%";
tex.style.backgroundColor='green';

document.querySelector('.push').onclick=function(){
    let psh = document.querySelector('.input').value;
    alert(psh);
    box.style.cssText=`background-color:purple;width:${psh}px`;
    console.log(psh);
}
box2.innerHTML="HEllo NN";