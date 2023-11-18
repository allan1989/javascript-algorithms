/* function factorial(num) {

    // if number is 0
    if (num === 0) {
        return 1;
    }

    // if number is positive
    else {
        return num * factorial(num - 1);
    }

} */

/* const factorial = num => num === 0 ? 1 : num * factorial(num - 1) */

/* function factorial(num) {
    return [...Array(num).keys()].map(i => i + 1).reduce((acc, curr) => curr * acc)
} */

const factorial = num => [...Array(num).keys()].map(i => i + 1).reduce((acc, curr) => curr * acc);

/* ÉNONCÉ 📚 */

/*
 Créez un algorithme qui va calculer la factorielle d'un nombre qu'on lui passe en argument.
 Par exemple, la factorielle de 5 est égale à :  1 * 2 * 3 * 4 * 5 = 120.
 C'est le produit de tous les entiers qui précèdent ou qui sont égaux à N.
 La factorielle de 0 et de 1 est égale à 1.
*/


/* Tests à passer 🧪 */


console.log(factorial(5));  // 120
console.log(factorial(7));  // 5040
console.log(factorial(9));  // 362880


