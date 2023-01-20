import React, { useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";

import listOfInvoices from "../consts/invoices.json";
import dummyInvoice from "../consts/dummyInvoice.json";

import InvoiceItem from "../components/InvoiceItem";
import Statusbar from "../components/Statusbar";
import Header from "../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { updateInvoices } from "../redux/actions/InvoiceActions";

const listInvoices = listOfInvoices.listOfInvoices;
const dummyInv = dummyInvoice.dummyInvoice;

export default function Invoices() {
  const invoices = useSelector((state) => state.Invoice.invoices);
  const dispatch = useDispatch();

  /**
   * The on add function, triggers when user swipes the list and presses delete button
   * @param index - index is used to delete the specific invoice from the list
   */
  function onDelete(index) {
    const copyInvoices = invoices?.slice();
    copyInvoices.splice(index, 1);
    dispatch(updateInvoices(copyInvoices));
  }

  /**
   * The on add function, triggers when user presses add button in header
   */
  function onAdd() {
    const copyInvoices = invoices.slice();
    copyInvoices.push(dummyInv);
    dispatch(updateInvoices(copyInvoices));
  }

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor="#fff" barStyle="dark-content" />
      <FlatList
        data={invoices}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item, index }) => {
          return (
            <InvoiceItem
              item={item}
              onDelete={() => {
                onDelete(index);
              }}
            />
          );
        }}
        ListHeaderComponent={<Header onAdd={onAdd} />}
        stickyHeaderIndices={[0]}
        refreshControl={<RefreshControl />}
        keyExtractor={(item, index) => `item_${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
  },
  contentContainerStyle: {
    paddingBottom: 80,
  },
});
