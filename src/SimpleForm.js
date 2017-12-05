import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './renderField'

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting, values } = props;
  return (
    <form onSubmit={handleSubmit}>
      <RenderField 
        label="Last Name" 
        name="lastName" 
        placeholder="Last Name ... " 
        handleSubmit={handleSubmit} 
        />


      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
  initialValues: {lastName: "Dexter"} // a unique identifier for this form
})(SimpleForm);
