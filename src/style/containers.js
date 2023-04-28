import styled from 'styled-components'


export const ColumnSection = styled.section`
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: calc(100vh - ${props => props.theme.headerHeight});
  padding-bottom: 0.5rem;
`

export const GenericElementListContainer = styled.li`
  list-style: none;
  animation: fadeSlideIn;
  animation-duration: 200ms;
  border: 1px solid ${props => props.theme.mainColor};
  padding: 1rem;
  transition: all 200ms ease;
  margin-right: ${props => props.active ? '0' : '2rem'};
  background: ${props => props.active ? props.theme.mainColor : 'inherit'};
  outline-color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};

  & > * {
    color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};
  }
`

export const InfoSectionContainer = styled.div`
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
