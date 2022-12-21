import { confirmAlert } from "react-confirm-alert";

const AlertBox = ({ forceEnd, setShowAlert }) => {
  return confirmAlert({
    title: "If you leave the page you will lost the data.",
    message: "Are you sure want to leave.",
    buttons: [
      {
        label: "Yes",
        onClick: () => forceEnd(),
      },
      {
        label: "No",
        onClick: () => setShowAlert(false),
      },
    ],
  });
};

export default AlertBox;
