import React, { Suspense } from 'react';
import ToDo from './components/todo/todo-connected.js';
import Context from './context/settings/context.js';
import LoginProvider from './context/auth/settings.js'
import Header from './components/Header/Header';
function App() {

  return (
    <>
      <Context>
        <LoginProvider>
          <Header />
          <Suspense fallback="loading...">
            <ToDo />
          </Suspense>
        </LoginProvider>
      </Context>
    </>
  );

}

export default App;