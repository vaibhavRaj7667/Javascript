day = 4;

switch(day){
    case 1:
        console.log(`its monday`);
        break
    case 2:
        console.log(`its tuesday`);
        break
    case 3:
        console.log(`its wednesday`);
        break
    case 4:
        console.log(`its thrusday`);
        break
    case 5:
        console.log(`its friday`);
        break
    case 6:
        console.log(`its saturday `);
        break
    case 7:
        console.log(`its sunday`);
        break
    default:
        console.log(`${day} is not day`)
}


marks = 88;


switch(true){
    case marks > 90:
        console.log("A");
        break;
    
    case marks > 80:
        console.log("B");
        break;
    case marks > 70:
        console.log("c");
        break;
    case marks > 60:
        console.log("d");
        break;

}

my_num = 11;
let answer = (my_num % 2==0) ? "even":"odd";
console.log(answer)



let num1 = 10;
let result =' '
for(let i=1; i <= num1;i++){
    result += i + ' ';
}
console.log(result)