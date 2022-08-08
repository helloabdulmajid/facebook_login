import './App.css';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log("login Result" + response);
}

const componentClicked=(data)=>{
    console.log(data)
}
function App() {
  return (
    <div className="App">
      <h1>Login With facebook </h1>
      <FacebookLogin
    appId="9733396126035841519"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
    </div>
  );
}

export default App;
