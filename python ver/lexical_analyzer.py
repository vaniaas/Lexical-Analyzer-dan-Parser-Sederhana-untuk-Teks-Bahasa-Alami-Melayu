#library
import string

#input example
# sentence = 'awak memandu motosikal'

def lexical (sentence):
    print("Lexical Analyzer \n")
    input_string = sentence. lower () + '#'

    #initialization
    alphabet_list = list(string.ascii_lowercase)
    state_list = [
                'q0', 'ql', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 
                'q11','q12','q13','q14','q15','q16','q17','q18','q19','q20',
                'q21','q22','q23','q24','q25','q26','q27','q28','q29','q30','q31','q32'
                ]

    transition_table = {}

    for state in state_list:
        for alphabet in alphabet_list:
            transition_table[(state, alphabet)] = 'error'
        transition_table[(state, '#')] = 'error'
        transition_table[(state, ' ')] = 'error'

    #spaces before input string
    transition_table ['q0', ' '] = 'q0'
    #final state
    transition_table[('q31', ' ')] = 'q32'
    transition_table[('q31', '#')] = 'accept'

    transition_table[('q32', ' ')] = 'q32'
    transition_table[('q32', '#')] = 'accept'

    #update the transition table for the following token: awak
    transition_table[('q0', 'a')] = 'q1'
    transition_table[('q1', 'w')] = 'q2'
    transition_table[('q2', 'a')] = 'q3'
    transition_table[('q3', 'k')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: suka
    transition_table[('q0', 's')] = 'q4'
    transition_table[('q4', 'u')] = 'q5'
    transition_table[('q5', 'k')] = 'q11'
    transition_table[('q11', 'a')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: dia
    transition_table[('q0', 'd')] = 'q6'
    transition_table[('q6', 'i')] = 'q11'
    transition_table[('q11', 'a')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: kita
    transition_table[('q0', 'k')] = 'q7'
    transition_table[('q7', 'i')] = 'q8'
    transition_table[('q8', 't')] = 'q11'
    transition_table[('q11', 'a')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: kereta
    transition_table[('q0', 'k')] = 'q7'
    transition_table[('q7', 'e')] = 'q9'
    transition_table[('q9', 'r')] = 'q10'
    transition_table[('q10', 'e')] = 'q8'
    transition_table[('q8', 't')] = 'q11'
    transition_table[('q11', 'a')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: oren
    transition_table[('q0', 'o')] = 'q12'
    transition_table[('q12', 'r')] = 'q13'
    transition_table[('q13', 'e')] = 'q17'
    transition_table[('q17', 'n')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: makan
    transition_table[('q0', 'm')] = 'q14'
    transition_table[('q14', 'a')] = 'q15'
    transition_table[('q15', 'k')] = 'q16'
    transition_table[('q16', 'a')] = 'q17'
    transition_table[('q17', 'n')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: memandu
    transition_table[('q0', 'm')] = 'q14'
    transition_table[('q14', 'e')] = 'q18'
    transition_table[('q18', 'm')] = 'q19'
    transition_table[('q19', 'a')] = 'q20'
    transition_table[('q20', 'n')] = 'q21'
    transition_table[('q21', 'd')] = 'q22'
    transition_table[('q22', 'u')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: motosikal
    transition_table[('q0', 'm')] = 'q14'
    transition_table[('q14', 'o')] = 'q23'
    transition_table[('q23', 't')] = 'q24'
    transition_table[('q24', 'o')] = 'q25'
    transition_table[('q25', 's')] = 'q26'
    transition_table[('q26', 'i')] = 'q27'
    transition_table[('q27', 'k')] = 'q29'
    transition_table[('q29', 'a')] = 'q30'
    transition_table[('q30', 'l')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'

    #update the transition table for the following token: epal
    transition_table[('q0', 'e')] = 'q28'
    transition_table[('q28', 'p')] = 'q29'
    transition_table[('q29', 'a')] = 'q30'
    transition_table[('q30', 'l')] = 'q31'
    transition_table[('q31', ' ')] = 'q32'


    #update the transition table for the new token
    transition_table[('q32', 'a')] = 'q1'
    transition_table[('q32', 's')] = 'q4'
    transition_table[('q32', 'd')] = 'q6'
    transition_table[('q32', 'k')] = 'q7'
    transition_table[('q32', 'o')] = 'q12'
    transition_table[('q32', 'm')] = 'q14'
    transition_table[('q32', 'e')] = 'q28'

    #lexical analysis
    idx_char = 0
    state = 'q0'
    current_token =' '
    while state!='accept':
        current_char = input_string [idx_char]
        current_token += current_char
        state = transition_table[(state, current_char)]
        if state=='q31':
            print (' current token: ', current_token, ', valid')
            current_token = ' '
        if state == 'error':
            print ('eror')
            break;
        idx_char = idx_char + 1

    # conclusion
    if state=='accept' :
        print (' semua token di input: ', sentence, ', valid' )
        parser(sentence)

def parser(sentence):
    print("\n Checking Grammar \n")

    tokens = sentence.lower().split()
    tokens.append('EOS')

    # Symbols definition
    non_terminals = ['S', 'SB', 'VB', 'OB']
    terminals = ['awak', 'dia', 'kita', 'makan', 'memandu', 'suka', 'epal', 'kereta', 'motosikal', 'oren']

    # parse table definition
    parse_table = {}

    parse_table[('S', 'awak')] = ['SB', 'VB', 'OB']
    parse_table[('S', 'dia')] = ['SB', 'VB', 'OB']
    parse_table[('S', 'kita')] = ['SB', 'VB', 'OB']
    parse_table[('S', 'makan')] = ['error']
    parse_table[('S', 'memandu')] = ['error']
    parse_table[('S', 'suka')] = ['error']
    parse_table[('S', 'epal')] = ['error']
    parse_table[('S', 'kereta')] = ['error']
    parse_table[('S', 'motosikal')] = ['error']
    parse_table[('S', 'oren')] = ['error']
    parse_table[('S', 'EOS')] = ['error']

    parse_table[('SB', 'awak')] = ['awak']
    parse_table[('SB', 'dia')] = ['dia']
    parse_table[('SB', 'kita')] = ['kita']
    parse_table[('SB', 'makan')] = ['error']
    parse_table[('SB', 'memandu')] = ['error']
    parse_table[('SB', 'suka')] = ['error']
    parse_table[('SB', 'epal')] = ['error']
    parse_table[('SB', 'kereta')] = ['error']
    parse_table[('SB', 'motosikal')] = ['error']
    parse_table[('SB', 'oren')] = ['error']
    parse_table[('SB', 'EOS')] = ['error']

    parse_table[('VB', 'awak')] = ['error']
    parse_table[('VB', 'dia')] = ['error']
    parse_table[('VB', 'kita')] = ['error']
    parse_table[('VB', 'makan')] = ['makan']
    parse_table[('VB', 'memandu')] = ['memandu']
    parse_table[('VB', 'suka')] = ['suka']
    parse_table[('VB', 'epal')] = ['error']
    parse_table[('VB', 'kereta')] = ['error']
    parse_table[('VB', 'motosikal')] = ['error']
    parse_table[('VB', 'oren')] = ['error']
    parse_table[('VB', 'EOS')] = ['error']

    parse_table[('OB', 'awak')] = ['error']
    parse_table[('OB', 'dia')] = ['error']
    parse_table[('OB', 'kita')] = ['error']
    parse_table[('OB', 'makan')] = ['error']
    parse_table[('OB', 'memandu')] = ['error']
    parse_table[('OB', 'suka')] = ['error']
    parse_table[('OB', 'epal')] = ['epal']
    parse_table[('OB', 'kereta')] = ['kereta']
    parse_table[('OB', 'motosikal')] = ['motosikal']
    parse_table[('OB', 'oren')] = ['oren']
    parse_table[('OB', 'EOS')] = ['error']

    # stack initialization
    stack = []
    stack.append('#')
    stack.append('S')

    # input remotherng initialization
    idx_token = 0
    symbol = tokens[idx_token]

    #parsing process
    while (len(stack) > 0):
        top = stack[len(stack)-1]
        print('top = ', top)
        print('symbol = ', symbol)
        if top in terminals:
            print('top adalah simbol terminal')
            if top==symbol:
                stack.pop()
                idx_token = idx_token + 1
                symbol = tokens[idx_token]
                if symbol == 'EOS':
                    print('isi stack: ', stack)
                    stack.pop()
            else:
                print('error')
                break;
        elif top in non_terminals:
            print('top adalah simbol non-terminal')
            if parse_table[(top, symbol)][0] != 'error':
                stack.pop()
                symbols_to_be_pushed = parse_table[(top, symbol)]
                for i in range(len(symbols_to_be_pushed)-1,-1,-1):
                    stack.append(symbols_to_be_pushed[i])
            else:
                print('error')
                break;
        else:
            print('error')
            break;
        print('isi stack:', stack)
        print()
        
    #conclusion
    print()
    if symbol == 'EOS' and len(stack)==0:
        print('Input string', sentence, 'diterima, sesuai Grammar')
    else:
        print('Error, input string: ', sentence, ', tidak diterima, tidak sesuai Grammar')

sentence = input("Input Sentence : ")
lexical(sentence)
