// function customFilter(arr, callback) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(callback(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

Array.prototype.customFilter = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            result.push(this[i])
        }
    }
    return result;
}

const newArray = [1, 7, 2, 3, 90, 4].customFilter(el => el >= 3)

console.log(newArray)


/* ÉNONCÉ 📚 */


/* 
La méthode filter() est très pratique en JS, mais sauriez-vous la recréer en partant de zéro ?
C'est le but de cet exercice.
*/

//console.log(customFilter([1, 7, 2, 3, 90, 4], el => el >= 3));        // [ 7, 3, 90, 4]
//console.log(customFilter([111, 222, 333, 444, 555], el => el > 333)); // [ 444, 555 ]
//console.log(customFilter([-10, 5, 47, 96, -215], el => el <= 10));    // [ -10, 5, -215 ]
