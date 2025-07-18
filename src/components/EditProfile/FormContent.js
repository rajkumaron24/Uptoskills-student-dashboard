import React from 'react';
import BasicInformation from './BasicInformation';
import ProfessionalDetails from './ProfessionalDetails';
import Skills from './Skills';
import ContactInformation from './ContactInformation';
import Resume from './Resume';
import FormActions from './FormActions';

const FormContent = () => {
  return (
    <div className="form-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
      <div className="form-left">
        <BasicInformation />
        <ProfessionalDetails />
      </div>
      <div className="form-right">
        <Skills />
        <ContactInformation />
        <Resume />
        <FormActions />
      </div>
    </div>
  );
};

export default FormContent;
