import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';
import { register } from '../store/slices/profileSlice';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [profile, setProfile] = useState(null);
  // const [error, setError] = useState(null);
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const error = useSelector((state) => state.profile.error);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fromPage = location.state?.from || '/';

  useEffect(() => {
    console.log(fromPage);
    if (profile) {
      navigate(fromPage);
    }
  }, [profile, navigate, fromPage]);

  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandle = (e) => {
    setConfirmPassword(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
        repeat_pass: confirmPassword,
      })
    );
    // setLoading(true);
    // axios
    //   .get('https://breakhd2.store/sanctum/csrf-cookie')
    //   .then((csrfResponse) => {
    //     const authData = {
    //       name,
    //       email,
    //       password,
    //       repeat_pass: confirmPassword,
    //     };
    //     axios
    //       .post('http://localhost:8010/proxy/api/auth/register', authData)
    //       .then((response) => {
    //         if (response.data.success) {
    //           setProfile(response.data.data.profile);
    //           document.cookie = `api=${response.data.data.token}; path=/`;
    //         } else {
    //           setError(response.data.errors);
    //         }
    //         setLoading(false);
    //       });
    //   });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card p-3" style={{ width: 500 }}>
          <Form onSubmit={submitHandle}>
            <h6 className="text-primary mb-3">
              Для продолжения необходимо зарегистрироваться
            </h6>
            <Form.Group controlId="name">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                onChange={nameHandle}
                value={name}
                type="text"
                placeholder="Введите ваше имя"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={emailHandle}
                value={email}
                type="email"
                placeholder="Введите email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                onChange={passwordHandle}
                value={password}
                type="password"
                placeholder="Введите пароль"
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Повторите пароль</Form.Label>
              <Form.Control
                onChange={confirmPasswordHandle}
                value={confirmPassword}
                type="password"
                placeholder="Повторите пароль"
              />
              {error && (
                <span
                  className="mt-2"
                  style={{ display: 'block', color: 'red' }}
                >
                  {error[0]}
                </span>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Зарегистрироваться
            </Button>
            <Form.Group className="mt-3">
              <Link to="/auth/login">Есть аккаунт? Войти</Link>
            </Form.Group>
            <Form.Group className="mt-3">
              <Link to="/">На главную</Link>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
}

export default RegisterPage;
