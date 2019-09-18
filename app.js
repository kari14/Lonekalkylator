//Basic view
function calcSum() {
    let initialSalary = document.getElementsByName('initialSalary')[0].value;
    let experience = document.getElementsByClassName('experience')[0];
    let xp = experience.options[experience.selectedIndex].value;
    let increase = document.getElementsByName('increase')[0].value;
    increase = increase / 100;
    let newSalary = initialSalary * Math.pow(1 + Number(increase), xp);  
    document.getElementsByName('newSalary')[0].value = newSalary;
};

//Table view
function calcTable() {
    deleteTable();
    var salaryTable = document.createElement('Table');
    document.getElementById('table').appendChild(salaryTable);
    document.getElementsByTagName('table')[0].setAttribute('id', 'salaryTable');
    let initialSalary = document.getElementsByName('initialSalaryTable')[0].value;
    let experience = document.getElementsByClassName('experience')[1];
    let xp = experience.options[experience.selectedIndex].value;
    let proposedSalary = document.getElementsByName('proposedSalaryTable')[0].value;

    var increase = (Math.pow((Number(proposedSalary) / Number(initialSalary)), 1 / Number(xp))).toFixed(3);
    var increaseInPercentage = ((increase - 1) * 100).toFixed(3);
    document.getElementsByName('increaseBetweenYears')[0].value = increaseInPercentage + '%';
    var table = document.getElementById('salaryTable');
    tableHeader(table); 

    for (var i = 1; i <= xp; i++) {
        var row = table.insertRow(i);
        var year  = row.insertCell(0);
        var increase = row.insertCell(1);
        var total = row.insertCell(2);

        year.innerHTML = i;
        increase.innerHTML = increaseInPercentage + '%';
        totalSalary = initialSalary * Math.pow(1 + increaseInPercentage / 100, i);
        total.innerHTML = Math.ceil(totalSalary);
    }
};

function deleteTable() {
    if (document.contains(document.getElementById('salaryTable'))) {
            document.getElementById('salaryTable').remove();
    }  
}

function tableHeader(table) {
    var row = table.insertRow(0);
    var headerYear     = row.insertCell(0);
    var headerIncrease = row.insertCell(1);
    var headerTotal    = row.insertCell(2);


    headerYear.innerHTML = 'Year';
    headerIncrease.innerHTML = 'Increase';
    headerTotal.innerHTML = 'Salary';
}

function selectYears() {
    var select = document.getElementsByClassName('experience');
    for(var i=0; i<=40; i++){
        var option1 = document.createElement('option');
        var option2 = document.createElement('option');
        option1.text = i;
        option2.text = i;
        option1.value = i;
        option2.value = i;
        select[0].appendChild(option1)
        select[1].appendChild(option2)
    }
}


$(document).ready(function() {
    selectYears();
    /*$('#basic').hide();
    $('#table').hide();

    $('#tableView').click(function() {
        $('#basic').hide();
        $('#table').show();
    });

   $('#basicView').click(function() {
      $('#table').hide();
      $('#basic').show();
   });*/
});
