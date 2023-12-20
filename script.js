'use strict';
//const random_number = Math.floor(Math.random() * 19)+1;
//console.log(random_number);
let random_number = Math.floor(Math.random() * 19)+1;

console.log(random_number);
let score=20;
let highscore=0;



document.querySelector('.check').addEventListener('click', function() 
{

const guess=Number(document.querySelector('.guess').value);
if(!guess)
{
document.querySelector('.message').textContent='⛔ No Number';
}else if(guess === random_number)
{

    document.querySelector('.message').textContent='🥳 Correct Anwer!';
    if(score>highscore)
    {   highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    
    document.querySelector('.number').textContent=random_number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width='30rem';

}else if(guess != random_number)
{
    if (score>0)
{
    document.querySelector('.message').textContent=guess> random_number ? '📈 Number is High!' :
    '📉 Number is Low!';
    score--;
    document.querySelector('.score').textContent=score;

}
else{
    document.querySelector('.message').textContent='😞 Game Over!';
}

}

});
document.querySelector('.again').addEventListener('click',function()
{
    document.querySelector('.message').textContent='Start Guessing....';
    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent=20;
    document.querySelector('.guess').value=null; 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';
    score=20;
    random_number = Math.floor(Math.random() * 19)+1;
    console.log(random_number);

});






