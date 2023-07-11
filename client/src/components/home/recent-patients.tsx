import { useCallback, useContext, useMemo } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Flex,
  Spacer,
  Button,
} from '@chakra-ui/react';

import { AppContext, DispatchContext } from '../../state/app-context';
import { ActionType } from '../../state/app-reducer';
import { View } from '../../state/view';
import PatientSummary from './patient-summary';

function RecentPatientsCard() {
  const { patients } = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  const filteredPatients = useMemo(() => {
    return [...patients]
      .sort(
        (a, b) =>
          new Date(b.lastCheckIn).getTime() - new Date(a.lastCheckIn).getTime()
      )
      .slice(0, 7); // let's show a 7-patient preview)
  }, [patients]);

  const onClickViewAll = useCallback(() => {
    dispatch({
      type: ActionType.UpdateView,
      payload: {
        view: View.Patients,
      },
    });
  }, [dispatch]);

  return (
    <Card padding="8px 16px" width="500px" borderRadius="12px">
      <CardHeader>
        <Heading size="md" color="#364052">
          <Flex alignItems="center">
            <Box>Recent Patients</Box>
            <Spacer />
            <Button
              size="sm"
              fontSize="xs"
              variant="link"
              onClick={onClickViewAll}
            >
              View all
            </Button>
          </Flex>
        </Heading>
      </CardHeader>
      <CardBody paddingTop="0">
        <Box
          height="2px"
          width="100%"
          border="solid 2px #E3F2FD"
          borderRadius="2px"
          marginBottom="1.25rem"
        />
        {filteredPatients.map((patient, i) => (
          <Box key={patient.id}>
            <PatientSummary patient={patient} />
            {i !== filteredPatients.length - 1 && (
              <Box
                height="1px"
                width="100%"
                border="solid 1px #F2F4F7"
                borderRadius="2px"
                margin="1.25rem 0"
              ></Box>
            )}
          </Box>
        ))}
      </CardBody>
    </Card>
  );
}

export default RecentPatientsCard;
