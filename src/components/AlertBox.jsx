import { confirmAlert } from "react-confirm-alert";
import Styles from "../assets/css/alertBox.module.css";
import "../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const AlertBox = ({ forceEnd, setShowAlert }) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      const closePopUp = () => {
        onClose();
        setShowAlert(false);
      };

      const leavePage = () => {
        forceEnd();
        onClose();
      };

      return (
        <div className="custom-ui">
          <div className={Styles.ui}>
            <span className={Styles.reminder}>
              Reminder : The timer is running !
            </span>
            <h2>If you refresh the page you will lost the data.</h2>

            <div className={Styles.btn}>
              <div>
                <span className={Styles.confirm}>
                  Are you sure want to leave.
                </span>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Button onClick={closePopUp} variant="contained">
                    Cancel
                  </Button>
                  <Button
                    onClick={leavePage}
                    color="error"
                    variant="contained"
                  >
                    Leave
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      );
    },

    closeOnClickOutside: false,
  });
};

export default AlertBox;
