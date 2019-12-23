function myslide() {
    document.getElementById("slidebar").classList.toggle('active');
}


create()
async function create() { // Khoi
    $('#mainTable tbody').html("");
    axios.get('http://localhost:5000/api/v1/rooms/',
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                var stt=1;

                response.data.data.rooms.forEach(element =>
                    {
                        $('#mainTable > tbody:last-child').append('<tr><td>'+stt+'</td><td>'+element.name+'</td><td>'+element.slot+'</td><td><i onclick="setidtostorage('+element.id+')" class="far fa-edit" type="button"  data-toggle="modal" data-target="#editModal"></i>&nbsp;<i onclick="setidtostorage('+element.id+')" class="fas fa-trash-alt" type="button"  data-toggle="modal" data-target="#deleteModal"></i></td></tr>');
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


$('#confirmInsert').on('click',function () {
    createRoom();
})

async function createRoom() { // Khoi
    axios.post('http://localhost:5000/api/v1/rooms/',
        {
            "name":document.getElementById('room').value ,
            "slot": parseInt(document.getElementById('chair').value)
        },
        {
            headers: {
                'token': window.localStorage.getItem('token')
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



async function getRoomInfo(id) { // Lay thong tin room cho vao edit form
    axios.get('http://localhost:5000/api/v1/rooms/information/?id='+id,
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                document.getElementById('fixroom').value=response.data.data.existedRoom.name;
                document.getElementById('fixchair').value=response.data.data.existedRoom.slot;

            }
            else {
                console.log(response);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}


//Xoa
$('#confirmDel').on('click',function () {
    deleteRoom()
})
async function deleteRoom() {
    let id= window.localStorage.getItem('tempId')

    axios.delete('http://localhost:5000/api/v1/rooms/?id='+id,
        {
            headers: {
                'token': window.localStorage.getItem('token')
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


//update

$('#submitfixname').on('click',function () {
    updateRoom()
})

async function updateRoom() {

    axios.put('http://localhost:5000/api/v1/rooms/', {
            id:window.localStorage.getItem('tempId'),
            name: document.getElementById("fixroom").value,
            slot:document.getElementById("fixchair").value
        },
        {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                alert("sửa thanh cong");
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



function setidtostorage(id) {
    window.localStorage.setItem('tempId',id);
    getRoomInfo(id);
}