import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Amplify, { API, graphqlOperation }  from 'aws-amplify';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import awsconfig from '../../aws-exports';
import axios from 'axios';
import * as subscriptions from '../../graphql/subscriptions';
import * as queries from '../../graphql/queries';
import './ConversationList.css';
import { DataStore } from "@aws-amplify/datastore";
import { User, Message } from "../../models";

Amplify.configure(awsconfig); // will not sync if you forget this


export default function ConversationList(prop) {

  var totalUsers = 0;

  const [conversations, setConversations] = useState([]);
  const [usersOnline, setUsersOnline] = React.useState([]);
  
  useEffect(() => {
    getConversations()            //Get List of Users
    //getConversationsonUpdate()    //Get List of Users onUpdate
    //getConversationsonCreate()    //Get List of Users onCreate
  },[])

  const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      name
      _deleted
    }
  }
`;

  async function getConversations(){
    try {
      const userObjects = await API.graphql(graphqlOperation(queries.listUsers))
      const users = userObjects.data.listUsers.items
      totalUsers = userObjects.data.listUsers.items.length+1
      setConversations([...conversations, ...users])
      console.log(userObjects.data.listUsers)
    } catch (err) { console.log(err) }
  }
 
  async function getConversationsonUpdate(){
      const subscription = await API.graphql(graphqlOperation(onCreateUser)
      ).subscribe({
        next: (todoData) => {
          const user = todoData.value.data.onCreateUser
          setConversations(conversations.concat(user));
          subscription.unsubscribe(); 
        }
      });
  }

  async function getMessages(){
    
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>

    );
}