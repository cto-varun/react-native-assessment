import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import AppleStyleSwipeableRow from "./AppleStyleSwipeableRow";

export default function InvoiceItem({ item, onDelete }) {
  const customer = item.customer;

  const totalAmount = item.items?.reduce((n, { rate }) => n + rate, 0);
  return (
    <AppleStyleSwipeableRow
      delete={() => {
        onDelete();
      }}
      phone={() => {
        Linking.openURL(`tel:${customer.contact.mobileNumber}`);
      }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.invoiceDate}>{item.invoiceDate}</Text>
          <Text style={styles.name}>
            {customer.firstName} {customer.lastName}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.name}>{item.invoiceNumber}</Text>
          <Text style={styles.name}>{`${item.currency} ${totalAmount}`}</Text>
        </View>
      </View>
    </AppleStyleSwipeableRow>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  invoiceDate: {
    color: "#888",
    fontSize: 12,
  },
  name: {
    marginTop: 8,
    fontSize: 13,
    color: "#444",
  },
  email: {
    fontSize: 12,
  },
  amountContainer: {
    alignItems: "flex-end",
  },
});
