function capitalize(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(-(word.length - 1)))
        .join(' ')
}


/* ÉNONCÉ 📚 */


/* 
Créez un Algorithme qui prend une phrase en argument et qui retourne cette même phrase avec la première lettre de chaque mot en majuscule.
*/


/* Test à passer 🧪 */

console.log(capitalize("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...

