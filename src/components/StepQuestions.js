import QuestionField from "./QuestionField";
import { useState } from "react";
import ReactJson from "react-json-view";

const StepQuestions = ({ questions }) => {
  const [questionList, setQuestionList] = useState(
    JSON.parse(JSON.stringify(questions))
  );

  function handleUpdate(updatedQuestionsList) {
    setQuestionList(updatedQuestionsList);
  }
  return (
    <section>
      <QuestionField
        questions={questions}
        handleUpdate={handleUpdate}
        questionsTranslated={questionList}
      />
      <ReactJson src={JSON.parse(JSON.stringify(questionList))} />
    </section>
  );
};

export default StepQuestions;
