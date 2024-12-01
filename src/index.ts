import * as fs from 'fs';

var os = require('os');
const input = fs.readFileSync('../Inputs/Day1.txt', 'utf-8');

//Run solution
one_b(input);


function one_a(input: string): void {
    let list_one: number[] = [];
    let list_two: number[] = [];
    let totalSum: number = 0;
    const lines = splitByLine(input);
    lines.forEach(function (line: string): void {
        list_one.push(Number(line.slice(0, 5)));
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

function one_b(input: string): void {
    let list_one: number[] = [];
    let list_two: number[] = [];
    let totalSum: number = 0;
    const lines = splitByLine(input);
    lines.forEach(function (line: string): void {
        list_one.push(Number(line.slice(0, 5)));
        list_two.push(Number(line.slice(-5)));
    });
    list_one.forEach(function (num1: number): void {
        let counter: number = 0;
        list_two.forEach(function (num2: number): void {
            if(num1 === num2) {
                counter+=1;
            }
        })
        totalSum += num1 * counter;
    })
    console.log(totalSum);
}

function splitByLine(input: string): string[] {
    return input.split(os.EOL);
}