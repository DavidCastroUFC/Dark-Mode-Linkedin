import styled from 'styled-components';

export const Container = styled.div `
width: 241px;
height: 60px;
background: ${props=> props.theme.theme.cardColor};
border-radius: 15px;
display:flex;
padding: 20px;
box-sizing:border-box;
#top_recentes{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        height:fit-content;
        width:100%;
        align-items:center;
}
#top_recentes h1{
        display:flex;
        justify-content:space-between;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        align-items: center;
        color: ${props=> props.theme.theme.fontColor};
}
#top_recentes svg{
        width:12px;
        height:12px;
}
#top_recentes path{
        fill: #818181;
}
@media only screen and (max-width: 450px) {
        display:none;
}

`;