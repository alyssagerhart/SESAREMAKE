import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../config/firebase';
import '../SignIn/SignIn.css';
import { getDoc, doc } from 'firebase/firestore';

const SignIn = () => {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const currentUser = userCredential.user;

      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) { 
          const userData = userDocSnapshot.data();
          console.log('User role fetched:', userData.role);

          setSuccessMessage('User signed in successfully');
          setErrorMessage(null);

          // Redirect based on user role directly from userData
          const userRole = userData.role;

          if (userRole === 'Student') {
            window.location.href = '/SignificantEdge';
          } else if (userRole === 'Recruiter') {
            window.location.href = '/SignificantEdgeRecruiter';
          } else if (userRole === 'Admin') {
            window.location.href = '/SignificantEdgeAdmin';
      
          }

          setFormData(initialFormData);
        } else {
          console.log('User document not found.');
        }
      }
    } catch (error) {
      console.error('Error signing user in:', error);
      setSuccessMessage(null);
      setErrorMessage('Error signing user in: ' + (error as Error).message);
    }
  };

  return (
    <div className="signin-container">
      <h1 className="text-center my-3">Sign In</h1>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="forgot-password">
          <a href="/forgotPassword">Forgot Password?</a>
        </div>
        <div className="signin-button">
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
