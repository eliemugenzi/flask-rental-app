import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Picking date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder=" return date" required />
        </FormGroup>

        
        <FormGroup className="select__group">
          <select>
            <option value="ac">Automatic transition</option>
            <option value="non-ac">Manual transition</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
