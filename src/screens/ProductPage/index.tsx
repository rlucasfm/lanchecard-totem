import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import FinalizeButton from '../../components/Buttons/FinalizeButton';
import {Container, Row, Col} from '../../components/Layout';
import ProductListCard from '../../components/ProductListCard';
import QuitButton from '../../components/Buttons/QuitButton';
import ProductMenu from '../../components/ProductMenu';
import UserData from '../../utils/data/UserData';
import SessionData from '../../utils/data/SessionData';
import ShoppingCart from '../../utils/data/ShoppingCart';
import {
  ICategories,
  IProductByCategory,
  IProductList,
} from '../../typings/index';
import http from '../../http-common';
import padToCurrency from '../../utils/padToCurrency';
import ModalInsuficient from '../../components/ModalInsuficient';

export default function () {
  const [finalizeEnabled, setFinalizeEnabled] = useState(false);
  const navigation = useNavigation();
  const userData = UserData.getUserData();
  const sessionData = SessionData.getSessionData();
  const [categories, setCategories] = useState(null);
  const [productCart, setProductCart] = useState<IProductList[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    http
      .get<ICategories[]>(
        '/categoria?idEstabelecimento=' + sessionData.idEstabelecimento,
      )
      .then((response: any) => {
        setCategories(response.data);
      })
      .catch(() => {
        setCategories(null);
      });
  }, [sessionData.idEstabelecimento]);

  useEffect(() => {
    if (productCart.length > 0) {
      console.log('effect true', productCart.length);
      setFinalizeEnabled(true);
    } else {
      console.log('effect false', productCart.length);
      setFinalizeEnabled(false);
    }
  }, [productCart.length]);

  const handleFinalize = () => {
    let totalValue = 0;
    productCart.forEach((item: IProductList) => {
      totalValue += item.quantity * item.valorVenda;
    });

    if (totalValue > parseFloat(userData.saldoCartao)) {
      setModalVisible(true);
    } else {
      ShoppingCart.setShoppingCart(productCart);
      navigation.navigate('CheckoutPage');
    }
  };

  const handleQuit = () => {
    navigation.navigate('LoginPage');
  };

  const handleAddItem = (item: IProductByCategory) => {
    const cart_copy = [...productCart];
    const product_same_id = cart_copy.find(
      (element: IProductList) => element.idProduto === item.idProduto,
    );
    if (product_same_id !== undefined) {
      const prod_index = cart_copy.findIndex(
        element => element === product_same_id,
      );
      cart_copy[prod_index].quantity += 1;
      setProductCart(cart_copy);
    } else {
      setProductCart(oldCart => [...oldCart, {...item, quantity: 1}]);
    }
  };

  const handleOnPlus = (item: IProductList) => {
    const cart_copy = [...productCart];
    const prod_index = cart_copy.findIndex(element => element === item);
    cart_copy[prod_index].quantity += 1;
    setProductCart(cart_copy);
  };

  const handleOnLess = (item: IProductList) => {
    const cart_copy = [...productCart];
    const prod_index = cart_copy.findIndex(element => element === item);
    if (cart_copy[prod_index].quantity > 1) {
      cart_copy[prod_index].quantity -= 1;
    } else {
      cart_copy.splice(prod_index, 1);
    }
    setProductCart(cart_copy);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Container style={styles.container}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalInsuficient onClose={handleCloseModal}/>
      </Modal>
      <Row>
        <View style={styles.titlerow}>
          <Col numRows={4}>
            <Image
              source={require('../../assets/images/Lanchecard-Logo.png')}
            />
          </Col>
          <Col numRows={4}>
            <View style={styles.textcont}>
              <Text style={[styles.text1]}>Olá, </Text>
              <Text style={styles.text2}>{userData.nomeCliente}</Text>
            </View>
          </Col>
          <Col numRows={4}>
            <View style={styles.textcont}>
              <Text style={[styles.text1]}>Saldo: </Text>
              <Text style={styles.text2}>
                R$ {padToCurrency(parseFloat(userData.saldoCartao))}
              </Text>
            </View>
          </Col>
        </View>
      </Row>
      <Row style={{height: '85%'}}>
        <Col numRows={4}>
          <ProductListCard
            productList={productCart}
            onLess={handleOnLess}
            onPlus={handleOnPlus}
          />
          <View style={styles.button_section}>
            <Row style={{marginBottom: 15}}>
              <Col>
                <FinalizeButton
                  onPress={handleFinalize}
                  enabled={finalizeEnabled}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <QuitButton onPress={handleQuit} />
              </Col>
            </Row>
          </View>
        </Col>
        <Col numRows={6}>
          {categories ? (
            <ProductMenu tabs={categories} addItem={handleAddItem} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50,
  },
  titlerow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  textcont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text1: {
    fontSize: 24,
    fontWeight: '300',
    color: '#347393',
  },
  text2: {
    fontSize: 24,
    fontWeight: '800',
    color: '#347393',
  },
  button_section: {
    marginTop: 5,
  },
});
