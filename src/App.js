import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/navbar/Navbar";
import ProductDeatails from "./components/ProductDeatails";
import Store from "./components/store/Store";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDeatails />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
