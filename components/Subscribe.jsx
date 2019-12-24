import React, { useState } from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://gmail.us4.list-manage.com/subscribe/post?u=0a8876c6f4f96cee684d03c89&amp;id=398d723510';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    margin: 5px;
    background-color: black;
    border: 5px solid yellow;
    color: white;
    marginTop: 5px;
    width: 210px;
    height: 40px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: yellow;
        color: black;
    }
`;

const Input = styled.input`
    margin: 5px;
    width: 200px;
    height: 30px;
    color: white;
    border-radius: 2px;
    border: yellow solid 5px;
    background-color: black;
    text-align: center;
    transition: 0.3s all;
    font-weight: bold;

    &:focus {
        outline: none;
    }
`;

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const send = async (subscribe) => {
    setIsSending(true);
    await subscribe({ EMAIL: email });
    setIsSending(false);
    setEmail('');
  };

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <Wrapper>
          <Input
            type="text"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSending}
          />
          <Button type="submit" onClick={() => send(subscribe)} disabled={isSending}>Odeslat</Button>
          {status === 'sending' && <div>odesílá se to...</div>}
          {status === 'error' && (
            <div>
neprošlo to:
              {message}
            </div>
          )}
          {status === 'success' && <div>hotovo!</div>}
        </Wrapper>
      )}
    />
  );
};

export default Subscribe;

// .field
//   .field:hover {
//     background-color: rgba(255, 255, 255, 0.45);
//     box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
//   }
