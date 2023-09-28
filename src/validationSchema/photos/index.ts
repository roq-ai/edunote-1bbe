import * as yup from 'yup';

export const photoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  topic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
