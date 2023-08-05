import { ChatEngine } from 'react-chat-engine';

import ChatFeed from '../src/Components/ChatFeed';
import LoginForm from '../src/Components/LoginForm';
import './App.css';

const projectID = 'd194d9b5-70de-486f-8d14-864158918745';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;