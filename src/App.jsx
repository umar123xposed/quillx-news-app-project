import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" key='news' element={<News country="pk" category='news' />} />
          <Route path="/science" key="science" element={<News country="pk" category="science" />} />
          <Route path="/entertainment" key="entertainment" element={<News country="pk" category="entertainment" />} />
          <Route path="/sports" key="sport" element={<News country="pk" category="sport" />} />
          <Route path="/business" key="business" element={<News country="pk" category="business" />} />
          <Route path="/technology" key="tech" element={<News country="pk" category="tech" />} />
          <Route path="/health" key='beauty' element={<News country="pk" category="beauty" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
