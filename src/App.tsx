import './App.css';
import { Routes, Route} from 'react-router-dom';
import { AllPage } from './Pages/AllPage';
import { CompletedPage } from './Pages/CompletedPage';
import { Layout } from './Components/Layout';
import { HomePage } from './Pages/HomePage';
import { RemovePage } from './Pages/RemovePage';

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/all' element={<AllPage />} />
            <Route path='/completed' element={<CompletedPage />} />
            <Route path='/remove' element={<RemovePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
