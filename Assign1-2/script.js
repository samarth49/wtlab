function loadProjects() {
    const courseProjects = JSON.parse(localStorage.getItem("courseProjects")) || [];
    const ediProjects = JSON.parse(localStorage.getItem("ediProjects")) || [];
  
    $("#courseNav").empty();
    $("#ediNav").empty();
    $("#courseContent").html("Select a project to view details.");
    $("#ediContent").html("Select a project to view details.");
  
    courseProjects.forEach((proj, index) => {
      if (proj && proj.title) {
        $("#courseNav").append(`
          <li class="nav-item me-2">
            <button class="nav-link btn btn-outline-primary" onclick="showProject('course', ${index})">${proj.title}</button>
          </li>`);
      }
    });
  
    ediProjects.forEach((proj, index) => {
      if (proj && proj.title) {
        $("#ediNav").append(`
          <li class="nav-item me-2">
            <button class="nav-link btn btn-outline-success" onclick="showProject('edi', ${index})">${proj.title}</button>
          </li>`);
      }
    });
  }
  
  function showProject(type, index) {
    const key = type === "course" ? "courseProjects" : "ediProjects";
    const contentBox = type === "course" ? "#courseContent" : "#ediContent";
    const projects = JSON.parse(localStorage.getItem(key)) || [];
    const proj = projects[index];
  
    $(contentBox).html(`
      <h5>${proj.title}</h5>
      <p>${proj.description}</p>
      <button class="btn btn-warning btn-sm me-2" onclick="editProject('${type}', ${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteProject('${type}', ${index})">Delete</button>
    `);
  }
  
  function deleteProject(type, index) {
    const key = type === "course" ? "courseProjects" : "ediProjects";
    const projects = JSON.parse(localStorage.getItem(key)) || [];
    if (confirm("Are you sure you want to delete this project?")) {
      projects.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(projects));
      loadProjects();
    }
  }
  
  function editProject(type, index) {
    const key = type === "course" ? "courseProjects" : "ediProjects";
    const contentBox = type === "course" ? "#courseContent" : "#ediContent";
    const projects = JSON.parse(localStorage.getItem(key)) || [];
    const proj = projects[index];
  
    $(contentBox).html(`
      <div class="mb-2">
        <label>Title</label>
        <input type="text" id="editTitle" class="form-control" value="${proj.title}">
      </div>
      <div class="mb-2">
        <label>Description</label>
        <textarea id="editDesc" class="form-control">${proj.description}</textarea>
      </div>
      <button class="btn btn-success btn-sm me-2" onclick="saveProject('${type}', ${index})">Save</button>
      <button class="btn btn-secondary btn-sm" onclick="loadProjects()">Cancel</button>
    `);
  }
  
  function saveProject(type, index) {
    const key = type === "course" ? "courseProjects" : "ediProjects";
    const projects = JSON.parse(localStorage.getItem(key)) || [];
  
    const newTitle = $("#editTitle").val().trim();
    const newDesc = $("#editDesc").val().trim();
  
    if (!newTitle || !newDesc) {
      alert("Both fields are required.");
      return;
    }
  
    projects[index] = { title: newTitle, description: newDesc };
    localStorage.setItem(key, JSON.stringify(projects));
    loadProjects();
  }
  
  $("#addProject").on("click", function () {
    const title = $("#projectTitle").val().trim();
    const desc = $("#projectDesc").val().trim();
    const type = $("#projectType").val();
  
    if (!title || !desc) return alert("Please fill in both title and description.");
  
    const project = { title, description: desc };
    const key = type === "course" ? "courseProjects" : "ediProjects";
    const projects = JSON.parse(localStorage.getItem(key)) || [];
  
    projects.push(project);
    localStorage.setItem(key, JSON.stringify(projects));
  
    $("#projectTitle").val("");
    $("#projectDesc").val("");
    loadProjects();
  });
  
  $(document).ready(function () {
    loadProjects();
  });
  