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
      return <span className="text-green-500">Strong</span>;
    } else if (isMediumPassword(password)) {
      return <span className="text-orange-500">Medium</span>;
    } else if (isWeakPassword(password)) {
      return <span className="text-red-500">Weak</span>;
    }
    
  };
  