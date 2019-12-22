localStorage.clear();
console.log("sadkasd");
async function login() { //login vao app
    axios.post('http://localhost:5000/api/v1/accounts/login', {

        username: document.getElementById("username").value,
        password: document.getElementById("password").value
        }
    )
        .then(function (response) {
            if (response.data.success===true) {
                settoken(response.data.data.token);
                if(response.data.data.admin!==0)
                {
                    window.location.href = "admin/admin.html";
                }
                else
                {
                    window.location.href = "user/user.html";
                }
            }
            else {
                console.log(response.data.reason);
                alert('sai ten dang nhap hoac mat khau');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function settoken(token) {
    localStorage.setItem("token", token);
}
