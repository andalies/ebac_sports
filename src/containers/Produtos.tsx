import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.map((f) => f.id).includes(produto.id)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
