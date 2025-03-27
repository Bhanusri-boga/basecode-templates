export const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate password strength
  export const validatePassword = (password:string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  // Validate phone number (e.g., US phone numbers)
  export const validatePhoneNumber = (phoneNumber:string) => {
    return phoneNumber?.match(/\d/g)?.length===10;
  };
  export const checkNumberWhileEnter=(number:string)=>{
    return number?.match(/^\d{0,10}$/)
  }