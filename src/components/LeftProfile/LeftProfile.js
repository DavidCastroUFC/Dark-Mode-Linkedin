import React from 'react'
import capa from '../../assets/images/capa.png';
import profile from '../../assets/images/profile.jpg';
import { Container } from './LeftProfileStyled';
export default function leftProfile() {
    return (
        <Container>

            <div className="capa">
                <img src={capa} alt='dasdas' />
            </div>
            <div className="profile">
                <img src={profile} alt='dasdas' />
            </div>
            <div className="nameProfile"> David Castro</div>
            <div className="titleProfile"> Front-End Developer, UI Designer<br/>Universidade Federal Do Ceará</div>
            <div className="statistic"> <div className="titleStatistic" >Quem viu o seu perfil</div> <div className="valueProfile">26</div></div>
            <div className="statistic"> <div className="titleStatistic" >Viram sua publicação</div> <div className="valueProfile">1024</div></div>
            <div className="items">
                    <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2857 0H1.71429C0.771429 0 0.00857162 0.8 0.00857162 1.77778L0 16L6 13.3333L12 16V1.77778C12 0.8 11.2286 0 10.2857 0Z" fill="white"/>
                    </svg>
                Itens Salvos
            </div>
        </Container>
    );
}