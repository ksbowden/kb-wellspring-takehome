import { VisitStatus } from './visit-status';

export interface Patient {
  patientName: string;
  caregiverName: string;
  id: number;
  lastCheckIn: string;
  visitStatus: VisitStatus;
}
