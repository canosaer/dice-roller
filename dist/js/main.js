<<<<<<< HEAD
let socket=io("http://circuslabs.net:20202"),displayDIV=document.querySelector(".display-frame"),documentHEADER=document.querySelector("header"),beginBUTTON=document.querySelector("header button"),rollerSECTION=document.querySelector(".roller"),dieFIGURES=document.querySelectorAll(".selection figure"),rollBUTTONS=document.querySelectorAll(".selection button"),resultP=document.querySelector(".result"),logPS=document.querySelectorAll(".log p"),lichFIGURE=document.querySelector(".lich"),smokeDIV=document.querySelector(".smoke"),nameINPUT=document.querySelector("input[name=name]");var dieNum=0,dieFace=0,addSub="",addSubValue="",animating=!1,name="",dieResult=0;let rollDie=function(e){socket.emit("request roll",{count:e,faces:dieFace,name:name}),animating||(animating=!0,resultP.style.opacity="0",lichFIGURE.style.backgroundPosition="-15px -460px",setTimeout((function(){lichFIGURE.style.backgroundPosition="-110px -460px"}),100),setTimeout((function(){lichFIGURE.style.backgroundPosition="-200px -460px"}),200),setTimeout((function(){lichFIGURE.style.backgroundPosition="-290px -460px",smokeDIV.style.transition="none"}),300),setTimeout((function(){lichFIGURE.style.backgroundPosition="-382px -460px",smokeDIV.style.opacity="1",resultP.style.opacity="1"}),400),setTimeout((function(){lichFIGURE.style.backgroundPosition="0px 0px",smokeDIV.style.opacity="0",animating=!1}),500))};socket.on("rolled",(function(e){setTimeout((function(){dieResult=0;for(let t=0;t<e.rolls.length;t++)dieResult+=e.rolls[t]}),300),resetLog(),setTimeout((function(){for(let e=0;e<logPS.length-1;e++)logPS[e].textContent=logPS[e+1].textContent;logPS[logPS.length-1].textContent=`${e.name} rolled ${e.count}d${e.faces}${addSub}${addSubValue}: ${dieResult}`}),400)}));let resetLog=function(){addSub="",addSubValue=""};beginBUTTON.addEventListener("click",(function(){documentHEADER.style.display="none",displayDIV.style.border="2vh black double",rollerSECTION.style.display="flex",name=""===nameINPUT.value?"anon":nameINPUT.value}));for(let e=0;e<dieFIGURES.length;e++)dieFIGURES[e].addEventListener("click",(function(){0===e?(dieFace=4,rollDie(dieNum=1),setTimeout((function(){resultP.textContent=dieResult}),350)):1===e?(dieFace=6,rollDie(dieNum=1),setTimeout((function(){resultP.textContent=dieResult}),350)):2===e?(dieFace=8,rollDie(dieNum=1),setTimeout((function(){resultP.textContent=dieResult}),350)):3===e?(dieFace=10,rollDie(dieNum=1),setTimeout((function(){resultP.textContent=dieResult}),350)):4===e?(dieFace=12,rollDie(dieNum=1),setTimeout((function(){resultP.textContent=dieResult}),350)):5===e?(dieFace=20,rollDie(dieNum=1),setTimeout((function(){resultP.textContent=dieResult}),350)):(dieFace=100,rollDie(dieNum=1),setTimeout((function(){resultP.textContent=dieResult}),350))}));for(let e=0;e<rollBUTTONS.length;e++)rollBUTTONS[e].addEventListener("click",(function(t){if(t.preventDefault(),0===e){dieFace=4;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[0].value)>0?parseInt(e[0].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[0].checked&&parseInt(e[1].value)>0?(addSub="+",addSubValue=e[1].value,dieResult+=parseInt(e[1].value)):!0===t[1].checked&&parseInt(e[1].value)>0&&(addSub="-",addSubValue=e[1].value,dieResult-=parseInt(e[1].value)),resultP.textContent=dieResult}),350)}else if(1===e){dieFace=6;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[2].value)>0?parseInt(e[2].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[2].checked&&parseInt(e[3].value)>0?(addSub="+",addSubValue=e[3].value,dieResult+=parseInt(e[3].value)):!0===t[3].checked&&parseInt(e[3].value)>0&&(addSub="-",addSubValue=e[3].value,dieResult-=parseInt(e[3].value)),resultP.textContent=dieResult}),350)}else if(2===e){dieFace=8;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[4].value)>0?parseInt(e[4].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[4].checked&&parseInt(e[5].value)>0?(addSub="+",addSubValue=e[5].value,dieResult+=parseInt(e[5].value)):!0===t[5].checked&&parseInt(e[5].value)>0&&(addSub="-",addSubValue=e[5].value,dieResult-=parseInt(e[5].value)),resultP.textContent=dieResult}),350)}else if(3===e){dieFace=10;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[6].value)>0?parseInt(e[6].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[6].checked&&parseInt(e[7].value)>0?(addSub="+",addSubValue=e[7].value,dieResult+=parseInt(e[7].value)):!0===t[7].checked&&parseInt(e[7].value)>0&&(addSub="-",addSubValue=e[7].value,dieResult-=parseInt(e[7].value)),resultP.textContent=dieResult}),350)}else if(4===e){dieFace=12;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[8].value)>0?parseInt(e[8].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[8].checked&&parseInt(e[9].value)>0?(addSub="+",addSubValue=e[9].value,dieResult+=parseInt(e[9].value)):!0===t[9].checked&&parseInt(e[9].value)>0&&(addSub="-",addSubValue=e[9].value,dieResult-=parseInt(e[9].value)),resultP.textContent=dieResult}),350)}else if(5===e){dieFace=20;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[10].value)>0?parseInt(e[10].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[10].checked&&parseInt(e[11].value)>0?(addSub="+",addSubValue=e[11].value,dieResult+=parseInt(e[11].value)):!0===t[11].checked&&parseInt(e[11].value)>0&&(addSub="-",addSubValue=e[11].value,dieResult-=parseInt(e[11].value)),resultP.textContent=dieResult}),350)}else if(6===e){dieFace=100;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[12].value)>0?parseInt(e[12].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[12].checked&&parseInt(e[13].value)>0?(addSub="+",addSubValue=e[13].value,dieResult+=parseInt(e[13].value)):!0===t[13].checked&&parseInt(e[13].value)>0&&(addSub="-",addSubValue=e[13].value,dieResult-=parseInt(e[13].value)),resultP.textContent=dieResult}),350)}else{let e=document.querySelectorAll(".selection input[type=text]");dieFace=parseInt(e[14].value)>0?parseInt(e[14].value):0,dieNum=parseInt(e[15].value)>0?parseInt(e[15].value):1,rollDie(dieNum);let t=document.querySelectorAll(".selection input[type=radio]");setTimeout((function(){!0===t[14].checked&&parseInt(e[16].value)>0?(addSub="+",addSubValue=e[16].value,dieResult+=parseInt(e[16].value)):!0===t[15].checked&&parseInt(e[16].value)>0&&(addSub="-",addSubValue=e[16].value,dieResult-=parseInt(e[16].value)),resultP.textContent=dieResult}),350)}}));
=======
let socket=io("http://circuslabs.net:20202");socket.emit("request roll",{count:1,faces:6,name:"chris"}),socket.on("rolled",(function(e){console.log(e)}));let displayDIV=document.querySelector(".display-frame"),documentHEADER=document.querySelector("header"),beginBUTTON=document.querySelector("header button"),rollerSECTION=document.querySelector(".roller"),dieFIGURES=document.querySelectorAll(".selection figure"),rollBUTTONS=document.querySelectorAll(".selection button"),resultP=document.querySelector(".result"),logPS=document.querySelectorAll(".log p"),lichFIGURE=document.querySelector(".lich"),smokeDIV=document.querySelector(".smoke"),nameINPUT=document.querySelector("input[name=name]");var dieNum=0,dieFace=0,addSub="",addSubValue="",roll=0,animating=!1,name="";let rollDie=function(){return animating||(animating=!0,resultP.style.opacity="0",lichFIGURE.style.backgroundPosition="-15px -460px",setTimeout((function(){lichFIGURE.style.backgroundPosition="-110px -460px"}),100),setTimeout((function(){lichFIGURE.style.backgroundPosition="-200px -460px"}),200),setTimeout((function(){lichFIGURE.style.backgroundPosition="-290px -460px",smokeDIV.style.transition="none"}),300),setTimeout((function(){lichFIGURE.style.backgroundPosition="-382px -460px",smokeDIV.style.opacity="1",resultP.style.opacity="1"}),400),setTimeout((function(){lichFIGURE.style.backgroundPosition="0px 0px",smokeDIV.style.opacity="0",animating=!1}),500)),Math.floor(Math.random()*dieFace)+1},resetLog=function(){addSub="",addSubValue=""},logRoll=function(){for(let e=0;e<logPS.length-1;e++)logPS[e].textContent=logPS[e+1].textContent;logPS[logPS.length-1].textContent=`${name} rolled ${dieNum}d${dieFace}${addSub}${addSubValue}: ${roll}`};beginBUTTON.addEventListener("click",(function(){documentHEADER.style.display="none",displayDIV.style.border="2vh black double",rollerSECTION.style.display="flex",name=""===nameINPUT.value?"unknown":nameINPUT.value}));for(let e=0;e<dieFIGURES.length;e++)dieFIGURES[e].addEventListener("click",(function(){0===e?(dieFace=4,dieResult=rollDie(),resultP.textContent=dieResult,resetLog(),dieNum=1,roll=dieResult,logRoll()):1===e?(dieFace=6,dieResult=rollDie(),resultP.textContent=dieResult,resetLog(),dieNum=1,roll=dieResult,logRoll()):2===e?(dieFace=8,dieResult=rollDie(),resultP.textContent=dieResult,resetLog(),dieNum=1,roll=dieResult,logRoll()):3===e?(dieFace=10,dieResult=rollDie(),resultP.textContent=dieResult,resetLog(),dieNum=1,roll=dieResult,logRoll()):4===e?(dieFace=12,dieResult=rollDie(),resultP.textContent=dieResult,resetLog(),dieNum=1,roll=dieResult,logRoll()):5===e?(dieFace=20,dieResult=rollDie(),resultP.textContent=dieResult,resetLog(),dieNum=1,roll=dieResult,logRoll()):(dieFace=100,dieResult=rollDie(),resultP.textContent=dieResult,resetLog(),dieNum=1,roll=dieResult,logRoll())}));for(let e=0;e<rollBUTTONS.length;e++)rollBUTTONS[e].addEventListener("click",(function(l){if(l.preventDefault(),0===e){resetLog(),dieFace=4;let e=document.querySelectorAll(".selection input[type=text]");for(dieNum=parseInt(e[0].value)>0?parseInt(e[0].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[0].checked&&parseInt(e[1].value)>0?(addSub="+",addSubValue=e[1].value,dieResult+=parseInt(e[1].value)):!0===l[1].checked&&parseInt(e[1].value)>0&&(addSub="-",addSubValue=e[1].value,dieResult-=parseInt(e[1].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}else if(1===e){resetLog(),dieFace=6;let e=document.querySelectorAll(".selection input[type=text]");for(dieNum=parseInt(e[2].value)>0?parseInt(e[2].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[2].checked&&parseInt(e[3].value)>0?(addSub="+",addSubValue=e[3].value,dieResult+=parseInt(e[3].value)):!0===l[3].checked&&parseInt(e[3].value)>0&&(addSub="-",addSubValue=e[3].value,dieResult-=parseInt(e[3].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}else if(2===e){resetLog(),dieFace=8;let e=document.querySelectorAll(".selection input[type=text]");for(dieNum=parseInt(e[4].value)>0?parseInt(e[4].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[4].checked&&parseInt(e[5].value)>0?(addSub="+",addSubValue=e[5].value,dieResult+=parseInt(e[5].value)):!0===l[5].checked&&parseInt(e[5].value)>0&&(addSub="-",addSubValue=e[5].value,dieResult-=parseInt(e[5].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}else if(3===e){resetLog(),dieFace=10;let e=document.querySelectorAll(".selection input[type=text]");for(dieNum=parseInt(e[6].value)>0?parseInt(e[6].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[6].checked&&parseInt(e[7].value)>0?(addSub="+",addSubValue=e[7].value,dieResult+=parseInt(e[7].value)):!0===l[7].checked&&parseInt(e[7].value)>0&&(addSub="-",addSubValue=e[7].value,dieResult-=parseInt(e[7].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}else if(4===e){resetLog(),dieFace=12;let e=document.querySelectorAll(".selection input[type=text]");for(dieNum=parseInt(e[8].value)>0?parseInt(e[8].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[8].checked&&parseInt(e[9].value)>0?(addSub="+",addSubValue=e[9].value,dieResult+=parseInt(e[9].value)):!0===l[9].checked&&parseInt(e[9].value)>0&&(addSub="-",addSubValue=e[9].value,dieResult-=parseInt(e[9].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}else if(5===e){resetLog(),dieFace=20;let e=document.querySelectorAll(".selection input[type=text]");for(dieNum=parseInt(e[10].value)>0?parseInt(e[10].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[10].checked&&parseInt(e[11].value)>0?(addSub="+",addSubValue=e[11].value,dieResult+=parseInt(e[11].value)):!0===l[11].checked&&parseInt(e[11].value)>0&&(addSub="-",addSubValue=e[11].value,dieResult-=parseInt(e[11].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}else if(6===e){resetLog(),dieFace=100;let e=document.querySelectorAll(".selection input[type=text]");for(dieNum=parseInt(e[12].value)>0?parseInt(e[12].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[12].checked&&parseInt(e[13].value)>0?(addSub="+",addSubValue=e[13].value,dieResult+=parseInt(e[13].value)):!0===l[13].checked&&parseInt(e[13].value)>0&&(addSub="-",addSubValue=e[13].value,dieResult-=parseInt(e[13].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}else{resetLog();let e=document.querySelectorAll(".selection input[type=text]");for(dieFace=parseInt(e[14].value)>0?parseInt(e[14].value):0,dieNum=parseInt(e[15].value)>0?parseInt(e[15].value):1,dieResult=0,j=0;j<dieNum;j++)dieResult+=rollDie();let l=document.querySelectorAll(".selection input[type=radio]");!0===l[14].checked&&parseInt(e[16].value)>0?(addSub="+",addSubValue=e[16].value,dieResult+=parseInt(e[16].value)):!0===l[15].checked&&parseInt(e[16].value)>0&&(addSub="-",addSubValue=e[16].value,dieResult-=parseInt(e[16].value)),resultP.textContent=dieResult,roll=dieResult,logRoll()}}));
>>>>>>> parent of 6e0e632 (adjustments)
//# sourceMappingURL=main.js.map