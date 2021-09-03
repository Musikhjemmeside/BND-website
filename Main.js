let email = "hello"
var IsCheckChecked = true



function EmailOK(){
IsEmailok = document.getElementById("UserEmail").value.toLowerCase()

EmailCheck = IsEmailok.includes("@",".")
EmailLength = IsEmailok.length

{

if (EmailLength > 2)
{

if (EmailCheck === true && EmailLength>=5 )
{
   console.log("LGTM")
   document.getElementById("EmailInfo").innerHTML = "Thanks for staying informed!"
   document.getElementById("EmailInfo").style.color = "limegreen";
}

if (EmailCheck === true && EmailLength<=4 )
{
    console.log("whops your Email is too short!");
    document.getElementById("EmailInfo").innerHTML = "Your E-mail is too short!"
    document.getElementById("EmailInfo").style.color = "red";

}

if (EmailCheck === false && EmailLength>=5 )
{
    console.log("Your email needs too include @ and .");
}

if (EmailCheck === false && EmailLength<=4 )
{
   console.log("Helll nah")
}

}

else { 
document.getElementById("EmailInfo").innerHTML = "Please enter a valid email!"
console.log("nah")
}
}
}


