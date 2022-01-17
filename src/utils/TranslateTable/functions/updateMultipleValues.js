function updateMultipleValues(
  valueEdited,
  questionsTranslated,
  index,
  value,
  valueAt
) {
  if (valueEdited === "values") {
    questionsTranslated[index][valueEdited][valueAt] = value;
  }
  if (valueEdited === "options") {
    questionsTranslated[index][valueEdited][valueAt]["text"] = value;
  }
}

export default updateMultipleValues;
