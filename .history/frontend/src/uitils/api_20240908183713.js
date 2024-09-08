import axios from "axios";


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
export const editData = async (url, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:4000${url}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error; 
  }
};

export const deleteData = async (url) => {
  try {
    const response = await axios.delete(`http://localhost:4000${url}`);
    return response.data; 
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error; 
  }
};
