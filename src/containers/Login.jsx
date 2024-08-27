import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import useForm from '../hooks/useForm';
import { saveFormData } from '../redux/form/formActions';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';

const Login = () => {

    const [values, handleChange, setValues] = useForm({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const correctPassword = 'mod7ReactUSIP';
        if (values.password === correctPassword) {
            setError('');
            dispatch(saveFormData(values));
        } else {
            setError('Incorrect password.');
        }
    }

    const handleClear = () => {
        setValues({ username: '', email: '', password: '' });
        setError('');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <Form onSubmit={handleSubmit}>

            {error && (
                <Alert variant="danger">
                    {error}
                </Alert>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                />
                <Button
                    variant="success"
                    onClick={togglePasswordVisibility}
                    style={{ marginLeft: '10px', fontSize: '14px' }}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </Button>
            </InputGroup>


            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="secondary" onClick={handleClear} style={{ marginLeft: '10px' }}>
                Clear
            </Button>
        </Form>
    )
}

export default Login