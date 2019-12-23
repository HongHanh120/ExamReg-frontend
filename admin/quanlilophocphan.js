function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}

getListExam();
getListSubject()









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


function getListSubject() {
    axios.get('http://localhost:5000/api/v1/shiftsRooms/',
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {


                response.data.data.results.forEach(element =>
                    {
                        let subcode=element.subject_code.toString();
                        console.log(subcode)
                        $('#selectSubject').append('<option value="'+element.id+'">'+element.subject_code+':'+element.name+'</option>');

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






$('#confirmImportModal').on('click',function (e) {
    uploadfile()
})


async function uploadfile() { //login vao app
    var formData=new FormData();
    formData.append('classesStudents',document.getElementById('customFile').files[0]);
    const config = {
        headers: {
            'examination-token': window.localStorage.getItem('examtoken'),
            'content-type': 'application/x-www-form-urlencoded'
        },
        onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(percentCompleted)
        }
    }
    axios.post('http://localhost:5000/api/v1/classesStudents/import',
        formData
        ,
        config
    )
        .then(function (response) {
            if (response.data.success===true) {
                alert('Them thanh cong')

            }
            else {
                console.log(response.data.reason);
                alert(response.data.reason)

            }
        })
        .catch(function (error) {
            console.log(error);
        });

}


$('#getliststudentin').on('click',function (e) {
    create()
});
async function create() { // Khoi

    console.log($('selectSubject').val());
    axios.get('http://localhost:5000/api/v1/shiftsRoomsStudents/examreg?shift_room_id='+$('selectSubject').val(),
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                var stt=1;

                console.log(response.data.data.results)
                response.data.data.results.forEach(function (element) {

                        $('#mainTable > tbody:last-child').append('<tr class="blackclass"><td>'+stt+'</td><td>'+element.shift_id+'</td><td>'+element.room_id+'</td><td>'+element.current_slot+'</td><td>'+element.subject_code+'</td></tr>')

                        stt++


                })
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