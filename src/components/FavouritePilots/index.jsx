import Draggable from 'react-draggable'
import styled from 'styled-components'
import {H2} from '../../style/headings.js'
import {Button} from '../../style/buttons.js'


const FavouritePilotsContainer = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 20rem;
  min-height: 20rem;
  padding: 0.5rem;
  border: ${props => props.theme.mainColor} 2px solid;
  background: black;
`

const HeaderContainer = styled.div`
  border-bottom: ${props => props.theme.mainColor} 2px solid;
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
`

const FavouritePilotListElement = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  animation: fadeSlideIn;
  animation-duration: 200ms;
  margin-bottom: 0.5rem;
`


const FavouritePilots = ({favourites, resetFavourites, removeFavourite}) => {
    return (
        <Draggable>
            <FavouritePilotsContainer>
                <HeaderContainer>
                    <H2>Favourite Pilots</H2>
                    <Button onClick={resetFavourites}>Reset List</Button>
                </HeaderContainer>
                <ul>
                    {favourites.map((favourite) => <FavouritePilotListElement key={favourite}>
                        <p>{favourite}</p>
                        <Button onClick={() => removeFavourite(favourite)}>X</Button>
                    </FavouritePilotListElement>)}
                </ul>
            </FavouritePilotsContainer>
        </Draggable>
    )
}

export default FavouritePilots
