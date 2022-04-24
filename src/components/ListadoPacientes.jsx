import Paciente from "./Paciente";

const ListadoPacientes = ({ propPacientes, setPaciente, propEliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* el ternario de abajo sirve para ver si hay datos en el propPacientes */}
      {propPacientes && propPacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center bg-center">
            Listado Pacientes
          </h2>
          <p className="text-lg text-center mb-5 mt-1">
            Administra tus
            <span className="text-indigo-600 font-bold"> Pacientes y citas</span>
          </p>

          {propPacientes.map((paciente) => (
            <Paciente 
              key={paciente.id} 
              propPacientes={paciente} 
              setPaciente={setPaciente}
              propEliminarPaciente={propEliminarPaciente}
              />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center bg-center">
            No hay pacientes
          </h2>
          <p className="text-lg text-center mb-5 mt-1">
            Empieza a agregarlos
            <span className="text-indigo-600 font-bold"> y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
