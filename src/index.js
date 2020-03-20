const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let wordArr = [],
        letterArr = [];
    let morseLength = expr.length;
    let i = 0;
    let j = 2;
    let countLetter = 0;
    while (morseLength >= 0) {
        if (countLetter === 5) {
            let temp = letterArr.join('');
            wordArr.push(MORSE_TABLE[temp]);
            countLetter = 0;
            letterArr = [];
        }
        let tempWords = expr.slice(i, j);
        if (tempWords === '10') {
            letterArr.push('.');
            countLetter++;
        } else if (tempWords === '11') {
            letterArr.push('-');
            countLetter++;
        } else if (tempWords === '00') {
            countLetter++;
        } else if (tempWords === "**") {
            wordArr.push(' ');
            i += 8;
            j += 8;
        }

        j += 2;
        i += 2;
        morseLength -= 2;
    }
    return wordArr.join('');
}

module.exports = {
    decode
}
