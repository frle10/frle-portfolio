import React, { useEffect } from 'react';
import { css } from 'emotion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import autosize from 'autosize';
import {
  updateMarginBottom,
  onFocusOut,
  onSubmit,
  updateTextarea,
} from './contactEventTriggers';
import { PhoneImage, mq } from '../../../assets';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Must be e-mail.').required('E-mail is required.'),
  message: yup.string().required('Message is required.'),
});

const contactSectionStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#3F49FE',
  padding: '5% 10%',
  [mq[1]]: {
    flexDirection: 'column',
    padding: '5% 2%',
    paddingTop: '10%',
  },
});

const formStyle = css({
  position: 'relative',
  padding: '5% 0%',
  minHeight: '500px',
  '& p': {
    color: '#FFFFFF',
    height: '30px',
    marginLeft: '30px',
  },
  '& input[type=text], textarea': {
    width: '500px',
    height: '30px',
    fontFamily: 'Titillium Web',
    fontSize: '14px',
    letterSpacing: '0.08em',
    border: 'none',
    borderBottom: '1px solid #FFFFFF',
    color: '#FFFFFF',
    backgroundColor: '#3F49FE',
    outline: 0,
    paddingLeft: '30px',
    [mq[1]]: {
      width: '300px',
    },
  },
  '& textarea': {
    resize: 'none',
    overflow: 'auto',
    maxHeight: '105px',
  },
  '& label': {
    position: 'absolute',
    display: 'block',
    width: '50px',
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: '0.08em',
    marginLeft: '30px',
    transition: 'margin-top 1s',
  },
});

const msgDivStyle = css({
  marginTop: '160px',
});

const counterStyle = css({
  position: 'absolute',
  display: 'block',
  fontSize: '12px',
  fontWeight: 200,
  color: '#FFFFFF',
  height: 'auto',
  right: '10px',
});

const buttonStyle = css({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  padding: '0px 0px',
  bottom: 0,
  width: '180px',
  height: '60px',
  backgroundColor: '#3F49FE',
  color: '#FFFFFF',
  cursor: 'pointer',
  border: '1px solid #FFFFFF',
  '&:hover': {
    color: '#FA2841',
    backgroundColor: '#E5E5E5',
    border: '1px solid #FA2841',
  },
  [mq[1]]: {
    width: '132px',
    height: '44px',
    fontSize: '14px',
  },
});

const imageStyle = css({
  height: '400px',
  [mq[1]]: {
    height: '200px',
  },
});

const Contact = () => {
  const { register, handleSubmit, errors, clearErrors } = useForm<IFormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    textarea.rows = 1;
    autosize(textarea);
    textarea.oninput = () => updateTextarea();
  });

  return (
    <div id='contact' className={contactSectionStyle}>
      <div>
        <form
          autoComplete='off'
          className={formStyle}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor='name' id='nameLabel'>
            name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            ref={register}
            onFocus={updateMarginBottom}
            onBlur={onFocusOut}
          />
          <p>{errors.name?.message}</p>

          <div style={{ marginTop: '50px' }}>
            <label htmlFor='email' id='emailLabel'>
              email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              ref={register}
              onFocus={updateMarginBottom}
              onBlur={onFocusOut}
            />
          </div>
          <p>{errors.email?.message}</p>

          <div id='msgDiv' className={msgDivStyle}>
            <label htmlFor='message' id='messageLabel'>
              message
            </label>
            <textarea
              id='message'
              name='message'
              ref={register}
              maxLength={200}
              onFocus={updateMarginBottom}
              onBlur={onFocusOut}
            ></textarea>
            <p id='counter' className={counterStyle}></p>
            <p>{errors.message?.message}</p>
          </div>

          <input
            type='submit'
            value='Send'
            className={buttonStyle}
            onClick={() => setTimeout(() => clearErrors(undefined), 2000)}
          />
        </form>
      </div>

      <div style={{ marginRight: '5%' }}>
        <img src={PhoneImage} alt='Phone' className={imageStyle} />
      </div>
    </div>
  );
};

export default Contact;
