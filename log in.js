let logInToNextPage = () =>{
    let newArray = JSON.parse(localStorage.localStorageArray);
    let userEmail = document.getElementById("emailadd").value;
    let userPassWord = document.getElementById("password").value;
    let warningDiv = document.getElementById("warning")
    for (let index = 0; index < newArray.length; index++) {
        if (userEmail == newArray[index].emailAddress && userPassWord == newArray[index].passWord) {
            window.location.href= "dashboard.html"
        } else {
            warningDiv.innerText= "please correct value !!";
            warningDiv.style.color="red";
        }
        
    }
    
}