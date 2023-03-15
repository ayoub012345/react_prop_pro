import './App.css';
import Profile from './profile/compenent/profile.js';
import imggg from "./profile/compenent/images.jpg";
function App() {
  let fullName="Ayoub Ait ahmad";
  return (
    <div className="App">
      <Profile profession={"développeur full stack"} imgg={imggg} fullName={fullName}>a 3 ans d'expérience avec le langage de programmation Java. Expérience du développement de bases de données avec SQL. Connaissance des modèles et des pratiques logicielles, expérience commerciale du cycle de vie complet du logiciel. Une grande attention aux détails. Expérience avec les systèmes de contrôle de source Git. Il est capable de travailler avec des équipes d'autres pays. Personne de soutien, amicale et travailleuse. Apprentissage continu avec coaching, apprentissage en cours d'emploi, formations, conférences.</Profile>
    </div>
  );
}

export default App;
