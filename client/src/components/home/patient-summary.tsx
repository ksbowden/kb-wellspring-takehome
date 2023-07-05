import { Box, Flex, Spacer } from '@chakra-ui/react';
import { Patient } from '../../state/patient';
import VisitStatusPill from '../visit-status-pill';

function PatientSummary({ patient }: { patient: Patient }) {
  const { patientName, caregiverName, visitStatus } = patient;
  return (
    <Flex flexDirection="row" alignItems="center">
      <Flex flexDirection="column">
        <Box fontWeight="semibold">{patientName}</Box>
        <Box fontWeight="light">{caregiverName}</Box>
      </Flex>
      <Spacer />
      <VisitStatusPill status={visitStatus} />
    </Flex>
  );
}

export default PatientSummary;
