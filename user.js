const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log('this is params', params);

const userDiv = document.getElementById('userImg')
const userImg =  document.createElement('img')
userImg.src = params.image;
userDiv.appendChild(userImg);