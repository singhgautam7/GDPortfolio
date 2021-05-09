import { React, useRef, useState } from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, FormGroup, Button } from "react-bootstrap";
import ContactHeaderContent from "./ContactHeaderContent";
import useInput from "../hooks/useInput";

// const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const isEmail = (value) => value.match(validRegex);

const isNotEmpty = (value) => value.trim() !== "";
const isReason = (value) =>
  value.trim() !== " -- select an option -- " && value.trim() !== "";

function ContactHeaderForm() {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: reasonValue,
    isValid: reasonIsValid,
    hasError: reasonHasError,
    valueChangeHandler: reasonChangeHandler,
    inputBlurHandler: reasonBlurHandler,
    reset: resetReason,
  } = useInput(isReason);

  // const descriptionRef = useRef("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const anchorRef = useRef(null)

  const normalStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const descriptionInputChangeHandler = (event) => {
    setDescriptionValue(event.target.value);
  };

  const cityInputChangeHandler = (event) => {
    setCityValue(event.target.value);
  };

  const resetDescription = () => {
    setDescriptionValue("");
  };

  const resetCity = () => {
    setCityValue("");
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();

    // If name is not valid, then show the error for that
    if (!nameIsValid) {
      nameBlurHandler();
      return;
    }

    // If reason is not valid, show error
    if (!reasonIsValid) {
      reasonBlurHandler();
      return;
    }

    anchorRef.current.click()

    // resetName();
    // resetReason();
    // resetDescription();
    // resetCity();
  };

  return (
    <section className="contact-content-form">
      <div>
        <ContactHeaderContent />
      </div>
      <Form onSubmit={submitButtonHandler}>
        <Form.Row>
          <FormGroup as={Col} md={10}>
            <Form.Label>Name*</Form.Label>
            <Form.Control
              style={normalStyle}
              placeholder="What should I call you?"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              isInvalid={nameHasError}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Don't be shy. Enter a valid name
            </Form.Control.Feedback>
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md={6}>
            <Form.Label>Reason*</Form.Label>
            <Form.Control
              style={normalStyle}
              as="select"
              value={reasonValue}
              onChange={reasonChangeHandler}
              onBlur={reasonBlurHandler}
              isInvalid={reasonHasError}
            >
              <option> -- select an option -- </option>
              <option>Yoga Classes</option>
              <option>Fitness Counselling</option>
              <option>Photoshoot Enquiry</option>
              <option>Collaboration (Brands/Business)</option>
              <option>Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              You have to select one of the option
            </Form.Control.Feedback>
          </Form.Group>

          <FormGroup as={Col} md={4}>
            <Form.Label>City (State)</Form.Label>
            <Form.Control
              style={normalStyle}
              value={cityValue}
              onChange={cityInputChangeHandler}
              placeholder="Where are your from?"
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup as={Col} md={10}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={normalStyle}
              value={descriptionValue}
              onChange={descriptionInputChangeHandler}
              as="textarea"
              placeholder="Need some more space to express yourself?"
            />
          </FormGroup>
        </Form.Row>
        <Button variant="primary" type="submit" onClick={submitButtonHandler}>
          Submit
        </Button>
        <a
          style={{ visibility: "hidden" }}
          ref={anchorRef}
          class="dark"
          href="#mailgo"
          data-address="gautmsingh1997"
          data-domain="gmail.com"
          data-subject={reasonValue}
          data-body={descriptionValue}
        >
        </a>
      </Form>
    </section>
  );
}

export default ContactHeaderForm;
