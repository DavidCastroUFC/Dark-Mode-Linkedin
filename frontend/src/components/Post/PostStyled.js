import styled from 'styled-components';

export const Container =styled.div`

/* CSS DO CARD DE POST */
    display: flex;
    background-color: ${props=> props.theme.theme.cardColor};
    width: 540px;
    height: auto;
    border-radius: 15px;
    flex-direction: column;
    margin-bottom: 10px;

/* CSS DAS INFORMAÇÕES DO USUÁRIO */
.userInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.moreOptionsBox {
    padding: 20px;
}

.profileInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

}

.profileInfo ul {
    margin-left: 15px;
}

.profileInfo ul li {
    margin-bottom: 5px;
}

.profileInfo img {
    width: 50px;
    height: 50px;
    border-radius: 100%;

}

.nameProfile {
    font-size: 15px;
    font-weight: 600;
    color:  ${props=> props.theme.theme.fontColor};
}

.descriptionProfile {
    font-size: 12px;
    color: #818181;
}

.timePost {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #818181;
    margin-bottom: 0px !important;

}

.timePost li {
    margin-bottom: 0px !important;
}

.timePost li img {
    width: 12px;
    height: 12px;
    margin-left: 5px;
}

/* CSS DO TEXTO DA POSTAGEM */
.textPost {
    font-size: 13px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    line-height: 22px;
    color:  ${props=> props.theme.theme.fontColor};
}

/* CSS DOs likes e comentários */
.likesAndComments {
    width: 100%;
    height: 36px;
    border-bottom: 1px solid ${props=> props.theme.theme.lineColor};
}

/*opções de curtir, comentar, e compartilhar*/
.interactionsPost {
    display: flex;
    align-items: center;
    width: 100%;
    height: 52px;

}

.interactionsPost ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

}

.interactionsPost ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #818181;
    font-size: 13px;
}

.interactionsPost ul li :first-child {
    margin-right: 8px;
}

.likesAndComments {
    display: flex;
    align-items: center;
}

.likesAndComments ul {
    padding-left: 20px;
    padding-right: 20px;
    color: #818181;
    font-size: 12px;
    line-height: 14px;
    display:flex;
    align-items:center;
}
.likesAndComments ul li{
    margin-right:12px;
}
svg{
    width:20px;
    height:auto;
}
path{
    fill: #818181;
}
.sendButtom svg, .sendButtom svg path{
    fill: none;
    stroke : #818181;
}
.likesAndComments ul .like svg, .likesAndComments ul .love svg, .likesAndComments ul .clap svg{
    width:15px;
}
.likesAndComments ul .like svg path{
    fill: #0077B7;
}
.likesAndComments ul  .love svg path{
    fill: #F03E3E;
}
.likesAndComments ul  .clap svg path{
    fill: #009245;
}
.valueLikesAndComments{
    display:flex;
    align-items:center;
}
.valueLikesAndComments svg{
    width:5px;
    height:auto;
    margin: 0 5px;
}
.valueLikesAndComments svg circle{
    fill: #818181;
}
@media only screen and (max-width: 450px) {
    width: 95%;
    margin-bottom:10px;
    .textPost p{
        line-height: 18px;
        text-align:left;
        text-justify: distribute;
    }
    .imgPost {
        width:100%;
        display:flex;
        justify-content:center;
    }
    .imgPost img{
        width: 100%;  
    }
    .interactionsPost ul li p{
        display:none;
    }
    .descriptionProfile {
        line-height:16px;
    }
    
    }
`