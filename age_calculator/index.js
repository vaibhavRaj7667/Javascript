const age = document.getElementById('agee');
const btnn = document.getElementById('btnn');
const ageresults = document.getElementById('ageresult');


btnn.addEventListener('click', calculate_age);

function calculate_age() {
    let current = new Date();
    let birthday = new Date(age.value);

    let year = current.getFullYear() - birthday.getFullYear();
    const month = current.getMonth() - birthday.getMonth();

    if (
        month < 0 ||
        (month === 0 && current.getDate() < birthday.getDate())
    ) {
        year--;
    }

    ageresults.innerText = `you are ${year}years old`; 
}
