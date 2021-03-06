import styled from "styled-components";

export const ContentFourthBlock = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    @media (max-width: 991.98px) {
    max-height: 700px;
    }
    `
export const ContentFourthImage = styled.img`
      width: 100%;
      height: auto;
      position: absolute;
    `
export const ContentFourthText = styled.h3`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 20%;
    text-align: center;
    font: normal normal normal 30px/50px OptimaNormal;
    letter-spacing: 9px;
    color: #797972;
    text-transform: uppercase;
        
    @media (max-width: 991.98px) {
        font: normal normal normal 24px/40px OptimaNormal;
        letter-spacing: 7.2px;
        padding: 0 44px;
    }
    `