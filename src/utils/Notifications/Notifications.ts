import { toast } from "react-toastify";

export const SuccessNotification = (message) => {
  toast.success(message);
};

export const InfoNotification = (message) => {
  toast.info(message);
};

export const ErrorNotification = (message) => {
  toast.error(message);
};

export const WarnNotification = (message) => {
  toast.warn(message);
};
