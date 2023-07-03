import axios from "axios";
import { debounce } from "lodash";
import Filter from "bad-words";

const isEmailUsedURL =
  import.meta.env.VITE_EMAILURL || "http://localhost:8080/isEmailUsed";
const isUsernameUsedURL =
  import.meta.env.VITE_USERNAMEURL || "http://localhost:8080/isUsernameUsed";
const isPhoneUsedURL =
  import.meta.env.VITE_PHONEURL || "http://localhost:8080/isPhoneUsed";

const reg = import.meta.env.VITE_URL || "http://localhost:8080/Register";

const filter = new Filter(); // Create an instance of the bad-words filter

export async function checkEmailExistence(email, setFiledEmailError) {
  if (email.length < 1) {
    return setFiledEmailError("The Email field is required");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setFiledEmailError("Invalid email");
    return;
  }

  try {
    const response = await axios.post(isEmailUsedURL, { email });
    const { data } = response;
    const { exists } = data;

    if (exists) {
      setFiledEmailError("Email already exists");
    } else {
      setFiledEmailError(null);
    }
  } catch (error) {
    console.error("Error checking email existence:", error);
    setFiledEmailError("Error occurred while checking email existence");
  }
}

export const debouncedHandleEmailChange = debounce(checkEmailExistence, 500); // 500 milliseconds delay

export async function checkUsernameExistence(username, setFiledUsernameError) {
  if (username.length < 1) {
    return setFiledUsernameError("The Username field is required");
  }

  try {
    const response = await axios.post(isUsernameUsedURL, { username });
    const { data } = response;
    const { exists } = data;

    if (exists) {
      setFiledUsernameError("Username already exists");
    } else {
      setFiledUsernameError(null);
    }
  } catch (error) {
    console.error("Error checking email existence:", error);
    setFiledUsernameError("Error occurred while checking email existence");
  }
}

export const debouncedHandleUsernameChange = debounce(checkUsernameExistence,500); 

export async function checkPhoneExistence(phone, setFiledPhoneError) {
  if (phone.length > 0) {
    const isValidSaudiNumber = /^9665\d{8}$/.test(phone);
    if (!isValidSaudiNumber) {
      setFiledPhoneError("Phone is not Valid");
    } else {

      try {
        const response = await axios.post(isPhoneUsedURL, { phone });
        const { data } = response;
        const { exists } = data;
    
        if (exists) {
          setFiledPhoneError("Phone already exists");
        } else {
          setFiledPhoneError(null);
        }
      } catch (error) {
        console.error("Error checking Phone existence:", error);
        setFiledPhoneError("Error occurred while checking Phone existence");
      }
      
    }
  } else {
    setFiledPhoneError("The Phone field is required");
  }
}

export const debouncedHandlePhoneChange = debounce(checkPhoneExistence,500); 




export function validateName(value, setFiledNameError) {
  if (value.length < 1) {
    return setFiledNameError("The Name field is required");
  }

  if (filter.isProfane(value)) {
    setFiledNameError("Name is bad");
  } else {
    setFiledNameError(null);
  }
}



export function validatePassword(value, setFiledPasswordError) {
  if (value.length < 4 && value.length > 1) {
    setFiledPasswordError("Password is short");
  } else if (value.length < 1) {
    setFiledPasswordError("The Password field is required");
  } else {
    setFiledPasswordError(null);
  }
}

export async function handleSubmit(name, email, username, phone, password) {
  try {
    const response = await axios.post(reg, {
      name,
      email,
      username,
      phone,
      password,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.error("Error checking email existence:", error);
  }
}
