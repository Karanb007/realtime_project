//---------css integration-------- 
import './App.css';

//---------third party import-----
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//---------components-------------
import HomeScreen from './screens/home/HomeScreen';
import Layout from './components/layout/Layout';
import LoginScreen from './screens/auth/login/LoginScreen';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomeScreen/></Layout>}/>
        <Route path="/login" element={<LoginScreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
