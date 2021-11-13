import Profile from './Profile/Profile.js';
import './App.css';

function App() {
  const name = "Chiraz Chaabnia"
  const biog = "Dynamique et rigoureuse, je suis prête à mettre mon enthousiasme au service de votre entreprise. J'ai travaillé en tant que X pendant Y années et je me caractérise par ma rapidité d'apprentissage et mon goût pour le travail bien fait. Contactez-moi en cas d'opportunité."
  const job = "full stack js devolopper"
  const  msg= () => alert(name)
   
    return (
  
      <div className="App">
        <Profile fullname={name}  bio={biog} profession={job} message={msg} />
        <img src="ProfilPhoto.jpg" alt='me'width="400" />
      </div>
    );
}

export default App;
