import * as fs from 'fs';
var os = require('os');
const input = fs.readFileSync('../Inputs/Day1.txt', 'utf-8');

//Run solution
one_a(input);


function one_a(input : string): void {
    let list_one: number[] = [];
    let list_two: number[] = [];
    let totalSum: number = 0;
    const lines = splitByLine(input);
    lines.forEach(function (line: string): void {
        list_one.push(Number(line.slice(0,5)));
        list_two.push(Number(line.slice(-5)));
    });
    //sort arrays
    list_one.sort();
    list_two.sort();
    for (let i = 0; i < list_one.length; i++) {
        totalSum += Math.abs(list_one[i] - list_two[i]);
    }
    console.log(totalSum);
}

function one_b(): void {

}

function splitByLine(input: string): string[] {
    return input.split(os.EOL);
}