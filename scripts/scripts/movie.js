const movie = JSON.parse(localStorage.getItem("selectedMovie")) || { title: "Unknown" };
document.getElementById("movieTitle").textContent = movie.title;
document.getElementById("movieYear").textContent = `Year: ${movie.year}`;

const reviewBox = document.getElementById("review");
const ratingBox = document.getElementById("rating");

const savedData = JSON.parse(localStorage.getItem(`review_${movie.title}`));
if (savedData) {
  reviewBox.value = savedData.review;
  ratingBox.value = savedData.rating;
}

document.getElementById("saveBtn").onclick = () => {
  const review = reviewBox.value;
  const rating = ratingBox.value;
  localStorage.setItem(`review_${movie.title}`, JSON.stringify({ review, rating }));
  alert("Review saved!");
};
