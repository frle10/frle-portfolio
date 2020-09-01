import { FocusEvent } from 'react';
import { sendEmail } from './sendMailUtil';

const TEXTAREA_MAX_HEIGHT = 105;

export const onSubmit = (data: any) => {
  const templateParams = {
    name: data.name,
    email: data.email,
    message: data.message,
  };

  sendEmail(templateParams);
};

export const updateMarginBottom = (e: FocusEvent) => {
  const labelId: string = e.target.id + 'Label';
  const label = document.getElementById(labelId);

  if (label) {
    label.style.marginTop = '-30px';
  }
};

export const onFocusOut = (e: FocusEvent) => {
  const input: HTMLInputElement = document.getElementById(
    e.target.id
  ) as HTMLInputElement;
  if (!input.value) {
    const label = document.getElementById(e.target.id + 'Label');
    if (label) {
      label.style.marginTop = '0px';
    }
  }
};

export const updateTextarea = () => {
  const textarea = document.getElementById('message') as HTMLTextAreaElement;

  const div = document.getElementById('msgDiv') as HTMLDivElement;
  div.style.marginTop =
    parseInt(textarea.style.height) <= TEXTAREA_MAX_HEIGHT
      ? `${194 - textarea.scrollHeight}px`
      : div.style.marginTop;

  const counter = document.getElementById('counter') as HTMLParagraphElement;
  const length = textarea.value.length;
  counter.innerText = length > 0 ? `${length}/${textarea.maxLength}` : '';
};
