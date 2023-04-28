import Header from './components/Header/index.jsx'
import {useEffect, useState} from 'react'
import {swapiAxios} from './axios/axiosInstance.js'
import styled from 'styled-components'
import MovieSection from './components/MovieSection/index.jsx'
import StarshipSection from './components/StarshipSection/index.jsx'
import PilotSection from './components/PilotSection/index.jsx'
import FavouritePilots from './components/FavouritePilots/index.jsx'


const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

function App(){
    const [movies, setMovies] = useState([])
    const [starships, setStarships] = useState([])
    const [pilots, setPilots] = useState([])

    const [selectedMovie, setSelectedMovie] = useState(null)
    const [selectedStarship, setSelectedStarship] = useState(null)

    const [favourites, setFavourites] = useState([])

    const isAlreadyInFavourites = (pilot) => {
        return favourites.includes(pilot)
    }

    const addFavourite = (pilot) => {
        if(!isAlreadyInFavourites(pilot)){
            setFavourites([...favourites, pilot])
        }
    }

    const removeFavourite = (pilot) => {
        if(isAlreadyInFavourites(pilot)){
            const newFavourites = favourites.filter((favourite) => favourite !== pilot)
            setFavourites(newFavourites)
        }
    }

    const resetFavourites = () => {
        setFavourites([])
    }

    const getMovies = async () => {
        const res = await swapiAxios('films/')
        setMovies(res.data.results)
    }

    const cleanSelections = () => {
        setSelectedStarship(null)
        setPilots([])
    }


    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        // This is a way to prevent setting the state, if the user has already deselected the movie
        // but the starships are still loading, this usually happens when you quickly click on the same button twice.
        // This utilizes the concept of closures in JavaScript.
        let isMounted = true
        setStarships([])
        const getStarships = async () => {
            const [...starships] = await Promise.all(selectedMovie.starships.map(async (starship) => {
                    const res = await swapiAxios(starship)
                    return res.data
                }
            ))
            if(isMounted){
                // once the promise is resolved, this check will be performed to make sure the component is still mounted
                // if the user has already deselected the movie, the component will be unmounted and the state will not be set
                setStarships(starships)
            }
        }
        if(selectedMovie && isMounted){
            getStarships()
        } else {
            setStarships([])
        }

        return () => {
            // this is the cleanup function, it will be called when the variable in the dependency array changes
            // we set isMounted to false, so that the state is not set if the component is unmounted, but the promise is still resolving
            isMounted = false
        }
    }, [selectedMovie])

    useEffect(() => {
        let isMounted = true
        setPilots([])
        const getPilots = async () => {
            const [...pilots] = await Promise.all(selectedStarship.pilots.map(async (pilot) => {
                    const res = await swapiAxios(pilot)
                    return res.data
                }
            ))
            if(isMounted){
                setPilots(pilots)
            }
        }
        if(selectedStarship && isMounted){
            getPilots()
        } else {
            setPilots([])
        }

        return () => {
            isMounted = false
        }
    }, [selectedStarship])

    useEffect(() => {
        if(selectedMovie){
            cleanSelections()
        }
    }, [selectedMovie])

    return (
        <>
            <Header/>
            <ColumnContainer>
                <MovieSection
                    movies={movies}
                    selectedMovie={selectedMovie}
                    setSelectedMovie={setSelectedMovie}
                />
                <StarshipSection
                    starships={starships}
                    selectedStarship={selectedStarship}
                    setSelectedStarship={setSelectedStarship}
                />
                <PilotSection pilots={pilots} addFavourite={addFavourite} isAlreadyInFavourites={isAlreadyInFavourites}/>
                <FavouritePilots favourites={favourites} resetFavourites={resetFavourites} removeFavourite={removeFavourite}/>
            </ColumnContainer>
        </>
    )
}

export default App
