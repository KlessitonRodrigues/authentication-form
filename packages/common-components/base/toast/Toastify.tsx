import { toast, ToastContainer } from "react-toastify";

export const Toastify = () => {
  return (
    <ToastContainer
      position="top-right"
      theme="colored"
      autoClose={3000}
      pauseOnHover
      stacked
    />
  );
};

export const successToast = (message: string) => {
  toast.success(message);
};

export const errorToast = (message: string) => {
  toast.error(message);
};

export const infoToast = (message: string) => {
  toast.info(message);
};
