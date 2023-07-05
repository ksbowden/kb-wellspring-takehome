import { useContext } from 'react';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Card,
} from '@chakra-ui/react';

import { AppContext } from '../../state/app-context';
import VisitStatusPill from '../visit-status-pill';

function PatientsTable() {
  const { patients } = useContext(AppContext);
  return (
    <Card maxHeight="712px">
      <TableContainer overflowY="scroll" overflowX="hidden">
        <Table>
          <Thead>
            <Tr>
              <Th>Patient Name</Th>
              <Th>Caregiver Name</Th>
              <Th>Last Check-in</Th>
              <Th>Visit Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {patients.map((patient) => (
              <Tr key={patient.id} color="#364052">
                <Td>{patient.patientName}</Td>
                <Td>{patient.caregiverName}</Td>
                <Td>{new Date(patient.lastCheckIn).toLocaleDateString()}</Td>
                <Td>
                  <VisitStatusPill status={patient.visitStatus} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default PatientsTable;
