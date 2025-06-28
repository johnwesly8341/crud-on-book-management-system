import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './assets/Books';
import CreateBook from './assets/CreateBook';
import UpdateBook from './assets/UpdateBook';
import Nav from './assets/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
