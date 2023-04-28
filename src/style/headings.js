import styled from 'styled-components'

export const ColumnH1 = styled.h1`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.secondaryColor};
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: ${props => props.theme.font_lg};
`

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: ${props => props.theme.font_md};
  background: transparent;
`
