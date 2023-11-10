import {validate} from '../validation/validation';
import {userRegisterValidation} from '../validation/user-validation';
import {prismaClient} from '../application/database';
import {ResponseError} from '../error/response-error';
import bcrypt from 'bcrypt';

const register = async (request) => {
    const user      = validate(userRegisterValidation, request);
    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });

    if(countUser === 1) {
        throw new ResponseError(400,"Username Already Exists");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true
        }
    });
}

export default {
    register
}
