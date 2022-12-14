import React, { useState } from "react";
import Styles from "../../assets/css/form.module.css";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const RegisterForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    dob: null,
    qualification: "",
    city: "",
    state: "",
    country: "",
    timestamp: serverTimestamp(),
  });

  console.log("values", values);

  const navigate = useNavigate();
  const collectRef = collection(db, "Users");

  const [date, setDate] = useState(null);
  let d = new Date(date);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
      dob: dayjs(d).format("DD-MM-YYYY"),
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.gender &&
      values.dob &&
      values.qualification &&
      values.city &&
      values.state &&
      values.country
    ) {
      setValid(true);
      localStorage.setItem("User", [values.firstName, values.lastName]);
      // localStorage.setItem("User", values.lastName);
      await addDoc(collectRef, values);
      navigate("/guideline");
    }
  };

  return (
    <div>
      <div className={Styles.heading}>
        {/* <h2>Register To Attempt The Exam</h2> */}
        <h2> Register to take the assessment</h2>
        {/* Register to take the assessment. */}
      </div>
      <div className={Styles.form_container}>
        <form className={Styles.register_form} onSubmit={handleSubmit}>
          <div className={Styles.name}>
            <div>
              <TextField
                className={Styles.form_field}
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />

              {submitted && !values.firstName && (
                <span>Please enter a first name</span>
              )}
            </div>
            <div>
              <TextField
                className={Styles.form_field}
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />

              {submitted && !values.lastName && (
                <span>Please enter a last name</span>
              )}
            </div>
          </div>

          <TextField
            className={Styles.form_field}
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />

          {submitted && !values.phone && <span>Please enter phone number</span>}

          <TextField
            className={Styles.form_field}
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          {submitted && !values.email && (
            <span>Please enter an email address</span>
          )}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              name="dob"
              // value={values.dob}
              value={date}
              // onChange={handleInputChange}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          {submitted && !values.dob && <span>Please enter date of birth</span>}

          <div className={Styles.name}>
            <div className={Styles.gender}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="gender"
                  value={values.gender}
                  label="Age"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              {submitted && !values.gender && <span>Please enter gender</span>}
            </div>
            <div className={Styles.gender}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="qualification"
                  value={values.qualification}
                  label="Age"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Hign School">Hign School</MenuItem>
                  <MenuItem value="Higher Secondary">Higher Secondary</MenuItem>
                  <MenuItem value="Bachelors">Bachelors</MenuItem>
                  <MenuItem value="Masters">Masters</MenuItem>
                </Select>
              </FormControl>

              {submitted && !values.qualification && (
                <span>Please enter qualification</span>
              )}
            </div>
          </div>

          <div className={Styles.address}>
            <InputLabel id="demo-simple-select-label">Address :</InputLabel>
          </div>

          <div className={Styles.name}>
            <div>
              <TextField
                className={Styles.form_field}
                type="text"
                name="city"
                value={values.city}
                onChange={handleInputChange}
                id="outlined-basic"
                label="City"
                variant="outlined"
              />

              {submitted && !values.city && <span>Please enter city</span>}
            </div>
            <div>
              <TextField
                className={Styles.form_field}
                type="text"
                name="state"
                value={values.state}
                onChange={handleInputChange}
                id="outlined-basic"
                label="State"
                variant="outlined"
              />

              {submitted && !values.state && <span>Please enter state</span>}
            </div>
            <div>
              <TextField
                className={Styles.form_field}
                type="text"
                name="country"
                value={values.country}
                onChange={handleInputChange}
                id="outlined-basic"
                label="Country"
                variant="outlined"
              />

              {submitted && !values.country && (
                <span>Please enter country</span>
              )}
            </div>
          </div>

          <button className={Styles.form_field} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
