import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { MD_API_KEY } from './globals/variables';

if(MD_API_KEY === '&appid=replace-this-string-with-your-api-key' ){
    
  ReactDOM.render( document.getElementById('root') );

}else {

    ReactDOM.render(
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>,
      document.getElementById('root')
    );

}
