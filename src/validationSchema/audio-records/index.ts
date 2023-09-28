import * as yup from 'yup';

export const audioRecordValidationSchema = yup.object().shape({
  title: yup.string().required(),
  duration: yup.number().integer().required(),
  topic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
