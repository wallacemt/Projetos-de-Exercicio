import { useState } from 'react'
import { Navegacao } from './Navegacao'
import restaurante from './assets/hashtaurante.webp'
import './App.css'
import { ItemCardapio } from './itemCardapio'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'

export function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
          <img src={restaurante} alt="" className='capa'/>
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          <div className='menu'>
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
          </div>
        </> 
}