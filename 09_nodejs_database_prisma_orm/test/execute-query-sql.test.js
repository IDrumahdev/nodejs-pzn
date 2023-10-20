import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Client Query SQL Row', () => {
    it('execute sql', async () => {
       const id = "1";

       const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;
        
       for (const sample of samples) {
        console.info(`Result sample id : ${sample.id} and name ${sample.name}`);
       }
    });
});