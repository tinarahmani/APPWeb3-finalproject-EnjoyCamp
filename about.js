
document.querySelectorAll('#dropbtn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const dropdownContent = button.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
 });

 // function to show form
 document.querySelector("#apply-button").onclick = function() {
    document.querySelector("#apply").style.display = "block";
 }
 // function to show confirmation
 document.querySelector("#send").onclick = function() {
    document.querySelector("#apply").style.display = "none";
    document.querySelector("#confirmation").style.display = "block";
 }
 let teamMembers = [
    {
        name : "Zuhal Sadat",
        src : "s4.jpg",
        bio1 : "Navigator",
        bio2 : "Responsible for route planning and map reading"
    },
    {
        name : "Mursal Sattari",
        src : "s5.jpg",
        bio1 : "Participants",
        bio2 : "Active members who follow the plan and contribute to team activities"
    }
 ];
 // Function to randomize the content
function randomizeTeam() {
    // Select a random member
    const randomIndex = Math.floor(Math.random() * teamMembers.length);
    const randomMember = teamMembers[randomIndex];
  
    // Update the content dynamically
    document.querySelector(".img-card").src = randomMember.src;
    document.querySelector(".img-card").alt = randomMember.name;
    document.querySelector(".name").textContent = randomMember.name;
    document.querySelector(".bio1").textContent = randomMember.bio1;
    document.querySelector(".bio2").textContent = randomMember.bio2;
  }
  
  // Add event listener to the "Next" button
  document.getElementById("next").addEventListener("click", randomizeTeam);