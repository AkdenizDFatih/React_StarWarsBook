import {ColumnSection} from '../../style/containers.js'
import {ColumnH1} from '../../style/headings.js'
import PilotElement from './PilotElement/index.jsx'


const PilotSection = ({pilots, addFavourite, isAlreadyInFavourites}) => {
    return (
        <ColumnSection>
            <ColumnH1>Pilots</ColumnH1>
            <ul>
                {pilots.map((pilot) => <PilotElement key={pilot.name} pilot={pilot} addFavourite={addFavourite} isAlreadyInFavourites={isAlreadyInFavourites}/>)}
            </ul>
        </ColumnSection>
    )
}

export default PilotSection