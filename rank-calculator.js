let winBalance = matchesBalance(Math.random() * 200 , Math.random() * 100)
let roundWinBalance = Math.round(winBalance)
let heroName = "herminions"
let ranks = ["iron", "bronze", "silver", "gold", "diamond", "legendary", "imortal"]


function matchesBalance(win, loss){
    let matchBalance = win - loss
    return matchBalance
}

if(roundWinBalance <= 10){
    console.log(`The hero ${heroName} has a win balance of ${roundWinBalance} and is at ${ranks[0]} rank!`)
} else if (roundWinBalance <= 20){
    console.log(`The hero ${heroName} has a win balance of ${roundWinBalance} and is at ${ranks[1]} rank!`)
} else if (roundWinBalance <= 50){
    console.log(`The hero ${heroName} has a win balance of ${roundWinBalance} and is at ${ranks[2]} rank!`)
} else if (roundWinBalance <= 80){
    console.log(`The hero ${heroName} has a win balance of ${roundWinBalance} and is at ${ranks[3]} rank!`)
} else if (roundWinBalance <= 90){
    console.log(`The hero ${heroName} has a win balance of ${roundWinBalance} and is at ${ranks[4]} rank!`)
} else if (roundWinBalance <= 100){
    console.log(`The hero ${heroName} has a win balance of ${roundWinBalance} and is at ${ranks[5]} rank!`)
} else (console.log(`The hero ${heroName} has a win balance of ${roundWinBalance} and is at ${ranks[6]} rank!` ))