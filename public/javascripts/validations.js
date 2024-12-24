// Function to check if Account Id contains only allowed characters (lowercase letters, numbers, and underscore)
var checkAllowedCharacters = (userId) => {
    for (var i = 0; i < userId.length; i++) {
        var charCode = userId.charCodeAt(i);
        // Checking each character
        if (!(charCode >= 97 && charCode <= 122) && // a-z
            !(charCode >= 48 && charCode <= 57) &&  // 0-9
            !(charCode === 95)) {  // _                 
            return false; 
        }
    }
    return true; 
}

// Not allowing the spaces
var validateSpace = (event) => {
    if (event.keyCode === 32) {
        event.preventDefault();
        return false;
    }
}

// Hiding and showing the user id conditions on blur, on focus actions
var showConditions2 = () => {
    return $(".conditions2").show();
}
var hideConditions2 = () => {
    return $(".conditions2").hide();
}

var showConditions1 = () => {
    return $(".conditions1").show();
}
var hideConditions1 = () => {
    return $(".conditions1").hide();
}

var showPasswordConditions = () =>{
    return $(".conditions3").show();
}
var hidePasswordConditions = () =>{
    return $(".conditions3").hide();
}

// Validation function to validate Account Id
var userIdValidation = () => {
    var accountId = $("#s_accountId").val()
    // Validation for length
    let IdLength;
    if (accountId.length >= 4 && accountId.length <= 30) {
        IdLength = true;
        $("#IdLength").addClass("green").removeClass("red");
    } else {
        IdLength = false;
        $("#IdLength").addClass("red").removeClass("green");
    }

    // Validation for the first character (should be lowercase letter or underscore)
    const firstChar = accountId.charCodeAt(0);
    let firstCharTemp;
    if (firstChar >= 97 && firstChar <= 122 || firstChar == 95) {
        firstCharTemp = true;
        $("#First").addClass("green").removeClass("red");
    } else {
        firstCharTemp = false;
        $("#First").removeClass("green").addClass("red");
    }

    // Validation for allowed characters
    const validCharacters = checkAllowedCharacters(accountId);
    if (validCharacters) {
        $("#allowedCharsCondition").addClass("green").removeClass("red");
    } else {
        $("#allowedCharsCondition").addClass("red").removeClass("green");
    }

    // Enable button if all conditions are satisfied
    if (IdLength && firstCharTemp && validCharacters) {
        $("#button").prop("disabled", false);
        $("#button").removeClass("cursorDisabled");
    } else {
        // $("#button").prop("disabled", true);
        // $("#button").addClass("cursorDisabled");
    }
};

// ==========-------------** User Name Validation **------------------ ==========
// Function to validate User Name contains only alphabets
var validateUserName = () => {
    var userName = $("#s_userName").val();
    var isAlphabetic = true;

    // Loop to check if each character is an alphabet
    for (var i = 0; i < userName.length; i++) {
        var charCode = userName.charCodeAt(i);
        if (!(charCode >= 65 && charCode <= 90) && // A-Z
            !(charCode >= 97 && charCode <= 122)) { // a-z
            isAlphabetic = false;
            break;
        }
    }
    if (isAlphabetic) {
        $("#allowedCharsCondition1").addClass("green").removeClass("red");
    } else {
        $("#allowedCharsCondition1").addClass("red").removeClass("green");
    }
    // user name length
    var tempUserName ;
    if(userName.length > 2 && userName.length < 30){
        tempUserName = true;
        $("#nameLength").addClass("green").removeClass("red");
    }
    else{
        tempUserName = false;
        $("#nameLength").addClass("red").removeClass("green");
    }

    return isAlphabetic;
};
// ============-----------** Password validations **------------==============
$("#xmark-notMatched").hide()
$("#tick-matched").hide()
var validatePassword = () => {
    var password = $("#s_accountPassword").val();
    var reEnterPassword = $("#s_reenterPassword").val();
    var passwordLength;
    if(password.length > 7){
        passwordLength = true;
        $("#passlen8").addClass("green").removeClass("red")
    }
    else{
        passwordLength = false;
        $("#passlen8").addClass("red").removeClass("green");
    }
    //invoking check For Digit function
    var holdDigit = checkForDigit(password)
    var holdDigitThing;
    if(holdDigit){
        holdDigitThing = true
        $("#minOneDigit").addClass("green").removeClass("red")
    }
    else{
        holdDigitThing = false
        $("#minOneDigit").addClass("red").removeClass("green") ;
    }
    //invoking check for 3 lower case letters
    var min3Letter = checkForLowerLetters(password)
    var min3Thing;
    if(min3Letter){
        min3Thing = true;
        $("#min3Lwr").addClass("green").removeClass("red")
    }
    else{
        min3Thing = false;
        $("#min3Lwr").addClass("red").removeClass("green")
    }
    //pasword matched or not in two inputs
    if(password === reEnterPassword){
        $("#tick-matched").show()
        $("#xmark-notMatched").hide()
    }
    else{
        $("#tick-matched").hide()
        $("#xmark-notMatched").show()
    }
}
 // Check if password contains at least one digit
 var checkForDigit = (msg) =>{
    for(var i = 0 ; i < msg.length ; i++){
        var char = msg.charCodeAt(i)
        if(char >= 48 && char <= 57 ){
            return true;
        }
    }
    return false;
}
//function to check min 3 lower case letters
var checkForLowerLetters = (letter) => {
    var count = 0;
    for(var i = 0 ; i < letter.length; i++){
        var Letter3 = letter.charCodeAt(i)
        if(Letter3 >= 97 && Letter3 <= 122){
          count++;
        }
        if(count ==3){
            return true
        }
    }
    return false
}