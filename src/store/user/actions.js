import { Notify } from 'quasar';

import auth from '../../services/authentication';
import API from '../../services/api';
import router from '../../router';

const api = new API();

const actions = {};

actions.login = (_, credentials) => api.post('/api/login', credentials)
  .then((response) => {
    auth.setToken(response);

    return router.push({ path: '/' });
  })
  .catch(() => {
    Notify.create({ message: 'Usuário e/ou senha incorretos!', color: 'warning' });
  });

export default actions;