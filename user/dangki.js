function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
var list=[]
var listReg=[]
var listisReg=[]
getListExam()

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
    $('#regisTable tbody').html("");

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
                list=[];
                console.log(response.data.data.results)
                response.data.data.results.forEach(function (element) {
                    if(element.reg==true) {
                        $('#regisTable > tbody:last-child').append('<tr ><td>stt</td><td>\'+element.subject_code+\'</td><td>\'+element.room_name+\'</td><td>\'+element.current_slot+\'</td><td>\'+convertunix(element.start_time)+\'</td><td>\'+element.time/60+\' phút </td><td><i onclick="setidtostorage(\'+element.id+\')" class="fas fa-trash-alt" data-toggle="modal" data-target="#deltest"></i></td></tr>')
                        list.push(element)
                        stt++;
                    }


                })
                stt=1
                response.data.data.results.forEach(function (element) {
                    if(element.block==true) {
                        $('#mainTable > tbody:last-child').append('<tr><td>stt</td><td>'+element.shift_id+'</td><td>'+element.room_id+'</td><td>'+element.current_slot+'</td><td>'+element.subject_code+'</td></tr>')
                    }
                    stt++
                })
                stt=1
                response.data.data.results.forEach(function (element) {

                    if(element.block==false) {
                        $('#mainTable > tbody:last-child').append('<tr ><td>stt</td><td>'+element.subject_code+'</td><td>'+element.room_name+'</td><td>'+element.current_slot+'</td><td>'+convertunix(element.start_time)+'</td><td>'+element.time/60+' phút </td><td><i onclick="setidtostorage('+element.id+')" class="fas fa-trash-alt" data-toggle="modal" data-target="#regtest"></i></td></tr>')
                    }
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
async function dangki() { // Khoi
    axios.post('http://localhost:5000/api/v1/students/examreg',{
            shift_room_id:window.localStorage.getItem('tempId')
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
                alert(response.data.reason);

            }
        })
        .catch(function (error) {
            console.log(error);
            alert("loi thu lai");
        });

}

function setidtostorage(id) {
    window.localStorage.setItem('tempId',id);
}


$('#confirmInsert').on('click',function () {
    dangki()
})