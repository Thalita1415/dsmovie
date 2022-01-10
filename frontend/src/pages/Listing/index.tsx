
import Pagination from "../../componentes/Pagination";
import MovieStars from "../../componentes/MovieScore";
import MovieScore from "../../componentes/MovieScore";
import MovieCard from "../../componentes/MovieCard";

function Listing() {

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                        <MovieCard />
                    </div><div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                        <MovieCard />
                    </div><div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                        <MovieCard />
                    </div><div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                        <MovieCard />
                    </div>
                </div>
            </div>

        </>


    );
}

export default Listing;