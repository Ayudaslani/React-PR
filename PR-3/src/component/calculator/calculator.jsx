import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './calculator.css';
import { useState } from 'react';
const Calculator = () => {
    const [input, setinput] = useState(" ");

    const handleclick = (value) => {
        const operators = ["+", "-", "*", "/", "%"];
        const lastChar = input.slice(-1);
        if (operators.includes(lastChar) && operators.includes(value)) {
            setinput(input.slice(0, -1) + value); // replace last operator
        } else {
            setinput(input + value);
        }

    }
    const handleEqual = () => {
        let sanitizedInput = input.replace(/\b0+(\d+)/g, "$1");
        setinput(eval(sanitizedInput).toString());
    }
    const removeAll = () => {
        setinput(" ");
    }
    const handleBackspace = () => {
        setinput(input.slice(0, -1));
    }



    return (
        <>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <div className="calculator-card">
                    <input className="inputdata text-end" value={input} onChange={(e) => setinput(e.target.value)} />
                    <div className="buttons">

                        <Row>
                            <Col><button className="btn gray" onClick={() => removeAll()}>AC</button></Col>
                            <Col><button className="btn gray" onClick={handleBackspace}>←</button></Col>
                            <Col><button className="btn gray">%</button></Col>
                            <Col><button className="btn orange" onClick={() => handleclick("/")}>÷</button></Col>
                        </Row>

                        <Row>
                            <Col><button className="btn dark" onClick={() => handleclick("7")}>7</button></Col>
                            <Col><button className="btn dark" onClick={() => handleclick("8")}>8</button></Col>
                            <Col><button className="btn dark" onClick={() => handleclick("9")}>9</button></Col>
                            <Col><button className="btn orange" onClick={() => handleclick("*")}>×</button></Col>
                        </Row>

                        <Row>
                            <Col><button className="btn dark" onClick={() => handleclick("4")}>4</button></Col>
                            <Col><button className="btn dark" onClick={() => handleclick("5")}>5</button></Col>
                            <Col><button className="btn dark" onClick={() => handleclick("6")}>6</button></Col>
                            <Col><button className="btn orange" onClick={() => handleclick("-")}>-</button></Col>
                        </Row>

                        <Row>
                            <Col><button className="btn dark" onClick={() => handleclick("1")}>1</button></Col>
                            <Col><button className="btn dark" onClick={() => handleclick("2")}>2</button></Col>
                            <Col><button className="btn dark" onClick={() => handleclick("3")}>3</button></Col>
                            <Col><button className="btn orange" onClick={() => handleclick("+")}>+</button></Col>
                        </Row>

                        <Row>
                            <Col xs={6}><button className="btn dark wide" onClick={() => handleclick("0")}>0</button></Col>
                            <Col><button className="btn dark" onClick={() => handleclick(".")}>.</button></Col>
                            <Col><button className="btn orange" onClick={() => handleEqual("1")}>=</button></Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Calculator;