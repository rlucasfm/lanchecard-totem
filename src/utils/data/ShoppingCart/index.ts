import {IProductList, IProductSimple} from '../../../typings';
import {IBuying} from './../../../typings/index';
import {IUser} from './../UserData/IUser';

let shopping_cart: IProductList[] = [];
let totalValue: number = 0;
let totalDiscount: number = 0;

export default {
  setShoppingCart(cart: IProductList[]) {
    shopping_cart = cart;

    let total = 0;
    shopping_cart.forEach((item: IProductList) => {
      total += item.quantity * item.valorVenda;
    });

    this.setTotalValue(total);
    this.setTotalDiscount(0);
  },

  getShoppingCart() {
    return shopping_cart;
  },

  setTotalValue(value: number) {
    totalValue = value;
  },

  getTotalValue() {
    return totalValue;
  },

  setTotalDiscount(value: number) {
    totalDiscount = value;
  },

  getTotalDiscount() {
    return totalDiscount;
  },

  buyingInterface(
    cart: IProductList[],
    userData: IUser,
    password: string,
    idEstab: number,
    horaRetirada: string,
  ) {
    let products: IProductSimple[] = [];
    cart.forEach((element: IProductList) => {
      products.push({
        idProduto: element.idProduto,
        qtd: element.quantity,
      });
    });

    let cart_api: IBuying = {
      idCliente: userData.idCliente,
      senha: password,
      idEstabelecimento: idEstab,
      horaRetirada: horaRetirada,
      tipoCompra: 'TOTEM',
      valorPedido: this.getTotalValue() - this.getTotalDiscount(),
      valorDesconto: this.getTotalDiscount(),
      valorTotal: this.getTotalValue(),
      produto: products,
    };

    return cart_api;
  },
};
