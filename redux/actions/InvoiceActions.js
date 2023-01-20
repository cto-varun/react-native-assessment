import { UPDATE_INVOICES } from "./types";

export const updateInvoices = (invoices) => (dispatch) => {
  dispatch({
    type: UPDATE_INVOICES,
    payload: invoices || [],
  });
};
