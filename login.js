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
                window.location.href = "admin/admin.html";
            }
            else {
                console.log(response.data.reason);

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function settoken(token) {
    localStorage.setItem("token", token);
}
