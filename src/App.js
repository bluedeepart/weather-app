import Index from "./components/Index";
import { WeatherContextProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherContextProvider>
      <Index />
    </WeatherContextProvider>
  );
}

export default App;
