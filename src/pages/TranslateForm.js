import StepQuestions from "../components/StepQuestions";
import DownloadButton from "../components/DownloadTranslated";
import { Tabs } from "antd";
import { useState, useEffect } from "react";
const { TabPane } = Tabs;

const TranslateForm = () => {
  const [questionForm, setQuestionForm] = useState({});
  const [showUpload, setShowUpload] = useState(true);
  const [formName, setFormName] = useState("");
  const [formSteps, setFormSteps] = useState([]);
  const [formStepsTranslated, setFormStepsTranslated] = useState([]);

  useEffect(() => {
    let steps = [];
    if (questionForm !== null) {
      const count = questionForm.count;
      for (let i = 1; i <= count; i++) {
        steps.push(questionForm[`step${i}`]);
      }
      setFormSteps([...steps]);
      setFormStepsTranslated([...JSON.parse(JSON.stringify(steps))]);
    }
  }, [questionForm]);

  function handleChangeUpdate(dataIndex, value) {
    let updatedSteps = JSON.parse(JSON.stringify(formStepsTranslated));
    if (updatedSteps !== null) {
      updatedSteps[dataIndex]["fields"] = value;
      setFormStepsTranslated([...updatedSteps]);
    }
  }

  const handleChange = (e) => {
    setFormName(e.target.files[0].name);
    setShowUpload(false);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setQuestionForm({ ...JSON.parse(e.target.result) });
    };
  };
  return (
    <section>
      {formName !== "" && <h2>Form Name: {formName}</h2>}
      {showUpload && (
        <input
          type="file"
          accept="application/JSON"
          name="translateFile"
          onChange={handleChange}
        />
      )}
      {!showUpload && (
        <DownloadButton
          style={{ float: "right" }}
          formName={formName}
          completeForm={questionForm}
          translatedSteps={formStepsTranslated}
        />
      )}
      <Tabs style={{ clear: "both" }}>
        {formSteps !== null &&
          formSteps.map((questions, idx) => (
            <TabPane tab={`Step ${idx + 1}`} key={idx}>
              {questions.fields !== undefined && (
                <StepQuestions
                  questions={questions.fields}
                  questionTranslated={formStepsTranslated[idx].fields}
                  stepTransIndex={idx}
                  handleChangeUpdate={handleChangeUpdate}
                />
              )}
            </TabPane>
          ))}
      </Tabs>
    </section>
  );
};

export default TranslateForm;
