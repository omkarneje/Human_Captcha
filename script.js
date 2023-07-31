// your code 
const main=document.querySelector("main");
const div=document.querySelector("div.flex");
const reset=document.querySelector("#reset");
const verify=document.querySelector("#verify");
const parp=document.getElementById("para");
para.innerHTML="Please click on the identical tiles to verify that you are not a robot.";
reset.style.display="none";
verify.style.display="none";
let arr=["img1","img2","img3","img4","img5"]
let a=arr.sort(()=>Math.random()-0.5)
let ri=Math.floor(Math.random()*5);
a.splice(ri,0,a[1]);
for(let i=arr.length-1;i>=0;i--){let j=toString(i);console.log(typeof j)
div.innerHTML+=`<img class =${arr[i]} ${j}  />`;
 
}

let c=0;
const divall=document.querySelectorAll("img");
let sel=[];
divall.forEach((e)=>{
    e.addEventListener("click",()=>{c++; console.log(e.classList)
        sel.push(e.classList[0]);
        sel.push(e.classList[1]);
        para.innerHTML="";
        e.classList.add("selected");console.log(sel);
        if(c>0){reset.style.display="block";}
        else {reset.style.display="none";}
        if (c==2 ){verify.style.display="block";}
        else verify.style.display="none";
           console.log(div.innerHTML)
    }); 
})

reset.addEventListener("click",()=>{c=0;
    verify.style.display="none";
    reset.style.display="none";
    para.innerHTML="Please click on the identical tiles to verify that you are not a robot.";
    sel=[];
    divall.forEach((e)=>e.classList.remove("selected"));
})

verify.addEventListener("click",()=>{
if(sel[0]===sel[2] && sel[3]===undefined){
    para.innerHTML="You are a human. Congratulations!";
}
else para.innerHTML="We can't verify you as a human. You selected the non-identical tiles.";
verify.style.display="none";
})

