import { legacy_createStore as createStore } from 'redux'

const initialState = {
  detalhesShow: false,
  carrinho: [],
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
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
