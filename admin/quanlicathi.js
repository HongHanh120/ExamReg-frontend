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
                getExamtoken();

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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.name+'</td><td class="unixtime">'+convertunix(element.start_time)+'</td><td>'+element.time/60+' phút </td><td><i onclick="setidtostorage('+element.id+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
                        stt++;
                    }
                )
                khoitao();


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
            "start_time": getunixTime(),
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
    var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return convdataTime

}

function getunixTime() {
    var t=(new Date($('#timeterm').val()).getTime()/1000);
    if(parseInt($('#hourDate').val())===13) {t=t+3600*6; console.log('true')}

    return t
}


function setidtostorage(id) {
    window.localStorage.setItem('tempId',id);
}





//Xoa mon
$('#confirmDel').on('click',function () {
    deleteExam()
})
async function deleteExam() {
    let idExam= window.localStorage.getItem('tempId')

    axios.delete('http://localhost:5000/api/v1/shifts/?id='+idExam,
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
function dangxuat() {
    window.location.href = "../login.html";
}
