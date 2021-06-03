import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.scss';
import icon from './assets/icons/coding.svg';

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/svg';
link.href = icon;
document.head.appendChild(link);

ReactDOM.render(<App />, document.getElementById('root'));
