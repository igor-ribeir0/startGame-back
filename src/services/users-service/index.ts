import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { exclude } from "../../utils/prisma-utils";
import { duplicatedEmailError, invalidEmailPasswordError } from "./errors";
import userRepository from "../../repositories/users-repository";
import sessionRepository from "../../repositories/session-repository";

export async function createUser({ name, email, address, complement, cep, password }: CreateUserParams) {
  await validateUniqueEmail(email);

  const hashedPassword = await bcrypt.hash(password, 10);

  await userRepository.create(name, email, address, complement, cep, hashedPassword);
};

export async function searchUser(params: SignInParams) {
  const { email, password } = params;

  const user = await userRepository.findByEmail(email);
  if(!user) throw invalidEmailPasswordError();

  const comparePassword = await bcrypt.compare(password, user.password);
  if(!comparePassword) throw invalidEmailPasswordError();

  const token = await createSession(user.id);

  return {
    user: user.id,
    token,
  };
};

async function validateUniqueEmail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);

  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
};

async function createSession(userId: number){
  const token = jwt.sign({ userId }, "top_secret");
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
};

export type CreateUserParams = Pick<User, 'name' | 'email' | 'address' | 'complement' | 'cep' | 'password'>;
export type SignInParams = Pick<User, 'email' | 'password'>;

type SignInResult = {
  user: Pick<User, 'id' | 'email'>;
  token: string;
};

const userService = {
  createUser,
  searchUser
};

export default userService;