export const fetchTopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlODM0ZmVmZjBmMjMyZThkM2RmNmYyMjk4MTU0YyIsIm5iZiI6MTcyNDE5NzE5NC4xODgwNjEsInN1YiI6IjYyM2JkMjkzOTQ1YzIwMDA5MDIyMDcxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbeMZsg1rrRtoiTbwmJfrSdN_Lazr_izEr5ARQkyHyE'
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  const json = await res.json();
  return json.results;
};
