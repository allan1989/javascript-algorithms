function getLongestWord(str) {
    return Math.max(...str.split(' ').map(word => word.length))
}

// function getLongestWord(str) {
//     const longuestWordLength = Math.max(...str.split(' ').map(word => word.length));
//     const longuestWordIndex = str.split(' ').findIndex(word => word.length === longuestWordLength);
//     return str.split(' ')[longuestWordIndex]
// }


/* ÉNONCÉ 📚 */


/* Trouvez la longueur du mot le plus long dans une phrase et retournez-la. */


/* Tests à passer 🧪 */

console.log(getLongestWord("Du sublime au ridicule il n'y a qu'un pas.")); // 8
