getListExam()

function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'dulieu.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;


        downloadLink.download = filename;


        downloadLink.click();
    }
}





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
    $('#mainTable tbody').html("");
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
                    if(element.reg==false) {
                        $('#mainTable > tbody:last-child').append('<tr ><td>stt</td><td>'+element.subject_code+'</td><td>'+element.room_name+'</td><td>'+element.current_slot+'</td><td>'+convertunix(element.start_time)+'</td><td>'+element.time/60+' phút </td></tr>')
                        list.push(element)
                        stt++;
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