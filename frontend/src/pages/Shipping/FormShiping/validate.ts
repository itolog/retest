import * as Yup from 'yup';

const FormShippingSchema = Yup.object().shape({
  email: Yup.string().trim().strict(true).email('Неверный формат email'),
  name: Yup.string().trim().strict(true).min(2, 'Слишком короткое имя!').required('Заполните'),
  address: Yup.string().trim().strict(true).required('Заполните'),
});

export default FormShippingSchema;
