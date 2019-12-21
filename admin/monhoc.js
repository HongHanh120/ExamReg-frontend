function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
let danhsach = [
    {
    id_course: "int3302",
    course_name: "Phat trien ung dung web",
    portal:"3"
},{
    id_course: "int3303",
    course_name: "Thiet ke giao dien",
    portal:"3"
},
    {
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    },
    {
        id_course: "int3302",
        course_name: "Phat trien ung dung web",
        portal:"3"
    },{
        id_course: "int3303",
        course_name: "Thiet ke giao dien",
        portal:"3"
    }
];
addmoreRows()

function addmoreRows() {
    $('#subTable > tbody:last-child').append('<tr class="subRow"><td>my data</td><td>more data</td><td>more data</td><td>more data</td>' +
        '<td><i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>' +
        ' <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
        '</tr>');

}






