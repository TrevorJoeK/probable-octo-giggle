let yah={}
let yahtzee = [
    {
    isOn:true,
    yName:"Ones",
    yScore:0
}
]

yah= {isOn:true, yName:"Twos",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Threes",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Fours",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Fives",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Sixes",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"3 Of A Kind",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"4 of a Kind",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Full House",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Small Straight",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Large Straight",yScore:0}
yahtzee.push(yah)
yah= {isOn:true, yName:"Chance",yScore:0}
yahtzee.push(yah)

let cont=true
let diceRoll=[0, 0, 0, 0, 0]
let roll=""
let check= false
let yahtzeeBonus=false
let response=false
let smallScore=0
let totalScore=0
let turns=0
const prompt = require("prompt-sync")()

do {

for (loop=0;loop<5;loop++) {
    diceRoll[loop]= Math.floor(Math.random()*6)+1
}

console.log("Your beginning roll is:")
for (loop=0;loop<3;loop++) {
    console.log("Your dice are:\n" + diceRoll)
    input=prompt("Do you want to roll?") 
    if (input ==="y") {
        for (inloop=0;inloop<5;inloop++) {
            console.log("Die:" + diceRoll[inloop])
            input=prompt("Do you want to roll this die?")
            if (input==="y") {
                diceRoll[inloop]= Math.floor(Math.random()*6)+1
            }
        }
    }
}

diceRoll=diceRoll.sort()

for (loop=0;loop<6;loop++) {    
    for (inloop=0;inloop<5;inloop++) {
        if (diceRoll[inloop]===(loop+1)) {
            yahtzee[loop].yScore=yahtzee[loop].yScore+(loop+1)
        }
    }
}

check=false
if (check===false&&diceRoll[0]===diceRoll[1]&&diceRoll[1]===diceRoll[2]) {  
    check=true
    for (loop=0;loop<5;loop++) {
        yahtzee[6].yScore=yahtzee[6].yScore+diceRoll[loop]
    }
    if (yahtzee[8].yScore===0&&diceRoll[3]===diceRoll[4]&&diceRoll[3]!=diceRoll[0]) {
        yahtzee[8].yScore=25
    }
}
if (check===false&&diceRoll[1]===diceRoll[2]&&diceRoll[2]===diceRoll[3]) {  
    check=true
    for (loop=0;loop<5;loop++) {
        yahtzee[6].yScore=yahtzee[6].yScore+diceRoll[loop]
    }
    if (yahtzee[8].yScore===0&&diceRoll[0]===diceRoll[4]&&diceRoll[0]!=diceRoll[1]) {
        yahtzee[8].yScore=25
    }
}
if (check===false&&diceRoll[2]===diceRoll[3]&&diceRoll[3]===diceRoll[4]) {  
    for (loop=0;loop<5;loop++) {
        yahtzee[6].yScore=yahtzee[6].yScore+diceRoll[loop]
    }
    if (yahtzee[8].yScore===0&&diceRoll[0]===diceRoll[1]&&diceRoll[0]!=diceRoll[2]) {
        yahtzee[8].yScore=25
    }
}

check=false
if (check===false&&diceRoll[0]===diceRoll[1]&&diceRoll[0]===diceRoll[2]&&diceRoll[0]===diceRoll[3]) {  
    check=true
    for (loop=0;loop<5;loop++) {
        yahtzee[7].yScore=yahtzee[7].yScore+diceRoll[loop]
    }
    if (yahtzeeBonus===false&&diceRoll[0]===diceRoll[4]) {
        yahtzeeBonus=true
    }
}
if (check===false&&diceRoll[1]===diceRoll[2]&&diceRoll[1]===diceRoll[3]&&diceRoll[1]===diceRoll[4]) {  
    for (loop=0;loop<5;loop++) {
        yahtzee[7].yScore=yahtzee[7].yScore+diceRoll[loop]
    }
}

check=false
if (check===false&&diceRoll[0]===diceRoll[1]-1&&diceRoll[1]===diceRoll[2]-1&&diceRoll[2]===diceRoll[3]-1) {
    check=true
    yahtzee[9].yScore=30
    if (yahtzee[10].yScore===0&&diceRoll[3]===diceRoll[4]-1) {
        yahtzee[10].yScore=40
    }
}
if (check===false&&diceRoll[1]===diceRoll[2]-1&&diceRoll[2]===diceRoll[3]-1&&diceRoll[3]===diceRoll[4]-1) {
    yahtzee[9].yScore=30
}
if (check===false&&diceRoll[0]===diceRoll[2]-1&&diceRoll[2]===diceRoll[3]-1&&diceRoll[3]===diceRoll[4]-1) {
    yahtzee[9].yScore=30
}
if (check===false&&diceRoll[0]===diceRoll[1]-1&&diceRoll[1]===diceRoll[3]-1&&diceRoll[3]===diceRoll[4]-1) {
    yahtzee[9].yScore=30
}

for (loop=0;loop<5;loop++) {
    yahtzee[11].yScore=yahtzee[11].yScore+diceRoll[loop]
}

for (loop=0;loop<12;loop++) {
    if (yahtzee[loop].isOn===true) {
        console.log((loop+1)+": "+yahtzee[loop].yName+" is worth: "+yahtzee[loop].yScore)
    } else {
        console.log((loop+1)+": Used")
    }
}
if (yahtzeeBonus===true) {
    console.log("13: Yahtzee: 50")
}

response=false 
do {
input=prompt("What is your selection?")
switch (input) {
    case "1":
        if (yahtzee[0].isOn===true) {
            smallScore=smallScore+yahtzee[0].yScore            
        }
        yahtzee[0].isOn=false
        response=true
        turns=turns+1
        break
    case "2":
        if (yahtzee[1].isOn===true) {
            smallScore=smallScore+yahtzee[1].yScore            
        }
        yahtzee[1].isOn=false
        response=true
        turns=turns+1
        break
    case "3":
        if (yahtzee[2].isOn===true) {
            smallScore=smallScore+yahtzee[2].yScore            
        }
        yahtzee[2].isOn=false
        response=true
        turns=turns+1
        break
    case "4":
        if (yahtzee[3].isOn===true) {
            smallScore=smallScore+yahtzee[3].yScore            
        }
        yahtzee[3].isOn=false
        response=true
        turns=turns+1
        break
    case "5":
        if (yahtzee[4].isOn===true) {
            smallScore=smallScore+yahtzee[4].yScore            
        }
        yahtzee[4].isOn=false
        response=true
        turns=turns+1
        break
    case "6":
        if (yahtzee[5].isOn===true) {
            smallScore=smallScore+yahtzee[5].yScore            
        }
        yahtzee[5].isOn=false
        response=true
        turns=turns+1
        break
    case "7":
        if (yahtzee[6].isOn===true) {
            totalScore=totalScore+yahtzee[6].yScore
        }
        yahtzee[6].isOn=false
        response=true
        turns=turns+1
        break
    case "8":
        if (yahtzee[7].isOn===true) {
            totalScore=totalScore+yahtzee[7].yScore
        }
        yahtzee[7].isOn=false
        response=true
        turns=turns+1
        break
    case "9":
        if (yahtzee[8].isOn===true) {
            totalScore=totalScore+yahtzee[8].yScore
        }
        yahtzee[8]=false
        response=true
        turns=turns+1
        break
    case "10":
        if (yahtzee[9].isOn===true) {
            totalScore=totalScore+yahtzee[9].yScore
        }
        yahtzee[9]=false
        response=true
        turns=turns+1
        break
    case "11":
        if (yahtzee[10].isOn===true) {
            totalScore=totalScore+yahtzee[10].yScore
        }
        yahtzee[10]=false
        response=true
        turns=turns+1
        break
    case "12":
        if (yahtzee[11].isOn===true) {
            totalScore=totalScore+yahtzee[11].yScore
        }
        yahtzee[11].isOn=false
        response=true
        turns=turns+1
        break
    case "13":
        if (yahtzeeBonus===true) {
            totalScore=totalScore+50
            response=true
        }
        break
} 
} while (response===false)

for (loop=0;loop<12;loop++) {
    yahtzee[loop].yScore=0
}
yahtzeeBonus=false

if (turns===12) {
    cont=false
}

} while (cont===true)

if (smallScore>63) {
    smallScore=smallScore+35
}
totalScore=totalScore+smallScore
console.log("Your final score is: " + totalScore)
