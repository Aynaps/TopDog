import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #a4c2f4;
  height: 100vh;
  width: 30vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 12pt;
    font-family: Comfortaa;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  a img {
    margin-left: 60px;
    margin-bottom: -30px;
    margin-top: -85px;
    height: 80px;
    width: 80px;
  }
`;