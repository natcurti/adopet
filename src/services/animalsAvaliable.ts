import { instance } from "src/http/instance";

const animalsAvaliable = {
  getAnimals: async () => {
    const response = await instance.get(
      "babc21e1b9fbc52c51757ae6e11acd64/raw/ed569286fb36ce2c221886fce11f72ac1287f3de/animals-adopet.json"
    );
    return response.data;
  },
};

export default animalsAvaliable;
