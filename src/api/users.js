import axios from 'axios';

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    return response.data.data;
  } catch (error) {
    // Handle error here
    console.error('Error fetching users:', error);
    throw error;
  }
};

export { fetchUsers };
