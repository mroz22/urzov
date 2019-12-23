import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://gmail.us4.list-manage.com/subscribe/post?u=0a8876c6f4f96cee684d03c89&amp;id=398d723510';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const send = async (subscribe) => {
    setIsSending(true);
    await subscribe({ EMAIL: email });
    setIsSending(false);
  };

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} disabled={isSending} />
          <button type="submit" onClick={() => send(subscribe)} disabled={isSending}>Odeslat</button>
          {status === 'sending' && <div>odesílá se to...</div>}
          {status === 'error' && (
            <div>
neprošlo to:
              {message}
            </div>
          )}
          {status === 'success' && <div>hotovo!</div>}
        </div>
      )}
    />
  );
};

export default Subscribe;
