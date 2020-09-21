                                            //OM - Jai Shree Ram

import React from 'react'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import './App.css'
import {AmplifyAuthenticator, AmplifyButton, AmplifySignOut} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import Home from './Pages/Home'
//import { queries } from '@testing-library/react';
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'

//Configure Amplify
Amplify.configure(awsconfig)


const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            fetchUser(authData)
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    async function fetchUser(user){

        if(!user)
            return;

        const data = await API.graphql(graphqlOperation(queries.listUsers, {filter:{name:{contains: user.username}}}))
        //console.log(data.data.listUsers.items.length)
        if(data.data.listUsers.items <= 0)
        {
            await API.graphql(graphqlOperation(mutations.createUser, {input:{name: user.username}}))
        }
    }

    return authState === AuthState.SignedIn && user ? (
        <div className="App">
           <Home username={user.username} />
        </div>
      ) : (
        <AmplifyAuthenticator />
    );
}

export default AuthStateApp;