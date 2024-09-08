import axios from "axios";

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get("http://localhost:4000" + url);
    return response.data; 
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};

export const postData = async (url, formData) => {
  try {
      const response = await fetch(`http://localhost:4000${url}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });
      
     
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      
      const data = await response.json();
      console.log(data);
      return data;
      
  } catch (error) {
      console.error("Error during API call:", error);
      throw error;
  }
};

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
