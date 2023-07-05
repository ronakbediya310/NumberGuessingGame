let count=0;
let mynum=Math.floor(Math.random()*101);
function guessMyNumber(){
    let usernum=document.getElementById('input').value;  
    console.log(mynum);
    document.getElementById('result').className='result';
    if(mynum==usernum){
        document.getElementById('res').innerHTML=" Congratulations!! You won The game.You won the game after "+count+"  wrong guess";
        document.getElementById('comment').innerHTML="";
        count=0;
    }
    else{
        count++;
        document.getElementById('res').innerHTML="You loss the game: "+count+" times";
    }
    if(mynum<usernum)
    {
        document.getElementById('comment').innerHTML=" You guessed higher number than my number!! ";
    }
     if(mynum>usernum)
    {
        document.getElementById('comment').innerHTML="You guess lower number than my number!!";
    }
}