import styled from 'styled-components';
export const Container = styled.div `
width: 241px;
height: 333px;
background: ${props=> props.theme.theme.cardColor};
border-radius: 15px;
overflow:hidden;
display:flex;
flex-direction: column;
margin-bottom:20px;

@media only screen and (max-width: 450px) {
        display:none;
}

.capa{
    height:64px;
    box-sizing:border-box;
    overflow:hidden;
}
.profile {
    display:flex;
    justify-content:center;
    margin-top: -40px;
    margin-bottom: 15px;
}
.profile img{
    border-radius:100%;
    width:98px;
    height:auto;
}
.nameProfile{
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: ${props => props.theme.theme.fontColor};
    text-transform: uppercase;
    margin-bottom: 10px;

}
.titleProfile{
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #818181;

}
.statistic{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    margin: 15px 0 5px 0;
}
.titleStatistic{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
color: #818181;
}
.valueProfile{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    
    color: ${props => props.theme.theme.iconColor};
}
.items{
    display:flex;
    align-items: center;
    margin-top: 15px;
    padding: 12px 20px 0 20px;
    border-top: 1px solid ${props =>props.theme.theme.lineColor};
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;

color: #818181;
}
.items svg,.items svg path {
    margin-right: 10px;
    fill :${props => props.theme.theme.iconColor}!important;
}
`;