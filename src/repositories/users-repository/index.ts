import { prisma } from "../../config/database";

async function findByEmail(email: string) {
    const findEmail = await prisma.user.findFirst({
        where: { email }
    });

    return findEmail;
};

async function create(name: string, email: string, address: string, password: string) {
    await prisma.user.create({
        data:{
            name: name,
            email: email,
            address: address,
            password: password
        }
    })
};

const userRepository = {
  findByEmail,
  create
};

export default userRepository;