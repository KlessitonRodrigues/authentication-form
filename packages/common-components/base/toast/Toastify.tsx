import { toast, ToastContainer } from "react-toastify";
import { materialColors } from "../../utils/CSSColors";
import { Icons } from "../icons/IconMap";

export const Toastify = () => {
  return (
    <ToastContainer
      position="top-right"
      theme="colored"
      autoClose={6000}
      pauseOnHover
      stacked
    />
  );
};

export const successToast = (message: string) => {
  toast.success(message, {
    hideProgressBar: true,
    style: { backgroundColor: materialColors.green[800] },
    icon: () => <Icons icon="checkMark" size="34" />,
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    hideProgressBar: true,
    style: { backgroundColor: materialColors.red[800] },
    icon: () => <Icons icon="warning" size="34" />,
  });
};

export const infoToast = (message: string) => {
  toast.info(message, {
    hideProgressBar: true,
    style: { backgroundColor: materialColors.blue[800] },
    icon: () => <Icons icon="questionMark" size="34" />,
  });
};
