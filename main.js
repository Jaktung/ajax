document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.querySelector("#avatar");
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repositories = document.querySelector('#rep');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const profileLink = document.querySelector('#link');

    fetch('https://api.github.com/users/Jaktung')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url;
            name.innerHTML = json.name;
            username.innerHTML = json.login;
            repositories.innerHTML = json.public_repos;
            followers.innerHTML = json.followers;
            following.innerHTML = json.following;
            profileLink.href = json.html_url
        })
})