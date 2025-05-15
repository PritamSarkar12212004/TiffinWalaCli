import './global.css';
import * as React from 'react';
import AuthNavigations from './src/navigations/auth/AuthNavigations';
import {ContextProvider} from './src/context/ContextApi';

const App = () => {
  return (
    <ContextProvider>
      <AuthNavigations />
    </ContextProvider>
  );
};

export default App;
