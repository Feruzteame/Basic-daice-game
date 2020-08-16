
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
     
  

    array1.push(give);
    let add = array1.reduce(function(a,b){
       return +a + +b;
     }, 0)
    div1.innerHTML = add;
    if(add < 50){
       if(number === 1){
          
         result1.innerHTML = "";
          let one = document.createElement('img');
          one.src = "images/one2.png";
          one.style.width = "100%"
          one.style.height = "100%"
          result1.appendChild(one);

       }else if(number === 2){
             
             result1.innerHTML = "";
             let two = document.createElement('img');
             two.src = "images/two2.png";
             two.style.width = "100%"
             two.style.height = "100%"
        
         result1.appendChild(two);
       }else if(number === 3){
        
        result1.innerHTML = "";
        let three = document.createElement('img');
         three.src = "images/three2.png";
         three.style.width = "100%"
         three.style.height = "100%"
         result1.appendChild(three);
       }else if(number === 4){
        
        result1.innerHTML = "";
        let four = document.createElement('img');
         four.src = "images/four2.png";
         four.style.width = "100%"
         four.style.height = "100%"
         result1.appendChild(four);
       }else if(number === 5){
        
        result1.innerHTML = "";
        let five = document.createElement('img');
         five.src = "images/five2.png";
         five.style.width = "100%"
         five.style.height = "100%"
         result1.appendChild(five);
       }else if(number === 6){
        
        result1.innerHTML = "";
        let six = document.createElement('img');
         six.src = "images/six2.png";
         six.style.width = "100%"
         six.style.height = "100%"
         result1.appendChild(six);
       }else{
         return;
       }
    }else{
        final.innerHTML = `HOREA ! \n Player1 is winner.`
        player1.style.display ='none'
        player2.style.display ='none'
        p.style.display ='none'
        document.body.style.backgroundImage = 'url(./images/dice.jpg)';
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
      if(number === 1){
        result2.innerHTML = "";
         let one = document.createElement('img');
         one.src = "images/one2.png";
         one.style.width = "100%";
         one.style.height = "100%";
         result2.appendChild(one);
       }else if(number === 2){

        result2.innerHTML = "";
        let two = document.createElement('img');
         two.src = "images/two2.png";
         two.style.width = "100%";
          two.style.height = "100%";
         result2.appendChild(two);
       }else if(number === 3){
        
        result2.innerHTML = "";
        let three = document.createElement('img');
         three.src = "images/three2.png";
         three.style.width = "100%";
         three.style.height = "100%";
         result2.appendChild(three);
       }else if(number === 4){
        
        result2.innerHTML = "";
        let four = document.createElement('img');
         four.src = "images/four2.png";
         four.style.width = "100%";
         four.style.height = "100%";
         result2.appendChild(four);
       }else if(number === 5){
        
        result2.innerHTML = "";
        let five = document.createElement('img');
         five.src = "images/five2.png";
         five.style.width = "100%";
         five.style.height = "100%";
         result2.appendChild(five);
       }else if(number === 6){
        
        result2.innerHTML = "";
        let six = document.createElement('img');
         six.src = "images/six2.png";
         six.style.width = "100%";
         six.style.height = "100%";
         result2.appendChild(six);
       }else{
         return;
       }
    
    }else{
        final.innerHTML = `HOREA ! <br> Player2 is winner`
        player1.style.display ='none'
        player2.style.display ='none'
        p.style.display ='none'
        document.body.style.backgroundImage = 'url(./images/dice.jpg)';
        
      }
}
