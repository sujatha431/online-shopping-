$(document).ready(() => {
    // Check if there are saved user details in localStorage
    var savedDetails = localStorage.getItem('userDetails');
    if(savedDetails != null){
        var userDetails = JSON.parse(savedDetails);

        // Set the input fields to the saved details
        $('#userId').val(userDetails.userId);
        $('#accountPassword').val(userDetails.accountPassword);

        if(userDetails.rememberMe){
            $('#exampleCheck1').prop('checked', true);
        }
    }
        $('#button').on('click', () => {
            var userId = $('#userId').val();
            var accountPassword = $('#accountPassword').val();
            var rememberMe = $('#exampleCheck1').is(':checked');
            if(userId && accountPassword){
                $('#invalidMsg').text('Login Successful');

                if(rememberMe){
                    var userData = {
                        userId : userId,
                        accountPassword : accountPassword,
                        rememberMe: rememberMe
                    };
                    localStorage.setItem('userDetails', JSON.stringify(userData));
                } else{
                    localStorage.removeItem('userDetails');
                }
            } else {
                $('#invalidMsg').text('Please fill in all fields');
            }

            

        })

});