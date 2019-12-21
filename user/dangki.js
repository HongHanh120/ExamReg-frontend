function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
let danhsachmondangki = [{
    id_course: "int3302",
    course_name: "Phat trien ung dung web",
    portal:"3",
    time:"8:00",
    date:"24/12/2019",
    place:"P302-G2"
},{
    id_course: "int3302",
    course_name: "Phat trien ung dung web",
    portal:"3",
    time:"8:00",
    date:"24/12/2019",
    place:"P302-G2"
}];
// let regisTable = $('#regisTable')[0];
// for(let i=0; i<danhsachmondangki.length; i++){
//     let row = regisTable.insertRow(-1);
//     let cell1 = row.insertCell(-1);
//     let cell2 = row.insertCell(-1);
//     let cell3 = row.insertCell(-1);
//     let cell4 = row.insertCell(-1);
//     let cell5 = row.insertCell(-1);
//     let cell6 = row.insertCell(-1);
//     let cell7 = row.insertCell(-1);
//     let cell8 = row.insertCell(-1);
//     cell1.innerHTML = i+1;
//     cell2.innerHTML = danhsachmondangki[i].id_course;
//     cell3.innerHTML = danhsachmondangki[i].course_name;
//     cell4.innerHTML = danhsachmondangki[i].portal;
//     cell5.innerHTML = danhsachmondangki[i].time;
//     cell6.innerHTML = danhsachmondangki[i].date;
//     cell7.innerHTML = danhsachmondangki[i].place;
//     cell8.innerHTML = "<input type='checkbox'>";
//
// }


addmoreRows()

function addmoreRows() {
    $('#regisTable > tbody:last-child').append('<tr class="subRow"><td>1</td><td>INT33023</td><td>Phat trien ung dung web</td><td>3</td>' +
        '<td> <select class="custom-select custom-select-sm form-control form-control-sm">\n' +
        '                            <option>10</option>\n' +
        '                            <option>15</option>\n' +
        '                            <option>20</option>\n' +
        '                        </select></td>'+
        '<td> <select class="custom-select custom-select-sm form-control form-control-sm">\n' +
        '                            <option>10</option>\n' +
        '                            <option>15</option>\n' +
        '                            <option>20</option>\n' +
        '                        </select></td>'+
        '<td> <select class="custom-select custom-select-sm form-control form-control-sm">\n' +
        '                            <option>10</option>\n' +
        '                            <option>15</option>\n' +
        '                            <option>20</option>\n' +
        '                        </select></td>'+
        '<td> <input type="checkbox"></td>' +
        '</tr>');

}




