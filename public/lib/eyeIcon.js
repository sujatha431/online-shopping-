var togglePwd = (passwordSelector, iconSelector) => {   
    var passwordField = $(passwordSelector);
    var togglePassword = $(iconSelector);
    // Toggle the password visibility (from password to text and vice versa)
    var currentType = passwordField.attr("type");
    var newType = currentType === "password" ? "text" : "password";
    passwordField.attr("type", newType);
    // Toggle the eye icon (bi-eye-fill for closed eye, bi-eye-slash-fill for open eye)
    togglePassword.toggleClass("bi-eye-fill bi-eye-slash-fill");
};
