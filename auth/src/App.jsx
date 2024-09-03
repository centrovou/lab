import { useState } from 'react';
import './App.css';
function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ];

  const errors = {
    email: 'Неправильный email',
    pass: 'неправильный пароль',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { email, pass } = document.forms[0];
    const userData = database.find((user) => user.username === email.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: 'email', message: errors.email });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" name="email" required />
          {renderErrorMessage('email')}
        </div>

        <label>Password</label>
        <input type="password" name="pass" required />
        {renderErrorMessage('pass')}

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="passEmail">
          <div>Email: user1</div>
          <div> password: pass1</div>
        </div>
        <div className="title">YLAB FORM</div>
        {isSubmitted ? <div>Пользователь успешно вошел в систему</div> : renderForm}
      </div>
    </div>
  );
}
export default App;
