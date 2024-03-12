const kijelzo = document.getElementById('kijelzo');


function KiirAKijelzore(input){
    if(kijelzo.value === 'Hiba' || kijelzo.value === 'infinity' || kijelzo.value === 'undefined')
        return;
    kijelzo.value += input;
    kijelzo.scrollLeft = kijelzo.scrollWidth;
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
        if (/\/0/.test(input)) {
            kijelzo.value = 'Hiba';
            window.location.href = 'index2.html';
            return;
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

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        KiirAKijelzore(key);
    } else if (key === 'Backspace' || key === 'Delete') { 
        Backspace();
    } else if (key === 'Shift') {
        Kiszamol();
    }else if (key === 'Escape') {
        TorliAKijelzot();
    } else if (key === '/' || key === '+' || key === '*' || key === '-') {
        KiirAKijelzore(key);
    }
});