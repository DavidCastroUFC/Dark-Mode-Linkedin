import styled from 'styled-components';

export const Container = styled.header`
display: none;
justify-content:center;
align-items:center;
width:100%;
height:60px;
position:fixed!important;
background-color: ${props => props.theme.theme.headerMobile};
.search{
    display: flex;
    align-items: center;
    width: 230px;
    height: 30px;
    background: ${props => props.theme.theme.search};
    border-radius: 5px;
    margin: 0 20px;
}
.search input {
    width: 190px;
    margin-left: 5px;
    background-color : transparent; 
    border-color: transparent;
    color: ${props => props.theme.theme.fontColor};
    
}
.search img{
    display: flex;
    align-items: center;
    width: 18px;
    height: 18px;
}
.profile{
    width: 35px;
    height: auto;
    border-radius: 100%;
}
svg{
    fill: ${props => props.theme.theme.headerIcon};
    
}

@media only screen and (max-width: 450px) {
        display:flex;
}


`;