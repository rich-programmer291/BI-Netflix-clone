//api key from TMDB
const api = "api_key=88a654e6fa764c71ad74401e8550a125";

const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w185";

const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language-en-US`,
    fetchNeflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchSciFi:`${base_url}/discover/movie?${api}&with_genres=878`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNeflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        console.log(data.results);

        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById('banner');
        var banner_title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");

        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";

        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    })

fetch(requests.fetchNeflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

fetch(requests.fetchTrending)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("trendingrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "Top Rated";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

fetch(requests.fetchSciFi)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("scifirow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "Science Fiction Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

fetch(requests.fetchActionMovies)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("actionrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "Action Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

fetch(requests.fetchComedyMovies)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("comedyrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "Comedy Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

fetch(requests.fetchHorrorMovies)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("horrorrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "Horror Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

fetch(requests.fetchRomanceMovies)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("romancerow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "Romance Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

fetch(requests.fetchDocumentaries)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("documentariesrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerText = "Documentaries";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

let search__btn = document.getElementById('search_btn');
let query = document.getElementById('search_text');

search__btn.addEventListener('click',(e)=>{
    let search = query.value;
    const search_url = `${base_url}/search/movie?${api}&language=en-US&page=1&query=${search}`;
    
fetch(search_url)
    .then((res) => res.json())
    
    .then((data) => {
        console.log(data.results[0]);

        var setMovie = data.results[0];

        var banner = document.getElementById('banner');
        var banner_title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");

        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";

        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.original_title;
    });
});