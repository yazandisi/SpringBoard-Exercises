// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. 
//Once the value is 0 it should log “DONE!” and stop.

function countDown(num){
    let time = setInterval(function(){
        if(num == 0){
            clearInterval(time);
            console.log("DONE!");
        }
        else{console.log(num); 
             num--; }
    }, 1000)
}

   countDown(4);


/******************************************************************************************************************************************************************/

// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
//and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, 
//stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame (){
    let count = 0;
    let id = setInterval(function(){
        let randomNumber = Math.random()
        if ( randomNumber >= .75){
            clearInterval(id);
            console.log(count);
        }
        else{ count++}
    },1000)
};
randomGame();



    