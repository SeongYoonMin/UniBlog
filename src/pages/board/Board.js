import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const BoardButton = styled.button`
    background-color: rgb(252, 251, 246);
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px 18px;
    margin: 10px 0 0 10px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        background-color: black;
        color: white;
    }
`

function Board () {

    const navigate = useNavigate();

    return (
        <div className="pageWrapper">
            <BoardButton onClick={() => navigate('/createboard')}>글 쓰기</BoardButton>
        </div>
    )
}

export default Board