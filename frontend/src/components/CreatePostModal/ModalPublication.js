import React from 'react';
import '../../styles/reset.css';
import {Container} from './ModalPublicationStyled.js';
export default function App(){
    return(
      <Container>
        <div className="modalContainer">
            <div></div>
        </div>
        <div className="cardModal"></div>
      </Container>
    )
}
