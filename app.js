function calcSum() {
    let initialSalary = document.getElementsByName('initialSalary')[0].value;
    let experience = document.getElementsByName('experience')[0].value;
    let increase = document.getElementsByName('increase')[0].value;
    let newSalary = initialSalary * Math.pow(1 + Number(increase), (experience));  
    document.getElementsByName('newSalary')[0].value = newSalary;
}

