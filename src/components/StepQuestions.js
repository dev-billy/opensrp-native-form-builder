import QuestionField from "./QuestionField";
import { useState, useEffect } from "react";
import ReactJson from "react-json-view";

const StepQuestions = ({ questions }) => {
  const [questionList, setQuestionList] = useState(
    JSON.parse(JSON.stringify(questions))
  );
  const [receivedQuestions, setRecievedQuestions] = useState(questions);

  useEffect(() => {
    setRecievedQuestions(questions);
    setQuestionList(JSON.parse(JSON.stringify(questions)));
  }, [questions]);

  function handleUpdate(updatedQuestionsList) {
    setQuestionList(updatedQuestionsList);
  }
  return (
    <section>
      <QuestionField
        questions={receivedQuestions}
        handleUpdate={handleUpdate}
        questionsTranslated={questionList}
      />
      <ReactJson src={JSON.parse(JSON.stringify(questionList))} />
    </section>
  );
};

export default StepQuestions;
