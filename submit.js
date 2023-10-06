function dataSubmit() {
    var $uFirstName = document.getElementById("fName").value
    var $uLastName = document.getElementById("lName").value
    var $uEmail = document.getElementById("eMail").value
    var $uPhoneNumber = document.getElementById("pNumber").value
    var $checkBoxValue 

    let checkbox = document.getElementById("sCheck");
    if(checkbox.checked){
        $checkBoxValue = "Thank you for Subscribed!"
    }
    else{
        $checkBoxValue = "Subscrib us!"
    }


    
    if ($uFirstName=="" || $uLastName=="" || $uEmail=="" || $uPhoneNumber==""){
        window.alert("Fill all required fields, before submit.")
    }
    else{
        window.alert("Hello " + $uFirstName +", Thank you for contact us! You will receive notification to " +$uEmail+ " soon. " + $checkBoxValue)
    }
    
}