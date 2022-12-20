import axios from "axios";
import "./App.scss";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
