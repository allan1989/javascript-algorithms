function mostFrequent(arr) {
    let mapping = {};
    for(let el of arr) {
        if(mapping.hasOwnProperty(el)) {
            mapping[el]++
        }else {
            mapping[el] = 1
        }
    }

    let max = Math.max(...Object.values(mapping));

    for(let el in mapping) {
        if(mapping[el] === max) {
            return el
        }
    }
}


/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne l'élément le plus présent dans un tableau. */


/* Tests à passer 🧪 */

console.log(mostFrequent([3, "a", "a", "a", "b", "b", 2, 3, "a", 3, "a", 2, 4, 9, 3])); // "a"
console.log(mostFrequent(["y","z","z","x","z"]));                                       // "z"
console.log(mostFrequent(["John", "Tom", "Peter", "Peter", "Jack", "Jack", "Jack"]));   // "Jack"
