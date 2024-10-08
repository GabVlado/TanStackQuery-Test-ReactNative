

const headers = {

    accept: "application/json",
    Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlODM0ZmVmZjBmMjMyZThkM2RmNmYyMjk4MTU0YyIsIm5iZiI6MTcyNDE5NzE5NC4xODgwNjEsInN1YiI6IjYyM2JkMjkzOTQ1YzIwMDA5MDIyMDcxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbeMZsg1rrRtoiTbwmJfrSdN_Lazr_izEr5ARQkyHyE",

}


export const fetchTopRatedMovies = async ({pageParam}) => {
  console.log(pageParam)
  const url =  `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;
  const options = {
    method: "GET",
    headers,
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  const json = await res.json();
  return json.results;
};

export const fetchMovie = async (id: number) => {

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers,
  };


  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  const json = await res.json();
  return json;

};
