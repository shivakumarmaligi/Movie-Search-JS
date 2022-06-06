let input = document.querySelector("#input");
input.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    let value = e.target.value;
    SearchMovies(value);
  }
});

async function SearchMovies(movies) {
  let api_key = "c934843b";
  let data = await window.fetch(
    `http://www.omdbapi.com/?s=${movies}&apikey=${api_key}`
  );
  const finalData = await data.json();
  let result = finalData.Search;
  let output = [];
  for (let movie of result) {
    output += `
        <div class="flex-item">
        <figure>
        <img src=${movie.Poster} alt=${movie.Title}/>
        </figure>
        <h1>${movie.Title}</h1>
        <p>Year:${movie.Year}</p>
        <a href="https://www.imdb.com/title/${movie.imdbID}/" 
        target="_blank">Watch</a>
        </div>`;
  }
  document.getElementById("template").innerHTML = output;
}
