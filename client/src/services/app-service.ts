// TODO: This should be an environment variable
const baseUrl = 'http://localhost:3001/api';

enum Endpoint {
  Patients = 'patients',
  Appointments = 'appointments',
}

function getBasicFetchPromise(endpoint: string) {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/${endpoint}`)
      .then(async (res) => {
        const body = await res.json();
        return resolve(body);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export async function getAllData() {
  const fetches = [
    getBasicFetchPromise(Endpoint.Patients),
    getBasicFetchPromise(Endpoint.Appointments),
  ];
  try {
    const [patientsRes, appointmentsRes] = await Promise.all(fetches);
    return {
      patients: patientsRes,
      appointments: appointmentsRes,
    };
  } catch (e) {
    console.error('App Service error:', e);
    throw e;
  }
}
