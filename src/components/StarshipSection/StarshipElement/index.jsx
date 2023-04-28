import {H2} from '../../../style/headings.js'
import {Button} from '../../../style/buttons.js'
import {GenericElementListContainer, InfoSectionContainer} from '../../../style/containers.js'
import {InfoTitle} from '../../../style/paragraphs.js'


const StarshipElement = ({starship, selectedStarship, setSelectedStarship}) => {
    const starshipIsActive = selectedStarship?.name === starship.name

    const toggleShowPilots = () => {
        if(selectedStarship?.name === starship.name){
            setSelectedStarship(null)
        } else {
            setSelectedStarship(starship)
        }
    }

    return (
        <GenericElementListContainer active={starshipIsActive}>
            <H2>{starship.name}</H2>
            <InfoSectionContainer>
                <InfoTitle>Manufacturer</InfoTitle>
                <p>{starship.manufacturer}</p>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoTitle>Model</InfoTitle>
                <p>{starship.model}</p>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoTitle>Passengers</InfoTitle>
                <p>{starship.passengers}</p>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoTitle>Max. speed</InfoTitle>
                <p>{starship.max_atmosphering_speed}</p>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoTitle>Length</InfoTitle>
                <p>{starship.length}</p>
            </InfoSectionContainer>
            {starship.pilots.length > 0 && <Button active={starshipIsActive} onClick={toggleShowPilots}>Show Pilots</Button>}
        </GenericElementListContainer>
    )
}

export default StarshipElement
