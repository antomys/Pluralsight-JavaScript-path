const thisVariables = {
    loginButton : document.getElementById("loginBtn"),
    body : {
        login: "",
        password: "",
        lastRequest: new Date()
    }
};

function updateBody(){
    thisVariables.body.login = document.getElementById("login").value;
    thisVariables.body.password = document.getElementById("password").value;
    thisVariables.lastRequest = JSON.stringify(new Date());

    console.log(thisVariables.body);
    let aaa = (JSON.stringify(thisVariables.body));
    console.log(aaa);
};

const login = async(body) =>
{
    const { hostname: location } = window.location;
    updateBody();
    const settings = 
    {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const response = await fetch(`http://${location}:5000/user/login`, settings);
    try 
    {
        const data = await response.json();
        return data;
    } 
    catch (err) 
    {
        throw err;
    }
};

thisVariables.loginButton.addEventListener("click", function(){
   let response = login(thisVariables.body);
   response.then((a) => {
       console.log(a);
       const resp = document.getElementById("response");
       resp.textContent = a;
       resp.classList.remove('d-none');
   })
});