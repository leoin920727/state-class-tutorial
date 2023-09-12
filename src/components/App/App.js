import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

function setToken(userToken) {//把後端傳遞的key:value放到從sessionStorage
  sessionStorage.setItem('token', JSON.stringify(userToken));//參數放入
}
//sessionStorage.clear()清除
function getToken() {//從sessionStorage抓取token
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token//Optional_chaining 後端資料中的token
  //沒打?會觸發Cannot read properties of null (reading 'token')
}

function App() {
  // const [token, setToken] = useState();
  const token = getToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/preferences" element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;