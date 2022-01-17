function createDataPoint(question, index) {
  console.log("called");
  let dataPoint = [];
  if (question.hint !== undefined) {
    dataPoint.push({
      key: 1,
      currentValue: `${question.hint}`,
      type: "Hint",
      valueEdited: "hint",
      index: index,
    });
  }
  if (question.v_required !== undefined) {
    dataPoint.push({
      key: 2,
      currentValue: `${question.v_required.err}`,
      type: "Required Message",
      valueEdited: "v_required.err",
      index: index,
    });
  }
  if (question.v_numeric !== undefined) {
    dataPoint.push({
      key: 3,
      currentValue: `${question.v_numeric.err}`,
      type: "Invalid Number input message",
      valueEdited: "v_numeric.err",
      index: index,
    });
  }
  if (question.v_regex !== undefined) {
    dataPoint.push({
      key: 4,
      currentValue: `${question.v_regex.err}`,
      type: "Invalid input message",
      valueEdited: "v_regex.err",
      index: index,
    });
  }
  if (question.type === "spinner") {
    dataPoint.push({
      key: 5,
      type: "Drop down values",
      currentValue: [question.values],
      valueEdited: "values",
      index: index,
    });
  }
  if (question.type === "check_box" || question.type === "native_radio") {
    dataPoint.push({
      key: 6,
      type: "Label",
      currentValue: question.label,
      valueEdited: "label",
      index: index,
    });
    dataPoint.push({
      key: 7,
      type: "Select Options",
      currentValue: [question.options],
      valueEdited: "options",
      index: index,
    });
  }
  if (question.type === "toaster_notes") {
    dataPoint.push({
      key: 8,
      type: "Notification Text",
      currentValue: question.text,
      valueEdited: "text",
      index: index,
    });
    question.toaster_info_text &&
      dataPoint.push({
        key: 9,
        type: "Notification more info text",
        currentValue: question.toaster_info_text,
        valueEdited: "toaster_info_text",
        index: index,
      });
  }
  if (question.v_numeric_integer !== undefined) {
    dataPoint.push({
      key: 10,
      currentValue: `${question.v_numeric_integer.err}`,
      type: "Invalid Integer Input Message",
      valueEdited: "v_numeric_integer.err",
      index: index,
    });
  }
  if (question.v_min !== undefined) {
    dataPoint.push({
      key: 11,
      currentValue: `${question.v_min.err}`,
      type: "Minimum allowed error message",
      valueEdited: "v_min.err",
      index: index,
    });
  }
  if (question.v_max !== undefined) {
    dataPoint.push({
      key: 12,
      currentValue: `${question.v_max.err}`,
      type: "Maximum allowed error message",
      valueEdited: "v_max.err",
      index: index,
    });
  }

  return dataPoint;
}

export default createDataPoint;
