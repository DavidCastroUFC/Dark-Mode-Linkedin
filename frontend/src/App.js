import React,{useState} from 'react';
import './styles/reset.css'
import * as themes from './styles/themes/Themes';
import ThemeContext from './styles/themes/context';
import {ThemeProvider} from 'styled-components';
// import Routes from './routes';
import Home from './pages/Home';

export default function App() {
  const [state, setState] = useState(
    {
      theme: themes.dark,

    },
  );
  function bg(cor){
    document.querySelector('body').style.background = cor;
  }
  bg(state.theme.backgroundPage);
  function switchTheme() {
    setState(
      { theme: state.theme === themes.dark ? themes.light : themes.dark }
    );
    let vision = document.getElementById('menuDropDown');
    vision.style = 'display: none';
    document.querySelector('#menu-profile div svg').style = 'transform: rotateX(360deg);';
  }
  

  return (
          <ThemeContext.Provider value={state}>
              <ThemeContext.Consumer>
                {theme => <ThemeProvider theme={theme}><Home mudar={switchTheme} /></ThemeProvider>}
              </ThemeContext.Consumer>
          </ThemeContext.Provider>
  )
}