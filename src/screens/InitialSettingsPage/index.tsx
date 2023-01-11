import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Container} from '../../components/Layout';
import {IBranches} from '../../typings';
import http from '../../http-common';
import {Picker} from '@react-native-picker/picker';
import SessionData from '../../utils/data/SessionData';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import ModalBase from '../../components/ModalBase';

export default function () {
  const navigation = useNavigation();
  const [branchesList, setBranchesList] = useState<IBranches[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [token, setToken] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
    if (selectedBranch !== null) {
      SessionData.setSessionData({
        idEstabelecimento: selectedBranch,
        token: token,
      });
      navigation.navigate('LoginPage');
    } else {
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={[styles.viewfather]}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalBase
          onClose={handleCloseModal}
          title={'Ops! Algo deu errado'}
          text={'Selecione uma cantina!'}
          closeBtnText={'Voltar'}
        />
      </Modal>
      <Container style={[styles.container]}>
        <Text style={[styles.basetext]}>Digite o seu token:</Text>
        <TextInput
          label="Token"
          value={token}
          onChangeText={text => setToken(text)}
          style={{marginBottom: 40}}
        />
        {token !== '' ? (
          <>
            <Text style={[styles.basetext]}>Escolha a cantina:</Text>
            <Picker
              style={[styles.picker]}
              selectedValue={selectedBranch}
              onValueChange={itemValue => setSelectedBranch(itemValue)}>
              <Picker.Item label="" value="" />
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
              <Text style={{color: 'white'}}>Selecionar</Text>
            </TouchableOpacity>
          </>
        ) : null}
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
    borderColor: '#5bf56a',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    backgroundColor: '#0d7a18',
  },
  container: {
    padding: 100,
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
