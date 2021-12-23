/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { addNewNote } from "./redux/note/noteSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardTitle, Input, Label, Button } from "reactstrap";
function InputText() {
    const [takenote, settakenote] = useState("");
    const [cols, setcols] = useState("");
    
  
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      dispatch(addNewNote({ content: takenote, color: cols }));
  
      e.preventDefault();
    };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardTitle>Note</CardTitle>
        <Card style={{ height: "250px" }}>
          <Input
            className={
              cols === "red" ? "red" : cols === "blue" ? "blue" : "dark"
            }
            type="button"
            value={takenote}
            onChange={(e) => settakenote(e.target.value)}
            style={{ height: "250px" }}
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Note Al"
          />
        </Card>
        <Label htmlFor="colors"></Label>
        <Input
          className="mx-2"
          style={{
            backgroundColor: "burlywood",
            height: "50px",
            width: "50px",
          }}
          type="radio"
          name="colors"
          value="red"
          onChange={(e) => setcols(e.target.value)}
        />
        <Input
          className="mx-2"
          style={{
            backgroundColor: "aquamarine",
            height: "50px",
            width: "50px",
          }}
          type="radio"
          name="colors"
          value="blue"
          onChange={(e) => setcols(e.target.value)}
        />
        <Input
          style={{
            backgroundColor: "darkgrey",
            height: "50px",
            width: "50px",
          }}
          type="radio"
          name="colors"
          value="dark"
          onChange={(e) => setcols(e.target.value)}
        />
        <Button className="mt-2 mx-2 " type="submit">
          Ekle
        </Button>
      </form>
    </>
  );
}

export default InputText;
