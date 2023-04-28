import {ColumnSection} from '../../style/containers.js'
import {ColumnH1} from '../../style/headings.js'
import MovieElement from './MovieElement/index.jsx'


const MovieSection = ({movies, selectedMovie, setSelectedMovie}) => {
    return (
        <ColumnSection>
            <ColumnH1>Movies</ColumnH1>
            <ul>
                {movies.map((movie) => <MovieElement key={movie.title} movie={movie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>)}
            </ul>
        </ColumnSection>
    )
}

export default MovieSection
