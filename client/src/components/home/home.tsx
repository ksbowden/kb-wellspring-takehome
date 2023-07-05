import { useContext, useEffect } from 'react';
import { HStack } from '@chakra-ui/react';

import RecentPatientsCard from './recent-patients';
import { getAllData } from '../../services/app-service';
import { DispatchContext } from '../../state/app-context';
import { ActionType } from '../../state/app-reducer';
import UpcomingVisitsCard from './upcoming-visits';

function Home() {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    async function fetchData() {
      const allData = await getAllData();
      dispatch({
        type: ActionType.AddAllData,
        payload: allData,
      });
    }
    fetchData();
  }, [dispatch]);

  return (
    <HStack spacing="64px">
      <RecentPatientsCard />
      <UpcomingVisitsCard />
    </HStack>
  );
}

export default Home;
