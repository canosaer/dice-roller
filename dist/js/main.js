let displayDIV=document.querySelector(".display-frame"),documentHEADER=document.querySelector("header"),beginBUTTON=document.querySelector("header button"),rollerSECTION=document.querySelector(".roller"),dieFIGURES=document.querySelectorAll(".selection figure"),rollBUTTONS=document.querySelectorAll(".selection button"),resultP=document.querySelector(".result"),logPS=document.querySelectorAll(".log p"),lichFIGURE=document.querySelector(".lich"),smokeDIV=document.querySelector(".smoke"),nameINPUT=document.querySelector("input[name=name]");var dieNum=0,dieFace=0,addSub="",addSubValue="",animating=!1,name="",dieResult=0;let rollDie=function(e){dieResult=0;for(let l=0;l<e;l++)dieResult+=Math.floor(Math.random()*dieFace)+1;"+"===addSub?dieResult+=parseInt(addSubValue):"-"===addSub&&(dieResult-=parseInt(addSubValue)),resultP.textContent=dieResult;for(let e=0;e<logPS.length-1;e++)logPS[e].textContent=logPS[e+1].textContent;logPS[logPS.length-1].textContent=`${name} rolled ${e}d${dieFace}${addSub}${addSubValue}: ${dieResult}`,resetLog(),animating||(animating=!0,resultP.style.opacity="0",lichFIGURE.style.backgroundPosition="-15px -460px",setTimeout((function(){lichFIGURE.style.backgroundPosition="-110px -460px"}),100),setTimeout((function(){lichFIGURE.style.backgroundPosition="-200px -460px"}),200),setTimeout((function(){lichFIGURE.style.backgroundPosition="-290px -460px",smokeDIV.style.transition="none"}),300),setTimeout((function(){lichFIGURE.style.backgroundPosition="-382px -460px",smokeDIV.style.opacity="1",resultP.style.opacity="1"}),400),setTimeout((function(){lichFIGURE.style.backgroundPosition="0px 0px",smokeDIV.style.opacity="0",animating=!1}),500))},resetLog=function(){addSub="",addSubValue=""};beginBUTTON.addEventListener("click",(function(){documentHEADER.style.display="none",displayDIV.style.border="2vh black double",rollerSECTION.style.display="flex",name=""===nameINPUT.value?"anon":nameINPUT.value}));for(let e=0;e<dieFIGURES.length;e++)dieFIGURES[e].addEventListener("click",(function(){0===e?(dieFace=4,rollDie(dieNum=1)):1===e?(dieFace=6,rollDie(dieNum=1)):2===e?(dieFace=8,rollDie(dieNum=1)):3===e?(dieFace=10,rollDie(dieNum=1)):4===e?(dieFace=12,rollDie(dieNum=1)):5===e?(dieFace=20,rollDie(dieNum=1)):(dieFace=100,rollDie(dieNum=1))}));for(let e=0;e<rollBUTTONS.length;e++)rollBUTTONS[e].addEventListener("click",(function(l){if(l.preventDefault(),0===e){dieFace=4;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[0].value)>0?parseInt(e[0].value):1;let l=document.querySelectorAll(".selection input[type=radio]");!0===l[0].checked&&parseInt(e[1].value)>0?(addSub="+",addSubValue=e[1].value):!0===l[1].checked&&parseInt(e[1].value)>0&&(addSub="-",addSubValue=e[1].value),rollDie(dieNum)}else if(1===e){dieFace=6;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[2].value)>0?parseInt(e[2].value):1,rollDie(dieNum);let l=document.querySelectorAll(".selection input[type=radio]");!0===l[2].checked&&parseInt(e[3].value)>0?(addSub="+",addSubValue=e[3].value):!0===l[3].checked&&parseInt(e[3].value)>0&&(addSub="-",addSubValue=e[3].value),rollDie(dieNum)}else if(2===e){dieFace=8;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[4].value)>0?parseInt(e[4].value):1;let l=document.querySelectorAll(".selection input[type=radio]");!0===l[4].checked&&parseInt(e[5].value)>0?(addSub="+",addSubValue=e[5].value):!0===l[5].checked&&parseInt(e[5].value)>0&&(addSub="-",addSubValue=e[5].value),rollDie(dieNum)}else if(3===e){dieFace=10;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[6].value)>0?parseInt(e[6].value):1;let l=document.querySelectorAll(".selection input[type=radio]");!0===l[6].checked&&parseInt(e[7].value)>0?(addSub="+",addSubValue=e[7].value):!0===l[7].checked&&parseInt(e[7].value)>0&&(addSub="-",addSubValue=e[7].value),resultP.textContent=dieResult,rollDie(dieNum)}else if(4===e){dieFace=12;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[8].value)>0?parseInt(e[8].value):1;let l=document.querySelectorAll(".selection input[type=radio]");!0===l[8].checked&&parseInt(e[9].value)>0?(addSub="+",addSubValue=e[9].value):!0===l[9].checked&&parseInt(e[9].value)>0&&(addSub="-",addSubValue=e[9].value),rollDie(dieNum)}else if(5===e){dieFace=20;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[10].value)>0?parseInt(e[10].value):1;let l=document.querySelectorAll(".selection input[type=radio]");!0===l[10].checked&&parseInt(e[11].value)>0?(addSub="+",addSubValue=e[11].value):!0===l[11].checked&&parseInt(e[11].value)>0&&(addSub="-",addSubValue=e[11].value),rollDie(dieNum)}else if(6===e){dieFace=100;let e=document.querySelectorAll(".selection input[type=text]");dieNum=parseInt(e[12].value)>0?parseInt(e[12].value):1;let l=document.querySelectorAll(".selection input[type=radio]");!0===l[12].checked&&parseInt(e[13].value)>0?(addSub="+",addSubValue=e[13].value):!0===l[13].checked&&parseInt(e[13].value)>0&&(addSub="-",addSubValue=e[13].value),rollDie(dieNum)}else{let e=document.querySelectorAll(".selection input[type=text]");dieFace=parseInt(e[14].value)>0?parseInt(e[14].value):0,dieNum=parseInt(e[15].value)>0?parseInt(e[15].value):1;let l=document.querySelectorAll(".selection input[type=radio]");!0===l[14].checked&&parseInt(e[16].value)>0?(addSub="+",addSubValue=e[16].value):!0===l[15].checked&&parseInt(e[16].value)>0&&(addSub="-",addSubValue=e[16].value),rollDie(dieNum)}}));
//# sourceMappingURL=main.js.map