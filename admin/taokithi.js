function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}



console.log('asdasdasd thang ')

crete();




//tao ki thi moi
$('#submit_insert').on('click',function () {
    createExam()
})

async function createExam(nameExam) {
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
async function crete() { //login vao app
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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.name+'</td><td class="hideclass">'+element.id+'<td><i class="far fa-edit" type="button"  data-toggle="modal" data-target="#editModal"></i><i class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
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




