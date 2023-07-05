import { Box } from '@chakra-ui/react';
import { VisitStatus } from '../state/visit-status';

const backgroundColors = {
  [VisitStatus.Completed]: '#F2F4F7',
  [VisitStatus.MissingDocumentation]: '#FEFAED',
  [VisitStatus.StartedTraining]: '#EFFCF4',
};

const textColors = {
  [VisitStatus.Completed]: '#424B5C',
  [VisitStatus.MissingDocumentation]: '#B26333',
  [VisitStatus.StartedTraining]: '#34774C',
};

function VisitStatusPill({ status }: { status: VisitStatus }) {
  const bgColor = backgroundColors[status];
  const textColor = textColors[status];

  return (
    <Box
      backgroundColor={bgColor}
      textColor={textColor}
      borderRadius="12px"
      padding="4px 8px"
      fontSize="xs"
      fontWeight="500"
      width="fit-content"
    >
      {status}
    </Box>
  );
}

export default VisitStatusPill;
