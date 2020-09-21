import React, {useEffect, useState} from 'react'
import Compose from '../Compose'
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton'
import moment from 'moment'
import { DataStore } from "@aws-amplify/datastore";
import { Message as MessageDB } from "../../models";
import Message from '../Message';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';


Amplify.configure(awsconfig); // will not sync if you forget this

const MY_USER_ID = 'Sunil'

export default function MessageList(prop){
  
  const [messages, setMessages] = useState([])

  React.useEffect(() => {
    getMessages()
    DataStore.observe(MessageDB).subscribe(getMessages);
  }, [])
  React.useEffect(() => {
    getMessages()
  }, [])

  const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      user
      text
    }
  }
`;

  async function getMessages(){
    
    const _tempMessages = await DataStore.query(MessageDB);
    setMessages([...messages, ..._tempMessages])
  
  }

  const renderMessages = () =>{
    let i = 0
    let messageCount = messages.length
    let tempMessages = []

    while(i < messageCount){
      let previous = messages[i-1]
      let current = messages[i]
      let next = messages[i+1]
      let isMine = current.user === prop.username.username.username;
      let currentMoment = moment(current.createdAt);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if(previous){
        let previousMoment = moment(previous.createdAt);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.user === current.user;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if(next){
        let nextMoment = moment(next.createdAt);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.user === current.user;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }
      
      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      )

      i +=1

    }

    return tempMessages

  }

  return(
    <div className="message-list">
          <Toolbar
      title="Conversation Title"
      rightItems={[
        <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
        <ToolbarButton key="video" icon="ion-ios-videocam" />,
        <ToolbarButton key="phone" icon="ion-ios-call" />
      ]}
    />

    <div className="message-list-container">{renderMessages()}</div>

    <Compose rightItems={[
      <ToolbarButton key="photo" icon="ion-ios-camera" />,
      <ToolbarButton key="image" icon="ion-ios-image" />,
      <ToolbarButton key="audio" icon="ion-ios-mic" />,
      <ToolbarButton key="money" icon="ion-ios-card" />,
      <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
      <ToolbarButton key="emoji" icon="ion-ios-happy" />
    ]}/>
<button onClick={() => {Amplify.DataStore.clear()}}>Clear Data</button>
  </div>
  )
}