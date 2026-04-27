import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({});

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/api/users/login", data);
    localStorage.setItem("token", res.data.token);
    alert("Login success");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})}/>
      <input placeholder="Password" onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;