import * as fs from 'fs';
var os = require('os');
const input = fs.readFileSync('../Inputs/Day1.txt', 'utf-8');

//Run solution
one_a(input);


function one_a(input : string): void {
    console.log(splitByLine(input)[0]);
}

function one_b(): void {

}

function splitByLine(input: string): string[] {
    return input.split(os.EOL);
}