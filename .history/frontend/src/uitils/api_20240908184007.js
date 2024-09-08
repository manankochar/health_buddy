import axios from axios


export const signdata = async (url, formData) => {
  try {
      const response = await fetch(`http://localhost:4000/api/user/${url}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      const data = await response.json(); // Parse the response as JSON
     
      if (!response.ok) {
          const errormsg = data.msg || "Signup failed!"
          return { error: true, msg: errormsg };
      
      }
    
      return data; // Return the successful response data

  } catch (error) {
      console.error("Error during signup:", error);
      throw error; // Re-throw the error for further handling in the calling function
  }
}
