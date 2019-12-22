function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}

// function addmoreRows() {
//     $('#termTable > tbody:last-child').append('<tr class="subRow"><td>1</td><td>7013</td><td>thi cuoi ki web</td><td>8:00</td>' +
//         '<td><i class=\"far fa-edit\" type=\"button\"  data-toggle=\"modal\" data-target=\"#editModal\"></i>' +
//         ' <i class=\"fas fa-trash-alt\" type=\"button\"  data-toggle=\"modal\" data-target=\"#deleteModal\"></i></td>' +
//         '</tr>');
//
// }

console.log(window.localStorage.getItem('token'))
crete();
console.log("asdasd");



//tao ki thi moi
$('#submit_insert').on('click',function () {
    createExam()
})
async function createExam() { //login vao app
    axios.post('http://localhost:5000/api/v1/examinations', {
            name: nameExam.toString()
        },
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                console.log("ojk")

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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.name+'</td><td class="hideclass">'+element.id+'</td></tr>');
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


