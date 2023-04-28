import {ColumnSection} from '../../style/containers.js'
import {ColumnH1} from '../../style/headings.js'
import StarshipElement from './StarshipElement/index.jsx'


const StarshipSection = ({starships, selectedStarship, setSelectedStarship}) => {
    return (
        <ColumnSection>
            <ColumnH1>Starships</ColumnH1>
            <ul>
                {starships.map((starship) => <StarshipElement
                    key={starship.name}
                    starship={starship}
                    selectedStarship={selectedStarship}
                    setSelectedStarship={setSelectedStarship}
                />)}
            </ul>
        </ColumnSection>
    )
}

export default StarshipSection
