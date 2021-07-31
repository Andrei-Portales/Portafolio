import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import icon from './assets/icons/coding.svg';

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/svg';
link.href = icon;
document.head.appendChild(link);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
