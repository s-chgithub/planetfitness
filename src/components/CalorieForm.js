import React, { useState } from 'react';
import { FormGroup, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {Link} from 'react-router-dom';

const StyledTextField = styled(TextField)({
  width: '500px',
  display: 'flex',
  justifyContent: 'center'
});

const StyledButton = styled(Button)({
  width: '150px',
});

const CenteredForm = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

const FormContainer = styled('form')({
  width: '550px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
});

const YourFormComponent = () => {
  const [formValues, setFormValues] = useState({
    caloricIntakeGoal: '',
    actualCaloricIntake: '',
    bodyweightGoal: '',
    actualBodyweight: '',
    sleepTimeGoal: '',
    actualSleepTime: '',
    workoutSessionsGoal: '',
    actualWorkoutSessions: ''
    // Add more fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Allow only numeric values for all fields
    if (!/^\d*$/.test(value)) {
      return;
    }
  
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const values = Object.values(formValues);
  
    // Check for empty fields or non-numeric values
    if (values.some((value) => value.trim() === '' || !/^\d+$/.test(value))) {
      alert('Please fill in all fields with numeric values.');
      return;
    }
  
    // All validations passed - Submit logic here
    console.log('Form submitted:', formValues);
  };
  
  
  

  
  

  return (
    <CenteredForm>
      <FormContainer onSubmit={handleSubmit}>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          TRACK YOUR FITNESS WITH US
        </Typography>
        <br />
        <FormGroup>
          <StyledTextField
            label="Caloric intake goal"
            name="caloricIntakeGoal"
            value={formValues.caloricIntakeGoal}
            onChange={handleInputChange}
          />
          <br />
          <StyledTextField label ="Actual Caloric Intake" name="actualCaloricIntake" value={formValues.actualCaloricIntake}
            onChange={handleInputChange}  /><br/>
        <StyledTextField label="Bodyweight Goal" name="bodyweightGoal" value={formValues.bodyweightGoal}
            onChange={handleInputChange} /><br/>
        <StyledTextField label="Actual Bodyweight" name="actualBodyweight" value={formValues.actualBodyweight}
            onChange={handleInputChange} /><br/>
        <StyledTextField label="Sleep Time Goal" name="sleepTimeGoal" value={formValues.sleepTimeGoal}
            onChange={handleInputChange}/><br/>
        <StyledTextField label="Actual Sleep Time" name="actualSleepTime" value={formValues.actualSleepTime}
            onChange={handleInputChange} /><br/>
        <StyledTextField label="Workout sessions per week goal" name="workoutSessionGoal" value={formValues.workoutSessionGoal}
            onChange={handleInputChange}/><br/>
        <StyledTextField label="Actual workout sessions done" name="actualWorkoutSessions" value={formValues.actualWorkoutSessions}
            onChange={handleInputChange}/><br/>
          <StyledButton variant="contained" color="primary" type="submit">
            Submit
          </StyledButton>
        </FormGroup>
      </FormContainer>
    </CenteredForm>
  );
};

export default YourFormComponent;
