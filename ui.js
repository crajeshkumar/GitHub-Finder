class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }
    showProfile(user){
        this.profile.innerHTML = `<div class="row">
        <div class=" col-md-3">
          <img src="${user.avatar_url}" alt="User Profile" class="img-thumbnail">
          <a href="${user.html_url}" class="btn btn-primary btn-block mx-2 my-4" target="_block" style="width: auto;">
            View Profile
          </a>
        </div>
        <div class="col-md-9">
          <div class="container">
            <div class="row text-center">
              <div class="col border rounded p-2 mx-1">
                Public Repos<span class="badge badge-secondary ml-1">${user.public_repos}</span>
              </div>
              <div class="col border rounded p-2 mx-1">
                Public Gists<span class="badge badge-secondary ml-1">${user.public_gists}</span>
              </div>
              <div class="col border rounded p-2 mx-1">
                Followers<span class="badge badge-secondary ml-1">${user.followers}</span>
              </div>
              <div class="col border rounded p-2 mx-1">
                Following<span class="badge badge-secondary ml-1">${user.following}</span>
              </div>
            </div>
            <div class="mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name : ${user.name}</li>
                <li class="list-group-item">Website/Blog : ${user.blog}</li>
                <li class="list-group-item">Location : ${user.location}</li>
                <li class="list-group-item">Member Since : ${user.created_at}</li>
                <li class="list-group-item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1 class="page-heading mb-3">Latest Repository</h1>
      <div id="repos"></div>`;
    }
    showMessage(msg,classname){
        this.removeAlert();
        const div = document.createElement('div');
        div.className = classname;
        div.appendChild(document.createTextNode(msg));
        //parent Element
        const container = document.querySelector('.searchContainer');

        //Insert before element
        const search = document.querySelector('.search');
        container.insertBefore(div,search);   
        setTimeout(() => {
          this.removeAlert();
        },3000);
    }
    removeAlert(){
      const alertElmt = document.querySelector('.alert');
      if(alertElmt){
        alertElmt.remove();
      }
    }
    removeProfile(){
        document.getElementById('profile').innerHTML='';
    }
    showRepos(repos){
      let output = '';
      repos.forEach((repo)=>{
        output += `<div class="card card-body mb-2 p-3">
        <div class="row ">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col border rounded p-2 mx-1">
            Stars <span class="badge badge-secondary ml-1">${repo.stargazers_count}</span>
          </div>
          <div class="col border rounded p-2 mx-1">
            Watchers <span class="badge badge-secondary ml-1">${repo.watchers_count}</span>
          </div>
          <div class="col border rounded p-2 mx-1">
            Forks <span class="badge badge-secondary ml-1">${repo.forks_count}</span>
          </div>
        </div>
      </div>`;
      });
      document.querySelector('#repos').innerHTML = output;
    }
    
}