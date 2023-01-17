import './App.css';
import { PinInputContainer } from "./PinInputContainer";
const regex = /^\d$/;
function App() {
  return (
    <PinInputContainer regex={regex} options={{ infinite: false }} />
  );
}

export default App;
