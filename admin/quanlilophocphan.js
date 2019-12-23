function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}


addmoreRows()

function addmoreRows() {
    $('#mainTable > tbody:last-child').append('<tr class="subRow"><td>1</td><td>int3302</td><td>17020633</td><td>Ninh Hồng Diệp</td>' +
        '<td>30/11/1999</td><td>ninhhongdiep@gmail.com</td>' +
        '<td><i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>' +'&'+
        ' <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
        '</tr>'

    );

}
