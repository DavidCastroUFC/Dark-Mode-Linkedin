// import React,{useState} from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './pages/Home';
// import * as themes from './styles/themes/Themes';
// import ThemeContext from './styles/themes/context';
// import {ThemeProvider} from 'styled-components';
// export default function Routes(){
//   const [state,setState] =useState(
//     {
//       theme: themes.dark,
  
//     },
//   )
//   function switchTheme(){
//     setState(
//       { theme : state.theme ===themes.dark ? themes.light: themes.dark}
//     );

    
//   }
    

//     return(
//       <BrowserRouter>
//         <Switch>
//         <ThemeContext.Provider value={state}>
//           <Route exact path="/" component={()=> 
//           <ThemeContext.Consumer>
//             {theme=><ThemeProvider theme={theme}><Home mudar={switchTheme}/></ThemeProvider>}
//           </ThemeContext.Consumer>
//           }/>
//           </ThemeContext.Provider>
//         </Switch>
//       </BrowserRouter>
//     )
// }



