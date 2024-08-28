export const addMovieToWatchList = async (movieId: number) => {

  const url = "https://api.themoviedb.org/3/account/12127947/watchlist";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlODM0ZmVmZjBmMjMyZThkM2RmNmYyMjk4MTU0YyIsIm5iZiI6MTcyNDcyMTQ4MC43MjA3MTMsInN1YiI6IjYyM2JkMjkzOTQ1YzIwMDA5MDIyMDcxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YteT462SP94WlyfgSRuxmOWt337elweW6VFKRU6ODTc",
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieId,
      watchlist: true,
    }),
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  const json = await res.json();
  return json;

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error("error:" + err));
};
