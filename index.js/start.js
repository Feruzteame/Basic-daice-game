
function start() {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const article = document.getElementById('article');
    const header  = document.getElementById('header');
    const reset  = document.getElementById('reset');
    const p = document.getElementById('p');
    

    let number = Math.floor(Math.random()*10);
    if(number % 2 === 0){
      p.innerHTML = `Start with player2`;
    }else{
        p.innerHTML = `Start with player1` 
    }
    document.body.style.backgroundColor = "black";
    player1.style.display = 'block';
    player2.style.display = 'block';
    article.style.display = 'block';
    reset.style.display = "block";
    p.style.display = 'block';
    header.style.display = 'none';
    
}
