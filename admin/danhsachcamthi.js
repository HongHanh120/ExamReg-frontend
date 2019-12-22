function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
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








