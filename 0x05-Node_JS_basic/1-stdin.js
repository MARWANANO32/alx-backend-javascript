// first process that out the message to user
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// seond message that will take the input from the user
if(process.stdin.isTTY){
process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name.toString()}\n`);
    process.exit();
});
}
else{
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name.toString()}\n`);
    process.exit();
}
// Third message that will close the process after the user input
process.on('exit', () => {
    console.log("This important software is now closing\n");
});