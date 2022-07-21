import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  Text,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import IconShopping from "react-native-vector-icons/Feather";
import IconWishlist from "react-native-vector-icons/MaterialIcons";
import IconMessage from "react-native-vector-icons/MaterialCommunityIcons";
import Product from "../components/Product.component";
import { addToCart } from "../redux/actions/cartActions";
import { fetchProducts } from "../redux/actions/productAction";
const logoImage = require("../assets/images/eco-logo.png");
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
    };
  }
  UNSAFE_componentWillMount = () => {
    this.props.fetchProducts();
  };

  addItemsToCart = (product) => {
    this.props.addToCart(product);
  };
  goHome = () => {
    this.props.navigation.navigate("Products");
  };
  startAnimation() {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        this.endAnimation();
      }, 100);
    });
  }
  endAnimation() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  onPress = () => {
    this.props.navigation.navigate("Checkout");
  };

  render() {
    const { products, navigation } = this.props;
    const { cartItems } = this.props;
    let animatedStyle = { opacity: this.state.opacity };
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            paddingLeft: 10,
          }}
        >
          <TextInput
            style={{
              width: 250,
              height: 50,
              color: "#000000",
              fontSize: 14,
              fontFamily: "Lato-Regular",
              backgroundColor: "#ffffff",
              borderRadius: 10,
              paddingTop: 15,
              paddingHorizontal: 20,
              marginBottom: 5,
              marginTop: 10,
              marginRight: 40,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.53,
              shadowRadius: 13.97,
              
              elevation: 21,
              
            }}
          >
            Cari Hadits
          </TextInput>
          <TouchableOpacity
            onPress={this.onPress}
            style={{ paddingRight: 8, paddingTop: 20 }}
          >
            <IconShopping name="shopping-cart" size={30} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity
            
            style={{ paddingHorizontal: 8, paddingTop: 20 }}
          >
            <IconWishlist name="favorite-outline" size={30} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity
            
            style={{ paddingHorizontal: 8, paddingTop: 20 }}
          >
            <IconMessage
              name="message-text-outline"
              size={30}
              color="#000000"
            />
          </TouchableOpacity>
          <TouchableOpacity
            
            style={{ paddingHorizontal: 8, paddingTop: 20 }}
          >
            <IconWishlist name="notifications-none" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            height: 50,
            paddingTop: 10,
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "stretch",
            opacity: this.state.opacity,
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "Lato-Black",
              backgroundColor: "#0029ff",
              borderRadius: 10,
              padding: 10,
              paddingHorizontal: 20,
              position: "absolute",
            }}
          >
            Keranjang Antum : {cartItems.length} Barang
          </Text>
        </Animated.View>

        <View style={styles.body}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <Product
                item={item}
                addItemsToCart={this.addItemsToCart}
                product={item}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ height: 0.5, backgroundColor: "#34495e90" }} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.cart,
});

export default connect(mapStateToProps, { addToCart, fetchProducts })(Products);
