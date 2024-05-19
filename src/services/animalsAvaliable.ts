import { instance } from "src/http/instance";

const animalsAvaliable = {
  getAnimals: async () => {
    const response = await instance.get(
      "babc21e1b9fbc52c51757ae6e11acd64/raw/bb9b79bfc0c627452c4d994d2ae3ac6ddf9c89ac/animals-adopet.json"
    );
    return response.data;
  },
};

export default animalsAvaliable;
