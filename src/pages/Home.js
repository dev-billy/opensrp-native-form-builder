import QuestionField from "../components/QuestionField";

const questions = [
  {
    key: "fam_name",
    openmrs_entity_parent: "",
    openmrs_entity: "person",
    openmrs_entity_id: "first_name",
    type: "edit_text",
    hint: "Surname",
    edit_type: "name",
    v_required: {
      value: "true",
      err: "Please enter the surname",
    },
    v_regex: {
      value: "[A-Za-z\\u00C0-\\u017F\\s\\u00C0-\\u017F\\.\\-\\']*",
      err: "Please enter surname",
    },
  },
  {
    key: "client_first_name",
    openmrs_entity_parent: "",
    openmrs_entity: "person",
    openmrs_entity_id: "first_name",
    type: "edit_text",
    hint: "First name",
    edit_type: "name",
    v_required: {
      value: "true",
      err: "Please enter the first name",
    },
    v_regex: {
      value: "[A-Za-z\\u00C0-\\u017F\\s\\u00C0-\\u017F\\.\\-\\']*",
      err: "Please enter a valid name",
    },
  },
  {
    key: "client_middle_name",
    openmrs_entity_parent: "",
    openmrs_entity: "person",
    openmrs_entity_id: "middle_name",
    type: "edit_text",
    hint: "Middle name",
    edit_type: "name",
    v_regex: {
      value: "[A-Za-z\\u00C0-\\u017F\\s\\u00C0-\\u017F\\.\\-\\']*",
      err: "Please enter a valid name",
    },
    v_required: {
      value: "true",
      err: "Please enter the middle name",
    },
  },
  {
    key: "unique_id",
    openmrs_entity_parent: "",
    openmrs_entity: "person_identifier",
    openmrs_entity_id: "opensrp_id",
    hidden: "true",
    type: "barcode",
    barcode_type: "qrcode",
    hint: "ID",
    scanButtonText: "Scan QR Code",
    v_numeric: {
      value: "true",
      err: "Please enter a valid ID",
    },
  },
  {
    key: "fam_village",
    openmrs_entity_parent: "",
    openmrs_entity: "person_address",
    openmrs_entity_id: "cityVillage",
    type: "edit_text",
    edit_type: "name",
    hint: "Area name",
    v_required: {
      value: "true",
      err: "Please enter the area name",
    },
    v_regex: {
      value: "[A-Za-z\\u00C0-\\u017F\\s\\u00C0-\\u017F\\.\\-]*",
      err: "Please enter a valid area name",
    },
  },
  {
    key: "landmark",
    openmrs_entity_parent: "",
    openmrs_entity: "person_address",
    openmrs_entity_id: "landmark",
    type: "edit_text",
    edit_type: "name",
    hint: "Landmark/Description of house location",
    v_required: {
      value: true,
      err: "Please enter the landmark/description of location.",
    },
  },
  {
    key: "gps",
    openmrs_entity_parent: "",
    openmrs_entity: "concept",
    openmrs_entity_id: "163277AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    openmrs_data_type: "text",
    type: "gps",
  },
  {
    key: "spacer",
    openmrs_entity_parent: "",
    openmrs_entity: "concept",
    openmrs_entity_id: "",
    type: "spacer",
    spacer_height: "15dp",
  },
  {
    key: "nearest_facility",
    openmrs_entity_parent: "",
    openmrs_entity: "concept",
    openmrs_entity_id: "162724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    openmrs_data_type: "text",
    type: "tree",
    hint: "Village/Street",
    tree: [],
    v_required: {
      value: true,
      err: "Please select the village or street",
    },
  },
];
const Home = () => {
  return (
    <section>
      <QuestionField questions={questions} />
    </section>
  );
};

export default Home;
