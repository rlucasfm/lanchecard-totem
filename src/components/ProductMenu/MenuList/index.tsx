import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ICategories, IProductByCategory} from '../../../typings';
import MenuItem from './MenuItem';
import http from '../../../http-common';
import SessionData from '../../../utils/data/SessionData';
import UserData from '../../../utils/data/UserData';

interface MenuListProps {
  selectedTab: ICategories;
  addItem: (item: IProductByCategory) => any;
}

export default function ({selectedTab, addItem}: MenuListProps) {
  const [products, setProducts] = useState<any>(null);
  const sessionData = SessionData.getSessionData();
  const userData = UserData.getUserData();

  useEffect(() => {
    http
      .get<ICategories[]>(
        `/produto?idEstabelecimento=${sessionData.idEstabelecimento}&idCategoria=${selectedTab.idCategoria}`,
      )
      .then((response: any) => {
        const blocked_products: Array<string> = JSON.parse(
          userData.produtosBloqueado,
        );
        setProducts(
          response.data.filter(
            (item: any) =>
              !blocked_products.includes(item.idProduto.toFixed(0)),
          ),
        );
      })
      .catch(() => {
        setProducts(null);
      });
  }, [
    selectedTab.idCategoria,
    sessionData.idEstabelecimento,
    userData.produtosBloqueado,
  ]);

  const handleClickItem = (item: IProductByCategory) => {
    addItem(item);
  };

  return (
    <FlatList
      data={products}
      numColumns={5}
      renderItem={({item}) => (
        <MenuItem
          item={item}
          onClickItem={() => {
            handleClickItem(item);
          }}
        />
      )}
    />
  );
}
