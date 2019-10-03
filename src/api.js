import axios from "axios";

export const sendEmail = (name, email, subject, message) => {
  return axios
    .post(`/api/sendEmail`, {
      name,
      email,
      subject,
      message
    })
    .then(resp => resp.data)
    .catch(console.error);
};
export const sendAutoResponse = (email) => {
  return axios
    .post(`/api/sendAutoResponse`,{ email })
    .then(resp => resp.data)
    .catch(console.error);
};
export const verifyCaptcha = response => {
  return axios
    .post(`api/verifyCaptcha`, { response })
    .then(resp => resp.data.success)
    .catch(console.error);
};

