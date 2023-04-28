import styled from 'styled-components'
import {useState} from 'react'
import {H2} from '../../../style/headings.js'
import {Button} from '../../../style/buttons.js'


const MovieElementListContainer = styled.li`
  list-style: none;
  animation: fadeSlideIn;
  animation-duration: 200ms;
  outline: 1px solid ${props => props.theme.mainColor};
  padding: 1rem;
  position: relative;
  transition: all 200ms ease;
  margin-right: ${props => props.active ? '0' : '2rem'};
  background: ${props => props.active ? props.theme.mainColor : 'inherit'};
  outline-color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};

  & > * {
    color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};
  }
`

const ButtonsContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  gap: 1rem;
  background: transparent;
`

const EpisodeNumberContainer = styled.p`
  position: absolute;
  right: 1rem;
  top: 0;
  font-weight: bold;
  margin: 0;
  opacity: 0.5;
  transition: font-size 300ms ease;
  pointer-events: none;
  font-size: ${props => props.showDetails ? '15rem' : '5rem'};
  background: transparent;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: ${props => props.theme.size_16px} 0;
  background: transparent;
    
  & > * {
    background: transparent;
    color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};
  }
`

const DetailsTitle = styled.p`
  font-size: ${props => props.theme.font_base};
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  background: transparent;
  color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};
`


const MovieElement = ({movie, selectedMovie, setSelectedMovie}) => {
    const [showDetails, setShowDetails] = useState(false)

    const movieIsActive = selectedMovie?.episode_id === movie.episode_id
    const toggleShowStarships = () => {
        if(selectedMovie?.episode_id === movie.episode_id){
            setSelectedMovie(null)
        } else {
            setSelectedMovie(movie)
        }
    }

    return (
        <MovieElementListContainer active={movieIsActive}>
            <H2>{movie.title}</H2>
            <ButtonsContainer>
                <Button onClick={() => setShowDetails((prevState) => !prevState)}>{showDetails ? 'less' : 'more'}</Button>
                <Button onClick={toggleShowStarships}>Show Starships</Button>
            </ButtonsContainer>
            <EpisodeNumberContainer showDetails={showDetails}>{movie.episode_id}</EpisodeNumberContainer>
            {showDetails &&
                <>
                    <DetailsContainer active={movieIsActive} >
                        <DetailsTitle active={movieIsActive} >Release Date</DetailsTitle>
                        <p>{movie.release_date}</p>
                    </DetailsContainer>
                    <DetailsContainer active={movieIsActive}>
                        <DetailsTitle active={movieIsActive}>Opening Crawl</DetailsTitle>
                        <p>{movie.opening_crawl}</p>
                    </DetailsContainer>
                </>
            }
        </MovieElementListContainer>
    )
}

export default MovieElement