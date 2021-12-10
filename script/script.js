const senhaEl = document.getElementById("senha");
const copiarEl = document.getElementById("copiar");
const lenEl = document.getElementById("len");
const maiuscEl = document.getElementById("maiusc");
const minuscEl = document.getElementById("minusc");
const numeroEl = document.getElementById("numero");
const simbolosEl = document.getElementById("simbolos");
const generateEl = document.getElementById("generate");

const maiuscLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minuscLetters = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+=";

function getminusccase() {
    return minuscLetters[Math.floor(Math.random() * minuscLetters.length)];
}

function getmaiusccase() {
    return maiuscLetters[Math.floor(Math.random() * maiuscLetters.length)];
}

function getnumero() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getsimbolos() {
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    if (maiuscEl.checked) {
        password += getmaiusccase();
    }

    if (minuscEl.checked) {
        password += getminusccase();
    }

    if (numeroEl.checked) {
        password += getnumero();
    }

    if (simbolosEl.checked) {
        password += getsimbolos();
    }
    

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    senhaEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (maiuscEl.checked) {
        xs.push(getmaiusccase());
    }

    if (minuscEl.checked) {
        xs.push(getminusccase());
    }

    if (numeroEl.checked) {
        xs.push(getnumero());
    }

    if (simbolosEl.checked) {
        xs.push(getsimbolos());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copiarEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = senhaEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copiar");
    textarea.remove();
    alert("Senha copiada com sucesso!");
});