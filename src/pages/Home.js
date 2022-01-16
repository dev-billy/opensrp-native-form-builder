import QuestionField from "../components/QuestionField";
import { useState } from "react";
import ReactJson from "react-json-view";

const questions = [
  {
    key: "id_avail",
    openmrs_entity_parent: "",
    openmrs_entity: "person_attribute",
    openmrs_entity_id: "id_avail",
    type: "check_box",
    label: "Do you have any of the following IDs?",
    label_text_style: "normal",
    text_color: "#C0C0C0",
    exclusive: ["chk_none"],
    options: [
      {
        key: "chk_national_id",
        text: "National ID",
        value: false,
        openmrs_entity: "person_attribute",
        openmrs_entity_id: "chk_national_id",
      },
      {
        key: "chk_voters_id",
        text: "Voter's registration ID",
        value: false,
        openmrs_entity: "person_attribute",
        openmrs_entity_id: "chk_voters_id",
      },
      {
        key: "chk_drivers_license",
        text: "Driver's license",
        value: false,
        openmrs_entity: "person_attribute",
        openmrs_entity_id: "chk_drivers_license",
      },
      {
        key: "chk_passport",
        text: "Passport",
        value: false,
        openmrs_entity: "person_attribute",
        openmrs_entity_id: "chk_passport",
      },
      {
        key: "chk_none",
        text: "None",
        value: false,
        openmrs_entity: "person_attribute",
        openmrs_entity_id: "chk_none",
      },
    ],
    relevance: {
      "rules-engine": {
        "ex-rules": {
          "rules-file": "all_clients_member_relevance.yml",
        },
      },
    },
  },
  {
    key: "reasons_for_registration_male_15",
    openmrs_entity_parent: "",
    openmrs_entity: "",
    openmrs_entity_id: "",
    type: "native_radio",
    label: "Reasons for Registration",
    label_text_style: "normal",
    text_color: "#C0C0C0",
    options: [
      {
        key: "hiv_aids_transmission",
        text: "HIV/AIDs transmission",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "sickle_cell_disease",
        text: "Sickle cell disease",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "heart_disease",
        text: "Heart diseases",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "diabetes",
        text: "Diabetes",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "cerebral_palsy",
        text: "Cerebral palsy",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "cancer",
        text: "Cancer",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "tuberculosis",
        text: "Tuberculosis",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "homosexual",
        text: "Men who have sex with men",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "gender_violence",
        text: "Gender violence",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
      {
        key: "drug_abuse",
        text: "Drug abuse",
        value: false,
        openmrs_entity: "concept",
        openmrs_entity_id: "",
      },
    ],
    v_required: {
      value: "true",
      err: "Reason for registration is required",
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
