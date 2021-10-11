import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import {OverlayTrigger} from "react-bootstrap";

const popover = (
    <Popover id="termsandconditions-popover">
        <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
);

const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{color: 'blue'}}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
)

const submitForm = () => {

}
const SummaryForm: React.FC = () => {
    const [tcChecked, setTcChecked] = useState<boolean>(false);

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <Form.Group controlId="terms-and-conditions">
                        <Form.Check
                            type="checkbox"
                            checked={tcChecked}
                            onChange={(e) => setTcChecked(e.target.checked)}
                            label={checkboxLabel}
                        />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Button variant="primary" onClick={submitForm} disabled={!tcChecked}>
                        Confirm order
                    </Button>
                </div>
            </div>
        </>
    );
}

export default SummaryForm;
