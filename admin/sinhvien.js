function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
crete()
async function crete() { //login vao app
    $('#mainTable tbody').html("");
    axios.get('http://localhost:5000/api/v1/students',
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                var stt=1;
                response.data.data.rows.forEach(element =>
                    {
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.username+'</td><td>'+element.fullname+'</td><td>'+convertunix(element.date_of_birth)+'</td><td>'+element.course_class+'</td><td>'+element.email+'</td>' +

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

function setidtostorage(id) {
    window.localStorage.setItem('tempId',id);
}
function convertunix(unixtime){

    var unixtimestamp = parseFloat(unixtime);
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var date = new Date(unixtimestamp*1000);
    var year = date.getFullYear();
    var month = months_arr[date.getMonth()];
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var convdataTime = month+'-'+day+'-'+year;

    return convdataTime

}





