import React from "react";
import { Card, CardTitle } from "reactstrap";

function Note({ not }) {
  return (
    <>
      <Card
        className={
          not.color === "red" ? "red" : not.color === "blue" ? "blue" : "dark"
        }
        type="button"
      >
        <CardTitle className="text-center aling-item-center">
          {not.content}
        </CardTitle>
      </Card>
    </>
  );
}

export default Note;
