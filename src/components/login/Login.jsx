import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Login = (props) => {
    const {loginModal,toggleLogin} = props;
    
    return (
        <div>
            <Modal isOpen={loginModal} toggle={toggleLogin}>
                <ModalHeader toggle={toggleLogin}>Log in</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="container p-3">
                            <div className="row align-items-center g-3 mb-3">
                                <div className="col-4">
                                    <label htmlFor="email" className="m-2">Email</label>
                                </div>
                                <div className="col-8">
                                    <input type="email" className="form-control" placeholder=" Enter your email id" id="email" />
                                </div>
                            </div>
                            <div className="row align-items-center g-3 mb-3">
                                <div className="col-4">
                                    <label htmlFor="password" className="m-2">Password</label>
                                </div>
                                <div className="col-8">
                                    <input type="password" className="form-control" placeholder="Enter your password" id="password" />
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleLogin}>Login</Button>
                    <Button color="secondary" onClick={toggleLogin}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Login