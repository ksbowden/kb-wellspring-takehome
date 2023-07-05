import { useContext } from 'react';
import { VStack, Button, Center, Image } from '@chakra-ui/react';
import { View } from '../state/view';
import logoImgUrl from '../assets/logo.png';
import homeImgUrl from '../assets/home-line.png';
import heartHandUrl from '../assets/heart-hand.png';
import { AppContext, DispatchContext } from '../state/app-context';
import { ActionType } from '../state/app-reducer';

function SideNav() {
  const { view } = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  function handleSetView(view: View) {
    dispatch({
      type: ActionType.UpdateView,
      payload: {
        view,
      },
    });
  }

  return (
    <>
      <VStack width="212px">
        <Center>
          <Image src={logoImgUrl} marginTop="64px" />
        </Center>
        <Center>
          <Button
            marginTop="128px"
            size="lg"
            fontSize="medium"
            width="138px"
            borderRadius="8px"
            justifyContent="start"
            padding="12px"
            variant={view === View.Home ? 'solid' : 'ghost'}
            backgroundColor={view === View.Home ? '#DAF1FF' : undefined}
            onClick={() => handleSetView(View.Home)}
            textColor="#687083"
          >
            <Image src={homeImgUrl} marginRight="12px" />
            Home
          </Button>
        </Center>
        <Center>
          <Button
            size="lg"
            width="138px"
            fontSize="medium"
            borderRadius="8px"
            marginTop="12px"
            justifyContent="start"
            padding="12px"
            variant={view === View.Patients ? 'solid' : 'ghost'}
            backgroundColor={view === View.Patients ? '#DAF1FF' : undefined}
            onClick={() => handleSetView(View.Patients)}
            textColor="#687083"
          >
            <Image src={heartHandUrl} marginRight="12px" />
            Patients
          </Button>
        </Center>
      </VStack>
    </>
  );
}

export default SideNav;
