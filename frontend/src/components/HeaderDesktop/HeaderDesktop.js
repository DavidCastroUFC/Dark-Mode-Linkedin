import React from 'react';
import '../../styles/reset.css';
import { ContainerHeader, Menu, MenuDrop } from './HeaderDesktopStyled.js';
import search from '../../assets/icons/search.svg';

import profile from '../../assets/images/profile.jpg';
export default function MenuDesktop({ mudar }) {
    function Show() {
        let vision = document.getElementById('menuDropDown');
        if (vision.style.display === 'none') {
            vision.style.display = 'flex';
            document.querySelector('#menu-profile div svg').style = 'transform: rotateX(180deg);';

        } else {
            vision.style.display = 'none';
            document.querySelector('#menu-profile div svg').style = 'transform: rotateX(360deg);';
        };
    }
    return (
        < ContainerHeader >
            <div className="contentHeader">
                <div className="firstPart">
                    <div className='logoIcon'>
                        Linked <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                            <rect x="0.0688477" y="0.700134" width="26.9321" height="27.0289" rx="1" fill="#0077B7" />
                            <path d="M8.56852 23.2846H5.01807V10.0377H8.56852V23.2846ZM4.80994 6.60972C4.80994 6.07919 4.98542 5.64253 5.33638 5.29973C5.69551 4.95692 6.18115 4.78552 6.79329 4.78552C7.39728 4.78552 7.87883 4.95692 8.23796 5.29973C8.59709 5.64253 8.77665 6.07919 8.77665 6.60972C8.77665 7.14841 8.59301 7.58916 8.22572 7.93196C7.86659 8.27476 7.38912 8.44616 6.79329 8.44616C6.19747 8.44616 5.71591 8.27476 5.34863 7.93196C4.9895 7.58916 4.80994 7.14841 4.80994 6.60972Z" fill="white" />
                            <path d="M14.7512 10.0377L14.8614 11.5681C15.8082 10.3846 17.0774 9.79289 18.6689 9.79289C20.0728 9.79289 21.1175 10.2051 21.8031 11.0294C22.4887 11.8538 22.8397 13.0862 22.856 14.7268V23.2846H19.3178V14.8125C19.3178 14.0616 19.1546 13.5188 18.8281 13.1842C18.5016 12.8414 17.9589 12.67 17.1998 12.67C16.204 12.67 15.4572 13.0944 14.9593 13.9432V23.2846H11.4211V10.0377H14.7512Z" fill="white" />
                        </svg>
                    </div>

                    <div className='search'>
                        <input type="text" placeholder="Pesquisar..." />
                        <a href='dasdsd '><img src={search} alt="ìcone de pesquisa" /></a>
                    </div>
                </div>

                <Menu>
                    <ul>
                        <li className='menuItem'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                            <p>Início</p>
                        </li>

                        <li className='menuItem'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                            <p>Minha rede</p>
                        </li>

                        <li className='menuItem'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>
                            <p>Vagas</p>
                        </li>

                        <li className='menuItem'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /></svg>
                            <p>Mensagens</p>
                        </li>

                        <li className='menuItem'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                            <p>Notificações</p>
                        </li>
                        <li className='menuItem' id="menu-profile" onClick={Show}>
                            <div>
                                <img className="profile" src={profile} alt='sadas'></img>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>

                            </div>
                        </li>
                    </ul >
                </Menu >
                <MenuDrop>
                    <div id="menuDropDown" onClick={() => mudar()}>
                        <ul>
                            <li>
                                <svg id="light" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg>
                                <svg id="dark" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z" /></svg>
                            </li>
                        </ul>
                    </div>

                </MenuDrop>
            </div >

        </ContainerHeader >
    );
}