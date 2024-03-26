const Entrada = ({ entrada, evento, envio, borrar }) => {
  return (
    <>
      <input
        type='text'
        value={entrada}
        onChange={evento}
        onClick={borrar}
      />
      <button onClick={envio}>Enviar</button>

    </>
  )
}

export default Entrada
