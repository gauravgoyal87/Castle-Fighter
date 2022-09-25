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
const winbuy= document.querySelector('#winbuy')
const closeBt= document.querySelector('#close')
const winBuyBt1= document.querySelector('#buywin1')
const winBuyBt2= document.querySelector('#buywin2')
const winBuyBt3= document.querySelector('#buywin3')
const playUpd1= document.querySelector('#play1')
const playUpd2= document.querySelector('#play2')
const att1displ= document.querySelector('#att1dis')
const att2displ= document.querySelector('#att2dis')
const label1= document.querySelector('.label1')
const label2= document.querySelector('.label2')
const roof2= document.querySelector('.castleRoof2')
const column2= document.querySelector('.secondcolumn')
let fighter1 = 0
let fighter2 = 0
let weapon1= 5
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
let gameMode = 2
hp1.innerHTML= castleHP1
hp2.innerHTML= castleHP2
gold1.innerHTML= castleGold1
gold2.innerHTML= castleGold2
wepBonus1=""
wepBonus2=""
label1.innerHTML=`WEAPON ${weapon1} ${wepBonus1}`
label2.innerHTML=`WEAPON ${weapon2} ${wepBonus2}`

// reset game function
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
    testBt.innerHTML = "FIGHT!!!!"
    playUpd2.innerHTML= ``
    playUpd1.innerHTML= ``
    att1displ.innerHTML=``
    att2displ.innerHTML=``
    endgame()
}

//! fighting calculation
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
    displayer(winner)
    hp(winner)
}
//! status update 
function displayer(ran){
    if (ran == 2){
        playUpd1.innerHTML= `-${diff} lost`
    }
    else if (ran == 1){
        playUpd2.innerHTML= `-${diff} lost`
        playUpd1.innerHTML= `+${diff} gold`
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
label1.innerHTML=`WEAPON ${weapon1} ${wepBonus1}`
label2.innerHTML=`WEAPON ${weapon2} ${wepBonus2}`
}
//! eventlistener for fight
fightBt.addEventListener('click',(war)=>{
    if ((castleHP1 > 0) && (castleHP2 > 0)){
    attacker1()
    attacker2()
    displayer()
    compare()
    endgame()
}})
function openrules1(){
    rules1.style.display = 'block';
}
function closerules1(){
    rules1.style.display = 'none';
}
closeBt.addEventListener('click',()=>{
    closerules1()
})
// ! shopping rules 
buyBt.addEventListener('click',()=>{
    const buyselect = document.querySelector('#shopping')
    if(buyselect.value == 1 ){
if(castleGold1 >= but1){
    attMod += 1
    castleGold1 -= 1
    att1displ.innerHTML=`Attack +${attMod}`
}}
else if(buyselect.value == 2){
    if(castleGold1>= but1){
        castleHP1 += 1
        castleGold1-= 1
}}
else if(buyselect.value == 3){
    if(castleGold1>= but1){
        for(let i = 0; i < castleGold1; i++)  {
            attMod += 1
            castleGold1 -= 1
            att1displ.innerHTML=`Attack +${attMod}`
            i--

        }}}
    updatestats()
})
// ENDGAME CONDITION CHECK
function endgame(death){
    if (gameMode == 1){
    if (castleHP1 <= 0){
        testBt.innerHTML = "GAME OVER!"
    }
    else if (castleHP2 <= 0){
        testBt.innerHTML = "PLAYER 1 WINS"
    }
    else{ 
    } 
}
else if (gameMode == 2){
    if (castleHP1 <= 0){
        testBt.innerHTML = "GAME OVER! NICE TRY"
    }
    else if (castleHP2 <= 0){
        testBt.innerHTML = "PLAYER 1 WINS"
        nextRound()
    }
    else{ 
    } 
}}
// ! new round infinite
function nextRound(time){
    castleGold1 += 5
    castleHP1 += 5
    strongerComp()
    openBuy()
    softReset()
}

function softReset(){
        castleGold2 = 0
        endgame()
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        roof2.style.borderBottomColor = "#" + randomColor;
        let rome =  "linear-gradient(90deg, " + getRandomRgb() + " 0%, " + getRandomRgb() + " 36%, " + getRandomRgb() +" 100%)";
        column2.style.background = rome;
        updatestats()
        hp1.innerHTML= castleHP1
        hp2.innerHTML= castleHP2
        gold1.innerHTML= castleGold1
        gold2.innerHTML= castleGold2
        testBt.innerHTML = "NEW ROUND"
        playUpd2.innerHTML= ``
        playUpd1.innerHTML= ``
        att1displ.innerHTML=``
        att2displ.innerHTML=``
}
function strongerComp(){
if (castleGold2 < 10){
    weapon2 += 1
    castleHP2= 20 + (castleGold2)
    console.log(`${weapon2}`)
}
else if (castleGold2 > 10 ){
    weapon2 += 2
    castleGold2 -= 10
    castleHP2= 10 + (castleGold2)
    console.log(`${weapon2}`)
}
}
// resetgame()
menuBt.addEventListener('click',()=>{
    const menuselect = document.querySelector('#selection')
    if(menuselect.value == 1 ){
        gameMode = 1
        resetgame()
        updatestats()
}
else if(menuselect.value == 2){
// RULES EXPLANATION
    openrules1()
}
else if(menuselect.value == 3){
    gameMode = 1
    resetgame()
    weapon2= 4
    castleHP2=30
    updatestats()
}
else if(menuselect.value == 4 ){
    gameMode = 2
    resetgame()
    updatestats()
}})

// taken from stack overflow

function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
  return  'rgba(' + r + ', ' + g + ', ' + b + ',1)';
  }
//  ! WIN AND BUY MENU FUNCTIONS / EVENTLISTENERS 
function openBuy(){
    winbuy.style.display = 'block';
}
function closeBuy(){
    winbuy.style.display = 'none';
}
winBuyBt1.addEventListener('click',()=>{
    if(castleGold1 > 20){
        weapon1 += 2
        castleGold1 = castleGold1 - 20
        label1.innerHTML=`WEAPON ${weapon1} ${wepBonus1}`
        gold1.innerHTML= castleGold1
    }
    else if(castleGold1 > 10){
        weapon1 += 1
        castleGold1 = castleGold1 - 10
        label1.innerHTML=`WEAPON ${weapon1} ${wepBonus1}`
        gold1.innerHTML= castleGold1
    }
    else{}
    closeBuy()
})
winBuyBt2.addEventListener('click',()=>{
    if(castleGold1 > 10){
        castleHP1 += 20
        castleGold1 = castleGold1 - 10
        gold1.innerHTML= castleGold1
        hp1.innerHTML= castleHP1
    } else{}
    closeBuy()
})
winBuyBt3.addEventListener('click',()=>{
    closeBuy()
})