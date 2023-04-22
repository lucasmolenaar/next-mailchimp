const InputField = ({
  type,
  label,
  onChangeHandler,
  placeholder,
  value,
  isRequired,
  name,
  formValues,
}) => {
  const validateInput = (values) => {
    if (values.some((f) => f === '') || values[0].indexOf('@') === -1) {
      return true;
    } else {
      return false;
    }
  };

  if (type === 'submit') {
    return (
      <input
        className='primaryBtn primaryBtn--big g__justify-self-center'
        type='submit'
        value={label}
        disabled={validateInput(formValues)}
      />
    );
  } else if (type === 'textarea') {
    return (
      <label className='inputField__label'>
        {label}
        <textarea
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder={placeholder}
          value={value}
          required={isRequired}
          className='inputField__field'
          rows={7}
          name={name}
        />
      </label>
    );
  } else {
    return (
      <label className='inputField__label'>
        {label}
        <input
          onChange={(e) => onChangeHandler(e.target.value)}
          type={type}
          placeholder={placeholder}
          value={value}
          required={isRequired}
          className='inputField__field'
          name={name}
        />
      </label>
    );
  }
};

export default InputField;
