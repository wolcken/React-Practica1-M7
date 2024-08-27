import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/form/formActions';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const Logout = () => {

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowLogoutModal = () => setShowLogoutModal(true);
    const handleCloseLogoutModal = () => setShowLogoutModal(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            <Button
                variant="warning"
                onClick={handleShowLogoutModal}
            >Logout</Button>

            <Modal
                show={showLogoutModal}
                onHide={handleCloseLogoutModal}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to logout?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleLogout}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Logout