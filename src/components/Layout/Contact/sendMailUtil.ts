import emailjs from 'emailjs-com';
import { toast, ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

export const sendEmail = (templateParams: any) => {
  emailjs
    .send(
      'default_service',
      'contactform',
      templateParams,
      'user_GMHAo3Sd1v18QWdl3q3oT'
    )
    .then(
      () => {
        toast.success('E-mail successfully sent!', toastOptions);
      },
      () => {
        toast.error('E-mail not sent! :( Try again later.', toastOptions);
      }
    );
};
