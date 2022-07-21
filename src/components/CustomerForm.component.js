import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import { addOrder } from '../redux/actions/orderAction';
import { emptyCart } from '../redux/actions/cartActions';

class CustomerForm extends Component {
 state = {
    name:'',
    phone: '',
    email: '',
    street: '',
  }

  renderTextfield(options) {
    return (
        <TextInput style={styles.textField} onChangeText={(value) => this.setState({[options.name]: value})} 
                placeholder= {options.label} value={this.state[options.name]} keyboardType= {options.keyboard || 'default'}/>
      );
  }

  onPressButton = () => {
        const {name, phone, email, street} = this.state;
        const { cartItems, navigation, addOrder, emptyCart } = this.props;
        if (name === '') { return Alert.alert('Nama Tidak Boleh Kosong')}
        if (phone === '') { return Alert.alert('Nomor HP Tidak Boleh Kosong')}
        if (email === '') { return Alert.alert('Email Tidak Boleh Kosong')}
        if (street === '') { return Alert.alert('Alamat Tidak Boleh Kosong')}
        let customer = { name: name, phone: phone, email: email, street: street}
        addOrder({cartItems: cartItems, customer: customer});
        emptyCart();
        this.setState({name: ''});
        this.setState({phone: ''});
        this.setState({email: ''});
        this.setState({street: ''});
        navigation.navigate('Receipt');
    }

  renderButton() {
        return (
            <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
                <Text style={styles.btnText}>BELI</Text>
            </TouchableOpacity>
        );
    }

  render() {
    return (
            <View style={styles.panel}>
                {this.renderTextfield({name: 'name', label: 'Nama Lengkap'})}
                {this.renderTextfield({name: 'phone', label: 'Nomor Handpone', keyboard: 'phone-pad'})}
                {this.renderTextfield({name: 'email', label: 'E-mail', keyboard: 'email-address'})}
                {this.renderTextfield({name: 'street', label: 'Alamat'})}
                {this.renderButton()}
            </View>
    );
  }
}

const styles = StyleSheet.create({
	    panel: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        margin: 10
    },
    textField: {
        height: 40,
        margin: 8,
        fontFamily: 'Lato-Regular',
    },
    btn: {
        backgroundColor: '#34495e',
        borderRadius: 3,
        padding: 12,
        flex: 1,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Lato-Black',
    }
});

const mapStateToProps = (state) => ({
	cartItems: state.cart.cart
})
export default connect(mapStateToProps, {addOrder, emptyCart})(CustomerForm);