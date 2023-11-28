function sortedStudents(arr) {
  const getAverage = (arr) => arr.reduce((acc,cur) => acc + cur) / arr.length;
  return arr.sort((a,b) => getAverage(b.grades) - getAverage(a.grades)) 
}

/* ÉNONCÉ 📚 */

/*  
  Vous recevez un tableau rempli d'objets représentant les élèves d'une classe et leurs notes.
  Retournez un tableau dont les objets précédents ont été triés par ordre décroissant en fonction de la moyenne de chaque élève.
*/

/* Test à passer 🧪 */

console.log(
sortedStudents([
  { name: "Tom", grades: [1, 3, 5, 9, 2, 7] }, // 4,5
  { name: "Jack", grades: [20, 4, 18, 10, 14, 12] }, // 13
  { name: "Ana", grades: [11,14,3,14,12,14] }, // 11,3
  { name: "Sara", grades: [10,12,14,15,14,19] }, // 14
])
);

/* Returns */

/* 
[
  { name: 'Sara', grades: [ 10, 12, 14, 15, 14, 19 ] },
  { name: 'Jack', grades: [ 20, 4, 18, 10, 14, 12 ] },
  { name: 'Ana', grades: [ 11, 14, 3, 14, 12, 14 ] },
  { name: 'Tom', grades: [ 1, 3, 5, 9, 2, 7 ] }
]
*/