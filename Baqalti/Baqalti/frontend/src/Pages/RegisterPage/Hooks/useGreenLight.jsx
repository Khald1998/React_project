import { useEffect } from "react";

const useGreenLight = (
  warningAmount,
  name,
  email,
  username,
  phone,
  password,
  setGreenLight
) => {
  useEffect(() => {
    setGreenLight(
      warningAmount < 1 &&
        name.length > 0 &&
        email.length > 0 &&
        username.length > 0 &&
        phone.length > 0 &&
        password.length > 0
    );
  }, [warningAmount, name, email, username, phone, password]);
};

export default useGreenLight;
