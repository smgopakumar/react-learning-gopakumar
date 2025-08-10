import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import ProfileCard from './profileCard';
import ImageCard from './imageCard';
import WelcomeOne from './welcomeOne';
import WelcomeTwo from './welcomeTwo';
import ProfileCardOne from './profileCardOne';
import ProfileCardTwo from './profileCardTwo';

function Button(props) {
  return <button onClick={props.onClick}>Click me</button>;
}

function App() {
  const handleClick = () => alert("Button clicked!");

  return <Button onClick={handleClick} />;
}



export default App;
