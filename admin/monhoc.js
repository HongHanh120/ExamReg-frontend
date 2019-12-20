function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
let danhsach = [{
    id_course: "int3302",
    course_name: "Phat trien ung dung web",
    portal:"3"
},{
    id_course: "int3303",
    course_name: "Thiet ke giao dien",
    portal:"3"
}];
 let subTable = $('#subTable')[0];
for(let i=0; i<danhsach.length; i++){
    let row = subTable.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1);
    let cell3 = row.insertCell(-1);
    let cell4 = row.insertCell(-1);
    let cell5 = row.insertCell(-1);
    cell1.innerHTML = i+1;
    cell2.innerHTML = danhsach[i].id_course;
    cell3.innerHTML = danhsach[i].course_name;
    cell4.innerHTML = danhsach[i].portal;
    cell5.innerHTML = "<i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>" +
        ", <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i>" ;

}


function clickme() {
    console.log("No click")
}




