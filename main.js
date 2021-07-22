let A = true;
let B = false;
const myCssHead = `
    background: #ddeeff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: 1px solid #aaa;
    padding: 10px 10px 10px 10px;
`;

let myCssBoby = `

background: #dfd;
font-family: cursive, arial;
border: 1px solid #aaa;

`;

console.log(`%cOperadores AND`, myCssHead);
console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssBoby);
console.log(`%c2. A:${A} (OPERADOR AND) B: ${B} A && B =${A && B}`,myCssBoby);
console.log(`%c3. A:${!A} (OPERADOR AND) B:${!B} A && B =${!A && !B}`, myCssBoby);
console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B =${!A && B}`, myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssBoby);


console.log(`%cOperadores OR`, myCssHead);
console.log(`%c1. A:${!(!A)} (OPERADOR OR) B: ${!B} A || B =${!(!A) || !B}`, myCssBoby);
console.log(`%c2. A:${A} (OPERADOR OR) B:${B} A || B =${A || B}`,myCssBoby);
console.log(`%c3. A:${!A} (OPERADOR OR) B:${!B} A || B =${!A || !B}`,myCssBoby);
console.log(`%c4. A:${!A} (OPERADOR OR) B:${B} A || B =${!A || B}`,myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssBoby);

console.log(`%cOperadores NOT`, myCssHead);
console.log(`%c1. A:${A} !A =${!A}`,myCssBoby);
console.log(`%c1. B:${B} !A =${!B}`,myCssBoby);


// console.log(`A:`,A,` (OPERADOR NOT) !A`,!A);
// console.log(`B:`,B,` (OPERADOR NOT) !B`,!B);


// Operador AND (&&)
let tablaAND = document.querySelector("#myTablaAND");
tablaAND.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) && !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
    <tr>
        <td>${  !A}</td>
        <td>${!B}</td>
        <td>${!A && !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A && B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) || !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A || B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${!B}</td>
        <td>${!A || !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A || B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador NOT (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
`;