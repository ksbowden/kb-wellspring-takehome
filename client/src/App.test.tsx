import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from './test-utils/test-utils';
import App from './App';

describe('App', () => {
  describe('Navigation', () => {
    it.each(['Patients', 'View all'])(
      'should show the patients table via the %s button',
      async (buttonText: string) => {
        render(<App />);
        expect(screen.getByText('Recent Patients')).toBeDefined();

        const patientsButton = await screen.findByText(buttonText);
        fireEvent.click(patientsButton);

        const patientsHeader = await screen.findByText('All Patients');
        expect(patientsHeader).toBeDefined();
        expect(screen.findByText('Patient Name')).toBeDefined();
      }
    );
  });
});
