import { UPDATE_INVOICES } from "../actions/types";
import listOfInvoices from "../../consts/invoices.json";

const listInvoices = listOfInvoices.listOfInvoices;

const initialState = {
  invoices: listInvoices,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_INVOICES:
      return {
        ...state,
        invoices: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
