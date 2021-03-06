const Paciente = ({propPacientes, setPaciente, propEliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id} = propPacientes

  const handleEliminar = ()=>{
    const respuesta = confirm('Desea eliminar paciente?')
    if (respuesta) {
        propEliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 bg-white px-5 py-10 shadow-md rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> {nombre} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dueño:
        <span className="font-normal normal-case"> {propietario} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:
        <span className="font-normal normal-case"> {email} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha:
        <span className="font-normal normal-case"> {fecha} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case"> {sintomas} </span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-green-600 text-white font-bold uppercase py-2 px-10 mt-3 rounded-md shadow-md hover:bg-indigo-800"
          onClick= {() => setPaciente(propPacientes) }>
            Editar</button>
        <button
          type="button"
          className="bg-red-700 text-white font-bold uppercase py-2 px-10 mt-3 rounded-md shadow-md hover:bg-red-500"
          onClick={handleEliminar}
          >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
