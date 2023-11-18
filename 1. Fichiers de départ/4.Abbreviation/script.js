/* function abreviation(str) {
    return str.split(' ')[0] + ' ' + str.split(' ')[1][0] + '.'
} */

function abreviation(str) {
    const splitNames = str.split(' ');
    return `${splitNames[0]} ${splitNames[1].charAt(0)}.`
}


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* Tests à passer 🧪 */

console.log(abreviation("John Doe"));           // John D.
console.log(abreviation("Romy Schneider"));     // Romy S.
console.log(abreviation("Alfred Hitchcock"));   // Alfred H.

