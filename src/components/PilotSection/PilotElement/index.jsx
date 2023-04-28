import {GenericElementListContainer, InfoSectionContainer} from '../../../style/containers.js'
import {H2} from '../../../style/headings.js'
import {InfoTitle} from '../../../style/paragraphs.js'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Button} from '../../../style/buttons.js'

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${props => props.theme.mainColor};
  border-radius: 50%;

  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  background: transparent;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const PilotElement = ({pilot, addFavourite, isAlreadyInFavourites}) => {
    const [speciesInfo, setSpeciesInfo] = useState(null)
    const isInFavourites = isAlreadyInFavourites(pilot.name)

    useEffect(() => {
        const getSpeciesInfo = async () => {
            const response = await fetch(pilot.species[0])
            const data = await response.json()
            setSpeciesInfo(data)
        }
        getSpeciesInfo()
    }, [])

    return (
        <GenericElementListContainer>
            <H2>{pilot.name}</H2>
            <InfoSectionContainer>
                <InfoTitle>Height</InfoTitle>
                <p>{pilot.height}</p>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoTitle>Mass</InfoTitle>
                <p>{pilot.mass}</p>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoTitle>Birth Year</InfoTitle>
                <p>{pilot.birth_year}</p>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoTitle>Gender</InfoTitle>
                <p>{pilot.gender}</p>
            </InfoSectionContainer>
            {speciesInfo ?
                <InfoSectionContainer>
                    <InfoTitle>Species</InfoTitle>
                    <p>{speciesInfo.name}</p>
                </InfoSectionContainer>
                : <Spinner />
            }
            <Button disabled={isInFavourites} onClick={() => addFavourite(pilot.name)}>Add to favourites</Button>
        </GenericElementListContainer>
    )
}

export default PilotElement
