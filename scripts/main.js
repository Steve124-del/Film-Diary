const movieList = document.getElementById("movieList");
const movies = [
  { title: "John Wick: Chapter 4", year: 2023 },
  { title: "DC League of Super-Pets", year: 2022 },
  { title: "The Marvels", year: 2023 },
  { title: "Trolls Band Together", year: 2023 }
];

movies.forEach((movie, index) => {
  const li = document.createElement("li");
  li.textContent = `${movie.title} (${movie.year})`;
  li.onclick = () => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    window.location.href = "movie.html";
  };
  movieList.appendChild(li);
});

document.getElementById("logoutBtn").onclick = () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
};
