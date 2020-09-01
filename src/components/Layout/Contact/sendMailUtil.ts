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
      'service_p9e4a0y',
      'template_k49zyxa',
      templateParams,
      'user_GJbe1KZCLCMgBc02yLmsE'
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
