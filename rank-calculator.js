let winBalance = parseInt(Math.random() * 10 / Math.random() * 10)
let heroName = "herminions"
let ranks = ["iron", "bronze", "silver", "gold", "diamond", "legendary", "imortal"]

if(winBalance <= 10){
    console.log(`The hero ${heroName} has a win balance of ${winBalance} and is at ${ranks[0]} rank!`)
} else if (winBalance <= 20){
    console.log(`The hero ${heroName} has a win balance of ${winBalance} and is at ${ranks[1]} rank!`)
} else if (winBalance <= 50){
    console.log(`The hero ${heroName} has a win balance of ${winBalance} and is at ${ranks[2]} rank!`)
} else if (winBalance <= 80){
    console.log(`The hero ${heroName} has a win balance of ${winBalance} and is at ${ranks[3]} rank!`)
} else if (winBalance <= 90){
    console.log(`The hero ${heroName} has a win balance of ${winBalance} and is at ${ranks[4]} rank!`)
} else if (winBalance <= 100){
    console.log(`The hero ${heroName} has a win balance of ${winBalance} and is at ${ranks[5]} rank!`)
} else (console.log(`The hero ${heroName} has a win balance of ${winBalance} and is at ${ranks[6]} rank!` ))