var loadSeletedPage = (type) => {
    var templateUrl;
    switch(type) {
        case 'login':
            $("#logoutBlock").hide();
            $("#loginBlock").show();
            templateUrl = 'templates/login.htm';
            break;
        case 'pdetails':
            $("#logoutBlock").show();
            $("#loginBlock").hide();
            templateUrl = 'templates/productDetails.htm';
            break;
    }
    axios.get(templateUrl).then((result) => {
        
        $("main").html(result.data)
        if (type == 'pdetails') {
            console.log("inside");
            loadProductDetails();
        }
    }).catch((err) => {
        
    });
    
}

var loadOnloadPage = () => {
    axios.get('/check/isValidSession').then((response) => {
        console.log(response);
        if (response.data.isUserLoggedIn) {
            loadSeletedPage('pdetails');
        } else {
            loadSeletedPage('login');
        }
    });
}
loadOnloadPage();

var logoutUserSession = () => {
    loadSeletedPage('login'); 
}

var logoutUser = () => {
    axios.get('/user/logout').then(() => {
        loadSeletedPage('login');
    })
}