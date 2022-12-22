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
