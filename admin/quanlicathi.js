function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}

getListExam();
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
                var stt=1;
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

async function create() { // Khoi
    $('#mainTable tbody').html("");
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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.name+'</td><td>'+element.start_time+'</td><td>'+element.time+'</td><td><i onclick="setidtostorage('+element.id+')" class="far fa-edit" type="button"  data-toggle="modal" data-target="#editModal"></i><i onclick="setidtostorage('+element.id+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
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


$('#confirmInsertShift').on('click',function () {
    createShift();
})

async function createShift() { // Khoi
    axios.post('http://localhost:5000/api/v1/shifts/',
        {
            "name":document.getElementById('shiftsName').value ,
            "start_time": "1677172600",
            "time": parseInt(document.getElementById('totalTime').value)*60
        },
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                alert('Tao thanh cong');
                location.reload();



            }
            else {
                console.log(response.data.reason);
                alert(response.data.reason);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}

