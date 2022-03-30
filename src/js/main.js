let socket = io('http://circuslabs.net:20202');





let displayDIV = document.querySelector(`.display-frame`)
let documentHEADER = document.querySelector(`header`)
let beginBUTTON = document.querySelector(`header button`)
let rollerSECTION = document.querySelector(`.roller`)
let dieFIGURES = document.querySelectorAll(`.selection figure`)
let rollBUTTONS = document.querySelectorAll(`.selection button`)
let resultP = document.querySelector(`.result`)
let logPS = document.querySelectorAll(`.log p`)
let lichFIGURE = document.querySelector(`.lich`)
let smokeDIV = document.querySelector(`.smoke`)
let nameINPUT = document.querySelector(`input[name=name]`)
var dieNum = 0
var dieFace = 0
var addSub = ``
var addSubValue= ``
var animating = false
var name = ``
var dieResult = 0

let rollDie = function(dieCount){
	socket.emit('request roll', {
		count: dieCount,
		faces: dieFace,
		name: name,
	});

	if(!animating){
		animating = true;
		resultP.style.opacity = '0'
		lichFIGURE.style.backgroundPosition = `-15px -460px`
		setTimeout(function(){
			lichFIGURE.style.backgroundPosition = `-110px -460px`
		}, 100);
		setTimeout(function(){
			lichFIGURE.style.backgroundPosition = `-200px -460px`
		}, 200);
		setTimeout(function(){
			lichFIGURE.style.backgroundPosition = `-290px -460px`
			smokeDIV.style.transition = `none`
		}, 300);
		setTimeout(function(){
			lichFIGURE.style.backgroundPosition = `-382px -460px`
			smokeDIV.style.opacity = `1`
			resultP.style.opacity = '1'
		}, 400);
		setTimeout(function(){
			lichFIGURE.style.backgroundPosition = `0px 0px`
			smokeDIV.style.opacity = `0`
			animating = false;
		}, 500);
	}
}

socket.on('rolled', function (data) {
	setTimeout(function(){
		dieResult = 0
		for(let i=0;i<data.rolls.length;i++){
			dieResult += data.rolls[i]
		}
	}, 300);
	resetLog()
<<<<<<< HEAD

	for(let i=0;i<logPS.length-1;i++){
		logPS[i].textContent = logPS[i+1].textContent
	}
<<<<<<< HEAD
	logPS[logPS.length-1].textContent = `${data.name} rolled ${data.count}d${data.faces}${addSub}${addSubValue}: ${dieResult}`

=======
	setTimeout(function(){
		for(let i=0;i<logPS.length-1;i++){
			logPS[i].textContent = logPS[i+1].textContent
		}
		logPS[logPS.length-1].textContent = `${data.name} rolled ${data.count}d${data.faces}${addSub}${addSubValue}: ${dieResult}`
	}, 400);
>>>>>>> parent of bbae2fc (1.1)
});

let resetLog = function(){
	addSub = ``
	addSubValue = ``
=======
	logPS[logPS.length-1].textContent = `${name} rolled ${dieNum}d${dieFace}${addSub}${addSubValue}: ${roll}`

>>>>>>> parent of 6e0e632 (adjustments)
}

beginBUTTON.addEventListener(`click`, function(){
	documentHEADER.style.display = `none`
	displayDIV.style.border = `2vh black double`
	rollerSECTION.style.display = `flex`
	if(nameINPUT.value === ``){
		name = `unknown`
	}
	else name = nameINPUT.value
})

for(let i=0; i<dieFIGURES.length; i++){
	dieFIGURES[i].addEventListener(`click`, function(){
		if(i===0){
			dieFace = 4
			dieNum = 1
			rollDie(dieNum)
			setTimeout(function(){
				resultP.textContent = dieResult
			}, 350);
		}
		else if(i===1){
			dieFace = 6
			dieNum = 1
			rollDie(dieNum)
			setTimeout(function(){
				resultP.textContent = dieResult
			}, 350);
		}
		else if(i===2){
			dieFace = 8
			dieNum = 1
			rollDie(dieNum)
			setTimeout(function(){
				resultP.textContent = dieResult
			}, 350);
		}
		else if(i===3){
			dieFace = 10
			dieNum = 1
			rollDie(dieNum)
			setTimeout(function(){
				resultP.textContent = dieResult
			}, 350);
		}
		else if(i===4){
			dieFace = 12
			dieNum = 1
			rollDie(dieNum)
			setTimeout(function(){
				resultP.textContent = dieResult
			}, 350);
		}
		else if(i===5){
			dieFace = 20
			dieNum = 1
			rollDie(dieNum)
			setTimeout(function(){
				resultP.textContent = dieResult
			}, 350);
		}
		else{
			dieFace = 100
			dieNum = 1
			rollDie(dieNum)
			setTimeout(function(){
				resultP.textContent = dieResult
			}, 350);
		}
	})
}

for(let i=0; i<rollBUTTONS.length; i++){
	rollBUTTONS[i].addEventListener(`click`, function(event){
		event.preventDefault();
		if(i===0){
			dieFace = 4
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[0].value) > 0){
				dieNum = parseInt(numberINPUTS[0].value)
			}
			else dieNum = 1

			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)
			setTimeout(function(){
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
			}, 350);

			
			
		}
		else if(i===1){
			dieFace = 6
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[2].value) > 0){
				dieNum = parseInt(numberINPUTS[2].value)
			}
			else dieNum = 1
	
			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)

			setTimeout(function(){
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
			}, 350);

			
		}
		else if(i===2){
			dieFace = 8
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[4].value) > 0){
				dieNum = parseInt(numberINPUTS[4].value)
			}
			else dieNum = 1
			
			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)

			setTimeout(function(){
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
			}, 350);


			
		}
		else if(i===3){
			dieFace = 10
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[6].value) > 0){
				dieNum = parseInt(numberINPUTS[6].value)
			}
			else dieNum = 1
			
			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)

			setTimeout(function(){
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
			}, 350);
			
		}
		else if(i===4){
			dieFace = 12
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[8].value) > 0){
				dieNum = parseInt(numberINPUTS[8].value)
			}
			else dieNum = 1
			
			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)

			setTimeout(function(){
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
			}, 350);

			
		}
		else if(i===5){
			dieFace = 20
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[10].value) > 0){
				dieNum = parseInt(numberINPUTS[10].value)
			}
			else dieNum = 1
			
			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)

			setTimeout(function(){
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
			}, 350);
	
		}
		else if(i===6){
			dieFace = 100
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[12].value) > 0){
				dieNum = parseInt(numberINPUTS[12].value)
			}
			else dieNum = 1
			
			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)

			setTimeout(function(){
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
			}, 350);
			
		}
		else{
			let numberINPUTS = document.querySelectorAll(`.selection input[type=text]`)
			if(parseInt(numberINPUTS[14].value) > 0){
				dieFace = parseInt(numberINPUTS[14].value)
			}
			else dieFace = 0
			if(parseInt(numberINPUTS[15].value) > 0){
				dieNum = parseInt(numberINPUTS[15].value)
			}
			else dieNum = 1
			
			rollDie(dieNum)
			let radioINPUTS = document.querySelectorAll(`.selection input[type=radio]`)

			setTimeout(function(){
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
			}, 350);

		}
	})
}