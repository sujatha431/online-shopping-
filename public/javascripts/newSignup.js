var signupNewUser = () => {
    var userDetails = {};
    userDetails.userName = $("#s_userName").val();
    userDetails.accountId = $("#s_accountId").val();
    userDetails.emailId = $("#s_emailid").val();
    userDetails.password = $("#s_accountPassword").val();
    console.log(userDetails);

    axios.post("/new/userSignup", userDetails).then((result) => {
        resetSignupFields();
        if (result.data.msg == "Success") {            
            $("#s_successMsg").show();
        } else {
            $("#invalidMsg").text("Error while signup")
        }
            
    }).catch((err) => {
        
    });
}

var resetSignupFields = () => {
    $("#s_userName").val('');
    $("#s_accountId").val('');
    $("#s_accountPassword").val('');
    $("#s_emailid").val('');
    $("#s_reenterPassword").val('');
}