import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { User, Message } from "./models";
import { Chat } from "react-demos";
import Amplify, { API, graphqlOperation }  from 'aws-amplify';
import awsconfig from './aws-exports';
import { createUser } from './graphql/mutations'
import { listUsers } from './graphql/queries'
import * as subscriptions from './graphql/subscriptions';

Amplify.configure(awsconfig); // will not sync if you forget this

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [usersOnline, setUsersOnline] = React.useState([]);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    //Fetch Users
    fetchUsers()
    //Fetch Users - onCreateUser
    //Fetch Users - onUpdateUser
    
    //DataStore.observe(Message).subscribe(fetchMessage);
  }, []);


  const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      name
    }
  }
`;


  async function fetchMessage() {
    try {
      const todoData = await API.graphql(graphqlOperation(listUsers))
      const todos = todoData.data.listUsers.items
      setMessages(todos)
    } catch (err) { console.log(err) }
  }

  async function fetchUsers(){
      try{
    const subscription = API.graphql(graphqlOperation(onCreateUser)
    ).subscribe({
        next: (todoData) => {
            setUsersOnline(todoData.value.data.onCreateUser.name)
            fetchMessage();
        }
    });
  }
  catch(err){console.log(err)}
}

  return (
    <div>
        Messages : {messages.length} Users: {usersOnline}
    </div>
    );
}

export default App;