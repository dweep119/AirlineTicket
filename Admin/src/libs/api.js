// eslint-disable-next-line
const javaURL = "http://localhost:1337/api";

export async function loginUser(credentials) {
  const data = await fetch(`${javaURL}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  const _data = await data.json();
  return _data;
}
