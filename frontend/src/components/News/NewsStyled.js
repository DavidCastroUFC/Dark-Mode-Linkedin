import styled from 'styled-components';

export const Container = styled.div `
width: 275px;
height: 340px;
background: ${props=> props.theme.theme.cardColor};
border-radius: 15px;
margin-bottom:20px;
padding: 20px 20px;
box-sizing:border-box;
align-items:center;
#top{
        justify-content:space-between;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        color: ${props=> props.theme.theme.fontColor};
        margin-bottom:20px;
}
#top svg{
        width:18px;
        height:auto;
        
}
#top path{
        fill: #818181;
}
ul li{
        display:flex;

}
ul li svg{
        margin-top:5px;
}
.line{
        margin-bottom:15px;
}
.line svg{
        margin-top:0px;
}
.line h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        color: ${props => props.theme.theme.fontColor};
        margin-left:6px;
}
.line div{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #818181;
        margin-top:5px
}
.line svg,.line svg circle{
        width:5px;
        height:auto;
        fill: #818181;
        margin:  0 5px;
}
p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        color: #0077B7;
        margin-left:8px;
}
p svg{
        margin-left:5px;
        margin-top:2px;
}
@media only screen and (max-width: 450px) {
        display:none;
}
`;