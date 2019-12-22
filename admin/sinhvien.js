function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}
crete()
async function crete() { //login vao app
    $('#mainTable tbody').html("");
    axios.get('http://localhost:5000/api/v1/accounts/student',
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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.username+'</td><td>'+element.fullname+'</td><td>'+element.date_of_birth+'</td><td>'+element.course_class+'</td><td class="hideclass">'+element.id+'</td></tr>');
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





