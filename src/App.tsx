import { useState } from 'react';
import ChevronDown from './assets/icons/ChevronDown';
import TriangleIcon from './assets/icons/TriangleIcon';
import Aside from './components/Aside/Aside';
import Nav from './components/Nav/Nav';
import NavItem from './components/NavItem/NavItem';
import Dashboard from './layouts/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard
        aside={
          <Aside
            nav={
              <Nav>
                <NavItem
                  text="Design"
                  href="https://www.google.com"
                  iconRight={<ChevronDown h="16" w="16" />}
                />
                <NavItem text="Discover" href="https://www.google.com" />
              </Nav>
            }
          />
        }
        body={
          <main>
            <h1>Hello world</h1>
          </main>
        }
      />
      {/* 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
       */}
    </div>
  );
}

export default App;
