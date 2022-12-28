export interface ICategories {
  idCategoria: number;
  nomeCategoria: string;
}

export interface IBranches {
  idEstabelecimento: number;
  nomeEstabelecimento: string;
  horaEntrega: string;
  cashback: boolean;
}

export interface IUserData {
  statusLogin: boolean;
  msg: string;
  dadosCliente: {
    idCliente: number;
    nomeCliente: string;
    nrCartao: number;
    saldoCartao: string;
    contaPosPago: number;
    limitePosPago: string;
    limiteDiario: string;
    consumoDiario: number;
    produtosBloqueado: string;
  };
}

export interface IProductByCategory {
  idProduto: number;
  nomeProduto: string;
  etiqueta: string;
  idCategoria: number;
  idEstabelecimento: number;
  idFornecedor: number;
  valorCusto: number;
  valorVenda: number;
  qtdEstoque: number;
  descricao: string | null;
  imagem: string;
  cashback: {
    grupo: string | null;
    default: {
      balcao: string;
      totem: string;
      online: string;
      agenda: number;
    };
  };
}

export interface IProductList extends IProductByCategory {
  quantity: number;
}

export interface IBuying {
  idCliente: number;
  senha: string;
  idEstabelecimento: number;
  horaRetirada: string;
  tipoCompra: string;
  valorPedido: number;
  valorDesconto: number;
  valorTotal: number;
  produto: IProductSimple[];
}

export interface IProductSimple {
  idProduto: number;
  qtd: number;
}
