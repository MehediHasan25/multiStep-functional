import React from 'react'

const AddressInfo = ({ values, setValues, nextStep, prevStep, handleChange }) => {
  return (
    <div>
      <h1>User Address Info</h1>

      <div className="row d-flex justify-content-center d-inline-block">

        <button type="button" className="btn btn-info" onClick={prevStep}>Prev</button>
      </div>

    </div>
  )
}

export default AddressInfo;
