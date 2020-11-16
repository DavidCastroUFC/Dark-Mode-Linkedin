import styled from 'styled-components';
export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 540px;
    height: 120px;
    background: ${props=> props.theme.theme.cardColor};
    border-radius: 15px;
    margin-bottom:20px;
}
.topCreatePublication{
    height: 50%;
    display: flex;
    overflow-x: hidden;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${props=> props.theme.theme.lineColor};
    padding-left: 20px;
    padding-right: 20px;
}
.topCreatePublication h1{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;

color: #818181;
    margin-left: 10px;
}
.bottomCreatePublication{
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

}
.bottomCreatePublication li{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    
}
.bottomCreatePublication li h1{
    margin-left: 10px;
    
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;

color: #818181;

}
li svg{
    fill: ${props => props.theme.theme.iconColor};
}

@media only screen and (max-width: 450px) {
    width : 95%;
    height: 100px;
    margin-bottom:10px;
    .bottomCreatePublication li h1{
        display:none;
    }
    }
    
`;