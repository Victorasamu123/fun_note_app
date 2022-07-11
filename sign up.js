let signUpPageArray =[]
let signUpPage = () =>{
    let userName = document.getElementById("fullname").value;
    let userEmail = document.getElementById("emailadd").value;
    let userPassWord = document.getElementById("password").value;
    let warningDiv = document.getElementById("warning")
    let signUpPageObject ={
        firstName:userName,
        emailAddress:userEmail,
        passWord:userPassWord,
        contacts:[],
        toDoLists:[],
        notes:[],
        userEvents:[]
    }
    signUpPageArray.push(signUpPageObject)
    localStorage.setItem("localStorageArray",JSON.stringify(signUpPageArray))
    console.log(signUpPageArray)
    if (userName == ""&& userEmail == "" && userPassWord == "") {
        warningDiv.innerText = "please input correct value"
        warningDiv.style.color="red"
    } else {
        window.location.href="log in.html"
    }
    
}
let getPreviousItem  = () => {
    
    if (localStorage.localStorageArray) {
        signUpPageArray = JSON.parse(localStorage.localStorageArray)
    }
}