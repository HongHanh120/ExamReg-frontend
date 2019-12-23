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
                        $('#regisTable > tbody:last-child').append('<tr class="blackclass"><td>'+element.shift_id+'</td><td>'+element.room_id+'</td><td>'+element.current_slot+'</td><td>'+element.subject_code+'</td></tr>')
                        list.push(element)
                    }
                    else
                    if(element.block==false) {
                        $('#mainTable > tbody:last-child').append('<tr class="blackclass"><td>'+element.shift_id+'</td><td>'+element.room_id+'</td><td>'+element.current_slot+'</td><td>'+element.subject_code+'</td></tr>')
                    }
                })
                response.data.data.results.forEach(function (element) {
                    if(element.block==true) {
                        $('#mainTable > tbody:last-child').append('<tr class="blackclass"><td>'+element.shift_id+'</td><td>'+element.room_id+'</td><td>'+element.current_slot+'</td><td>'+element.subject_code+'</td></tr>')
                    }
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




