import QuestionField from "./QuestionField";
import { useState, useEffect } from "react";
//import ReactJson from "react-json-view";

const StepQuestions = ({
  questions,
  questionTranslated,
  stepTransIndex,
  handleChangeUpdate,
}) => {
  const [receivedQuestions, setRecievedQuestions] = useState(questions);

  useEffect(() => {
    setRecievedQuestions(questions);
  }, [questions]);

  function handleUpdate(updatedQuestionsList) {
    handleChangeUpdate(stepTransIndex, updatedQuestionsList);
  }
  return (
    <section>
      <QuestionField
        questions={receivedQuestions}
        handleUpdate={handleUpdate}
        questionsTranslated={questionTranslated}
      />
      {/* <ReactJson src={JSON.parse(JSON.stringify(questionTranslated))} /> */}
    </section>
  );
};

export default StepQuestions;
