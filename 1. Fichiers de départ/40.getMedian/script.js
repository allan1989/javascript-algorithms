function getMedian(array) {
  const sortedArray = array.sort((a,b) => a - b);
  if(array.length % 2 === 0) {
    return ((array[(array.length / 2) - 1]) + array[(array.length / 2) + 1 - 1]) / 2
  }else {
    return array[((array.length + 1) / 2) - 1]
  }
}


/* ÉNONCÉ 📚 */

/*
  Codez un algorithme permettant de retourner la valeur médiane d'un ensemble de données comprises dans un tableau.
  N'oubliez pas de trier la série au préalable.
*/


/* Tests à passer 🧪 */

console.log(getMedian([1,2,3,4])) // 2.5
console.log(getMedian([1,2,3,4,5] )) // 3
console.log(getMedian([10,15,14,12,16,14,17,5,4,7])); // 13
console.log(getMedian([1000,1700,850,1200,1400,1000,900,1500,999999999])); // 1200