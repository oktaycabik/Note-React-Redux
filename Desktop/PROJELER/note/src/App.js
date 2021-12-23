/* eslint-disable react/jsx-no-duplicate-props */

import { useSelector } from "react-redux";

import InputText from "./InputText";
import Note from "./Note";
import "./app.css";
import { Row, Col, Container,Input } from "reactstrap";
import { useState } from "react";

function App() {
  const note = useSelector((state) => state.note.note);
  const [filter, setfilter] = useState("")
  const filtered=note.filter((not)=>not.content.toLowerCase().includes(filter.toLowerCase()))
  
  
  
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col xs="12">
          <Input value={filter} onChange={(e)=>setfilter(e.target.value)} placeholder="Ara..."/>
          <InputText /> 
        </Col>
      </Row>
      <Row>
        {filtered.map((not, key) => (
          <Col key={key} xs="3">
            <Note not={not} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
