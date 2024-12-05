import * as fs from 'fs';

var os = require('os');
const input: string = fs.readFileSync('../Inputs/input.txt', 'utf-8');
//Run solution
five_a(input);

function five_a(input: any) {
    const instructions_raw: any = input.split(/\r?\n/);
    const rules: any = instructions_raw.splice(0,instructions_raw.indexOf(''));
    instructions_raw.splice(0,1);
    const instructions = instructions_raw.map((str: string) => str.split(",").map(Number));
    console.log(rules);
    console.log(instructions);
}
function four_b(input: string[][]) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == "A") {
                //add strings NW + NE + SE + SW
                let possibilities = ["MSSM", "MMSS", "SMMS", "SSMM"];
                count = possibilities.includes(input[i - 1][j - 1] + input[i - 1][j + 1] + input[i + 1][j + 1] + input[i + 1][j - 1]) ? count + 1 : count;

            }
        }
    }
    console.log(count);
}

function four_a(input: string[][]) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == "X") {
                //north
                count = input[i - 1][j] + input[i - 2][j] + input[i - 3][j] == "MAS" ? count + 1 : count;
                //north-east
                count = input[i - 1][j + 1] + input[i - 2][j + 2] + input[i - 3][j + 3] == "MAS" ? count + 1 : count;
                //north-west
                count = input[i - 1][j - 1] + input[i - 2][j - 2] + input[i - 3][j - 3] == "MAS" ? count + 1 : count;
                //south-east
                count = input[i + 1][j + 1] + input[i + 2][j + 2] + input[i + 3][j + 3] == "MAS" ? count + 1 : count;
                //south
                count = input[i + 1][j] + input[i + 2][j] + input[i + 3][j] == "MAS" ? count + 1 : count;
                //south-west
                count = input[i + 1][j - 1] + input[i + 2][j - 2] + input[i + 3][j - 3] == "MAS" ? count + 1 : count;
                //west
                count = input[i][j - 1] + input[i][j - 2] + input[i][j - 3] == "MAS" ? count + 1 : count;
                //east
                count = input[i][j + 1] + input[i][j + 2] + input[i][j + 3] == "MAS" ? count + 1 : count;

            }
        }
    }
    console.log(count);
}

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

function splitmulti(input: string): string[][] {
    //we have to edit this stupid thing to have corners of four dots on each end, so I can run my janky search function without errors
    let tempval = input
        .split(os.EOL)
        .map(str => "...." + str + "....");
    let periods = ".".repeat(tempval[0].length)
    tempval.unshift(...Array(4).fill(periods));
    tempval.push(...Array(4).fill(periods));
    return tempval.map((line: string) => line.split(""));
}

function lmaojustedittheinputyolo(input: string) {
    // @ts-ignore
    return input.replace(/don't\(\).*?(do\(\)|$)/gs, "do()");
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
