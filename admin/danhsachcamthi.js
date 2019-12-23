function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}

getListExam();



$('#confirmImportModal').on('click',function (e) {
    console.log(document.getElementById('customFile').files[0])
    uploadfile()
})


async function uploadfile() { //login vao app
    var formData=new FormData();
    formData.append('students',document.getElementById('customFile').files[0]);
    const config = {
        headers: {
            'token': window.localStorage.getItem('token'),
            'content-type': 'application/x-www-form-urlencoded'
        },
        onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(percentCompleted)
        }
    }
    axios.post('http://localhost:5000/api/v1/students/',
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


create()
async function create() { // Khoi
    $('#mainTable tbody').html("");
    axios.get('http://localhost:5000/api/v1/accounts/eligibility',
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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td>' +
                            '<td>'+element.username+'</td>' +
                            '<td>'+element.fullname+'</td>' +
                            '<td>'+element.course_class+'</td>' +
                            '<td>'+element.subject_class+'</td>' +
                            '<td>'+element.nameSubject+'</td>' +
                            '<td><i onclick="setidtostorage('+element.id+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
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

function setidtostorage(id) {
    window.localStorage.setItem('tempId',id);
}

async function getListExam() { // Khoi
    console.log("tokenok")
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
                onChangeExam();
                getExamtoken()

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





//Xoa mon
// $('#confirmDel').on('click',function () {
//     deleteExam()
// })
// async function deleteExam() {
//     let idExam= window.localStorage.getItem('tempId')
//
//     axios.delete('http://localhost:5000/api/v1/examinations/?id='+idExam,
//         {
//             headers: {
//                 'token': window.localStorage.getItem('token')
//             }
//         }
//     )
//         .then(function (response) {
//             if (response.data.success===true) {
//                 alert("xoa thanh cong");
//                 location.reload();
//             }
//             else {
//                 console.log(response.data);
//                 alert(response.data.reason)
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

