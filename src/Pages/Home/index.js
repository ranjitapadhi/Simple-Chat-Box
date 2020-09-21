import React from 'react';
import NavBar from '../../Components/NavBar'
import Messenger from '../../Components/Messenger'
import Amplify from 'aws-amplify';


const Home = (prop) => {

  Amplify.DataStore.clear()

  return (
    <div>
      <NavBar username = {prop}/>
      <Messenger username = {prop}/>
    </div>
  )
}


export default Home;