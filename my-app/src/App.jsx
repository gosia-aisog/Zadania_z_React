import "./App.css";
//import Counter from "./components/Counter";
import Table from "./components/Table";
import Button from "./components/Button";
import Label from "./components/Label";
import ClassCounterLoading from "./components/ClassCounterLoading";
import ClassComponentUkrytyParagraf from "./components/ClassComponentUkrytyParagraf";
import ClassCounterZwiekszanieIRownanieWartosci from "./components/ClassCounterZwiekszanieIRownanieWartosci";
import ClassCounterZwiekszanieLimituLicznika from "./components/ClassCounterZwiekszanieLimituLicznika";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ClassCounterZwiekszanieIRownanieWartosci />
        <ClassCounterZwiekszanieLimituLicznika />
        <ClassCounterLoading />
        <ClassComponentUkrytyParagraf />
        <Table> </Table> Lekcja 2 zad 4 :)
        {/* <Counter initialCounter={0} />
        <Counter initialCounter={100} /> */}
        <Button
          onClickSendDataToParent={(e) => console.log("Lekcja2zad2")}></Button>
      </header>
    </div>
  );
};

export default App;
