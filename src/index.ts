import * as fs from 'fs';

var os = require('os');
const input = (fs.readFileSync('../Inputs/Day1.txt', 'utf-8'));
//Run solution

three_b(input);


function three_a(input: string[]) {
    const result = input.map((text) => {
        return text.split(')')[0]
    })
        .filter((text) => text.match(/^\d+,\d+$/))
        .map((text) => text.split(",").map(Number).reduce((a, b) => a * b)).reduce((a, b) => a + b)
    console.log(result);
}

function three_b(input: string) {
    three_a(splitByMul(lmaojustedittheinputyolo(input)));
}

function two_a(input: string[]): void {
    //Due to heavy reprimands from higher management (My partner) I am no longer allowed to use let, var and have to solve this using map.
    const current = input
        .map((line: string, index: number) => line.split(" ")
            .map((value: string) => Number(value)))
        .filter(x => isAscending(x) && LowerThanFour(x) || isDescending(x) && LowerThanFour(x));
    console.log(current);
}

function two_b(input: string[]): void {
    //Due to heavy reprimands from higher management (My partner) I am no longer allowed to use let, var and have to solve this using map.
    let counter = 0;
    const current = input
        .map((line: string, index: number) => line.split(" ")
            .map((value: string) => Number(value)));
    for (let i = 0; i < current.length; i++) {
        if (isAscending(current[i]) && LowerThanFour(current[i]) || isDescending(current[i]) && LowerThanFour(current[i])) {
            counter += 1;
            continue;
        } else {
            for (let j = 0; j < current[i].length; j++) {
                const arr = current[i].filter((_, index) => index !== j);
                console.log(arr);
                if (isAscending(arr) && LowerThanFour(arr) || isDescending(arr) && LowerThanFour(arr)) {
                    counter += 1;
                    break;
                }
            }
        }
    }
    console.log(counter);
}


function one_a(lines: string[]): void {
    let list_one: number[] = [];
    let list_two: number[] = [];
    let totalSum: number = 0;
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

function one_b(lines: string[]): void {
    let list_one: number[] = [];
    let list_two: number[] = [];
    let totalSum: number = 0;
    lines.forEach(function (line: string): void {
        list_one.push(Number(line.slice(0, 5)));
        list_two.push(Number(line.slice(-5)));
    });
    list_one.forEach(function (num1: number): void {
        let counter: number = 0;
        list_two.forEach(function (num2: number): void {
            if (num1 === num2) {
                counter += 1;
            }
        })
        totalSum += num1 * counter;
    })
    console.log(totalSum);
}

function splitByLine(input: string): string[] {
    return input.split(os.EOL);
}

function lmaojustedittheinputyolo(input: string) {
    // @ts-ignore
    return input.replace(/don't\(\).*?(do\(\)|$)/gs,"do()");
}

function splitByMul(input: string): string[] {
    return input.split("mul(");
}

function LowerThanFour(input: any) {
    for (let i = 0; i < input.length - 1; i++) {
        if (Math.abs(input[i] - input[i + 1]) > 3 || Math.abs(input[i] - input[i + 1]) == 0) {
            return false;
        }
    }
    return true;
}

function isAscending(arr: any) {
    return arr
        .slice(1)
        .every((num: any, i: any) => num >= arr[i]);
}

function isDescending(arr: any) {
    return arr
        .slice(1)
        .every((num: any, i: any) => num <= arr[i]);
}