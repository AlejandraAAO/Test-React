import PropTypes from "prop-types";

export function Button({ text, name }) {
  return (
    <button
      onClick={() => {
        console.log("holi");
      }}
    >
      {text} - {name}
    </button>
  );
}

//define el tio de variable
//ayuda a los mensajes de error para saber si es por el tipo de dato
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//para enviar props por defecto
Button.defaultProps = {
  name: "someone",
};
