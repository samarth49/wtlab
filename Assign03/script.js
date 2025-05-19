function loadClubs() {
    const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
  
    $("#clubNav").empty();
    $("#clubContent").html("Select a club to view details.");
  
    clubs.forEach((club, index) => {
      if (club && club.name) {
        $("#clubNav").append(`
          <li class="nav-item me-2">
            <button class="nav-link btn btn-outline-secondary" onclick="showClub(${index})">${club.name}</button>
          </li>`);
      }
    });
  }
  
  function showClub(index) {
    const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
    const club = clubs[index];
  
    $("#clubContent").html(`
      <h5>${club.name}</h5>
      <p>${club.description}</p>
      <button class="btn btn-warning btn-sm me-2" onclick="editClub(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteClub(${index})">Delete</button>
    `);
  }
  
  function deleteClub(index) {
    const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
    if (confirm("Are you sure you want to delete this club?")) {
      clubs.splice(index, 1);
      localStorage.setItem("clubs", JSON.stringify(clubs));
      loadClubs();
    }
  }
  
  function editClub(index) {
    const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
    const club = clubs[index];
  
    $("#clubContent").html(`
      <div class="mb-2">
        <label>Club Name</label>
        <input type="text" id="editClubName" class="form-control" value="${club.name}">
      </div>
      <div class="mb-2">
        <label>Description</label>
        <textarea id="editClubDesc" class="form-control">${club.description}</textarea>
      </div>
      <button class="btn btn-success btn-sm me-2" onclick="saveClub(${index})">Save</button>
      <button class="btn btn-secondary btn-sm" onclick="loadClubs()">Cancel</button>
    `);
  }
  
  function saveClub(index) {
    const name = $("#editClubName").val().trim();
    const description = $("#editClubDesc").val().trim();
  
    if (!name || !description) return alert("Both fields are required.");
  
    const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
    clubs[index] = { name, description };
    localStorage.setItem("clubs", JSON.stringify(clubs));
    loadClubs();
  }
  
  $("#addClub").on("click", function () {
    const name = $("#clubName").val().trim();
    const description = $("#clubDesc").val().trim();
  
    if (!name || !description) return alert("Please enter both club name and description.");
  
    const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
    clubs.push({ name, description });
    localStorage.setItem("clubs", JSON.stringify(clubs));
  
    $("#clubName").val("");
    $("#clubDesc").val("");
    loadClubs();
  });
  
  $(document).ready(function () {
    loadClubs();
  });
  