function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
getListExam();





create();
async function create() { // Khoi
    $('#mainTable tbody').html("");
    axios.get('http://localhost:5000/api/v1/shiftsRooms/',
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                var stt=1;
                response.data.data.rows.forEach(element =>
                    {
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.shift_id+'</td><td>'+element.room_id+'</td><td>'+element.current_slot+'</td><td>'+element.subject_code+'</td><td class="hideclass">'+element.id+'<td><i onclick=" setidtostorage('+element.id+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
                        stt++;

                    }


                )
                khoitao()


            }
            else {
                console.log(response);

            }
        })
        .catch(function (error) {
            console.log(error);
        });

}





async function getListExam() { // Khoi
    axios.get('http://localhost:5000/api/v1/examinations/',
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                response.data.data.exams[0].forEach(element =>
                    {
                        $('#selectExam').append('<option value="'+element.id+'">'+element.name+'</option>');
                    }
                );
                khoitao();
                onChangeExam();

            }
            else {
                console.log(response);

            }
        })
        .catch(function (error) {
            console.log(error);
        });

}

function onChangeExam() {
    $('#selectExam').on('change',function () {
        getExamtoken()
    })
}

function getExamtoken() {

    axios.get('http://localhost:5000/api/v1/accounts/examination/'+$('#selectExam').val(),
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                window.localStorage.setItem('examtoken',response.data.data.examinationToken);
                create();
            }
            else {
                console.log(response.data);

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

$('#insertt').on('click',function () {
        getListrooms();
        getlistShifts();
        getListSubject()
})

async function getListrooms() { // Khoi
    $('#room_id').html("");
    axios.get('http://localhost:5000/api/v1/rooms/',
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {


                response.data.data.rooms.forEach(element =>
                    {
                        $('#room_id').append('<option value="'+element.id+'">'+element.name+'</option>');

                    }
                )
                khoitao()


            }
            else {
                console.log(response);

            }
        })
        .catch(function (error) {
            console.log(error);
        });

}
async function getlistShifts() { // Khoi
    $('#shift_id').html("");
    axios.get('http://localhost:5000/api/v1/shifts/',
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                var stt=1;

                response.data.data.shifts.forEach(element =>
                    {
                        $('#shift_id').append('<option value="'+element.id+'">'+element.name+'|'+element.start_time+'|'+element.time+'</option>');
                    }
                )
                khoitao()


            }
            else {
                console.log(response);

            }
        })
        .catch(function (error) {
            console.log(error);
        });

}
function getListSubject() {
    $('#subject_code').html("");
    axios.get('http://localhost:5000/api/v1/subjects/',
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {


                response.data.data.subjects.forEach(element =>
                    {
                        let subcode=element.subject_code.toString();
                        console.log(subcode)
                        $('#subject_code').append('<option>'+element.subject_code+':'+element.name+'</option>');

                    }

                )
                khoitao()

            }
            else {
                console.log(response);

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


$('#submit_insert').on('click',function () {
    createTest()
})


async function createTest() {
    axios.post('http://localhost:5000/api/v1/shiftsRooms/', {

            "shift_id": parseInt($('#shift_id').val()),
            "room_id": parseInt($('#room_id').val()),
            "subject_code": getsubjectCode()
        },
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                alert("them thanh cong");
                location.reload();
            }
            else {
                console.log(response.data);

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
function getsubjectCode() {
    let temp=document.getElementById("subject_code").value;
    return temp.substring(0,temp.indexOf(":"))
}



