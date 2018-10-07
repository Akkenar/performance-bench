/**
 * Set the focus on the first field on error.
 * The error is detected by the `aria-invalid` attribute. Hopefully
 * the Material Design library does support this accessibility feature.
 */
export const focusOnFirstError = (target = document) => {
  const element = <HTMLElement>(
    target.querySelectorAll('*[aria-invalid="true"]')[0]
  );

  if (element) {
    element.focus();
  }
};
