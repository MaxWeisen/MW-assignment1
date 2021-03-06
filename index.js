
// Fetch random users on page load
const usersList = [];

function fetchUsers() {
  fetch('https://randomuser.me/api/?results=100', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      fetch('https://picsum.photos/v2/list?limit=100', {
        method: 'GET',
      })
      .then((img) => img.json())
      .then((img) => {
        console.log(img)
        // Once we have our user data from the API, create cards for each user.
        for (let i = 0; i < 100; i++) {
          // Get the div in document to append to
          const userGrid = document.getElementById('users')
          // Creat new div element
          const userCard = document.createElement('a');
          // Set a className for the card to easily style all cards with a single CSS rule
          userCard.setAttribute('class', 'userCard');
          // Create an image element to append to card div
          const userImg = document.createElement('img');
          // Add a source attribute to the img element
          userImg.src = img[i].url
          // Append the img element to the card div
          userCard.appendChild(userImg)
          // Create a h3 for the username below profile pic
          const userName = document.createElement('h3');
          // Assign inner text to the username of server response
          userName.innerText = `${res.results[i].login.username}`;
          // Append the username to our card element
          userCard.appendChild(userName);
          // Create a h4 for the age of our user
          const userAge = document.createElement('h4');
          // Assign inner text of age to the server response age
          userAge.innerText = `Age: ${res.results[i].dob.age}`;
          // Append the userAge to the card element
          userCard.appendChild(userAge)
          // Create a <p> element for the description of each individual 
          const userDesc = document.createElement('p');
          // Assign the inner text of our description to the email of the user as a placeholder
          userDesc.innerText = `Description: ${res.results[i].email}`;
          // Append the userDesc to our card element
          userCard.appendChild(userDesc);
          userCard.setAttribute('id', `${res.results[i].dob.age}`)
          userCard.setAttribute('href', `user.html?image=${encodeURIComponent(img[i].url)}`);
          userCard.addEventListener('onClick', function userFocus() {

          })
          // Finally append all the cards to the grid
          userGrid.appendChild(userCard)
          // Add individual userCard to an array for sorting later
          usersList.push(userCard);
        }
      })
    })
}

fetchUsers();



function sortByAge() {
  let toSort = document.getElementById('users').children;
  toSort = Array.prototype.slice.call(toSort, 0);

  toSort.sort((a, b) => {
    let aOrd = +a.id;
    let bOrd = +b.id;
    return (aOrd > bOrd) ? 1 : -1;
  });

  let parent = document.getElementById('users');
  parent.innerHTML = "";

  for(let i = 0, l = toSort.length; i < l; i++) {
    parent.appendChild(toSort[i]);
  }
}

function sortByUser() {
  let toSort = document.getElementById('users').children;
  toSort = Array.prototype.slice.call(toSort, 0);

  toSort.sort((a, b) => {
    let aOrd = a.childNodes[1].innerText;
    let bOrd = b.childNodes[1].innerText;
    return (aOrd > bOrd) ? 1 : -1;
  });

  let parent = document.getElementById('users');
  parent.innerHTML = "";

  for(let i = 0, l = toSort.length; i < l; i++) {
    parent.appendChild(toSort[i]);
  }
}

function darkTheme() {
  document.getElementById('body').style.background = '#202020';
  const userCards = document.getElementsByClassName('userCard');
  for (let cards of userCards) {
    cards.style.backgroundColor = '#404040';
    cards.style.color = '#FFFFFF'
  }
}

function lightTheme() {
  document.getElementById('body').style.background = '#FFFFFF';
  const userCards = document.getElementsByClassName('userCard');
  for (let cards of userCards) {
    cards.style.backgroundColor = '#C0C0C0';
    cards.style.color = '#303030'
  }
}


