//Esta funcion toma los inputs y le aplica validaciones especificas
export const validate = (userData) => {
  let errors = {};
  
  // Validación para el email con regex
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(userData.email)){
    errors.email = "El correo electrónico es inválido.";
  }

  return errors;
};

export const isWeekDay = (dateString) => {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  return dayOfWeek !== 6 && dayOfWeek !== 5;
}

