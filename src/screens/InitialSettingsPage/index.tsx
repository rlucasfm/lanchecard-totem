import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Container} from '../../components/Layout';
import {IBranches} from '../../typings';
import http from '../../http-common';

export default function () {
  const [branchesList, setBranchesList] = useState<IBranches[]>([]);

  useEffect(() => {
    http
      .get<IBranches[]>()
      .then((response: any) => {
        setBranchesList(response.data);
      })
      .catch(() => {
        setBranchesList([]);
      });
  }, []);

  return (
    <Container>
      <View>
        <Text>Escolha</Text>
      </View>
    </Container>
  );
}
