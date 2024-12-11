const url = "https://randomuser.me/api/?results=20";

// Function to create a star rating HTML dynamically
const generateRating = () => {
  const filledStars = Math.floor(Math.random() * 6); // Randomize stars (0-5)
  const emptyStars = 5 - filledStars;
  return `${'<i class="fas fa-star"></i>'.repeat(filledStars)}
          ${'<i class="far fa-star"></i>'.repeat(emptyStars)}`;
};

// Function to generate a card for each user
const createProfileCard = (user) => {
  return `
    <div class="box">
      <div class="image">
        <img src="${user.picture.large}" alt="${user.name.first}">
      </div>
      <div class="name_job">${user.name.first} ${user.name.last}</div>
      <div class="rating">${generateRating()}</div>
      <p>${user.location.city}, ${user.location.country}</p>
      <div class="btns">
       
      </div>
    </div>
  `;
};

// Fetching API data and populating cards
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const profileContainer = document.getElementById("profileContainer");
    const profilesHTML = data.results.map(createProfileCard).join("");
    profileContainer.innerHTML = profilesHTML;
  })
  .catch((error) => console.error("Error fetching data:", error));
