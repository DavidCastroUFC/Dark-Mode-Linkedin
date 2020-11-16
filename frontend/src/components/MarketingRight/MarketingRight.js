import React from 'react'
import {Container} from './MarketingRightStyled';
import mrtk from '../../assets/images/markting.png';
export default function MarketingRight(){
    return(
        <Container>
            <img src={mrtk} alt="Vagas"/>
        </Container>
    );
}