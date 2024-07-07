/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { ErrorBoundary } from "./components/errorBoundary";
import Products from "./pages/products";

function App() {
  return (
    <ErrorBoundary>
      <Products />
    </ErrorBoundary>
  );
}

export default App;
