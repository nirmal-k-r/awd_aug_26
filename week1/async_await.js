console.log('Program starts');


async function executeProgram() {
    //wait 1000 ms before executing the callback function
    await new Promise(resolve => setTimeout(resolve, 4000));
    console.log('Execution of program done!');
}

executeProgram();

console.log('Program ends');