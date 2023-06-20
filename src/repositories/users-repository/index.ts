import { prisma } from "../../config/database";

async function findByEmail(email: string) {
    const findEmail = await prisma.user.findFirst({
        where: { email }
    });

    return findEmail;
};

async function create(name: string, email: string, address: string, complement: string, cep: string, password: string) {
    await prisma.user.create({
        data:{
            name,
            email,
            address,
            complement,
            cep,
            password
        }
    })
};

const userRepository = {
  findByEmail,
  create
};

export default userRepository;