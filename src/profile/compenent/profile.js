import React from "react";
import '../../profile/compenent/profile.css';
import PropTypes from 'prop-types';

function Profile(props)
{
    const handleName=()=>
{
    alert(`profil de : ${props.fullName}`);
}
    return(
        <>
        <main>
    <section className="top-card">
      <img src={props.imgg} alt="user picture"/>
      <div className="menu-icon">
        <div className="menu item1"><i className="fas fa-heart"></i></div>
        <div className="menu item2"><i className="fas fa-bars"></i></div>
      </div>

    </section>

    <section className="middle-card">
      <h1>{props.fullName}</h1>
      <p>{props.children}</p>
    </section>

    <footer>
      <h1>{props.profession}</h1>
      <section className="links">
<button onClick={handleName}>afficher</button>
      </section>
    </footer>
  </main>
        </>
    );
}
Profile.prototype={
    imgg: PropTypes.string,
    fullName: PropTypes.string.isRequired,
    improfessiongg: PropTypes.string,
}


export default Profile;