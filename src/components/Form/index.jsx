import React, { useEffect, useState } from "react";
import Styles from "../../assets/css/form.module.css";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
} from "firebase/firestore";
import Register from "../Button/Register";
import { v4 as uuidv4 } from "uuid";

const RegisterForm = ({ loading, setLoading }) => {
  const [values, setValues] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    dob: null,
    qualification: "",
    position: "",
    experience: "",
    city: "",
    state: "",
    country: "",
    timestamp: serverTimestamp(),
  });
  // eslint-disable-next-line
  const [personName, setPersonName] = useState([]);
  const [data, setData] = useState([]);

  const theme = useTheme();
  
  const positionNames = [
    "IT coordinator",
    "UX designer",
    "Data analyst",
    "Web developer",
    "Product manager",
    "Front-end developer",
    "Full stack developer",
    "Mobile developers",
    "Data scientists",
    "Back-end developers",
    "Software architects",
    "Computer programmer",
    "Junior Java developer",
    "Software QA engineer",
    "Application developer",
    ".Net developer",
    "Software test engineer",
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const q = query(collection(db, "Users"));

  const getData = async () => {
    const newData = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      newData.push(doc.data());
    });
    setData(newData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

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
      setLoading(true);
      localStorage.setItem("User", [values.firstName]);
      localStorage.setItem("id", [values.id]);
      await addDoc(collectRef, values);
      setLoading(false);
      navigate("/guideline");
    }
  };
  const isDisabled = (date) => {
    const year = date.year();
    return year > 2005;
  };

  let newData = [];

  return (
    <div>
      <div className={Styles.heading}>
        <h2> Register to take the assessment</h2>
      </div>
      <div className={Styles.form_container}>
        <form className={Styles.register_form} onSubmit={handleSubmit}>
          <div className={Styles.name}>
            <div className={Styles.gender}>
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
            <div className={Styles.gender}>
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
          {data &&
            // eslint-disable-next-line
            data.map((d) => {
              newData.push(d.email);
            })}

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
          {newData.includes(values.email) && (
            <span>User with this email already exists.</span>
          )}
          {submitted && !values.email && (
            <span>Please enter an email address</span>
          )}

          <div className={Styles.name}>
            <div className={Styles.gender}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Birth"
                  name="dob"
                  shouldDisableYear={isDisabled}
                  shouldDisableDate={isDisabled}
                  shouldDisableMonth={isDisabled}
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              {submitted && !values.dob && (
                <span>Please enter date of birth</span>
              )}
            </div>
            <div className={Styles.gender}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="gender"
                  value={values.gender}
                  label="Gender"
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
                  label="Qualification"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Hign School">High School</MenuItem>
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
            <InputLabel id="demo-simple-select-label">Job :</InputLabel>
          </div>

          <div className={Styles.name}>
            <div className={Styles.job}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="position"
                  value={values.position}
                  label="Position"
                  onChange={handleInputChange}
                  MenuProps={MenuProps}
                >
                  {positionNames.map((name) => {
                    return (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {submitted && !values.position && (
                <span>Please enter position</span>
              )}
            </div>

            <div className={Styles.job}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Experience
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="experience"
                  value={values.experience}
                  label="Experience"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Fresher">Fresher</MenuItem>
                  <MenuItem value="1 year">1 year</MenuItem>
                  <MenuItem value="2 years">2 years</MenuItem>
                  <MenuItem value="3 years">3 years</MenuItem>
                  <MenuItem value="4 + years">4 + years</MenuItem>
                </Select>
              </FormControl>

              {submitted && !values.experience && (
                <span>Please enter experience</span>
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

          <Register
            loading={loading}
            name="Register"
            disabled={newData.includes(values.email) ? true : false}
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
