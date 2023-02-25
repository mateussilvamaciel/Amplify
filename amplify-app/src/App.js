import logo from './logo.svg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
function App() {
  return (
    <Authenticator>
      {({ singOut, user}) => (
        <div className="App">
          <p>
            Ei {user.username}, bem vindo ao Lab!
          </p>
          <button onClick={singOut}>Sair</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
