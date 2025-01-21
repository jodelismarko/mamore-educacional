import { legacy_createStore as createStore } from 'redux'

const initialState = {
  teste: false,
  detalhesShow: false,
  caunt: 0,
  carrinho: [
  ],
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
    case 'addQtdeCarrinho':
      console.log("adicionando quantidade produto no carrinho")
      state.carrinho.filter(carrinho => carrinho == rest.produtoQuantidade).lastItem.qtde = state.carrinho.filter(carrinho => carrinho == rest.produtoQuantidade).lastItem.qtde + 1
      return state
    case 'removeQtdeCarrinho':
      console.log("adicionando quantidade produto no carrinho")
      state.carrinho.filter(carrinho => carrinho == rest.produtoQuantidade).lastItem.qtde = state.carrinho.filter(carrinho => carrinho == rest.produtoQuantidade).lastItem.qtde - 1
      return state
    case 'removeCarrinho':
      state.carrinho = state.carrinho.filter(carrinho => carrinho !== rest.carrinho)
      return state
    case 'limparCarrinho':
      state.caunt = 0
      state.carrinho = []
      return state
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
