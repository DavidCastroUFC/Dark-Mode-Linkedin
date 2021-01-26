import styled from 'styled-components';
export const Container = styled.div `
    display: flex;
    justify-content: center;
    position: relative;
.menuTop{
    width: 100%;
    position: fixed;
}
.content{
    margin-top: 90px;
}
.homeCreatePost{
    margin-bottom: 15px;
}
.homePost{
    margin-bottom: 15px; 
}
.modalContainer{
    position: fixed;
    width: 100vw;   
    height: 100vh;
    background: black;
    opacity: 40%;
}
.modalContainer div{
    width: 100%;
    height: 100%;
}
.cardModal {
    position: fixed;
    width: 497.12px;
    height: 523.01px;
    margin:auto;
    margin-top:25vh;
    background: #FFFFFF;
    border-radius: 35px;
    opacity: 100% !important;
}
`;