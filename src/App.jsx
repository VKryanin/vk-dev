import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
      function handleScroll() {
        setScrollPosition(window.pageYOffset);
      }

      if (scrollPosition > 20) {
        setHeaderClass('hidden');
      } else {
        setHeaderClass('');
      }

      window.addEventListener('scroll', handleScroll);
      return() => {
        window.removeEventListener('scroll', handleScroll)
      };
  }, [scrollPosition])

  return (
    <div className="App">
      < Header headerClass={headerClass}/>
      < Sidebar />
      < Content />
    </div>
  );
}

export default App;
