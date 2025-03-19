import axios from "axios";

const fetchFiles = async (token: string): Promise<void> => {
  try {
    const response = await axios.get("http://your-backend-ip:3001/files", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching files:", (error as Error).message);
  }
};
