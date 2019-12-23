function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
getListExam()
getExamtoken()
create();


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
    axios.get('http://localhost:5000/api/v1/classes/',
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                alert(0)
                var stt=1;

                response.data.data.rows.forEach(element =>
                    {
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.subject_code+'</td><td>'+element.class_code+'</td><td>'+element.examination_id+'</td><td><i onclick="setidtostorage('+element.id+')" class="far fa-edit" type="button"  data-toggle="modal" data-target="#editModal"></i><i onclick="setidtostorage('+element.id+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
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







$('#btnInsertClass').on('click',function () {
    let select=$('#codesubject');
    getListSubject(select)
})


async function getListSubject(select) {
    select.empty();
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
                        select.append('<option>'+element.subject_code+'</option>');
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


$('#btnConfirmInsert').on('click',function () {
    createClass();
})

async function createClass() {
    console.log(document.getElementById('codesubject').value);
    console.log(document.getElementById('classcode').value);
    axios.post('http://localhost:5000/api/v1/classes/create',
        {
            'subject_code':document.getElementById('codesubject').value,
            'class_code':document.getElementById('classcode').value

        },
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {


                alert('thanh cong');
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

function setidtostorage(id) {
    let select=$('#codesubject2');
    window.localStorage.setItem('tempId',id);
    getListSubject(select)
}

function updateClass() {

        axios.put('http://localhost:5000/api/v1/classes/update', {
                id:window.localStorage.getItem('tempId'),
                'subject_code':document.getElementById('codesubject2').value,
                'class_code':document.getElementById('classcode2').value
            },
            {
                headers: {
                    'examination-token': window.localStorage.getItem('examtoken')
                }
            }
        )
            .then(function (response) {
                if (response.data.success===true) {
                    alert("sửa thanh cong");
                    location.reload();
                }
                else {
                    console.log(response.data);
                    alert(response.data.reason)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

}
$('#confirmFix').on('click',function () {
    updateClass();
})

$('#confirmDel').on('click',function () {
    deleteClass()
})

async function deleteClass() {
    let tempid= window.localStorage.getItem('tempId')
    axios.delete('http://localhost:5000/api/v1/classes/?id='+tempid,
        {
            headers: {
                'examination-token': window.localStorage.getItem('examtoken')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                alert("xoa thanh cong");
                location.reload();
            }
            else {
                console.log(response.data);
                alert(response.data.reason)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}






$('#confirmImportModal').on('click',function () {
    uploadfile();
})


async function uploadfile() { //login vao app
    var formData=new FormData();
    formData.append('students',document.getElementById('customFile').files[0]);
    console.log(document.getElementById('customFile').files[0])
    const config = {
        headers: {
            'examination-token': window.localStorage.getItem('examtoken')
        },
        onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(percentCompleted)
        }
    }
    axios.post('http://localhost:5000/api/v1/classes/',
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






