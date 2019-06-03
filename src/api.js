import axios from "axios";

export const getEvents = () => {
  return axios
    .get(`/api/getAll`)
    .then(resp => resp.data)
    .catch(console.error);
};

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

export const uploadFile = (formData) => {
 return axios.post(`api/uploadFile`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => response.data)
  .catch(console.error);
}

export const sendApplicationAsConsultant = ( name, 
  email,
  emailConfirm,
  expertise,
  about,
  fileURL,
  fileName) => {
  return axios
    .post(`/api/sendApplicationAsConsultant`, {
      name, 
      email,
      emailConfirm,
      expertise,
      about,
      fileURL,
      fileName
      
    })
    .then(resp => resp.data)
    .catch(console.error);
};

export const sendApplicationForConsultant = ( name, 
  email,
  emailConfirm,
  companyName,
  typeOfConsultant,
  descriptionOfProjectWork) => {
  return axios
    .post(`/api/sendApplicationForConsultant`, {
      name, 
      email,
      emailConfirm,
      companyName,
  typeOfConsultant,
  descriptionOfProjectWork
      
    })
    .then(resp => resp.data)
    .catch(console.error);
};