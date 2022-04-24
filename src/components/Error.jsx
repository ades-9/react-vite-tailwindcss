const Error = ({ children }) => { // children es una palabra reservada de react es un prop que sirve para enviar varias elementos del componente padre al hijo
  return (
    <div className="bg-red-600 font-bold text-white text-center p-2 mb-2 rounded-md">
      {children}
    </div>
  );
};

export default Error;
