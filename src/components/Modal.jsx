import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { closeModal } from '../store/slices/modalSlice';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function ErrorModal() {
  const show = useSelector((state) => state.modal.show);
  const message = useSelector((state) => state.modal.message);
  const reason = useSelector((state) => state.modal.reason);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => dispatch(closeModal());
  const authRequireHandle = () => {
    console.log(location);
    navigate('auth/login', { state: { from: location } });
    dispatch(closeModal());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Уведомление</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        {reason === 'authRequire' && (
          <Button variant="success" onClick={authRequireHandle}>
            Войти
          </Button>
        )}
        <Button variant="primary" onClick={handleClose}>
          Понятно
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
