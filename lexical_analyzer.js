var masukkan = document.getElementById('masukkan_kalimat');
var submit = document.getElementById('btn-analyze');
var hasil = document.getElementById('result');
var clear = document.getElementById('btn-clear');
var loading = document.getElementById('loading');

//input example
//var input_string;
//var sentence;
//sentence = 'awak memandu motosikal';
//input_string = sentence.lower () + '#';

function lexical(masukkan){
    //initialization
    var state_list, transition_table;
    var alphabet_list = [];
    for(var i = 32; i <= 126; i++) {
        alphabet_list.push(String.fromCharCode( i ))
    }
    state_list = ["q0", "ql", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11", "q12", "q13", "q14", "q15", "q16", "q17", "q18", "q19", "q20", "q21", "q22", "q23", "q24", "q25", "q26", "q27", "q28", "q29", "q30", "q31", "q32"];
    transition_table = {};


    for(var state in state_list) {
        for(alphabet in alphabet_list) {
            transition_table[[state_list[state], alphabet_list[alphabet]]] = 'error'
        }
        transition_table[[state_list[state], '#']] = 'error'
        transition_table[[state_list[state], ' ']] = 'error'
    }

    //spaces before input string
    transition_table ['q0', ' '] = 'q0'
    //final state
    transition_table[['q31', ' ']] = 'q32'
    transition_table[['q31', '#']] = 'accept'

    transition_table[['q32', ' ']] = 'q32'
    transition_table[['q32', '#']] = 'accept'

    //update the transition table for the following token: awak
    transition_table[['q0', 'a']] = 'q1'
    transition_table[['q1', 'w']] = 'q2'
    transition_table[['q2', 'a']] = 'q3'
    transition_table[['q3', 'k']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: suka
    transition_table[['q0', 's']] = 'q4'
    transition_table[['q4', 'u']] = 'q5'
    transition_table[['q5', 'k']] = 'q11'
    transition_table[['q11', 'a']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: dia
    transition_table[['q0', 'd']] = 'q6'
    transition_table[['q6', 'i']] = 'q11'
    transition_table[['q11', 'a']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: kita
    transition_table[['q0', 'k']] = 'q7'
    transition_table[['q7', 'i']] = 'q8'
    transition_table[['q8', 't']] = 'q11'
    transition_table[['q11', 'a']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: kereta
    transition_table[['q0', 'k']] = 'q7'
    transition_table[['q7', 'e']] = 'q9'
    transition_table[['q9', 'r']] = 'q10'
    transition_table[['q10', 'e']] = 'q8'
    transition_table[['q8', 't']] = 'q11'
    transition_table[['q11', 'a']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: oren
    transition_table[['q0', 'o']] = 'q12'
    transition_table[['q12', 'r']] = 'q13'
    transition_table[['q13', 'e']] = 'q17'
    transition_table[['q17', 'n']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: makan
    transition_table[['q0', 'm']] = 'q14'
    transition_table[['q14', 'a']] = 'q15'
    transition_table[['q15', 'k']] = 'q16'
    transition_table[['q16', 'a']] = 'q17'
    transition_table[['q17', 'n']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: memandu
    transition_table[['q0', 'm']] = 'q14'
    transition_table[['q14', 'e']] = 'q18'
    transition_table[['q18', 'm']] = 'q19'
    transition_table[['q19', 'a']] = 'q20'
    transition_table[['q20', 'n']] = 'q21'
    transition_table[['q21', 'd']] = 'q22'
    transition_table[['q22', 'u']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: motosikal
    transition_table[['q0', 'm']] = 'q14'
    transition_table[['q14', 'o']] = 'q23'
    transition_table[['q23', 't']] = 'q24'
    transition_table[['q24', 'o']] = 'q25'
    transition_table[['q25', 's']] = 'q26'
    transition_table[['q26', 'i']] = 'q27'
    transition_table[['q27', 'k']] = 'q29'
    transition_table[['q29', 'a']] = 'q30'
    transition_table[['q30', 'l']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the following token: epal
    transition_table[['q0', 'e']] = 'q28'
    transition_table[['q28', 'p']] = 'q29'
    transition_table[['q29', 'a']] = 'q30'
    transition_table[['q30', 'l']] = 'q31'
    transition_table[['q31', ' ']] = 'q32'

    //update the transition table for the new token
    transition_table[['q32', 'a']] = 'q1'
    transition_table[['q32', 's']] = 'q4'
    transition_table[['q32', 'd']] = 'q6'
    transition_table[['q32', 'k']] = 'q7'
    transition_table[['q32', 'o']] = 'q12'
    transition_table[['q32', 'm']] = 'q14'
    transition_table[['q32', 'e']] = 'q28'

    clear.onclick = (event) => {
        masukkan.value = "";
        hasil.value = "";
    }

    submit.onclick = (event) => {
        var sentence = masukkan.value
        loading.style = 'display: inline-block'

        // lexical analysis
        var indexChar = 0;
        var state = 'q0';
        var currentToken = '';
        var validation = '';
        var inputChar = masukkan.value + '#';
        console.log(inputChar);
        while (state != 'accept') {
            var currentChar = inputChar.charAt(indexChar)
            currentToken += currentChar
            state = transition_table[[state, currentChar]]
            if(state == 'q31') {
                console.log("valid")
                validation += "valid "
                currentToken = ''
            }
            if(state == 'error') {
                console.log("error")
                validation += "error "
                break;
            }
            indexChar += 1
        }
        if(state == 'accept'){
            // console.log(validation);
            // hasil.value = validation.trim();
            parser(sentence);
            // loading.style = 'display: none'
        }else{
            console.log(validation);
            hasil.value = validation.trim();
            loading.style = 'display: none'
        }
        
    }
}
function parser(sentence){
    sentence = sentence.replace(/\s+/g, ' ').trim()

    var tokens = sentence.toLowerCase().split(' ');

    tokens.push('EOS')
    console.log('tokens: ', tokens)

    //Symbols definition
    non_terminals = ['S', 'SB', 'VB', 'OB'];
    terminals = ['awak', 'dia', 'kita', 'makan', 'memandu', 'suka', 'epal', 'kereta', 'motosikal', 'oren'];
   
    //parse table definition
    var parse_table = {};

    parse_table[['S', 'awak']] = ['SB', 'VB', 'OB']
    parse_table[['S', 'dia']] = ['SB', 'VB', 'OB']
    parse_table[['S', 'kita']] = ['SB', 'VB', 'OB']
    parse_table[['S', 'makan']] = ['error']
    parse_table[['S', 'memandu']] = ['error']
    parse_table[['S', 'suka']] = ['error']
    parse_table[['S', 'epal']] = ['error']
    parse_table[['S', 'kereta']] = ['error']
    parse_table[['S', 'motosikal']] = ['error']
    parse_table[['S', 'oren']] = ['error']
    parse_table[['S', 'EOS']] = ['error']

    parse_table[['SB', 'awak']] = ['awak']
    parse_table[['SB', 'dia']] = ['dia']
    parse_table[['SB', 'kita']] = ['kita']
    parse_table[['SB', 'makan']] = ['error']
    parse_table[['SB', 'memandu']] = ['error']
    parse_table[['SB', 'suka']] = ['error']
    parse_table[['SB', 'epal']] = ['error']
    parse_table[['SB', 'kereta']] = ['error']
    parse_table[['SB', 'motosikal']] = ['error']
    parse_table[['SB', 'oren']] = ['error']
    parse_table[['SB', 'EOS']] = ['error']

    parse_table[['VB', 'awak']] = ['error']
    parse_table[['VB', 'dia']] = ['error']
    parse_table[['VB', 'kita']] = ['error']
    parse_table[['VB', 'makan']] = ['makan']
    parse_table[['VB', 'memandu']] = ['memandu']
    parse_table[['VB', 'suka']] = ['suka']
    parse_table[['VB', 'epal']] = ['error']
    parse_table[['VB', 'kereta']] = ['error']
    parse_table[['VB', 'motosikal']] = ['error']
    parse_table[['VB', 'oren']] = ['error']
    parse_table[['VB', 'EOS']] = ['error']

    parse_table[['OB', 'awak']] = ['error']
    parse_table[['OB', 'dia']] = ['error']
    parse_table[['OB', 'kita']] = ['error']
    parse_table[['OB', 'makan']] = ['error']
    parse_table[['OB', 'memandu']] = ['error']
    parse_table[['OB', 'suka']] = ['error']
    parse_table[['OB', 'epal']] = ['epal']
    parse_table[['OB', 'kereta']] = ['kereta']
    parse_table[['OB', 'motosikal']] = ['motosikal']
    parse_table[['OB', 'oren']] = ['oren']
    parse_table[['OB', 'EOS']] = ['error']

    // stack initialization
    var stack = [];
    stack.push('#');
    stack.push('S');

    //input remothering initialization
    var idxToken = 0;
    var symbol = tokens[idxToken];

    while(stack.length > 0) {
        var top = stack[stack.length - 1];
        if(terminals.includes(top)) { 
            if(top == symbol) {
                stack.pop();
                idxToken += 1;
                symbol = tokens[idxToken];
                if(symbol == 'EOS') {
                    stack.pop();
                }
            }else{
                break;
            }
        } else if(non_terminals.includes(top)) {
            if(parse_table[[top, symbol]][0] != 'error') {
                stack.pop();
                var symbolToBePushed = parse_table[[top, symbol]];
                for(let i = symbolToBePushed.length - 1; i > -1; i--) {
                    stack.push(symbolToBePushed[i]);
                }
            } else {
                break;
            }
        } else {
            break;
        }
    }
    
    //conclusion
    console.log('conclusion');
    if(symbol == 'EOS' && stack.length == 0) {
        console.log('Input string ', sentence, 'diterima sesuai grammar');
        hasil.value = `Input string ${sentence} diterima sesuai grammar`;
        loading.style = 'display: none'
    }else {
        console.log('Error, tidak diterima karena tidak sesuai grammar');
        hasil.value = 'Error, tidak diterima karena tidak sesuai grammar';
        loading.style = 'display: none'
    }
}
lexical(masukkan);