import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { AppShell, Header, MantineProvider } from '@mantine/core';
import { HeaderContent } from './components/header';

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }}>
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
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
