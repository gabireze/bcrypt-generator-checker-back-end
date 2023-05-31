import { hash as bcryptHash, compare as bcryptCompare } from "../services/bcryptService.js";

export const generateHash = async (request, response, next) => {
  try {
    const { saltRounds = 10, plaintextPassword } = request.body;
    const hashedPassword = await bcryptHash(plaintextPassword, saltRounds);
    return response.status(200).json({ hashedPassword });
  } catch (error) {
    return response.status(400).send(error.message);
  }
};

export const compareHash = async (request, response, next) => {
  try {
    const { plaintextPassword, hash } = request.body;
    const isMatch = await bcryptCompare(plaintextPassword, hash);
    return response.status(200).json({ isMatch });
  } catch (error) {
    return response.status(400).send(error.message);
  }
};
