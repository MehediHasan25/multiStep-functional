import React, { useState } from 'react'
import PersonalInfo from '../component/PersonalInfo';
import AddressInfo from './../component/AddressInfo';

const multistep = () => {
  const [values, setValues] = useState({
    step: 1,
    name: '',
    email: '',
    mobile: ''
  });


  let nextStep = () => {
    let { step } = values;
    setValues({ ...values, step: step + 1 });
  }
  let prevStep = () => {
    let { step } = values;
    setValues({ ...values, step: step - 1 });
  }

  let handleChange = (input) => e => {
    setValues({ ...values, [input]: e.target.value });
  }

  const props = { values, setValues, nextStep, prevStep, handleChange };

  switch (values.step) {
    case 1:
      return (
        <PersonalInfo {...props} />
      )

    case 2:
      return (
        <AddressInfo {...props} />
      )
  }


  return (
    <div>

    </div>
  )
}

export default multistep;
