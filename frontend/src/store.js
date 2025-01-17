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
        console.log('adicionando um ao caunt')
        state.caunt = state.caunt + 1
        return state
    case 'addCarrinho':
      state.carrinho = [...state.carrinho, rest.carrinho]
      return state
    case 'removeCarrinho':
      state.carrinho = state.carrinho.filter(carrinho => carrinho !== rest.carrinho)
      return state
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
