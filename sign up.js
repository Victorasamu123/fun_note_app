let signUpArray = [];
const saveItem = () => {
    let fullName = document.getElementById("fullPerson").value;
    let emailAddress = document.getElementById("email").value;
    let passWord = document.getElementById("pass").value;
    let forInvaiidInput = document.getElementById("warning");
    let userInfo = {
        userFullName : fullName,
        userEmail :emailAddress,
        userPassword:passWord,
        toDoLists:[],
        notes:[],
        contacts:[]
    }
    signUpArray.push(userInfo);
    if (fullName != "" && emailAddress != "" && passWord != ""){
        window.location.href = "log in.html"
    }else {
        forInvaiidInput.innerText = "Please input coorrect value !!"
        forInvaiidInput.style.color = "red"
    }
    
}
localStorage.data = JSON.stringify(signUpArray)
JSON.parse(localStorage.getItem("data"));