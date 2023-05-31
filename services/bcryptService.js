import bcrypt from "bcrypt";

export const hash = async (plaintextPassword, saltRounds) => {
  try {
    const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

export const compare = async (plaintextPassword, hash) => {
  try {
    const isMatch = await bcrypt.compare(plaintextPassword, hash);
    return isMatch;
  } catch (error) {
    throw error;
  }
};
