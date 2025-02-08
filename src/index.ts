import * as readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello World");

while (true) {
    const answer = await rl.question('');
    console.log(answer);
}