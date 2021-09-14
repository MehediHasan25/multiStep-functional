import React from 'react'

const PersonalInfo = ({ values, setValues, nextStep, prevStep, handleChange }) => {
  return (
    <div >
      <div className="row d-flex flex-column justify-content-center align-items-center" style={{ height: "70vh" }} >
        <div className="row  justify-content-center align-items-center">
          <h3>Personal Information</h3>
        </div>
        <form style={{ padding: "50px" }}>
          <div className="form-group d-flex justify-content-between">
            <label style={{ marginRight: "5px" }}>Name </label>
            <input type="text" name="name" value={values.name} onChange={handleChange('name')} />
          </div>
          <div className="form-group d-flex justify-content-between">
            <label>Email </label>
            <input type="email" name="email" value={values.email} onChange={handleChange('email')} />
          </div>
          <div className="form-group d-flex justify-content-between">
            <label style={{ marginRight: "5px" }}>Mobile </label>
            <input type="text" name="mobile" value={values.mobile} onChange={handleChange('mobile')} />
          </div>

          <div className="row d-flex justify-content-center ">
            <button type="button" className="btn btn-success" onClick={nextStep}>Next</button>

          </div>

        </form>

      </div>


    </div>
  )
}

export default PersonalInfo;
