import GlobalStyle from "./components/layout/GlobalStyle";
import Header from "./components/layout/Header";
import HowItWorks from "./components/sections/how-it-works";
import MainContent from "./components/sections/main/index";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainContent />
      <HowItWorks />
    </div>
  );
}

export default App;
