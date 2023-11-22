'use client';
import { type FormEvent, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import Modal from '@/components/Modal/Modal';
import LoginForm from '@/components/LoginForm/LoginForm';

const UserProfilePage = (): JSX.Element => {
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const [isModal, setIsModal] = useState(false);
  const [status, setStatus] = useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
  const handleClose = () => {
    setIsModal(false);
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // TODO - validate password
  };

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs lg="6">
          <h1>User Profile</h1>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                ref={passwordFieldRef}
                required
                type="password"
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                aria-describedby="passwordHint"
              />
              <Form.Text id="passwordHint" muted>
                Your password must greater or equal 8 characters long, contain
                one lowercase and one uppercase character
              </Form.Text>
              <Form.Control.Feedback as="small" type="invalid">
                At least one lowercase letter <br />
                The total length should be greater than or equal to 8 <br />
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              {status === 'updating' && (
                <Spinner
                  className="mr-2"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Change password
            </Button>
          </Form>
          {status === 'updated' && (
            <p className="text-success h6 mt-3">Password Updated</p>
          )}
        </Col>
      </Row>
      {isModal ? (
        <>
          <Modal show={isModal} modalClose={handleClose}>
            <LoginForm />
          </Modal>
        </>
      ) : null}
    </Container>
  );
};

export default UserProfilePage;
