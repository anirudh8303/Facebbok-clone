import './App.css';
import  Header from './Header';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Login from "./Login"
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      { !user ? (
        <Login />
      ) : (
        <div>
        <Header />
      <div className="app_body">
        <div className="body_left">
        <Sidebar />
        </div>
        <div className="body_right">
          <Feed />
        </div>
      </div>
      </div>
        )}
    </div>
  );
}
export default App;
