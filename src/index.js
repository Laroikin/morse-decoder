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
    let expr1 = expr.split('');
    let str = [];
    let smth = '';
    expr1.forEach((element, index) => {
        smth += element;
        if((index+1)%10 == 0){
            str.push(smth.replace(/^0+/, ''));
            smth = '';
        }
    });
    let ans = '';
    let compare = '';
    str.forEach(e => {
        if(e == "**********"){
            ans += ' ';
            return;
        }
        let smth = e.match(/.{1,2}/g);
        smth.forEach(e => {
            if(e == "11"){
                compare += '-';
            }
            else compare += '.';
        })
        ans += MORSE_TABLE[compare];
        compare = '';
    })
    return ans;
}

module.exports = {
    decode
}