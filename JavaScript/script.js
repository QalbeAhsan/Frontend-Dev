// Sample movie data
const movies = [
    "The Matrix",
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Avatar",
    "Titanic",
    "Jurassic Park",
    "Star Wars",
    "The Avengers",
    "Forrest Gump"
  ];
  
  // Get elements from the DOM
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const resultsDiv = document.getElementById("results");
  
  // Function to handle search
  function searchMovies() {
    // Clear previous results
    resultsDiv.innerHTML = "";
  
    // Get the search term and convert it to lowercase
    const searchTerm = searchInput.value.toLowerCase();
  
    // Filter movies that match the search term
    const filteredMovies = movies.filter(movie =>
      movie.toLowerCase().includes(searchTerm)
    );
  
    // Display results
    if (filteredMovies.length > 0) {
      filteredMovies.forEach(movie => {
        const p = document.createElement("p");
        p.textContent = movie;
        resultsDiv.appendChild(p);
      });
    } else {
      resultsDiv.textContent = "No movies found.";
    }
  }
  
  // Add event listener to the search button
  searchButton.addEventListener("click", searchMovies);