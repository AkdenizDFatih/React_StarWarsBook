import styled from 'styled-components'


export const InfoTitle = styled.p`
  font-size: ${props => props.theme.font_base};
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  background: transparent;
  color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};
`