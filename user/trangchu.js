function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
let danhsachmonhoc = [{
    id_course: "int3302",
    course_name: "Phat trien ung dung web",
    portal:"3",
    time:"1-3",
    room:"P302-GD2",
    teacher:"Le Dinh Thanh"
},{
    id_course: "int3302",
    course_name: "Phat trien ung dung web",
    portal:"3",
    time:"1-3",
    room:"P302-GD2",
    teacher:"Le Dinh Thanh"
}];
let subTable = $('#subTable')[0];
for(let i=0; i<danhsachmonhoc.length; i++){
    let row = subTable.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1);
    let cell3 = row.insertCell(-1);
    let cell4 = row.insertCell(-1);
    let cell5 = row.insertCell(-1);
    let cell6 = row.insertCell(-1);
    let cell7 = row.insertCell(-1);
    cell1.innerHTML = i+1;
    cell2.innerHTML = danhsachmonhoc[i].id_course;
    cell3.innerHTML = danhsachmonhoc[i].course_name;
    cell4.innerHTML = danhsachmonhoc[i].portal;
    cell5.innerHTML = danhsachmonhoc[i].time;
    cell6.innerHTML = danhsachmonhoc[i].room;
    cell7.innerHTML = danhsachmonhoc[i].teacher;
}







