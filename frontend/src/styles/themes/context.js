import React from 'react'
import dark from './Dark';
//importei o tema dark para começar com ele por padrão

export default React.createContext({
    //aqui dentro eu passo as variáveis que estarão disponíveis em toda a aplicação
    theme: dark,
});
