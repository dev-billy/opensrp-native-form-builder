import QuestionField from "../components/QuestionField";
import { useState } from "react";
import ReactJson from "react-json-view";

const questions = [
  {
    key: "unique_id",
    openmrs_entity_parent: "",
    openmrs_entity: "person_identifier",
    openmrs_entity_id: "opensrp_id",
    type: "edit_text",
    read_only: true,
    hint: "WAJA ID",
    v_numeric: {
      value: "true",
      err: "Please enter a valid ID",
    },
    v_required: {
      value: "true",
      err: "Please enter the UNIQUE ID",
    },
  },
];
const Home = () => {
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

export default Home;
