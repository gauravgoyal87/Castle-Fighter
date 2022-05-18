// buttons and naming variables
const fightBt= document.querySelector('#FIGHT')
const buyBt= document.querySelector('#BUY')
const menuBt= document.querySelector('#selecting')
const testBt= document.querySelector('#test')
const gold1= document.querySelector('#gold1')
const gold2= document.querySelector('#gold2')
const hp1= document.querySelector('#hp1')
const hp2= document.querySelector('#hp2')
const rules1= document.querySelector('#rulemodal')
const closeBt= document.querySelector('#close')
const playUpd1= document.querySelector('#play1')
const playUpd2= document.querySelector('#play2')
let playUpd0= testBt
const att1displ= document.querySelector('#att1dis')
const att2displ= document.querySelector('#att2dis')

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
    endgame()
}

// fighting calculation
function attacker1(wep){
    attack1 += Math.ceil(( Math.random() * weapon1)+ attMod)
    att1displ.innerHTML=`${attack1}`

}
function attacker2(wep){
    attack2 += Math.ceil( Math.random() * weapon2)
    att2displ.innerHTML=`${attack2}`
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
displayer(winner)
hp(winner)
}

function displayer(ran){
    if (ran == 2){
        playUpd1.innerHTML= `-${diff} lost`
    }
    else if (ran == 1){
        playUpd2.innerHTML= `-${diff} lost`
    }  else if (ran == 0){
      testBt.innerHTML = "TIE"
    } else{
    testBt.innerHTML = ""
    playUpd2.innerHTML= ``
    playUpd1.innerHTML= ``
}}
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
    if ((castleHP1 > 0) && (castleHP2 > 0)){
    attacker1()
    attacker2()
    displayer()
    compare()
    endgame()
}
})
function openrules1(){
    rules1.style.display = 'block';
}
function closerules1(){
    rules1.style.display = 'none';
}
closeBt.addEventListener('click',()=>{
    closerules1()
})
buyBt.addEventListener('click',()=>{
    const buyselect = document.querySelector('#shopping')
   
    if(buyselect.value == 1 ){
if(castleGold1 >= but1){
console.log(castleGold1)
    attMod += 1
    castleGold1 -= 1
    att1displ.innerHTML=`Attack +${attMod}`
}}
else if(buyselect.value == 2){
    if(castleGold1>= but1){
        castleHP1 += 1
        castleGold1-= 1
}}
updatestats()
})

function endgame(death){
    if (castleHP1 <= 0){
        testBt.innerHTML = "GAME OVER!"
    }
    else if (castleHP2 <= 0){
        testBt.innerHTML = "PLAYER 1 WINS"
    }
    else{
       
    } 
}
// resetgame()
menuBt.addEventListener('click',()=>{
    const menuselect = document.querySelector('#selection')
    console.log(menuselect.value)
    if(menuselect.value == 1 ){
resetgame()
}
else if(menuselect.value == 2){
// RULES EXPLANATION
openrules1()
}
else if(menuselect.value == 3){
resetgame()
weapon2= 4
castleHP2=30
 testBt.innerHTML = "FIGHT!!!!"
 playUpd2.innerHTML= ``
 playUpd1.innerHTML= ``
}
updatestats()
})

