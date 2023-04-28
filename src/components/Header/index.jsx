import Logo from '../../assets/Star_Wars_Logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: ${props => props.theme.headerHeight};
  width: 100%;
  background: black;
  z-index: 10;

  img {
    max-height: 100%;
    margin: 0 auto;
    display: block;
  }
`

const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="star wars logo"/>
        </HeaderContainer>
    )
}

export default Header