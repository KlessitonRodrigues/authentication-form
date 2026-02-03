import { toast, ToastContainer } from "react-toastify";

import { HTMLAttributes } from "react";

interface ToastifyProps extends HTMLAttributes<HTMLDivElement> {}

export const Toastify = (props: ToastifyProps) => {
  return (
    <div>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
};

export const successToastr = (message: string) => {
  toast.success(message);
};

export const errorToastr = (message: string) => {
  toast.error(message);
};

export const infoToastr = (message: string) => {
  toast.info(message);
};
