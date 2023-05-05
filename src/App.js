import { useState } from 'react';
import './App.css';
import Button from './LoginPage/button/Button';
import Input from './LoginPage/component/Input';
import Form from './LoginPage/form/Form';

function App() {

  const [user, setUser] = useState({name:"", password: ""});
  const handleChange = (e) => {
    if(e.target.type === "text"){
      setUser({...user, name: e.target.value})
      console.log(user)
    }else if(e.target.type=== "password"){
      setUser({...user, password: e.target.value})
      console.log(user)
    }
    
  };
  const handleClick = () => {
    if(user.name===""){
      alert("Kullanıcı adı boş geçilemez!")
    }else if(user.password ===""){
      alert("Şifre boş geçilemez")
    }else{
      alert("Kullanıcı adı: " +user.name+ " " + "Parolanız: "+user.password+ " ")
    }
  }
  return (
    <div className="App">
      <h2>Giriş Formu</h2>
      <Form>
      <Input type={"text"} value={user.name} placeHolder={"Kullanıcı Adı"} onChange={handleChange} />
      <Input type={"password"} placeHolder={"Şifreniz"} value={user.password} onChange={handleChange}/>
      <Button onClick={handleClick}/>
      </Form>
      {/* <LastVisit/> */}
    </div>
  );
}

export default App;
