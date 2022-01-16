import QuestionField from "../components/QuestionField";
import { useState } from "react";
import ReactJson from "react-json-view";

const questions = [
  {
    key: "marital_status",
    openmrs_entity_parent: "",
    openmrs_entity: "concept",
    openmrs_entity_id: "marital_status",
    type: "spinner",
    hint: "Client's Marital Status?",
    values: [
      "Single",
      "Married",
      "Divorced",
      "Monogamy",
      "Polygamy",
      "Widowed",
      "Cohabitation",
    ],
    keys: [
      "Single",
      "Married",
      "Divorced",
      "Monogamy",
      "Polygamy",
      "Widowed",
      "Cohabitation",
    ],
    openmrs_choice_ids: {
      Single: "Single",
      Married: "Married",
      Divorced: "Divorced",
      Monogamy: "Monogamy",
      Polygamy: "Polygamy",
      Widowed: "Widowed",
      Cohabitation: "Cohabitation",
    },
    v_required: {
      value: "true",
      err: "Please select one",
    },
    relevance: {
      "rules-engine": {
        "ex-rules": {
          "rules-file": "all_clients_member_relevance.yml",
        },
      },
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
