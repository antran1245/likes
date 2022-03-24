//Part 1
// Some user
let userLike = 0;
function someUser() {
    let user = document.querySelector("#some-user-like");
    userLike += 1;
    user.innerHTML = userLike;
}

//Part 2
//users in array
let users = ["#neil-m-like", "#nichole-k-like", "#jim-r-like"]; 
//like(s) corresponding to user location in the users array
let numOfLike = [0,0,0];
function increaseLike(index) {
    let user = document.querySelector(users[index]);
    numOfLike[index] += 1;
    user.innerHTML = numOfLike[index];
}