import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import ProfileCard from './profileCard';
import ImageCard from './imageCard';
import WelcomeOne from './welcomeOne';
import WelcomeTwo from './welcomeTwo';
import ProfileCardOne from './profileCardOne';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Welcome />
      < ProfileCard />
      <ImageCard />
      <WelcomeOne name="Gopkaumar" />
      <WelcomeTwo name="Paul" />
      <ProfileCardOne name="John Doe" age="30" location="New York" imageUrl="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
