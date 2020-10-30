class GitHub{
    constructor(){
        this.client_id = '3edfdd0020b46d87b92c';
        this.client_secret = '8d28cf732c72ee8a03477f95e36194300fffd2d9';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUsers(user){
        const responseProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=${user.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profileData = await responseProfile.json();
        const reposData = await responseRepos.json();
        return{
            profile : profileData,
            repos : reposData
        }
    }

}