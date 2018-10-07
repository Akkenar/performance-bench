import { focusOnFirstError } from './focus';

describe('focus', () => {
  describe('focusOnFirstError', () => {
    it('should query the elements with aria-invalid', () => {
      const documentMock = {
        querySelectorAll: jest.fn(() => [
          {
            focus: jest.fn(),
          },
        ]),
      };

      focusOnFirstError(documentMock as Document);
      expect(documentMock.querySelectorAll).toHaveBeenCalledWith(
        '*[aria-invalid="true"]'
      );
    });

    it('should set the focus on the first element on error', () => {
      const focusMock = jest.fn();
      const documentMock = {
        querySelectorAll: () => [
          {
            focus: focusMock,
          },
        ],
      };

      focusOnFirstError(documentMock as Document);
      expect(focusMock).toHaveBeenCalledTimes(1);
    });
  });
});
