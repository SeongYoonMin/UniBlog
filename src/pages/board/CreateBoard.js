import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
`   

const BoardName = styled.input`
    background-color: rgb(252, 251, 246);
    border: none;
    border-bottom: 1px solid #AAA;
    padding: 5px;
    font-size: 18px;
    margin: 20px 0;
`

const BoardContent = styled.textarea`
    background-color: rgb(252, 251, 246);
    border: none;
    overflow-y: scroll;
    height: 200px;
    padding: 3px 5px;
    font-size: 13px;
`

const BoardButtonBox = styled.div`
    border: none;
    display: flex;
    justify-content: end;
`

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

function CreateBoard () {

    const navigate = useNavigate();

    return (
        <div className="pageWrapper">
            <BoardBox>
                <h1>글 작성</h1>
                <BoardName placeholder="글 제목" />
                <BoardContent placeholder="글 내용"/>
                <BoardButtonBox>
                    <BoardButton onClick={() => alert('저장하였습니다.')}>저장</BoardButton>
                    <BoardButton onClick={() => navigate('/board')}>닫기</BoardButton>
                </BoardButtonBox>
            </BoardBox>
        </div>
    )
}

export default CreateBoard