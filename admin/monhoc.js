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
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.subject_code+'</td><td>'+element.name+'</td><td>'+element.credit+'</td></tr>');
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






