// function similarEnd(str, end) {
//   return str.endsWith(end)
// }

// const similarEnd = (str, end) => str.endsWith(end);

// const similarEnd = (str, end) => str.slice(-end.length) === end;


/* ÉNONCÉ 📚 */


/*
Créez un algorithme qui vous informe si les lettres du second argument correspondent à la fin du premier argument.
Si elles correspondent, retournez true, sinon false.
*/


/* Test à passer 🧪 */

console.log(similarEnd("ours", "rs"));          // true
console.log(similarEnd("fonction", "zzz"));     // false
console.log(similarEnd("Mario", "io"));         // true