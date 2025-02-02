import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Button } from "../../views/button";
import MoviesService from "../../api/MovieService";
import MovieCard from "../../components/MovieCard";

function Main() {
  const { data } = useQuery({
    queryKey: ["getMoviesHome"],
    queryFn: () => MoviesService.getMovies({
      params: { createdAt: "desc", page: 1, pageSize: 9 },
    }),
  });

  console.log("ff", data)
  const { movies } = data || {};

  if (!Array.isArray(movies) || movies?.length === 0) {
    return null;
  }

  return (
    <main className="py-10">
      <h2 className="text-4xl">Последние фильмы</h2>
      <div className="mt-10 grid grid-cols-3 gap-10">
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>

      <div className="w-full mt-10 flex justify-end">
        <Link to="/movies">
          <Button className="bg-blue-500 hover:bg-blue-600">Показать еще</Button>
        </Link>
      </div>
    </main>
  );
}

export default Main;
