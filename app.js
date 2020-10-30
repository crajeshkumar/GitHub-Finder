const github = new GitHub;
const ui = new UI;

//Get data;
const username = document.querySelector('#username');

//Create an event
username.addEventListener('keyup',(e)=>{
    if(e.target.value != ''){
        const user = e.target.value;
        github.getUsers(user)
            .then(data => {
                if(data.profile.message == "Not Found"){
                    ui.removeProfile();
                    ui.showMessage('No User Found','alert alert-danger');
                }
                else{
                   ui.showProfile(data.profile);
                   //If there is any alert present
                   ui.showRepos(data.repos);
                   ui.removeAlert();
                }
            });
    }else{
        ui.removeProfile();
    }
});

