// buttons and naming variables


const menuselect = document.querySelector('#selection')
const fightBt= document.querySelector('#FIGHT')
const buyBt= document.querySelector('#BUY')
const testBt= document.querySelector('#test')
const gold1= document.querySelector('#gold1')
const gold2= document.querySelector('#gold2')
const hp1= document.querySelector('#hp1')
const hp2= document.querySelector('#hp2')

console.log(menuselect)
// const testBt= document.querySelector('#test')
// const testBt= document.querySelector('#test')
// const testBt= document.querySelector('#test')
// const testBt= document.querySelector('#test')
// const testBt= document.querySelector('#test')

let fighter1 = 0
let fighter2 = 0
let weapon1= 3
let castleHP1= 20
let castleHP2= 20
let weapon2= 3
let castleGold1 = 0
let castleGold2 = 0
let attack1 = 0
let attack2 = 0
let diff = 0
let winner = 0
let attMod = 0
let attPlus = 1
let but1 =1
let but2 =2
let but3 =4
hp1.innerHTML= castleHP1
hp2.innerHTML= castleHP2
gold1.innerHTML= castleGold1
gold2.innerHTML= castleGold2
fighter2 = 0
function resetgame(level){ 
    fighter1 = 0
    fighter2 = 0
     weapon1= 3
     castleHP1= 20
     castleHP2= 20
     weapon2= 3
     castleGold1 = 0
     castleGold2 = 0
     attack1 = 0
     attack2 = 0
     diff = 0
     winner = 0
     attMod = 0
     attPlus = 1
     but1 =1
     but2 =2
     but3 =4
    hp1.innerHTML= castleHP1
    hp2.innerHTML= castleHP2
    gold1.innerHTML= castleGold1
    gold2.innerHTML= castleGold2
}

// fighting calculation
function attacker1(wep){
    attack1 += Math.ceil(( Math.random() * weapon1)+ attMod)
testBt.innerHTML= attack1
}
function attacker2(wep){
    attack2 += Math.ceil( Math.random() * weapon2)
testBt.innerHTML= (`${attack2}  ${attack1} ${diff} ${winner} `)
}
function compare(sand){
if (attack1 < attack2){
    diff = attack2 - attack1
    winner = 2
}
else if (attack1 > attack2){
    diff = attack1 - attack2
    winner = 1
}else{
diff = 0
winner =0 }
console.log(winner)
hp(winner)
}
// WINNER AND REWARDS AND LOSSES
function hp(victor)
{
if (victor == 2){
    castleHP1 -= diff
    castleGold2 += diff 
}
else if (victor == 1){
    castleHP2 -= diff
    castleGold1 += diff
}
 weapon1= 3
 weapon2= 3
 attack2 = 0
 attack1 = 0
 winner = 0
 diff = 0
 attMod = 0
 updatestats()
}
//  update life/gold
function updatestats(){
 hp1.innerHTML= castleHP1
hp2.innerHTML= castleHP2
gold1.innerHTML= castleGold1
gold2.innerHTML= castleGold2
}
//  attPlus = 0
// eventlisterrs for fight
fightBt.addEventListener('click',(war)=>{
    attacker1()
    attacker2()
    compare()
    endgame()
})
// serchBut.addEventListener('click',(event)=>{
//     event.preventDefault();
//     const tag = document.querySelector('select')
//     let one = 'pokemon'
//     let two = 'move'
//     let three = 'ability'
//     let four = 'location'

buyBt.addEventListener('click',()=>{
    const buyselect = document.querySelector('#shopping')
   
    if(buyselect.value == 1 ){
if(castleGold1 >= but1){
console.log(castleGold1)
    attMod += 1
    castleGold1 -= 1
}}
else if(buyselect.value == 2){
    if(castleGold1>= but1){
        castleHP1 += 1
        castleGold1-= 1
}
}
updatestats()
})

function endgame(death){
    if (castleHP1 <= 0){
        testBt.innerHTML = "GAME OVER PLAYER 2 WINS"
    }
    else if (castleHP2 <= 0){
        testBt.innerHTML = "GAME OVER PLAYER 1 WINS"
    }
    else{
    }
}
// resetgame()