// const my_num =[1,2,3,4,5]

// console.log(`first ${my_num[0]} last ${my_num.length}`)

// my_num.push(9)
// console.log(my_num)

// my_num.pop()
// console.log(my_num)

// //my_num.shift()
// console.log(my_num.shift())

// my_num.unshift(11,45)
// console.log(my_num)


// const lol= my_num.map(Math.sqrt)
// console.log(lol)

// const filter = my_num.filter(num => num % 2===0)
// console.log(filter)

// const total = my_num.reduce(suum)

// console.log(`total is ${total}`)

// function suum(first,second){
//     return first + second
// }

// const array =[2,3,2,1,6,7,8,9,0]

// for(let i=0;i< array.length ;i++){
//     console.log(array[i])
// }

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(element => {
//     console.log(element);
// });

const matrix =[[1,2,3],[1,2,3]];

for(let i=0;i<matrix.length;i++){
    let row='';
    for(let j=0;j<matrix[i].length;j++){
        row+=matrix[i][j]+' ';
    }
    console.log(row.trim());
}




console.log(matrix[1][2]);  
