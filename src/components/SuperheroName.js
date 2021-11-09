import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../data/locales.json';
import './SuperheroName.scss';
import SpeechBubble from './SpeechBubble';
import Bubble from '../assets/speech_bubble_4.png';
import InvincibleEnglish from '../assets/Invincible_english.png';
import InvincibleSpanish from '../assets/Invincible_spanish.png';
import InvinciblePortuguese from '../assets/Invincible_portuguese.png';

// const IMAGE = {
//   english: InvincibleEnglish,
//   spanish: InvincibleSpanish,
//   portuguese: InvinciblePortuguese
// };

// const getImage = (language) => {
//   return IMAGE[language];
// };

function SuperheroName(props) {
  const { firstName, lastName, superheroName, language, saveNames } = props;

  const [currentFirstName, setCurrentFirstName] = React.useState(firstName);
  const [currentLastName, setCurrentLastName] = React.useState(lastName);
  const [currentSuperheroName, setCurrentSuperheroName] = React.useState(superheroName);

  const handleClick = () => {
    saveNames(currentFirstName, currentLastName, currentSuperheroName)
  }

  return (
    <div className="superhero-name-container">
      <div className="name-burst">
        {/* <img className="invincible-logo" src={getImage(language)} alt="invincible" id="invincible" /> */}
        <SpeechBubble
          imgSrc={Bubble}
          text={firstName} 
          text2={lastName}
          text3="AKA"
          text4={superheroName}
        />
      </div>
      <label htmlFor="firstName">
        <input 
          type="text"
          id="firstName"
          value={currentFirstName}
          onChange={(e) => {setCurrentFirstName(e.target.value)}}
          placeholder={locale[language]['FIRST NAME']} 
        />
      </label>
      <label htmlFor="lastName">
        <input
          type="text"
          id="lastName"
          value={currentLastName}
          onChange={(e) => { setCurrentLastName(e.target.value) }}
          placeholder={locale[language]['LAST NAME']}
        />
      </label>
      <label htmlFor="superheroName">
        <input
          type="text"
          id="superheroName"
          value={currentSuperheroName}
          onChange={(e) => { setCurrentSuperheroName(e.target.value) }}
          placeholder={locale[language]['SUPERHERO NAME']}
        />
      </label>
      
      <div className="navigation-bar">
        <Link 
          to="/avatar" 
          onClick={handleClick}>{`${locale[language]['NEXT']} >`}
        </Link>
      </div> 
    </div>
  )

}
export default SuperheroName;