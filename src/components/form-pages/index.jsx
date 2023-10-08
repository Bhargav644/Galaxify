import { useState } from "react";
import PersonalDetails from "./personal-details";
import { formPageWrapper } from "./styles";
import PreferenceDetails from "./preferenceDetails";
import SuccessRedirection from "./SuccessRedirection";

const FormPages = () => {
  const [pageId, setPageId] = useState(1);
  const value = {
    name: "",
    email: "",
    gender: "",
    age: "",
    activityLevel: "",
    extremeConditions: "",
    interest: "",
  };
  const [formData, setFormData] = useState(value);
  const onNextButtonClick = (val) => {
    updateValue(val);
    setPageId((prev) => prev + 1);
  };
  const updateValue = (val) => {
    setFormData((prev) => {
      return { ...prev, ...val };
    });
  };
  const onBackButtonClick = () => {
    setPageId((prev) => prev - 1);
  };
  const onSubmitClick = (val) => {
    updateValue(val);
    setPageId((prev) => prev + 1);
  };

  const mapComponent = (pageId) => {
    switch (pageId) {
      case 1:
        return (
          <PersonalDetails
            onNextButtonClick={onNextButtonClick}
            updateValue={updateValue}
            onBackButtonClick={onBackButtonClick}
            backDisabled={true}
          />
        );

      case 2:
        return (
          <PreferenceDetails
            onNextButtonClick={onSubmitClick}
            updateValue={updateValue}
            onBackButtonClick={onBackButtonClick}
            backDisabled={false}
          />
        );
      case 3:
        return (
          <SuccessRedirection
            data={formData}
            onBackButtonClick={onBackButtonClick}
          />
        );

      default:
        return <p>X X we have a ISSUE sarge</p>;
    }
  };

  return <div className={formPageWrapper}>{mapComponent(pageId)}</div>;
};

export default FormPages;
