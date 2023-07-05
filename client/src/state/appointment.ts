import { AppointmentType } from './appointment-type';

export interface Appointment {
  appointmentDate: string;
  appointmentDescription: string;
  appointmentName: string;
  appointmentType: AppointmentType;
  id: number;
  patientName: string;
  time: string;
}
