let socket = io('http://circuslabs.net:20202');

// how to ask the server for a roll
socket.emit('request roll', {
	count: 1,
	faces: 6,
	name: 'chris',
});

// when the server provides a roll for ANYONE (not just you), this is called
socket.on('rolled', function (data) {
	console.log(data);
});

let displayDIV = document.querySelector(`.display-frame`)
let documentHEADER = document.querySelector(`header`)
let beginBUTTON = document.querySelector(`header button`)
let rollerSECTION = document.querySelector(`.roller`)
let dieFIGURES = document.querySelectorAll(`.selection figure`)
let rollBUTTONS = document.querySelectorAll(`.selection button`)
let resultP = document.querySelector(`.result`)
let logPS = document.querySelectorAll(`.log p`)
var dieNum = 0
var dieFace = 0
var addSub = ``
var addSubValue= ``
var roll = 0
var animating = false;
animationStage = 0;

let rollDie = function(){

	if(!animating){
		let element = document.querySelector(`.lich`)
		let start

		function step(timestamp) {
		if (start === undefined)
			start = timestamp
		const elapsed = timestamp - start
		animationStage++
		if(animationStage === 1){
			element.style.backgroundPosition = `-15px -460px` 
			animationStage++
		}
		else if(animationStage === 2){
			element.style.backgroundPosition = `-110px -460px` 
			animationStage++
		}
		else if(animationStage === 3){
			element.style.backgroundPosition = `-200px -460px` 
			animationStage++
		}
		else if(animationStage === 4){
			element.style.backgroundPosition = `-290px -460px` 
			animationStage++
		}
		else{
			element.style.backgroundPosition = `0px 0px` 
		}
		

		if (elapsed < 1000) { // Stop the animation after 2 seconds
			animationStage = -1
			window.requestAnimationFrame(step);
		}
		}

		window.requestAnimationFrame(step);
	}


	return Math.floor(Math.random() * dieFace) + 1
}

let resetLog = function(){
	addSub = ``
	addSubValue = ``
}

let logRoll = function(){
	for(let i=0;i<logPS.length-1;i++){
		logPS[i].textContent = logPS[i+1].textContent
	}
	logPS[logPS.length-1].textContent = `roll(${dieNum}d${dieFace})${addSub}${addSubValue}: ${roll}`

}

beginBUTTON.addEventListener(`click`, function(){
	documentHEADER.style.display = `none`
	displayDIV.style.border = `2vh black double`
	rollerSECTION.style.display = `flex`
})

for(let i=0; i<dieFIGURES.length; i++){
	dieFIGURES[i].addEventListener(`click`, function(){
		if(i===0){
			dieFace = 4
			dieResult = rollDie()
			resultP.textContent = dieResult
			resetLog()
			dieNum = 1
			roll = dieResult
			logRoll()
		}
		else if(i===1){
			dieFace = 6
			dieResult = rollDie()
			resultP.textContent = dieResult
			resetLog()
			dieNum = 1
			roll = dieResult
			logRoll()
		}
		else if(i===2){
			dieFace = 8
			dieResult = rollDie()
			resultP.textContent = dieResult
			resetLog()
			dieNum = 1
			roll = dieResult
			logRoll()
		}
		else if(i===3){
			dieFace = 10
			dieResult = rollDie()
			resultP.textContent = dieResult
			resetLog()
			dieNum = 1
			roll = dieResult
			logRoll()
		}
		else if(i===4){
			dieFace = 12
			dieResult = rollDie()
			resultP.textContent = dieResult
			resetLog()
			dieNum = 1
			roll = dieResult
			logRoll()
			
		}
		else if(i===5){
			dieFace = 20
			dieResult = rollDie()
			resultP.textContent = dieResult
			resetLog()
			dieNum = 1
			roll = dieResult
			logRoll()
		}
		else{
			dieFace = 100
			dieResult = rollDie()
			resultP.textContent = dieResult
			resetLog()
			dieNum = 1
			roll = dieResult
			logRoll()
		}
	})
}

for(let i=0; i<rollBUTTONS.length; i++){
	rollBUTTONS[i].addEventListener(`click`, function(event){
		event.preventDefault();
		if(i===0){
			resetLog()
			dieFace = 4
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[0].value) > 0){
				dieNum = parseInt(numberINPUTS[0].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[0].checked === true && parseInt(numberINPUTS[1].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[1].value
				dieResult = dieResult + parseInt(numberINPUTS[1].value)
			}
			else if(radioINPUTS[1].checked === true && parseInt(numberINPUTS[1].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[1].value
				dieResult = dieResult - parseInt(numberINPUTS[1].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
		else if(i===1){
			resetLog()
			dieFace = 6
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[2].value) > 0){
				dieNum = parseInt(numberINPUTS[2].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[2].checked === true && parseInt(numberINPUTS[3].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[3].value
				dieResult = dieResult + parseInt(numberINPUTS[3].value)
			}
			else if(radioINPUTS[3].checked === true && parseInt(numberINPUTS[3].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[3].value
				dieResult = dieResult - parseInt(numberINPUTS[3].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
		else if(i===2){
			resetLog()
			dieFace = 8
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[4].value) > 0){
				dieNum = parseInt(numberINPUTS[4].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[4].checked === true && parseInt(numberINPUTS[5].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[5].value
				dieResult = dieResult + parseInt(numberINPUTS[5].value)
			}
			else if(radioINPUTS[5].checked === true && parseInt(numberINPUTS[5].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[5].value
				dieResult = dieResult - parseInt(numberINPUTS[5].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
		else if(i===3){
			resetLog()
			dieFace = 10
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[6].value) > 0){
				dieNum = parseInt(numberINPUTS[6].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[6].checked === true && parseInt(numberINPUTS[7].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[7].value
				dieResult = dieResult + parseInt(numberINPUTS[7].value)
			}
			else if(radioINPUTS[7].checked === true && parseInt(numberINPUTS[7].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[7].value
				dieResult = dieResult - parseInt(numberINPUTS[7].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
		else if(i===4){
			resetLog()
			dieFace = 12
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[8].value) > 0){
				dieNum = parseInt(numberINPUTS[8].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[8].checked === true && parseInt(numberINPUTS[9].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[9].value
				dieResult = dieResult + parseInt(numberINPUTS[9].value)
			}
			else if(radioINPUTS[9].checked === true && parseInt(numberINPUTS[9].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[9].value
				dieResult = dieResult - parseInt(numberINPUTS[9].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
		else if(i===5){
			resetLog()
			dieFace = 20
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[10].value) > 0){
				dieNum = parseInt(numberINPUTS[10].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[10].checked === true && parseInt(numberINPUTS[11].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[11].value
				dieResult = dieResult + parseInt(numberINPUTS[11].value)
			}
			else if(radioINPUTS[11].checked === true && parseInt(numberINPUTS[11].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[11].value
				dieResult = dieResult - parseInt(numberINPUTS[11].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
		else if(i===6){
			resetLog()
			dieFace = 100
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[12].value) > 0){
				dieNum = parseInt(numberINPUTS[12].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[12].checked === true && parseInt(numberINPUTS[13].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[13].value
				dieResult = dieResult + parseInt(numberINPUTS[13].value)
			}
			else if(radioINPUTS[13].checked === true && parseInt(numberINPUTS[13].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[13].value
				dieResult = dieResult - parseInt(numberINPUTS[13].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
		else{
			resetLog()
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[14].value) > 0){
				dieFace = parseInt(numberINPUTS[14].value)
			}
			else dieFace = 0
			if(parseInt(numberINPUTS[15].value) > 0){
				dieNum = parseInt(numberINPUTS[15].value)
			}
			else dieNum = 1
			dieResult = 0
			for (j=0;j<dieNum;j++){
				dieResult += rollDie()
			}
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			if(radioINPUTS[14].checked === true && parseInt(numberINPUTS[16].value) > 0){
				addSub = `+`
				addSubValue = numberINPUTS[16].value
				dieResult = dieResult + parseInt(numberINPUTS[16].value)
			}
			else if(radioINPUTS[15].checked === true && parseInt(numberINPUTS[16].value) > 0){
				addSub = `-`
				addSubValue = numberINPUTS[16].value
				dieResult = dieResult - parseInt(numberINPUTS[16].value)
			}
			resultP.textContent = dieResult
			roll = dieResult
			logRoll()
		}
	})
}