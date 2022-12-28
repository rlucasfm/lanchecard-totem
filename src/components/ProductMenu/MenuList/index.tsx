import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ICategories, IProductByCategory} from '../../../typings';
import MenuItem from './MenuItem';
import http from '../../../http-common';
import SessionData from '../../../utils/data/SessionData';

interface MenuListProps {
  selectedTab: ICategories;
  addItem: (item: IProductByCategory) => any;
}

export default function ({selectedTab, addItem}: MenuListProps) {
  const [products, setProducts] = useState(null);
  const sessionData = SessionData.getSessionData();

  useEffect(() => {
    http
      .get<ICategories[]>(
        `/produto?idEstabelecimento=${sessionData.idEstabelecimento}&idCategoria=${selectedTab.idCategoria}`,
      )
      .then((response: any) => {
        setProducts(response.data);
      })
      .catch(() => {
        setProducts(null);
      });
  }, [selectedTab.idCategoria, sessionData.idEstabelecimento]);

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
