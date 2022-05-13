// buttons and naming variables

const fightBt= document.querySelector('#FIGHT')
const buyBt= document.querySelector('#BUY')
const testBt= document.querySelector('#test')
const fighter1 = 0
const fighter2 = 0
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
 
    console.log('twoer')
}
else if (attack1 > attack2){
    diff = attack1 - attack2
    winner = 1
    console.log('oner')
    
}else{
diff = 0
winner =0 }
console.log(winner)
hp(winner)
}
// WINNER AND REWARDS AND LOSSES
function hp(victor)
{console.log(victor)
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
//  attPlus = 0
 
}
// eventlisterrs for fight
fightBt.addEventListener('click',(war)=>{
    attacker1()
    attacker2()
    compare()
})

buyBt.addEventListener('click',()=>{
if(castleGold1> but1){
console.log(attPlus)
    attMod += 1

}
console.log(attMod)

})


