import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('http://localhost:3001/api/patients', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          patientName: 'John Doe',
          caregiverName: 'Jane Doe',
          visitStatus: 'Visit completed',
          lastCheckIn: '2023-04-19',
        },
        {
          id: 2,
          patientName: 'Bob Smith',
          caregiverName: 'Sarah Smith',
          visitStatus: 'Started training',
          lastCheckIn: '2023-04-18',
        },
        {
          id: 3,
          patientName: 'Alice Lee',
          caregiverName: 'Mark Lee',
          visitStatus: 'Visit completed',
          lastCheckIn: '2023-04-08',
        },
        {
          id: 4,
          patientName: 'David Johnson',
          caregiverName: 'Maria Johnson',
          visitStatus: 'Started training',
          lastCheckIn: '2023-04-08',
        },
        {
          id: 5,
          patientName: 'Peter Davis',
          caregiverName: 'Mary Davis',
          visitStatus: 'Missing documentation',
          lastCheckIn: '2023-04-05',
        },
      ])
    );
  }),

  rest.get('http://localhost:3001/api/appointments', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          time: '10:00 AM',
          appointmentType: 'Telehealth',
          patientName: 'John Smith',
          appointmentName: 'PAT',
          appointmentDate: new Date().toLocaleDateString(),
          appointmentDescription: 'Annual checkup',
        },
        {
          id: 2,
          time: '4:00 PM',
          appointmentType: 'Telehealth',
          patientName: 'George Mason',
          appointmentName: 'PAT',
          appointmentDate: new Date().toLocaleDateString(),
          appointmentDescription: 'Annual checkup',
        },
        {
          id: 3,
          time: '2:00 PM',
          appointmentType: 'Telehealth',
          patientName: 'Robert Johnson',
          appointmentName: 'PAT',
          appointmentDate: new Date(
            Date.now() + 24 * 60 * 60 * 1000
          ).toLocaleDateString(),
          appointmentDescription: 'Discuss treatment options',
        },
        {
          id: 4,
          time: '11:00 AM',
          appointmentType: 'In-person',
          patientName: 'Mary Smith',
          appointmentName: 'Delegation',
          appointmentDate: new Date(
            Date.now() + 2 * 24 * 60 * 60 * 1000
          ).toLocaleDateString(),
          appointmentDescription: 'Annual checkup',
        },
      ])
    );
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
