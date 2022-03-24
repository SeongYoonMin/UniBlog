import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const HeaderBar = styled.div`
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 3%;
    box-sizing: border-box;
`

const MainLogo = styled.a`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
    cursor: pointer;
`

const HeaderNav = styled.nav`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavMenu = styled.a`
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;
    color: ivory;
    transition: all .3s;
    &:hover {
        transform: scale(1.2);
        text-decoration: underline;
    }
`

function Header () {

    const navigate = useNavigate();

    return (
        <HeaderBar>
            <MainLogo onClick={() => navigate('/')}/>
            <HeaderNav>
                <NavMenu onClick={() => navigate('/aboutme')}>About me</NavMenu>
                <NavMenu onClick={() => navigate('/portfolio')}>Portfolio</NavMenu>
            </HeaderNav>
        </HeaderBar>
    )
}

export default Header