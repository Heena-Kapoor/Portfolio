import { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Home from './pages/Home';
import Loader from './components/layout/Loader';
import styled, { ThemeProvider } from 'styled-components';
import AllProjects from './pages/AllProjects';
import TermsandConditions from './pages/TermsandConditions';
import { darkTheme, lightTheme } from './utils/Themes';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

function App() {

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Body>
            <Routes>
              <Route path={'/'} element={<Home openModal={openModal} setOpenModal={setOpenModal} />} />
              <Route path="/TermsandConditions" element={<TermsandConditions/>} />
            </Routes>
          </Body>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
