let email = "hello"
var IsCheckChecked = true

function checkme(){
    IsCheckChecked = false
    console.log(IsCheckChecked)
}

function Checked(){
    if (IsCheckChecked === false)
    {
        IsCheckChecked = true
    console.log(IsCheckChecked)
    }

    else {
        IsCheckChecked = false
    console.log(IsCheckChecked)
    }
    
}

function EmailOK(){
IsEmailok = document.getElementById("UserEmail").value.toLowerCase()
IsCheckChecked = document.getElementById("check").IsCheckChecked
console.log(IsCheckChecked)
console.log(IsEmailok)
EmailCheck = IsEmailok.includes("@",".")
if (EmailCheck === false)
{alert("please enter a valid email.")}
if (IsCheckChecked === false)
{
    alert("Please check the check box")
}
}


