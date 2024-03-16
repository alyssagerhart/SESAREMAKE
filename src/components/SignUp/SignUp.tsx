import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { firebaseApp } from '../../../config/firebase';
import './signup.css';
import UploadResume from '../UploadResume/UploadResume'


const Signup: React.FC = () => {
  // Set initial form data
  const initialFormData = {
    fullName: '',
    email: '',
    password: '',
    role: 'Student',
    interests: '',
    phoneNumber: '',
    linkedIn: '',
    company: '', // Added 'company' for recruiters
    companyEmail: '', // Added 'companyEmail' for recruiters
  };

  // Initialize Firebase authentication and firestore
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  // Handle role change for radio buttons
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const role = e.target.value;
    setFormData({
      ...formData,
      role,
      interests: role === 'Recruiter' ? '' : formData.interests,
    });
  };

  // State for form data, success and error messages
  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Function to register a user
  const register = async (
    name: string,
    email: string,
    password: string,
    role: string,
    interests: string,
    phoneNumber: string,
    linkedIn: string,
    company: string, // Include 'company' for recruiters
    companyEmail: string, // Include 'companyEmail' for recruiters
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        if (user.displayName !== name) {
          await updateProfile(user, { displayName: name });
        }

        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, {
          fullName: name,
          email,
          role,
          interests,
          phoneNumber,
          linkedIn,
          company, // Include 'company' for recruiters
        });

        setSuccessMessage('User created successfully');
        setErrorMessage(null);
        setFormData(initialFormData);

        // Redirect based on the selected role
        if (role === 'Recruiter') {
          window.location.href = '/SignificantEdgeRecruiter';
        } else if (role === 'Student') {
          window.location.href = '/SignificantEdge';
        } else {
          window.location.href = '/SignificantEdgeAdmin';
        }
      }
    } catch (error: any) {
      console.error('Error creating user:', error);
      setSuccessMessage(null);
      setErrorMessage('Error creating user: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="text-center my-3">Signup</h1>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      {/* Form with input fields */}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          register(
            formData.fullName,
            formData.email,
            formData.password,
            formData.role,
            formData.interests,
            formData.phoneNumber,
            formData.linkedIn,
            formData.company, // Include 'company' for recruiters
            formData.companyEmail, // Include 'companyEmail' for recruiters
          );
        }}
      >
        {/* Full Name input */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Email input */}
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

        {/* Password input */}
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

        {/* Role radio buttons */}
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Role</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Student"
              name="role"
              value="Student"
              checked={formData.role === 'Student'}
              onChange={handleRoleChange}
            />
            <Form.Check
              type="radio"
              label="Recruiter"
              name="role"
              value="Recruiter"
              checked={formData.role === 'Recruiter'}
              onChange={handleRoleChange}
            />
          </div>
        </Form.Group>

        {/* Interests input (visible for Students only) */}
        {formData.role !== 'Recruiter' && (
          <Form.Group className="mb-3" controlId="formBasicInterests">
            <Form.Label>Interests</Form.Label>
            <Form.Control
              type="text"
              name="interests"
              placeholder="Enter your interests"
              value={formData.interests}
              onChange={handleInputChange}
            />
          </Form.Group>
        )}

        {/* Company input (visible for Recruiters only) */}
        {formData.role === 'Recruiter' && (
          <div>
          <Form.Group className="mb-3" controlId="formBasicCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCompany">
          <Form.Label>Company Email</Form.Label>
          <Form.Control
            type="text"
            name="companyEmail"
            placeholder="yourname@company.com"
            value={formData.companyEmail}
            onChange={handleInputChange}
          />
        </Form.Group>
        </div>
        )}

    

        {/* Phone Number input */}
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* LinkedIn input */}
        <Form.Group className="mb-3" controlId="formBasicLinkedIn">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            type="text"
            name="linkedIn"
            placeholder="Enter your LinkedIn profile (optional)"
            value={formData.linkedIn}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Resume upload component (visible for Students only) */}
        {formData.role !== 'Recruiter' && (
          <Form.Group className="mb-3" controlId="formBasicResume">
            <h2>Upload your Resume</h2>
            <UploadResume />
          </Form.Group>
        )}

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Submit Application
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
