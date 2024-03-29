import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../api/UserService";
// import './Register.css';
import Login from "./Login";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [showUsernameAlert, setShowUsernameAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [dobError, setDobError] = useState(null);
  const [collegeNameError, setCollegeNameError] = useState(null);
  const [departmentError, setDepartmentError] = useState(null);
  const [yearError, setYearError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [genderError, setGenderError] = useState(null);

  const departments = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
  ];
  const years = ["First Year", "Second Year", "Third Year", "Fourth Year"];
  const genders = ["Male", "Female", "Other"];

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateForm = () => {
    switch (step) {
      case 1:
        // Username validation
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(username)) {
          setUsernameError(
            "Invalid username format (3-20 characters, alphanumeric or underscore)."
          );
          return false;
        } else {
          setUsernameError(null);
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError("Invalid email format.");
          return false;
        } else {
          setEmailError(null);
        }

        // Password validation
        const passwordRegex = /^.{6,}$/;
        if (!passwordRegex.test(password)) {
          setPasswordError("Invalid password format (at least 6 characters).");
          return false;
        } else {
          setPasswordError(null);
        }

        // Confirm Password validation
        if (password !== confirmPassword) {
          setConfirmPasswordError("Passwords do not match.");
          return false;
        } else {
          setConfirmPasswordError(null);
        }
        break;
      case 2:
        // First Name validation
        if (!firstName.trim()) {
          setFirstNameError("First Name is required.");
          return false;
        } else {
          setFirstNameError(null);
        }

        // Last Name validation
        if (!lastName.trim()) {
          setLastNameError("Last Name is required.");
          return false;
        } else {
          setLastNameError(null);
        } // Phone Number validation
        const phoneNumberRegex = /^\d{10}$/;
        if (!phoneNumberRegex.test(phoneNumber)) {
          setPhoneNumberError("Invalid phone number format (10 digits).");
          return false;
        } else {
          setPhoneNumberError(null);
        }

        // Gender validation
        if (!gender) {
          setGenderError("Gender is required.");
          return false;
        } else {
          setGenderError(null);
        }
        break;
      case 3:
        // Date of Birth validation
        if (!dob.trim()) {
          setDobError("Date of Birth is required.");
          return false;
        } else {
          setDobError(null);
        }

        // College Name validation
        if (!collegeName.trim()) {
          setCollegeNameError("College Name is required.");
          return false;
        } else {
          setCollegeNameError(null);
        }

        // Department validation
        if (!department) {
          setDepartmentError("Department is required.");
          return false;
        } else {
          setDepartmentError(null);
        }

        // Year validation
        if (!year) {
          setYearError("Year is required.");
          return false;
        } else {
          setYearError(null);
        }
        break;
      default:
        break;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("a");
      return;
    }
    if (step < 3) {
      // Move to the next step if not on the final step
      if (step === 1) {
        var searchTerm = username;
        var creds = { searchTerm };
        UserService.findUserbyUsername(creds).then((response) => {
          if (response.data.length > 0) {
            setShowUsernameAlert(true);
            setTimeout(() => {
              setShowUsernameAlert(false);
              navigate("/account");
              window.location.reload(); // Reload the page
            }, 3000);
          }
        });
        searchTerm = email;
        creds = { searchTerm };
        UserService.findUserbyEmail(creds).then((response) => {
          if (response.data.length > 0) {
            setShowEmailAlert(true);
            setTimeout(() => {
              setShowEmailAlert(false);
              navigate("/account");
              window.location.reload(); // Reload the page
            }, 3000);
          }
        });
      }
      // console.log('b');
      setStep((prevStep) => {
        console.log("Setting step:", prevStep + 1);
        return prevStep + 1;
      });
    } else {
      // Registration logic for the final step
      const user = {
        username,
        email,
        password,
        firstName,
        lastName,
        dob,
        collegeName,
        department,
        year,
        phoneNumber,
        gender,
      };
      console.log(user.email);
      console.log("d");
      UserService.createTempUser(user)
        .then((response) => {
          console.log(response.data);
          console.log("e");
          setShowSuccessPopup(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          console.log("f");
          // Handle registration failure, show an error message, etc.
        });
    }
  };
  // onChange handler for username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(null); // Clear username error
  };

  // onChange handler for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(null); // Clear email error
  };

  // onChange handler for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(null); // Clear password error
  };

  // onChange handler for confirm password
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(null); // Clear confirm password error
  };
  // onChange handler for first name
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError(null); // Clear first name error
  };

  // onChange handler for last name
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError(null); // Clear last name error
  };

  // onChange handler for phone number
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError(null); // Clear phone number error
  };

  // onChange handler for gender
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setGenderError(null); // Clear gender error
  };

  // onChange handler for date of birth
  const handleDobChange = (e) => {
    setDob(e.target.value);
    setDobError(null); // Clear date of birth error
  };

  // onChange handler for college name
  const handleCollegeNameChange = (e) => {
    setCollegeName(e.target.value);
    setCollegeNameError(null); // Clear college name error
  };

  // onChange handler for department
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setDepartmentError(null); // Clear department error
  };

  // onChange handler for year
  const handleYearChange = (e) => {
    setYear(e.target.value);
    setYearError(null); // Clear year error
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <div className="progress-bar">
        <div className={`progress-step ${step >= 1 ? "completed" : ""}`}></div>
        <div className={`progress-step ${step >= 2 ? "completed" : ""}`}></div>
        <div className={`progress-step ${step >= 3 ? "completed" : ""}`}></div>
      </div>

      <form className="registration-form" onSubmit={handleRegister}>
        {step === 1 && (
          <>
            <label>Username:</label>
            <input
              className={`register-input ${usernameError ? "error-input" : ""}`}
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {usernameError}
            </div>

            <label>Email:</label>
            <input
              className={`register-input ${emailError ? "error-input" : ""}`}
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {emailError}
            </div>

            <label>Password:</label>
            <input
              className={`register-input ${passwordError ? "error-input" : ""}`}
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {passwordError}
            </div>

            <label>Confirm Password:</label>
            <input
              className={`register-input ${
                confirmPasswordError ? "error-input" : ""
              }`}
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {confirmPasswordError}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <label>First Name:</label>
            <input
              className={`register-input ${
                firstNameError ? "error-input" : ""
              }`}
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {firstNameError}
            </div>

            <label>Last Name:</label>
            <input
              className={`register-input ${lastNameError ? "error-input" : ""}`}
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {lastNameError}
            </div>

            <label>Phone Number:</label>
            <input
              className={`register-input ${
                phoneNumberError ? "error-input" : ""
              }`}
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {phoneNumberError}
            </div>

            <label>Gender:</label>
            <select
              className={`register-input ${genderError ? "error-input" : ""}`}
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="" disabled>
                Select Gender
              </option>
              {genders.map((gen) => (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              ))}
            </select>
            <div className="error-message" style={{ color: "red" }}>
              {genderError}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label>Date of Birth:</label>
            <input
              className={`register-input ${dobError ? "error-input" : ""}`}
              type="date"
              value={dob}
              onChange={handleDobChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {dobError}
            </div>

            <label>College Name:</label>
            <input
              className={`register-input ${
                collegeNameError ? "error-input" : ""
              }`}
              type="text"
              value={collegeName}
              onChange={handleCollegeNameChange}
            />
            <div className="error-message" style={{ color: "red" }}>
              {collegeNameError}
            </div>

            <label>Department:</label>
            <select
              className={`register-input ${
                departmentError ? "error-input" : ""
              }`}
              value={department}
              onChange={handleDepartmentChange}
            >
              <option value="" disabled>
                Select Department
              </option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="error-message" style={{ color: "red" }}>
              {departmentError}
            </div>

            <label>Year:</label>
            <select
              className={`register-input ${yearError ? "error-input" : ""}`}
              value={year}
              onChange={handleYearChange}
            >
              <option value="" disabled>
                Select Year
              </option>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
            <div className="error-message" style={{ color: "red" }}>
              {yearError}
            </div>
          </>
        )}
        <br />
        <button type="submit" className="button">
          {step === 3 ? "Register" : "Next"}
        </button>
      </form>
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="success-popup">
            <p>Registration successful!</p>
            <p>You will be redirected and can login now!</p>
          </div>
        </div>
      )}
      {showUsernameAlert && (
        <div className="popup-overlay">
          <div className="alert" style={{ color: "red" }}>
            Username is already in use. Please choose a different username.
          </div>
        </div>
      )}
      {showEmailAlert && (
        <div className="popup-overlay">
          <div className="alert" style={{ color: "red" }}>
            Email is already in use. Please choose a different email.
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
