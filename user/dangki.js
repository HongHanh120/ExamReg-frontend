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



addmoreRows()

function addmoreRows() {
    $('#mainTable > tbody:last-child').append('<tr class="subRow"><td>1</td><td>INT33023</td><td>Phat trien ung dung web</td><td>3</td>' +
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
        '<td> <button  class="btn btn-outline-primary" style=" border-color: #377bd1;\n' +
        '    color: #377bd1;\n' +
        '    background-color: white;">Đăng kí</button></td>' +
        '</tr>');
    $('#regisTable > tbody:last-child').append('<tr class="subRow"><td>1</td><td>INT33023</td><td>Phat trien ung dung web</td><td>3</td>' +
        '<td> 8:00 SA</td><td>24/12/2019</td><td>P303-G2</td>'+
        '<td> <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
        '</tr>');

}




