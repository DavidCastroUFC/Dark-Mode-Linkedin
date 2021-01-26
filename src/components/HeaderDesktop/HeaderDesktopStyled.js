import styled from 'styled-components';
export const ContainerHeader = styled.header`
    display: flex;
    background-color: ${props => props.theme.theme.header};
    width: 100%;
    height: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    @media only screen and (max-width: 450px) {
        display:none;
}
.contentHeader{
    display: flex;
    width: 1100px;
    height: 7vh;
    align-items: center;
    justify-content: space-between;
    
}
.firstPart{
    display: flex;
    flex-direction: row;
}
.logoIcon {
display:flex;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 27px;
color: ${props => props.theme.theme.headerIcon};
align-items:center;

}
.logoIcon svg{
    margin-left:5px;
    border-radius:  4px;
}
.search{
    margin-left: 30px;
    display: flex;
    align-items: center;
    width: 263px;
    height: 27px;
    background: ${props => props.theme.theme.search};
    border-radius: 5px;
}
.search input {
    width: 230px;
    margin-left: 5px;
    background-color : transparent; 
    border-color: transparent;
    color: ${props => props.theme.theme.fontColor};
    
}
.search img{
    display: flex;
    align-items: center;
    margin-right: 5px;
    width: 18px;
    height: 18px;
}
`;
export const Menu = styled.div`
ul{
    width:550px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content:space-between;
    
}
li{
    font-family: Roboto;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme.theme.headerIcon};
}


#menu-profile ,#menu-profile div {
    font-size: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right:0px;
    cursor: pointer;
}
.profile{
    width: 35px;
    height: auto;
    border-radius: 100%;
}
svg{
    width:20px;
    height:auto;
    fill: ${props => props.theme.theme.headerIcon};
    margin-bottom:3px;
}
`;

export const MenuDrop = styled.div`
position:fixed;
width:1100px;
height:100px;
display:flex;
flex-direction: row-reverse;
z-index:-1;

div{
width: 171.57px;
height: 45.7px;
top:60px;
position:fixed;
background: ${props => props.theme.theme.menuColor};
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px 0px 15px 15px;
display:none;
flex-direction:column;
align-items:center;
justify-content:center;
box-sizing: border-box;
}
ul,li{
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    text-align: center;
    color: ${props => props.theme.theme.iconColor};
    padding: 0 20px 0 20px;
    cursor:pointer;
} 
li svg{
    fill: ${props => props.theme.theme.iconColor};
}
li #light{
    display:${props => props.theme.theme.lightIcon};
}
li #dark{
    display:${props => props.theme.theme.darkIcon};
}
div ul li::after{
content: '${props => props.theme.theme.titulo}';
color: ${props => props.theme.theme.iconColor};

}



`;

