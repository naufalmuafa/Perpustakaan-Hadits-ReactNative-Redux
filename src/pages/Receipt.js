import React, { Component } from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";

import { connect } from "react-redux";

import OrderSummary from "../components/OrderSummary.component";
import themes from "../styles/theme.style";

class Receipt extends Component {
  getTotal() {
    let total = 0;
    const { items } = this.props;
    for (let i = 0; i < items.length; i++) {
      total = total + items[i].cost;
    }
    return <Text style={styles.totText}>Total: ${total.toFixed(2)}</Text>;
  }

  render() {
    const { customer, items, navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headings}>
          <Text style={styles.textHeadings}>Invoice Belanja Anda</Text>
        </View>
        <View style={styles.billings}>
          <Text style={styles.billtext}>Custmore Detail</Text>
          <Text style={styles.text}>{customer.name}</Text>
          <Text style={styles.text}>{customer.phone}</Text>
          <Text style={styles.text}>{customer.email}</Text>
          <Text style={styles.text}>{customer.street}</Text>
        </View>
        <View style={styles.orderSumm}>
          <Text style={styles.billtext}>Detail Order</Text>
          <FlatList
            data={items}
            renderItem={({ item }) => <OrderSummary item={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ height: 0.5, backgroundColor: "#34495e90" }} />
            )}
          />
          {this.getTotal()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headings: {
    backgroundColor: "#2dc200",
    padding: 12,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeadings: {
    color: "#fff",
    fontFamily: "Lato-Black",
    fontSize: 25,
  },
  orderSumm: {
    flex: 1,
    margin: 10,
  },
  billtext: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: themes.BACKGROUND_COLOR,
    justifyContent: "center",
    fontFamily: "Lato-Bold",
    fontSize: 20,
  },
  text: {
    margin: 5,
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  billings: {
    height: 130,
    margin: 10,
  },
  totText: {
	height: 50,
    textAlign: "center",
	paddingTop: 15,
    color: "#ffffff",
	backgroundColor: "#095e00",
	fontFamily: "Lato-Black",
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  customer: state.order.order.customer,
  items: state.order.order.items,
});

export default connect(mapStateToProps)(Receipt);
