import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 10 }, // langsam auf 10 Benutzer hochfahren
    { duration: '2m', target: 50 }, // erhöhe die Anzahl auf 50 Benutzer
    { duration: '1m', target: 100 }, // Spitze bei 100 Benutzer
    { duration: '2m', target: 0 }, // langsam auf 0 Benutzer reduzieren
  ],
};

export default function () {
  const resGet = http.get('http://localhost:5000/todos');
  check(resGet, {
    'status is 200': (r) => r.status === 200,
  });

  const payload = JSON.stringify({
    text: 'Neues Todo',
    isComplete: false,
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const resPost = http.post('http://localhost:5000/todos', payload, params);
  check(resPost, {
    'status is 201': (r) => r.status === 201,
  });

  const resDelete = http.del('http://localhost:5000/todos/1'); // ID anpassen
  check(resDelete, {
    'status is 200 or 404': (r) => r.status === 200 || r.status === 404,
  });

  sleep(1);
}
