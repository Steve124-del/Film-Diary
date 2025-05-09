// Check login
if (!localStorage.getItem("loggedInUser") && location.pathname.includes("index.html")) {
  location.href = "login.html";
}

const movies = [
  { id: "johnwick", title: "John Wick: Chapter 4", year: 19919 },
  { id: "superpets", title: "DC League of Super-Pets", year: 2022 },
  { id: "marvels", title: "The Marvels", year: 2023 },
  { id: "trolls", title: "Trolls Band Together", year: 2023 },
];

// Show movies on index.html
if (document.getElementById("movieList")) {
  const movieList = document.getElementById("movieList");
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `<h3>${movie.title} (${movie.year})</h3>
                     <button onclick="viewMovie('${movie.id}')">Review</button>`;
    movieList.appendChild(div);
  });
}

function viewMovie(id) {
  localStorage.setItem("currentMovie", id);
  location.href = "movie.html";
}

// Show movie + review page
if (document.getElementById("movieDetails")) {
  const movieId = localStorage.getItem("currentMovie");
  const movie = movies.find(m => m.id === movieId);
  const user = localStorage.getItem("loggedInUser");
  const saved = JSON.parse(localStorage.getItem(`${movieId}_${user}`)) || {};

  const container = document.getElementById("movieDetails");
  container.innerHTML = `
    <h2>${movie.title} (${movie.year})</h2>
    <p><strong>Your Rating (1–5):</strong></p>
    <input type="number" id="rating" value="${saved.rating || ""}" min="1" max="5"><br><br>
    <textarea id="review" placeholder="Your thoughts..." rows="5">${saved.review || ""}</textarea><br><br>
    <button onclick="saveReview('${movie.id}')">Save</button>
  `;
}

function saveReview(movieId) {
  const rating = document.getElementById("rating").value;
  const review = document.getElementById("review").value;
  const user = localStorage.getItem("loggedInUser");
  localStorage.setItem(`${movieId}_${user}`, JSON.stringify({ rating, review }));
  alert("Saved!");
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    location.href = "login.html";
  });
}
