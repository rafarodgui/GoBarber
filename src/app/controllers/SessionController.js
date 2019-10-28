import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
<<<<<<< HEAD
=======
      name: Yup.string().required(),
>>>>>>> 402ee0fa75c3fe54e520749e6dd2cc8804c5860f
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Validation error!' });
=======
      return res.status(400).json({ error: 'Validation fails' });
>>>>>>> 402ee0fa75c3fe54e520749e6dd2cc8804c5860f
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User does not exists' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'password does not match' });
    }

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
