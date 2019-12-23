function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}

addmoreRows()

function addmoreRows() {
    $('#mainTable > tbody:last-child').append('<tr class="subRow"><td>1</td><td>301-GĐ2</td><td>50</td>' +
        '<td><i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>' +'&'+
        ' <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
        '</tr>'
    );

}
