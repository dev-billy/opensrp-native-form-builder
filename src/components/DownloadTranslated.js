import { Button, Modal } from "antd";

const DownloadButton = ({ style, formName, completeForm, translatedSteps }) => {
  function downloadStarted() {
    Modal.info({
      title: "Download Started",
      content: `Translated: ${formName}`,
    });
    if (completeForm !== null) {
      const count = completeForm.count;
      for (let i = 0; i < count; i++) {
        completeForm[`step${i + 1}`] = translatedSteps[i];
      }
      const a = document.createElement("a");
      const file = new Blob([JSON.stringify(completeForm)], {
        type: "application/json",
      });
      a.href = URL.createObjectURL(file);
      a.download = formName;
      a.click();
    }
  }

  function handleFormDownload() {
    downloadStarted();
  }

  return (
    <>
      <Button style={style} onClick={() => handleFormDownload()}>
        Download Translated
      </Button>
    </>
  );
};

export default DownloadButton;
