function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}



console.log('asdasdasd thang ')

crete();
async function crete() { // Khoi
    $('#mainTable tbody').html("");
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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.name+'</td><td class="hideclass">'+element.id+'<td><i onclick="setidtostorage('+element.id+')" class="far fa-edit" type="button"  data-toggle="modal" data-target="#editModal"></i><i onclick="setidtostorage('+element.id+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
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

//-----------------------------------

//tao ki thi moi
$('#submit_insert').on('click',function () {
    console.log("create exam")
    createExam()
})

async function createExam() {
    console.log(document.getElementById("namesubject").value);
    axios.post('http://localhost:5000/api/v1/examinations', {
            name: document.getElementById("namesubject").value
        },
        {
            headers: {
                'token': window.localStorage.getItem('token')
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





function setidtostorage(id) {
    getExaminfo();
    document.getElementById("fixnamesubject").value=name;
    window.localStorage.setItem('tempId',id);
}


async function getExaminfo(){
    let temp=parseInt(window.localStorage.getItem('tempId'));
    axios.get('http://localhost:5000/api/v1/examinations/information?id='+temp,
        {
            headers: {
                token: window.localStorage.getItem('token')
            },

        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                console.log(response.data.data.rows.name)
                document.getElementById('fixnamesubject').value=response.data.data.rows.name;
            }
            else {
                console.log(response);

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}




$('#submitfixname').on('click',function () {
    updateExam()
})

async function updateExam() {

    axios.put('http://localhost:5000/api/v1/examinations', {
            id:window.localStorage.getItem('tempId'),
            name: document.getElementById("fixnamesubject").value
        },
        {
            headers: {
                'token': window.localStorage.getItem('token')
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















//Xoa mon
$('#confirmDel').on('click',function () {
    deleteExam()
})
async function deleteExam() {
    let idExam= window.localStorage.getItem('tempId')

    axios.delete('http://localhost:5000/api/v1/examinations/?id='+idExam,
        {
            headers: {
                'token': window.localStorage.getItem('token')
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






