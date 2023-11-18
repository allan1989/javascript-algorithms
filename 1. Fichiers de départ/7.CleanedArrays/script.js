/* function removeDuplicates(arr) {
    return arr.filter((el,i,arr) => arr.indexOf(el) === i)
} */

/* const removeDuplicates = arr => arr.filter((el,i,arr) => arr.indexOf(el) === i); */

/* function removeDuplicates(arr) {
    return [...new Set(arr)];
} */

const removeDuplicates = arr => [...new Set(arr)];


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */


/* Tests à passer 🧪 */

console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]




