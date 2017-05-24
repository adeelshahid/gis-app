// TODO: Refactoring needed
import GIS from './core/index.js';
import app from './app/index.js';
import appInit from './app-init';
import '../scss/app.scss';

// New React stuff
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import debounce from 'lodash.debounce';
import storeFactory from './store';
import { resizeScreen } from './actions/ui';

const store = storeFactory();

render(
    <Root store={store} />,
    document.getElementById('app')
);

// http://stackoverflow.com/questions/35073669/window-resize-react-redux
window.addEventListener('resize', debounce(() => {
    store.dispatch(resizeScreen(window.innerWidth, window.innerHeight));
}, 150));
