let max = parseInt(prompt("Enter maximum: "));
if(!max) {
    max = parseInt(prompt("Enter a valid maximum: ")); 
}
let no = Math.floor(max * (Math.random())) + 1;

let number = prompt(`Enter your first guess between 1 to ${max}: `);
let flag ;
let count = 1;

while(no !== parseInt(number)) {
    if(no > number) {
        console.log("too low.");
        number = prompt(`Enter a number from 1 to ${max}: `);
        count++;
    } else if(number === 'q') {
        console.log("too bad");
        flag = 1;
        break;
    } else {
        console.log("too high.");
        number = prompt(`Enter a number from 1 to ${max}: `);
        count++;
    }
}
if(flag === 1) {
    console.log("You have exited the game.");
} else {
    console.log(`Congratulatiiiioooooonnnnns!!! you did it in ${count} tries.`);
}