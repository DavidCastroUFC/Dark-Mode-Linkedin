import React from 'react'
import { Container } from './HeaderMobileStyled';
import search from '../../assets/icons/search.svg';
import profile from '../../assets/images/profile.jpg';

export default function HeaderMobile({mudar}) {
    return (
        <Container>
            <div onClick={()=>mudar()}>
                <img className="profile" src={profile} alt='sadas'></img>
            </div>
            <div className='search'>
                <input type="text" placeholder="Pesquisar..." />
                <a href='dasdsd '><img src={search} alt="ìcone de pesquisa" /></a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /></svg>
        </Container>
    );
}