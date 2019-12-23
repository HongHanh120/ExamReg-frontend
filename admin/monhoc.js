function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
crete()


async function crete() { //login vao app
    $('#mainTable tbody').html("");
    axios.get('http://localhost:5000/api/v1/subjects/',
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                var stt=1;

                response.data.data.subjects.forEach(element =>
                    {
                        let subcode=element.subject_code.toString();
                        console.log(subcode)
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.subject_code+'</td><td>'+element.name+'</td><td>'+element.credit+'</td><td><i onclick="setidtostorage('+stt+')" class="far fa-edit" type="button"  data-toggle="modal" data-target="#editModal"></i>&nbsp;<i onclick="setidtostorage('+stt+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
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

    document.getElementById("fixcodesubject").value=$('#mainTable > tbody')[0].childNodes[id-1].childNodes[1].innerHTML;
    document.getElementById("fixnamesubject").value=$('#mainTable > tbody')[0].childNodes[id-1].childNodes[2].innerHTML;
    document.getElementById("fixportal").value=$('#mainTable > tbody')[0].childNodes[id-1].childNodes[3].innerHTML;
    window.localStorage.setItem('tempId',$('#mainTable > tbody')[0].childNodes[parseInt(id)-1].childNodes[1].innerHTML);
}

$('#confirmFix').on('click',function () {
    updateSubject()
})

async function updateSubject() {

    axios.put('http://localhost:5000/api/v1/subjects/', {
            subject_code:document.getElementById("fixcodesubject").value,
            name: document.getElementById("fixnamesubject").value,
            credit: document.getElementById("fixportal").value
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

$('#confirmDel').on('click',function () {
    deleteSubject()
})

async function deleteSubject() {
    let subcode=window.localStorage.getItem('tempId')
    axios.delete('http://localhost:5000/api/v1/subjects/?subject_code='+subcode,
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






$('#confirmImportModal').on('click',function (e) {
    console.log(document.getElementById('customFile').files[0])
    uploadfile()
})


async function uploadfile() { //login vao app
    var formData=new FormData();
    formData.append('subjects',document.getElementById('customFile').files[0]);
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
    axios.post('http://localhost:5000/api/v1/subjects/import',
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
                alert(response.data.reason+"file nhap vao khong dung")

            }
        })
        .catch(function (error) {
            console.log(error);
        });

}
function dangxuat() {
    window.location.href = "../login.html";
}




