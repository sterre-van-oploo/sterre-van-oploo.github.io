//THIS IS THE DUTCH ONE!!!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener("DOMContentLoaded", function() {
    const starCount = 45; // Number of stars to create
    const shootingStarInterval = 8000; // Interval between shooting stars in milliseconds
  
    function createStar() {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      document.getElementById("stars").appendChild(star);
    } 
  
    function createShootingStar() {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      
      document.body.appendChild(shootingStar);

      setTimeout(() => {
        document.body.removeChild(shootingStar);
      }, 3000);
    }
  
    function generateStars() {
      for (let i = 0; i < starCount; i++) {
        createStar();
      }
    }
  
    generateStars();
    setTimeout(createShootingStar, Math.random() * shootingStarInterval); // Initial shooting star
    // setInterval(createShootingStar, (Math.random() * shootingStarInterval));
  
    randomizeShootingStarInterval
    function randomizeShootingStarInterval() {
      const interval = Math.random() * shootingStarInterval;
      setTimeout(function() {
        createShootingStar();
        randomizeShootingStarInterval();
      }, interval);
    }
  
    randomizeShootingStarInterval();

    // document.getElementsByClassName("projects");  



// Helper function to trigger animation and redirect
function animateAndRedirect(element, url) {
  // Check if the element already has the 'clicked' class
  if (!element.classList.contains('clicked')) {
      // Add the 'clicked' class to trigger the animation
      element.classList.add('clicked', 'clicked-disabled');
      
      // Wait for the animation to finish (4 seconds)
      setTimeout(() => {
          // Redirect to the target page 
          window.location.href = url;
      }, 1500);  // Match the animation duration
  }
}

// Get all the divs
const projectsDiv = document.querySelector('.projects');
const aboutMeDiv = document.querySelector('.about-me');
const timelineDiv = document.querySelector('.timeline');

// Add event listeners to each div, with respective URLs for redirection
projectsDiv.addEventListener('click', function() {
  animateAndRedirect(projectsDiv, './my-projects.html');
});

aboutMeDiv.addEventListener('click', function() {
  animateAndRedirect(aboutMeDiv, './about-me.html');
});

timelineDiv.addEventListener('click', function() {
  animateAndRedirect(timelineDiv, './timeline.html');
});


});



  