import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container} from '../../components/Layout';
import {IBranches} from '../../typings';
import http from '../../http-common';
import {Picker} from '@react-native-picker/picker';
import SessionData from '../../utils/data/SessionData';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const navigation = useNavigation();
  const [branchesList, setBranchesList] = useState<IBranches[]>([]);
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    http
      .get<IBranches[]>('/cantina')
      .then((response: any) => {
        setBranchesList(response.data);
      })
      .catch(() => {
        setBranchesList([]);
      });
  }, []);

  const handlePress = () => {
    SessionData.pushSessionData({idEstabelecimento: selectedBranch});
    navigation.navigate('LoginPage');
  };

  return (
    <View style={[styles.viewfather]}>
      <Container style={[styles.container]}>
        <Text style={[styles.basetext]}>Escolha a cantina:</Text>
        <Picker
          style={[styles.picker]}
          selectedValue={selectedBranch}
          onValueChange={itemValue => setSelectedBranch(itemValue)}>
          {branchesList.map(element => {
            return (
              <Picker.Item
                key={element.idEstabelecimento}
                label={element.nomeEstabelecimento}
                value={element.idEstabelecimento}
              />
            );
          })}
        </Picker>
        <TouchableOpacity style={[styles.btnsend]} onPress={handlePress}>
          <Text>Selecionar</Text>
        </TouchableOpacity>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  viewfather: {
    width: '100%',
    height: '100%',
  },
  btnsend: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  basetext: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 10,
  },
  picker: {
    width: '20%',
  },
});
