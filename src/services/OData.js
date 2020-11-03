import {ENDPOINT} from '../config/urls';

export default function getOData () {
  return fetch(`${ENDPOINT}/OData`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    return res;
  })
}