import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '../../test-utils/test-utils';
import Home from './home';

describe('Home', () => {
  describe('Recent Patients List', () => {
    it('should render the recent patients list', async () => {
      render(<Home />);
      expect(screen.getByText('Recent Patients')).toBeDefined();
      const item = await screen.findByText('John Doe');
      expect(item).toBeDefined();
    });
  });

  describe('Upcoming Visits List', () => {
    it('should render the upcoming visits list for today', async () => {
      render(<Home />);
      expect(screen.getByText('Upcoming Visits')).toBeDefined();
      const visitTypeAndPatient = await screen.findByText('PAT: John Smith');
      expect(visitTypeAndPatient).toBeDefined();
    });

    it('should render the upcoming visits list for tomorrow', async () => {
      render(<Home />);
      const tomorrowButton = await screen.findByText('Tomorrow');
      expect(tomorrowButton).toBeDefined();
      fireEvent.click(tomorrowButton);
      const visitTypeAndPatient = await screen.findByText(
        'PAT: Robert Johnson'
      );
      expect(visitTypeAndPatient).toBeDefined();
    });

    it('should render the upcoming visits list for this week', async () => {
      render(<Home />);
      const thisWeekButton = await screen.findByText('This week');
      expect(thisWeekButton).toBeDefined();
      fireEvent.click(thisWeekButton);
      const visitTypeAndPatient = await screen.findByText(
        'Delegation: Mary Smith'
      );
      expect(visitTypeAndPatient).toBeDefined();
    });
  });
});
