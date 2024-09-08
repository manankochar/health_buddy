import axios from 'axios';

export const signdata = async (url, formData) => {
  try {
    console.log(url,)
      const response = await axios.post(`http://localhost:4000/api/user${url}`, formData, {
          headers: {
              'Content-Type': 'application/json',
          },
      });

      return response.data; // Return the successful response data

  } catch (error) {
      // Check if the error is due to a response and has a message
      const errormsg = error.response?.data?.msg || "Signup failed!";
      console.error("Error during signup:", error);
      return { error: true, msg: errormsg }; // Return error details
  }
}
