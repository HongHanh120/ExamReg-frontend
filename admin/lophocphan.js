function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}


let danhsachlop = [
    {
    id_course: "int3302",
    course_name: "Phat trien ung dung web",
    portal:"3"
},{
    id_course: "int3303",
    course_name: "Thiet ke giao dien",
    portal:"3"
}
    ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    } ,{
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    }
];
// let subjectTable = $('#subjectTable')[0];
// for(let i=0; i<danhsachlop.length; i++){
//     let row = subjectTable.insertRow(-1);
//     let cell1 = row.insertCell(-1);
//     let cell2 = row.insertCell(-1);
//     let cell3 = row.insertCell(-1);
//     let cell4 = row.insertCell(-1);
//     let cell5 = row.insertCell(-1);
//     cell1.innerHTML = i+1;
//     cell2.innerHTML = danhsachlop[i].id_course;
//     cell3.innerHTML = danhsachlop[i].course_name;
//     cell4.innerHTML = danhsachlop[i].portal;
//     cell5.innerHTML = "<i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>" +
//         ", <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i>" ;
//
// }
addmoreRows()

function addmoreRows() {
    $('#subjectTable > tbody:last-child').append('<tr class="subRow"><td>my data</td><td>more data</td><td>more data</td><td>more data</td>' +
        '<td><i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>' +
        ' <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
        '</tr>');

}




