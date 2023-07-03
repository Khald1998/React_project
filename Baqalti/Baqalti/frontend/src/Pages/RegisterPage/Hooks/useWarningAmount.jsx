// useWarningAmount.js
import { useEffect } from "react";

export default function useWarningAmount(
  FiledNameError,
  FiledPhoneError,
  FiledEmailError,
  FiledUsernameError,
  FiledPasswordError,
  setWarningAmount
) {
  useEffect(() => {
    // Count the non-null errors
    const errorCount =
      (FiledNameError !== null ? 1 : 0) +
      (FiledPhoneError !== null ? 1 : 0) +
      (FiledEmailError !== null ? 1 : 0) +
      (FiledUsernameError !== null ? 1 : 0) +
      (FiledPasswordError !== null ? 1 : 0);

    // Set the warningAmount state
    setWarningAmount(errorCount);
  }, [
    FiledNameError,
    FiledPhoneError,
    FiledEmailError,
    FiledUsernameError,
    FiledPasswordError,
    setWarningAmount,
  ]);
}
