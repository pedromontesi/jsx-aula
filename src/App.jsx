import React from 'react';
import Produtos from './src/Produtos';


const App = () => {
  const [dados, setDados] = React.useState(null)
  
  async function handleCLick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    )
    const json = await response.json();
    setDados(json)
    }


  return (
    <div>
      <button style={{margin: '.5rem'}} onClick={handleCLick}>Notebook</button>
      <button style={{margin: '.5rem'}} onClick={handleCLick}>Tablet</button>
      <button style={{margin: '.5rem'}} onClick={handleCLick}>Smartphone</button>
      {dados && <Produtos dados={dados}/>}
    </div>
  )
}

export default App

