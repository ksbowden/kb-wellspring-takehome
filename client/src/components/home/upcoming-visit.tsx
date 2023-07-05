import {
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BiDotsHorizontalRounded as DotsMenuIcon } from 'react-icons/bi';
import { Appointment } from '../../state/appointment';
import { AppointmentType } from '../../state/appointment-type';

const backgroundColors = {
  [AppointmentType.Telehealth]: '#62BCF4',
  [AppointmentType.InPerson]: '#BBB5F9',
};

const descriptionTextColors = {
  [AppointmentType.Telehealth]: '#397DB3',
  [AppointmentType.InPerson]: '#633AE6',
};

function UpcomingVisit({
  appointment,
  shouldShowTime,
}: {
  appointment: Appointment;
  shouldShowTime?: boolean;
}) {
  return (
    <Flex flexDirection="row" height="64px" width="428px" flexGrow="1">
      <Flex
        backgroundColor={backgroundColors[appointment.appointmentType]}
        height="64px"
        flexDirection="column"
        justifyContent="center"
        width="128px"
        borderTopLeftRadius="12px"
        borderBottomLeftRadius="12px"
      >
        <Center color="#FCFCFD" fontWeight="semibold">
          {shouldShowTime
            ? appointment.time
            : new Date(appointment.appointmentDate).toLocaleDateString()}
        </Center>
        <Center
          fontSize="xs"
          color={descriptionTextColors[appointment.appointmentType]}
        >
          {appointment.appointmentType}
        </Center>
      </Flex>
      <Flex
        backgroundColor="#F8F9FC"
        height="64px"
        flexDirection="column"
        justifyContent="center"
        flexGrow="1"
        borderTopRightRadius="12px"
        borderBottomRightRadius="12px"
        padding="0 24px"
      >
        <Box position="absolute" right="36px" marginTop="-24px">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={DotsMenuIcon} />}
              variant="ghost"
            />
            <MenuList fontSize="sm">
              <MenuItem>Email Patient</MenuItem>
              <MenuItem>Reschedule</MenuItem>
              <MenuItem>Remove Appointment</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box fontSize="sm" fontWeight="semibold">
          {appointment.appointmentName}: {appointment.patientName}
        </Box>
        <Box fontSize="xs" fontWeight="light">
          {appointment.appointmentDescription}
        </Box>
      </Flex>
    </Flex>
  );
}

export default UpcomingVisit;

/*
<Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={DotsMenuIcon} />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        */
