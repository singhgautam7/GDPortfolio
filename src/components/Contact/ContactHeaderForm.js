import { React } from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, FormGroup, Button } from "react-bootstrap";
import ContactHeaderContent from "./ContactHeaderContent";
import useInput from "../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
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
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: reasonValue,
    isValid: reasonIsValid,
    hasError: reasonHasError,
    valueChangeHandler: reasonChangeHandler,
    inputBlurHandler: reasonBlurHandler,
    reset: resetReason,
  } = useInput(isReason);

  const normalStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const nameClasses = nameHasError ? "invalid" : "valid";
  const emailClasses = emailHasError ? "invalid" : "valid";
  const reasonClasses = reasonHasError ? "invalid" : "valid";
  let formIsValid = false;

  if (nameIsValid && emailIsValid && reasonIsValid) {
    formIsValid = true;
  }

  const submitButtonHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      nameBlurHandler();
      emailBlurHandler();
      reasonBlurHandler();
      return;
    }

    resetName();
    resetEmail();
    resetReason();
  };

  return (
    <section>
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
          <FormGroup as={Col} md={5}>
            <Form.Label>Email*</Form.Label>
            <Form.Control
              style={normalStyle}
              placeholder="your@mail.com"
              type="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              isInvalid={emailHasError}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              This will help me to contact you back. Enter a valid email
            </Form.Control.Feedback>
          </FormGroup>

          <Form.Group as={Col} md={5}>
            <Form.Label>Reason*</Form.Label>
            <Form.Control
              style={normalStyle}
              as="select"
              value={reasonValue}
              onChange={reasonChangeHandler}
              onBlur={reasonBlurHandler}
              isInvalid={reasonHasError}
            >
              <option selected value>
                {" "}
                -- select an option --{" "}
              </option>
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
        </Form.Row>

        <Form.Row>
          <FormGroup as={Col} md={10}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={normalStyle}
              as="textarea"
              placeholder="Need some more space to express yourself?"
            />
          </FormGroup>
        </Form.Row>
        <Button variant="primary" type="submit" onClick={submitButtonHandler}>
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default ContactHeaderForm;
