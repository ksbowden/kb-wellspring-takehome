import { useContext, useState, useCallback, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Flex,
  VStack,
  HStack,
  Button,
  Center,
} from '@chakra-ui/react';

import { AppContext } from '../../state/app-context';
import UpcomingVisit from './upcoming-visit';
import { Appointment } from '../../state/appointment';

enum DateFilter {
  'Today',
  'Tomorrow',
  'ThisWeek',
}

const buttonBackgroundColors = {
  selected: '#F2F9FE',
  unselected: '#F2F4F7',
};

const buttonTextColors = {
  selected: '#2D689D',
  unselected: '#364052',
};

function UpcomingVisitsCard() {
  const [dateFilter, setDateFilter] = useState(DateFilter.Today);
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);
  const { appointments } = useContext(AppContext);

  useEffect(() => {
    const todayDate = new Date();
    const tomorrowDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const nextWeekDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

    setFilteredAppointments(
      appointments
        .filter((appointment) => {
          const appDate = new Date(appointment.appointmentDate);
          switch (dateFilter) {
            case DateFilter.Today:
              return todayDate.toDateString() === appDate.toDateString();
            case DateFilter.Tomorrow:
              return tomorrowDate.toDateString() === appDate.toDateString();
            case DateFilter.ThisWeek:
              return (
                Date.parse(nextWeekDate.toDateString()) -
                  Date.parse(appDate.toDateString()) <=
                1000 * 60 * 60 * 24 * 7
              );
          }
        })
        .slice(0, 7)
    );
  }, [appointments, dateFilter]);

  const getTextColor = useCallback(
    (buttonDateFilter: DateFilter) =>
      dateFilter === buttonDateFilter
        ? buttonTextColors.selected
        : buttonTextColors.unselected,
    [dateFilter]
  );

  const getBackgroundColor = useCallback(
    (buttonDateFilter: DateFilter) =>
      dateFilter === buttonDateFilter
        ? buttonBackgroundColors.selected
        : buttonBackgroundColors.unselected,
    [dateFilter]
  );

  return (
    <Card padding="8px 16px" width="500px" height="712px" borderRadius="12px">
      <CardHeader>
        <Heading size="md" color="#364052">
          <Flex alignItems="center">
            <Box>Upcoming Visits</Box>
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
        <HStack marginBottom="1.25rem">
          <Button
            size="sm"
            borderRadius="12px"
            color={getTextColor(DateFilter.Today)}
            backgroundColor={getBackgroundColor(DateFilter.Today)}
            onClick={() => setDateFilter(DateFilter.Today)}
          >
            Today
          </Button>
          <Button
            size="sm"
            borderRadius="12px"
            color={getTextColor(DateFilter.Tomorrow)}
            backgroundColor={getBackgroundColor(DateFilter.Tomorrow)}
            onClick={() => setDateFilter(DateFilter.Tomorrow)}
          >
            Tomorrow
          </Button>
          <Button
            size="sm"
            borderRadius="12px"
            color={getTextColor(DateFilter.ThisWeek)}
            backgroundColor={getBackgroundColor(DateFilter.ThisWeek)}
            onClick={() => setDateFilter(DateFilter.ThisWeek)}
          >
            This week
          </Button>
        </HStack>
        <VStack alignItems="start" spacing="1.25rem">
          {(filteredAppointments.length &&
            filteredAppointments.map((appointment) => (
              <UpcomingVisit
                key={appointment.id}
                appointment={appointment}
                shouldShowTime={dateFilter !== DateFilter.ThisWeek}
              />
            ))) || (
            <Center width="100%" color="#364052">
              No upcoming visits
            </Center>
          )}
        </VStack>
      </CardBody>
    </Card>
  );
}

export default UpcomingVisitsCard;
