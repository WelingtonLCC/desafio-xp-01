import { Container, Content, Row, Column } from "./styles";
import Input from "./components/Input"
import Button from "./components/Button"
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentnumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const addOperation = (op) => {
    if(op === '+' || op === '-' || op === '/' || op === '*' || op === '√'){
      setCurrentnumber('0');
      setFirstNumber(currentNumber);

      setOperation(op);
    }

    if(op === '%'){
      setCurrentnumber(String((Number(currentNumber) / 100)));
    }
  }

  const handlerAddNumber = (num) => {
    setCurrentnumber(prev => `${prev === '0' ?  '' : prev }${num}`);
  }

  const clearNumber = () => {
    setCurrentnumber('0');
    setFirstNumber('0')
    setOperation('');
  }

  const Calcular = () => {
    console.log('currentNumber');
    if(!(firstNumber === '0' && currentNumber === '0'))
    {
      switch(operation){
        case '-': 
          setCurrentnumber(String(Number(firstNumber.replace(",", ".")) - Number(currentNumber.replace(",","."))));
          break;
        case '+': 
          setCurrentnumber(String(Number(firstNumber.replace(",",".")) + Number(currentNumber.replace(",","."))));
          break;
        case '/': 
          setCurrentnumber(String(Number(firstNumber.replace(",",".")) / Number(currentNumber.replace(",","."))));
        break;
        case '*': 
          setCurrentnumber(String(Number(firstNumber.replace(",",".")) * Number(currentNumber.replace(",","."))));
        break;  
        case '%': 
          setCurrentnumber(String(Number(firstNumber.replace(",",".")) * Number(currentNumber.replace(",","."))));
        break;  
        case '√': 
          setCurrentnumber(String( Math.pow(Number(firstNumber.replace(",",".")),  Number(currentNumber.replace(",",".")))));
        break;  
        default:
          setCurrentnumber('0');
          setFirstNumber('0')
      }
    }
  }

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber}></Input>  
        <Row>
          <Button label="÷" onClick={() => {addOperation('/')}}></Button>
          <Button label="x" onClick={() => {addOperation('*')}}></Button>
          <Button label="%" onClick={() => {addOperation('%')}}></Button>
          <Button label="√" onClick={() => {addOperation('√')}}></Button>
        </Row>
        <Row></Row>
        <Row>
          <Button label="7" onClick={() => {handlerAddNumber(7)}}></Button>
          <Button label="8" onClick={() => {handlerAddNumber(8)}}></Button>
          <Button label="9" onClick={() => {handlerAddNumber(9)}}></Button>
          <Button label="-" onClick={() => {addOperation('-')}}></Button>
        </Row>
        <Row>
          <Button label="4"  onClick={() => {handlerAddNumber(4)}}></Button>
          <Button label="5"  onClick={() => {handlerAddNumber(5)}}></Button>
          <Button label="6"  onClick={() => {handlerAddNumber(6)}}></Button>
          <Button label="+" onClick={() => {addOperation('+')}}></Button>
        </Row>
        <Row>
          <Button label="1"  onClick={() => {handlerAddNumber(1)}}></Button>
          <Button label="2"  onClick={() => {handlerAddNumber(2)}}></Button>
          <Button label="3"  onClick={() => {handlerAddNumber(3)}}></Button>
          <Button label="C" onClick={clearNumber}></Button>
        </Row>
        <Row>
          <Button label="0"  onClick={() => {handlerAddNumber(0)}}></Button>
          <Button label="00"  onClick={() => {handlerAddNumber('00')}}></Button>
          <Button label="," onClick={() => {handlerAddNumber(',')}}></Button>
          <Button label="=" onClick={Calcular}></Button>
        </Row>
        
        
      </Content>
    </Container>
  );
}

export default App;
