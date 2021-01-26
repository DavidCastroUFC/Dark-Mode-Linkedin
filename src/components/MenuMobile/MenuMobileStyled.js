import styled from 'styled-components';

export const Container = styled.div`
    display:none;

    @media only screen and (max-width: 450px) {
    bottom:0;
    position:fixed;
    display:flex;
    width: 100%;
    height: 50px;
    background: ${props=> props.theme.theme.menuBottom};
    z-index:1000;
    -webkit-box-shadow: 0px -5px 7px -5px rgba(0,0,0,0.55);
-moz-box-shadow: 0px -5px 7px -5px rgba(0,0,0,0.55);
box-shadow: 0px -5px 7px -5px rgba(0,0,0,0.55);
    ul{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 0 20px;
        color: #818181;
        font-size:14px;
    }
    li{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center; 
    }
    li:first-child{
        color: ${props=> props.theme.theme.iconColor};
    }
    .inicio svg{
        fill: ${props=> props.theme.theme.iconColor};
        
    }
    ul li svg{
        margin-bottom:2px;
        fill: #818181;
    }
    
    
}
    

`;