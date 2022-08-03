import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Signup = (props) => {
    const { signupModal, toggleSignup } = props;

    return (
        <div>
            <Modal isOpen={signupModal} toggle={toggleSignup}>
                <ModalHeader toggle={toggleSignup}>Sign up</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="container p-3">
                        <div className="row align-items-center g-3 mb-3">
                                <div className="col-4">
                                    <label htmlFor="name" className="m-2">Name</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder=" Enter your name" id="name" />
                                </div>
                            </div>
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
                            <div className="row align-items-center g-3 mb-3">
                                <div className="col-4">
                                    <label htmlFor="password" className="m-2">Confirm password</label>
                                </div>
                                <div className="col-8">
                                    <input type="password" className="form-control" placeholder="Enter your password again" id="password" />
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleSignup}>Login</Button>
                    <Button color="secondary" onClick={toggleSignup}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Signup