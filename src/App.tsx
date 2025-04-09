import { JSX } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ViewportProvider from "./context/viewport"
import Header from "./component/Header"
import Home from "./component/Home"

import "./App.css"

const App = (): JSX.Element => {

  return (
    <ViewportProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ViewportProvider>
  );
};

export default App;
