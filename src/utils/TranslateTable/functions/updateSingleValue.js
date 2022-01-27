function updateSingleValue(valueEdited, questionsTranslated, index, value) {
  if (valueEdited.startsWith("v_regex")) {
    questionsTranslated[index]["v_regex"]["err"] = value;
  } else if (valueEdited.startsWith("v_required")) {
    questionsTranslated[index]["v_required"]["err"] = value;
  } else if (valueEdited.startsWith("v_numeric")) {
    questionsTranslated[index]["v_numeric"]["err"] = value;
  } else if (valueEdited.startsWith("v_min")) {
    questionsTranslated[index]["v_min"]["err"] = value;
  } else if (valueEdited.startsWith("v_max")) {
    questionsTranslated[index]["v_max"]["err"] = value;
  } else {
    questionsTranslated[index][valueEdited] = value;
  }
}

export default updateSingleValue;
