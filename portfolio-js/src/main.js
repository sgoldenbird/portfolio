import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuIcon");
  const sidebar = document.querySelector(".sidebar");

  const menu = document.createElement("ul");
  menu.classList.add("menu");
  const menuItems = [
    { name: "Home", anchor: "#home" },
    { name: "About", anchor: "#about" },
    { name: "Skills", anchor: "#skills" },
    { name: "Projects", anchor: "#projects" },
    { name: "Study", anchor: "#study" },
    { name: "Contact", anchor: "#contact" },
  ];
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.anchor;
    a.textContent = item.name;
    li.appendChild(a);
    menu.appendChild(li);
  });
  sidebar.appendChild(menu);

  function menuToggle() {
    sidebar.classList.toggle("active");
    if (menuIcon.name === "menu-outline") {
      menuIcon.name = "close-circle-outline";
    } else {
      menuIcon.name = "menu-outline";
    }
  }

  menuIcon.addEventListener("click", menuToggle);
  sidebar.addEventListener("click", menuToggle);

  const sections = ["home", "about", "skills", "projects", "study", "contact"];
  loadSectionsInOrder(sections, 0);
});

function loadSectionsInOrder(sections, index) {
  if (index < sections.length) {
    const section = sections[index];
    fetch(`/html/${section}.html`)
      .then((response) => response.text())
      .then((html) => {
        document
          .getElementById("sections")
          .insertAdjacentHTML("beforeend", html);
        if (section === "projects") {
          initializeProjects();
        }
        loadSectionsInOrder(sections, index + 1);
      });
  }
}

function initializeProjects() {
  const projects = [
    { name: "Web Shop", image: "/assets/web_shop.jpg", alt: "Web Shop" },
    {
      name: "Fresh Trash",
      image: "/assets/fresh_trash.jpg",
      alt: "Fresh Trash",
    },
    {
      name: "Project 03",
      image: "/assets/project_03.jpg",
      alt: "Project 03",
    },
    {
      name: "Project 04",
      image: "/assets/project_04.jpg",
      alt: "Project 04",
    },
    {
      name: "Project 05",
      image: "/assets/project_05.jpg",
      alt: "Project 05",
    },
    {
      name: "Project 06",
      image: "/assets/project_06.jpg",
      alt: "Project 06",
    },
  ];

  const projectContainer = document.getElementById("projectsContent");
  if (projectContainer) {
    projects.forEach((project) => {
      const projectHTML = `
        <div class="projectsBox">
          <div class="imgBox">
            <img src="${project.image}" alt="${project.alt}" />
          </div>
          <div class="textBox">
            <h3>${project.name}</h3>
          </div>
        </div>
      `;
      projectContainer.insertAdjacentHTML("beforeend", projectHTML);
    });
  } else {
    console.error("Project container not found!");
  }
}
