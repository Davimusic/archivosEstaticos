const initialState = {
  tasks: {
  'cooooo':{'diasDuracion':1, 'accionAnteriorObligatoria': 'inicio'}, 
  'azzul':{'diasDuracion':2, 'accionAnteriorObligatoria': 'inicio'}, 
  'davis': {'diasDuracion':4, 'accionAnteriorObligatoria': 'cooooo'},  
  'otro': {'diasDuracion':4, 'diasDespuesDeInicioProyecto': 4}},
  objeto : {}, 
  llavesProyectos: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TASKS':
        return {
          ...state,
          tasks: action.payload, 
        };  
    case 'UPDATE_OBJETO':
      return {
        ...state,
        objeto: action.payload, 
      };
    case 'UPDATE_LLAVES_PROYECTOS':
      return {
        ...state,
        llavesProyectos: action.payload, 
      };                                                         
    default:
      return state;
  }
};

export default counterReducer;
