import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';

const MailchimpFormContainer = (props) => {
  const postURL = `https://hotmail.us9.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <div className='mc__form-container'>
      <MailchimpSubscribe
        url={postURL}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(FormData) => subscribe(FormData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
