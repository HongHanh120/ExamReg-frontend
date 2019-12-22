function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
crete()



function addmoreRows() {
    $('#subjectTable > tbody:last-child').append('<tr class="subRow"><td>my data</td><td>more data</td><td>more data</td><td>more data</td>' +
        '<td><i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>' +
        ' <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
        '</tr>');

}






