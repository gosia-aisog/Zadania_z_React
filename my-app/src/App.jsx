import "./App.css";
//import Counter from "./components/Counter";
import Table from "./components/Table";
import Button from "./components/Button";
import Label from "./components/Label";
import ClassComponentLoading from "./components/ClassComponentLoading";
import ClassComponentUkrytyParagraf from "./components/ClassComponentUkrytyParagraf";
import ClassCounterZwiekszanieIRownanieWartosci from "./components/ClassCounterZwiekszanieIRownanieWartosci";
import ClassCounterZwiekszanieLimituLicznika from "./components/ClassCounterZwiekszanieLimituLicznika";
import CurrencyApp from "./components/CurrencyApp";
import ClassComponentInputPoprawneHaslo from "./components/ClassComponentInputPoprawneHaslo";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ClassCounterZwiekszanieIRownanieWartosci />
        <ClassCounterZwiekszanieLimituLicznika />
        <ClassComponentInputPoprawneHaslo />
        <ClassComponentUkrytyParagraf />
        <Table> </Table> Lekcja 2 zad 4 :)
        <Button
          onClickSendDataToParent={(e) => console.log("Lekcja2zad2")}></Button>
        <CurrencyApp />
      </header>
    </div>
  );
};

export default App;
