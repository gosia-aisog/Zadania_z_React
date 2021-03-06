import "./App.css";
//import Counter from "./components/Counter";
import Table from "./components/Table";
import Button from "./components/Button";
import ClassComponentLoading from "./components/ClassComponentLoading";
import ClassComponentUkrytyParagraf from "./components/ClassComponentUkrytyParagraf";
import ClassCounterZwiekszanieIRownanieWartosci from "./components/ClassCounterZwiekszanieIRownanieWartosci";
import ClassCounterZwiekszanieLimituLicznika from "./components/ClassCounterZwiekszanieLimituLicznika";
import CurrencyApp from "./components/CurrencyApp";
import ClassComponentInputPoprawneHaslo from "./components/ClassComponentInputPoprawneHaslo";
import ClassCounterBoom from "./components/ClassCounterBoom";
import ClassAlertBar from "./components/ClassAlertBar";
import Input from "./components/Input";
import SquareOrCircle from "./components/SquareOrCircle";
import List from "./components/List";
import ModificationList from "./components/ModificationList";
import UniversalInput from "./components/UniversalInput";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SquareOrCircle />
        <Input
          onInputChange={(e) => console.log(e.target.value)}
          placeholder={"placeholder"}
        />
        <ClassCounterBoom />
        <ClassAlertBar />
        <ClassComponentLoading />
        <ClassCounterZwiekszanieIRownanieWartosci />
        <ClassCounterZwiekszanieLimituLicznika />
        <ClassComponentInputPoprawneHaslo />
        <ClassComponentUkrytyParagraf />
        <Table />
        Lekcja 2 zad 4 :)
        <Button
          onClickSendDataToParent={(e) => console.log("Lekcja2zad2")}></Button>
        <List />
        <ModificationList />
        <UniversalInput />
        <UniversalInput inputType="text" />
        <UniversalInput inputType="number" />
        <UniversalInput inputType="email" />
        <CurrencyApp />
      </header>
    </div>
  );
};

export default App;
