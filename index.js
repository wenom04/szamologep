const kijelzo = document.getElementById('kijelzo');


function KiirAKijelzore(input){
    if(kijelzo.value === 'Hiba')
        return;
    kijelzo.value += input;
}

function TorliAKijelzot(){
    kijelzo.value = '';
}

function Kiszamol(){
    try {
        let input = kijelzo.value;
        if (input.includes('%')) {
            input = input.replace(/%/g, '/100');
        }
        kijelzo.value = eval(input);
    } catch (error) {
        kijelzo.value = 'Hiba';
    }
}

function SzamE(input) {
    return !isNaN(input) || input === '.' || input === '+' || input === '-' || input === '*' || input === '/' || input === '%' ;
}

function Backspace() {
    if(SzamE(kijelzo.value.slice(-1)))
        kijelzo.value = kijelzo.value.slice(0, -1);
}
