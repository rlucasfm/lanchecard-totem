import http from '../../../http-common';
import {ICategories} from '../../../typings/index';
import {useState} from 'react';

export function useCategorias(idEstabelecimento: number): Array<any> {
  const [categories, setCategories] = useState([]);

  http
    .get<ICategories[]>('/categoria?idEstabelecimento=' + idEstabelecimento)
    .then((response: any) => {
      setCategories(response.data);
    })
    .catch(() => {
      setCategories([]);
    });

  console.log(categories);
  return [categories];
}
