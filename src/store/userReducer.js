const INITIAL_STATE = {
  userEmail: '',
  userLoged: 0,
};

/* const initial_state estamos definindo dois estados: usuario logado e email que começam zerados e/ou vazios   */



function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, userLoged: 1, userEmail: action.userEmail }
    case 'LOG_OUT':
      return { ...state, userLoged: 0, userEmail: null }
    default:
      return state;
  }
}

/* Funcão userReducer começa com um estado igual a const initial_state, e recebe uma action
  switch case recebe a ação e o tipo dela

  Tipo LOG_IN: recebe o estado atual, muda o usuario logado para 1, e traz da nossa action um userEmail de onde o reducer chamar
  Tipo LOG_OUT: recebe o estado atual que seria do usuario já logado, volta o usuario para 0 e seta o userEmail para null

  caso nenhuma das solicitação se enquadre a estas, nós devolvemos por padrão o state.

*/

export default userReducer;