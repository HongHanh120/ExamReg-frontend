function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
let danhsachkithi = [{
    id_term: "7001",
    term_name: "Phat trien ung dung web",
    time_term:"2/1/2019"

},{
    id_term: "7001",
    term_name: "Phat trien ung dung web",
    time_term:"2/1/2019"
}];
// let termTable = $('#termTable')[0];
// for(let i=0; i<danhsachkithi.length; i++){
//     let row = termTable.insertRow(-1);
//     let cell1 = row.insertCell(-1);
//     let cell2 = row.insertCell(-1);
//     let cell3 = row.insertCell(-1);
//     let cell4 = row.insertCell(-1);
//     let cell5 = row.insertCell(-1);
//     cell1.innerHTML = i+1;
//     cell2.innerHTML = danhsachkithi[i].id_term;
//     cell3.innerHTML = danhsachkithi[i].term_name;
//     cell4.innerHTML = danhsachkithi[i].time_term;
//     cell5.innerHTML = "<i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>" +
//         ", <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i>" ;
//
// }
addmoreRows()

function addmoreRows() {
    $('#termTable > tbody:last-child').append('<tr class="subRow"><td>1</td><td>7013</td><td>thi cuoi ki web</td><td>8:00</td>' +
        '<td><i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>' +
        ' <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
        '</tr>');

}
