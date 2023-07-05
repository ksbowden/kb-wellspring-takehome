import { Heading } from '@chakra-ui/react';

function Header({ title }: { title: string }) {
  return (
    <Heading
      as="h1"
      size="lg"
      marginTop="32px"
      marginBottom="32px"
      fontWeight="600"
    >
      {title}
    </Heading>
  );
}

export default Header;
