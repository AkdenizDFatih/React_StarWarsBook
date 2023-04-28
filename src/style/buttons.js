import styled from 'styled-components'


export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: ${props => props.theme.mainColor} 1px solid;
  border-radius: 0;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: border-radius 200ms ease;
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${props => props.theme.font_sm};
  color: ${props => props.active ? `black` : 'inherit'};
  border-color: ${props => props.active ? props.theme.secondaryColor : 'inherit'};

  &:hover {
    border-radius: 2rem;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-radius: 0;
  }
`
