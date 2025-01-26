function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

// Profile Section Animation
function animateProfileSection() {
  hideSidebar()
  const colLeft = document.querySelector(".col-left");
  const colRight = document.querySelector(".col-right");
  const profileImage = document.querySelector(".profile-image");

  // Reset initial styles
  colLeft.style.opacity = 0;
  colLeft.style.transform = "translateX(-50px)";
  colRight.style.opacity = 0;
  colRight.style.transform = "translateX(50px)";
  profileImage.style.opacity = 0;
  profileImage.style.transform = "scale(0.9)";

  // Animate left column
  setTimeout(() => {
    colLeft.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    colLeft.style.opacity = 1;
    colLeft.style.transform = "translateX(0)";
  }, 200);

  // Animate right column
  setTimeout(() => {
    colRight.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    colRight.style.opacity = 1;
    colRight.style.transform = "translateX(0)";
  }, 400);

  // Animate profile image
  setTimeout(() => {
    profileImage.style.transition =
      "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
    profileImage.style.opacity = 1;
    profileImage.style.transform = "scale(1)";
  }, 600);
}

// About Section Animation
function animateAboutSection() {
  hideSidebar()
  const colLeft = document.querySelector("#about .col-left");
  const headings = colLeft.querySelectorAll("h3");
  const paragraphs = colLeft.querySelectorAll("p");

  colLeft.style.opacity = 0;
  colLeft.style.transform = "translateX(-30px)";
  headings.forEach((heading) => {
    heading.style.opacity = 0;
    heading.style.transform = "translateY(20px)";
  });
  paragraphs.forEach((paragraph) => {
    paragraph.style.opacity = 0;
    paragraph.style.transform = "translateY(20px)";
  });

  setTimeout(() => {
    colLeft.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    colLeft.style.opacity = 1;
    colLeft.style.transform = "translateX(0)";
  }, 200);

  headings.forEach((heading, index) => {
    setTimeout(() => {
      heading.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      heading.style.opacity = 1;
      heading.style.transform = "translateY(0)";
    }, 400 + index * 150);
  });

  paragraphs.forEach((paragraph, index) => {
    setTimeout(() => {
      paragraph.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      paragraph.style.opacity = 1;
      paragraph.style.transform = "translateY(0)";
    }, 600 + index * 150);
  });
}

// Skills Section Animation
function animateSkillsSection() {
  hideSidebar()
  const skillBars = document.querySelectorAll(".skill-bar");
  const skillLabels = document.querySelectorAll(".skill-label");

  skillBars.forEach((bar, index) => {
    bar.style.width = "0"; // Reset width
    setTimeout(() => {
      bar.style.transition = "width 1s ease-in-out";
      bar.style.width = bar.dataset.progress + "%";
    }, index * 200);
  });

  skillLabels.forEach((label, index) => {
    label.style.opacity = 0;
    label.style.transform = "translateY(10px)";
    setTimeout(() => {
      label.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      label.style.opacity = 1;
      label.style.transform = "translateY(0)";
    }, index * 150);
  });
}

// Resume Section Animation
function animateResumeSection() {
  hideSidebar()
  const resumeItems = document.querySelectorAll("#resume .resume-item");
  const resumeButton = document.querySelector("#resume .btn");

  // Initialize styles for items
  resumeItems.forEach((item) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
  });

  // Initialize styles for the button
  resumeButton.style.opacity = 0;
  resumeButton.style.transform = "translateY(20px)";

  // Animate each resume item with a staggered delay
  resumeItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, index * 200); // Staggered delay of 200ms per item
  });

  // Animate the "Download Resume" button after the items
  setTimeout(() => {
    resumeButton.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    resumeButton.style.opacity = 1;
    resumeButton.style.transform = "translateY(0)";
  }, resumeItems.length * 200 + 200); // Button animation starts after items
}

// Trigger the animation on DOMContentLoaded
document.addEventListener("DOMContentLoaded", animateResumeSection);


// Projects Section Animation
function animateProjectCards() {
  hideSidebar()
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// Contact Section Animation
function animateContactSection() {
  hideSidebar()
  const contactItems = document.querySelectorAll(".contact-item");

  contactItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";

    setTimeout(() => {
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// Skills Carousel
function setupSkillsCarousel() {
  hideSidebar()
  const skillsList = document.getElementById("skills-list");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const scrollStep = 300;
  let currentIndex = 0;

  const items = Array.from(skillsList.children);
  const totalItems = items.length;

  if (skillsList.childElementCount === totalItems) {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      skillsList.appendChild(clone);
    });
  }

  const allItems = Array.from(skillsList.children);
  const itemWidth = items[0].offsetWidth;

  skillsList.style.width = `${allItems.length * itemWidth}px`;

  const scrollCarousel = (direction) => {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
      skillsList.style.transition = "none";
      skillsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      setTimeout(() => {
        currentIndex--;
        skillsList.style.transition = "transform 0.5s ease-in-out";
        skillsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }, 10);
    } else if (currentIndex >= totalItems) {
      currentIndex = 0;
      skillsList.style.transition = "none";
      skillsList.style.transform = "translateX(0px)";
      setTimeout(() => {
        currentIndex++;
        skillsList.style.transition = "transform 0.5s ease-in-out";
        skillsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }, 10);
    } else {
      skillsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  };

  prevBtn.addEventListener("click", () => scrollCarousel(-1));
  nextBtn.addEventListener("click", () => scrollCarousel(1));
}

// Run all animations
document.addEventListener("DOMContentLoaded", () => {
  animateProfileSection();
  animateAboutSection();
  animateSkillsSection();
  animateResumeSection();
  animateProjectCards();
  animateContactSection();
  setupSkillsCarousel();
});

function animateSkillsSection() {
  hideSidebar()
  const skillsSection = document.querySelector("#skills");
  const skillsHeading = skillsSection.querySelector("h2");
  const skillsItems = skillsSection.querySelectorAll(".skills-item");

  // Initialize styles for animation
  skillsHeading.style.opacity = 0;
  skillsHeading.style.transform = "translateY(-20px)";
  skillsItems.forEach((item) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
  });

  // Animate heading
  setTimeout(() => {
    skillsHeading.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    skillsHeading.style.opacity = 1;
    skillsHeading.style.transform = "translateY(0)";
  }, 200);

  // Animate skill items with staggered timing
  skillsItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 400 + index * 150); // Staggered delay of 150ms for each item
  });
}

// Trigger the animation on DOMContentLoaded
document.addEventListener("DOMContentLoaded", animateSkillsSection);

document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
