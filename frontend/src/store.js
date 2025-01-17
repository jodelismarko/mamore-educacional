import { legacy_createStore as createStore } from 'redux'

const initialState = {
  detalhesShow: false,
  caunt:0,
  carrinho: [],
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
      case 'setCaunt':
        state.caunt = state.caunt + 1
        return state
    case 'addCarrinho':
      console.log("adicionando um novo elemento no carrinho")
      state.carrinho = [...state.carrinho, rest.carrinho]
      return state
    case 'removeCarrinho':
      state.carrinho = state.carrinho.filter(carrinho => carrinho !== rest.carrinho)
      return state
      case 'limparCarrinho':
        state.carrinho = []
        return state
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
