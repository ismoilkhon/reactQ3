/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { Products } from "./pages/products";
import { ErrorBoundary } from "./components/errorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Products />
    </ErrorBoundary>
  );
}

export default App;
