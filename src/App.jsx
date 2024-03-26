// import Card from './components/Card'
import { useState } from 'react'
import Btn from './components/Btn'
import Entrada from './components/Entrada'
const App = () => {
  const [contador, setContador] = useState(10)
  const aumentar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)
  const reset = () => setContador(0)
  const [name, setName] = useState('')
  const handleChangeName = (event) => setName(event.target.value)
  const handleSend = () => window.alert(`El Nombre es : ${name}`)
  const borrar = () => setName('')
  // insertar lógica de control aquí, no enviar la función

  return (
    <>
      <p>El numero es :{contador}</p>
      <button onClick={aumentar}>+1</button>
      <button onClick={restar}>-1</button>
      <Btn reset={reset} />
      <Entrada entrada={name} evento={handleChangeName} envio={handleSend} borrar={borrar} />

    </>
  )
}

export default App
