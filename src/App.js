import { useState } from "react";
import "./App.css";
import SetTimer from "./Components/Timer/SetTimer";
import Counter from "./Components/Counter/Counter";
import TextField from "./Components/Form/TextField";
import CheckBox from "./Components/UsestateExamples/CheckBox";
import Form from "./Components/Form/Form";
import TextForm from "./Components/Form/TextForm";
import RegistrationForm from "./Components/Form/Registration Form";
import UserGreeting from "./Components/Form/UserGreeting";
import LoginForm from "./Components/Form/FormHandling";
import Dashboard from "./Components/UsestateExamples/CardApp";
import UserList from "./Components/List/UserList";
import StateLiftUpCounter from "./Components/Counter/StateLiftUpCounter";
import DropDown from "./Components/DropDown/DropDown";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import DropdownWithInput from "./Components/DropDown/DropdownWithInput";

const Checkbox = ({ value, isChecked, onChange }) => {
  return (
    <input
      type="checkbox"
      value={value}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

function App() {
  const sections = [
    { title: "Dog", content: "Dog is a animal" },
    { title: "Dove", content: "Dove is a bird" },
    { title: "Denmark", content: "Denmark is a hotel" },
  ];

  const options = ["String", "Integer", "Array", "Object"];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <SetTimer />
      <Counter />
      <TextField />
      <CheckBox />
      <Form />
      <TextForm />
      <RegistrationForm />
      <UserGreeting />
      <LoginForm />
      <UserList />
      <Dashboard sections={sections} />
      <StateLiftUpCounter />
      <DropDown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
      <DropDown
        options={options}
        Checkbox={Checkbox}
        onOptionSelect={handleOptionSelect}
        selectedOption={selectedOption}
      />
      <TicTacToe />
      <DropdownWithInput items={options} />
    </div>
  );
}

export default App;
