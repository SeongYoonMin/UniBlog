import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const HeaderBar = styled.div`
    width: 80%;
    height: 100px;
    background-color: rgb(252, 251, 246);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 3%;
    margin: 0 auto;
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
`

function Header () {

    const navigate = useNavigate();

    return (
        <HeaderBar>
            <MainLogo onClick={() => navigate('/')}/>
            <HeaderNav>
                <NavMenu onClick={() => navigate('/board')}>게시글</NavMenu>
                <NavMenu onClick={() => navigate('/visitor')}>방명록</NavMenu>
                <NavMenu>etc.</NavMenu>
            </HeaderNav>
        </HeaderBar>
    )
}

export default Header