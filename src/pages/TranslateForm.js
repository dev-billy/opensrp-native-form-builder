import StepQuestions from "../components/StepQuestions";
import { Tabs } from "antd";

import { useState } from "react";
const { TabPane } = Tabs;

const TranslateForm = () => {
  const [questionForm, setQuestionForm] = useState({});
  const [formName, setFormName] = useState("");
  const steps = [];
  if (questionForm !== {}) {
    const count = questionForm.count;
    for (let i = 1; i <= count; i++) {
      steps.push(questionForm[`step${i}`].fields);
    }
  }
  const handleChange = (e) => {
    setFormName(e.target.files[0].name);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setQuestionForm(JSON.parse(e.target.result));
    };
  };
  return (
    <section>
      {formName !== "" && <h2>Form Name: {formName}</h2>}
      <input
        type="file"
        accept="application/JSON"
        name="translateFile"
        onChange={handleChange}
      />
      <Tabs>
        {steps !== null &&
          steps.map((questions, idx) => (
            <TabPane tab={`Step ${idx + 1}`} key={idx}>
              <StepQuestions questions={questions} />
            </TabPane>
          ))}
      </Tabs>
    </section>
  );
};

export default TranslateForm;
