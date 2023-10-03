import React from 'react'
import './main.css'
import Header from './componentes/header/Header.tsx'
import Main from './componentes/main/Main.tsx'
import Footer from './componentes/footer/Footer.tsx'
import Contato from './componentes/contato/Contato.tsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header/>
    <Main/>
    <Footer/>
    </>,
  },
  {
    path: "/sobre",
    element:<>
    <Header/>
    <div className='content-main'>Página Sobre!</div>
    <Footer/>
    </>,
  },
  {
    path: "/noticia",
    element: <>
    <Header/>
    <div className='content-main'>Página de Notícias!</div>
    <Footer/>
    </>,
  },
  {
    path: "/contato",
    element: <>
    <Header/>
    <Contato/>
    <Footer/>
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
