
const array1 = [];
const array2 = [];

function player1(){
     const player1 = document.getElementById('player1');
     const player2 = document.getElementById('player2');
     const result1 = document.getElementById('currentResult1');
     const final = document.getElementById('finalResult');
    const p = document.getElementById('p');

     let number = Math.floor(Math.random()*6)+1;
     let roundscore = 0;
     let give = roundscore + number;
     let dice = document.querySelector('.dice');


    array1.push(give);
    let add = array1.reduce(function(a,b){
       return +a + +b;
     }, 0)
    div1.innerHTML = add;
    if(add < 50){
       result1.innerHTML = number;
    }else{
        final.innerHTML = `HOREA ! <br> Player1 is winner.`
        player1.style.display ='none'
        player2.style.display ='none'
        p.style.display ='none'
        document.body.style.backgroundColor = '#1768AC';
      }
}

function player2(){

    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const result2 = document.getElementById('currentResult2');
    const final = document.getElementById('finalResult');
    const div2 = document.getElementById('div2')
    const p = document.getElementById('p');

    let number = Math.floor(Math.random() * 6)+ 1;
    let roundscore = 0;
    let give = roundscore + number;
    
    array2.push(give);
    let add = array2.reduce(function(a,b){
        return +a + +b;
         }, 0)
    div2.innerHTML = add;
    if(add < 50){
    result2.innerHTML = number;
    
    }else{
        final.innerHTML = `HOREA ! <br> Player2 is winner`
        player1.style.display ='none'
        player2.style.display ='none'
        p.style.display ='none'
        document.body.style.backgroundColor = '#1768AC';
      }
}
