// strong password 
const isStrongPassword = (password) => {
    const strongRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;
    return strongRegex.test(password);
  };
  
  // medium password
 const isMediumPassword = (password) => {
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    return mediumRegex.test(password);
  };
  
  //weak password
  const isWeakPassword = (password) => {
    return password.length >= 6;
  };
  

  export const UsePasswordStrength = (password) => {
    if (isStrongPassword(password)) {
      return "Strong";
    } else if (isMediumPassword(password)) {
      return "Medium";
    } else if (isWeakPassword(password)) {
      return "Weak";
    }
    return "Password must be at least 6 characters";
  };
  