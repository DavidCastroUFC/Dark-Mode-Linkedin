import React from 'react'
import {Container} from './NewsStyled';
export default function News(){
    return(
        <Container>
            <div id='top'>LinkedIn Notícias 
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM8.25 11.25H6.75V6.75H8.25V11.25ZM8.25 5.25H6.75V3.75H8.25V5.25Z" fill="#818181"/>
                </svg>
            </div>
            <ul>
                <li>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                    </svg>
                    <div className="line">
                        <h1>Número de desempregados cresce 3...</h1>
                        <div>
                            há 1 d 
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                            </svg>
                            43696 leitores
                        </div>
                    </div>
                </li>
                <li>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                    </svg>
                    <div className="line">
                        <h1>Há vagas: confira as empresas que e...</h1>
                        <div>
                            há 5 d
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                            </svg>
                            6475 leitores
                        </div>
                    </div>
                </li>
                <li>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                    </svg>
                    <div className="line">
                        <h1>Estágio volta a crescer no Brasil</h1>
                        <div>
                            há 6 h
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                            </svg>
                            3456 leitores
                        </div>
                    </div>
                </li>
                <li>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                    </svg>
                    <div className="line">
                        <h1>Auxílio emergencial impede que 23,5...</h1>
                        <div>
                            há 12 h
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                            </svg>
                            3045 leitores
                        </div>
                    </div>
                </li>
                <li>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                    </svg>
                    <div className="line">
                        <h1>Totvs oferece R$ 6,1 bilhões pela Linx</h1>
                        <div>
                            há 12 h
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#0077B7"/>
                            </svg>
                            2798 leitores
                        </div>
                    </div>
                </li>
            </ul>
            <p>
                Exibir mais 
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.0575 0L4.5 3.09042L7.9425 0L9 0.951417L4.5 5L0 0.951417L1.0575 0Z" fill="#0077B7"/>
                </svg>
            </p>
        </Container>
    );
}