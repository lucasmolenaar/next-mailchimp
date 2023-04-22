import { useEffect, useState } from 'react';
import InputField from './InputField';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log(status);
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    <form className='mc__form' onSubmit={(e) => handleSubmit(e)}>
      <h3 className='mc__title'>
        {status === 'success' ? 'Success!' : 'Join our email list blabla'}
      </h3>

      {status === 'sending' && (
        <div className='mc__alert mc__alert--sending'>sending...</div>
      )}

      {status === 'error' && (
        <div
          className='mc__alert mc__alert--error'
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      )}

      {status === 'success' && (
        <div
          className='mc__alert mc__alert--success'
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      )}

      <div className='mc__field-container'>
        <InputField
          label='First Name'
          onChangeHandler={setFirstName}
          type='text'
          value={firstName}
          placeholder='John'
          isRequired
        />

        <InputField
          label='Last Name'
          onChangeHandler={setLastName}
          type='text'
          value={lastName}
          placeholder='Doe'
          isRequired
        />

        <InputField
          label='Email'
          onChangeHandler={setEmail}
          type='email'
          value={email}
          placeholder='your@email.com'
          isRequired
        />
      </div>

      <InputField
        label='subscribe'
        type='submit'
        formValues={[email, firstName, lastName]}
      />
    </form>
  );
};

export default CustomForm;
