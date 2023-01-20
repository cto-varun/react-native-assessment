import { Provider } from "react-redux";
import Invoices from "./screens/Invoices";

import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Invoices />
    </Provider>
  );
}
