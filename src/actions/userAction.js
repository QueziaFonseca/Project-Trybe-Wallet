// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';

export function getEmailAction(payload) {
  return {
    type: GET_EMAIL,
    payload,
  };
}
