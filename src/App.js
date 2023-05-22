import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { AppShell, Header, MantineProvider } from '@mantine/core';
import { HeaderContent } from './components/header';
import { Vacancy } from './pages/Home/components/Vacancy';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';

function App() {
  const matches = useMediaQuery('(max-width: 1000px)');
  useEffect(() => {
    return () => {
      localStorage.removeItem('filters');
    };
  }, []);
  return (
    <MantineProvider
      theme={{ fontFamily: 'Inter, sans-serif', lineHeight: '1rem' }}>
      <AppShell
        header={
          <Header
            height={matches ? 115 : 84}
            pl={matches ? 20 : 162}
            pr={matches ? 20 : 162}>
            {<HeaderContent />}
          </Header>
        }
        styles={(theme) => ({
          main: { backgroundColor: '#f7f7f8' },
        })}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/vacancy">
            <Route path=":id" element={<Vacancy />}></Route>
          </Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
