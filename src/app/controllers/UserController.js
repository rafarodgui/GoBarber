import * as Yup from 'yup';
<<<<<<< HEAD
=======

>>>>>>> 402ee0fa75c3fe54e520749e6dd2cc8804c5860f
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
<<<<<<< HEAD
      oldPassword: Yup.string().min(6),
      password: Yup.string()
=======
      oldPassword: Yup.string()
>>>>>>> 402ee0fa75c3fe54e520749e6dd2cc8804c5860f
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
<<<<<<< HEAD
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
=======
      confirmPassword: Yup.string().when('password', (password, filed) =>
        password ? filed.required().oneOf([Yup.ref('password')]) : filed
>>>>>>> 402ee0fa75c3fe54e520749e6dd2cc8804c5860f
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

<<<<<<< HEAD
    const user = await User.findByPk(req.userId);

    /*if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'E-mail already exists' });
      }
    } */

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
=======
    const user = await User.findByPK(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already existis' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Old Password does not mach' });
>>>>>>> 402ee0fa75c3fe54e520749e6dd2cc8804c5860f
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
