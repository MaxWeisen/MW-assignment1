
// Fetch random users on page load
const usersList = [];

function fetchUsers() {
  fetch('https://randomuser.me/api/?results=100', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('this is response from user server', res);
      // Once we have our user data from the API, create cards for each user.
      for (let i = 0; i < 100; i++) {
        // Get the div in document to append to
        const userGrid = document.getElementById('users')
        // Creat new div element
        const userCard = document.createElement('div');
        // Set a className for the card to easily style all cards with a single CSS rule
        userCard.setAttribute('class', 'userCard');
        // Create an image element to append to card div
        const userImg = document.createElement('img');
        // Add a source attribute to the img element
        userImg.src = res.results[i].picture.medium
        // Append the img element to the card div
        userCard.appendChild(userImg)
        // Create a h3 for the username below profile pic
        const userName = document.createElement('h3');
        // Assign inner text to the username of server response
        userName.innerText = `Username: ${res.results[i].login.username}`;
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
        // Finally append all the cards to the grid
        userGrid.appendChild(userCard)
      }
    })
}

fetchUsers();
