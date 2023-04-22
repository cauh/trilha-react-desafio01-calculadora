
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleNumberOperations = (operation) => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation(operation)
    }else {
      switch(operation){
        case '+':
            setCurrentNumber(String(Number(firstNumber) + Number(currentNumber)))
          break;
        case '-':
            setCurrentNumber(String(Number(firstNumber) - Number(currentNumber)))
          break;
        case 'x':
          setCurrentNumber(String(Number(firstNumber) * Number(currentNumber)))
          break;
        case '/':
          setCurrentNumber(String(Number(firstNumber) / Number(currentNumber)))
          break;
        default: 
          break;
      }


      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleNumberOperations('+');
          break;
        case '-':
          handleNumberOperations('-');
          break;
        case 'x':
          handleNumberOperations('x');
          break;
        case '/':
          handleNumberOperations('/');
          break;
        default: 
          break;
      }
  }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={() => handleNumberOperations('x')}/>
          <Button label="/" onClick={() => handleNumberOperations('/')}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleNumberOperations('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleNumberOperations('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
