import React, {useState} from 'react';


const App = () => {

  const[Nome, setNome] = useState('David')

  return(
    <div>
      <p>O meu nome é: {Nome}</p>
      <button onClick={() => setNome('Tati')}>Alterar</button>
    </div>
  )
}

export default App;
