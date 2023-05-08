import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { AppShell, Header, MantineProvider } from '@mantine/core';
import { HeaderContent } from './components/header';
import { Vacancy } from './pages/Home/components/Vacancy';

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: 'Inter, sans-serif', lineHeight: '1rem' }}>
      <AppShell
        header={
          <Header height={84} pl={162} pr={162}>
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
