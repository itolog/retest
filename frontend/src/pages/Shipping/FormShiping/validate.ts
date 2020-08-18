import * as Yup from 'yup';

const FormShippingSchema = Yup.object().shape({
  email: Yup.string().email('Неверный формат email').required('Заполните'),
  name: Yup.string().min(2, 'Слишком короткое имя!').required('Заполните'),
  adress: Yup.string().required('Заполните'),
});

export default FormShippingSchema;
