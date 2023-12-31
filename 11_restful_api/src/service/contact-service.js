import { createContactValidation, getContactValidation, searchContactValidation, updateContactValidation } from '../validation/contact-validation.js';
import {validate} from '../validation/validation.js';
import {prismaClient} from '../application/database.js';
import { ResponseError } from '../error/response-error.js';

const create = async (user, request) => {
    const contact       = validate(createContactValidation, request);
    contact.username    = user.username;

    return prismaClient.contact.create({
        data: contact,
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    });
}

const get = async(user, contactId) => {
    contactId = validate(getContactValidation, contactId);

    const result = await prismaClient.contact.findFirst({
        where: {
            username: user.username,
            id: contactId
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    });

    if(!result) {
        throw new ResponseError("404","Contact is Not Foud.");
    }
        return result;
}

const update = async (user, request) => {
    const contact                   = validate(updateContactValidation, request);
    const countContactInDatabase    = await prismaClient.contact.count({
        where: {
            username: user.username,
            id: contact.id
        }
    });

    if(countContactInDatabase !== 1) {
        throw new ResponseError(404,"Contact is not found.");
    }

    return prismaClient.contact.update({
        where: {
            id: contact.id
        },
        data: {
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    });
}

const remove = async (user, contactId) => {
    contactId = validate(getContactValidation, contactId);

    const totalInDatabase = await prismaClient.contact.count({
        where: {
            username: user.username,
            id: contactId
        }
    });

    if(totalInDatabase !== 1) {
        throw new ResponseError(404, "Contact is not found.")
    }

    return prismaClient.contact.delete({
        where: {
            id: contactId
        }
    });
}

const search = async (user, request) => {

    request = validate(searchContactValidation, request);
    // 1 ((page - 1) * size) = 0 
    // 2 ((page - 1) * size) = 10 
    const skip = (request.page - 1) * request.size;

    const filters = [];

    filters.push({
        username: user.username
    });

    if (request.name) {
        filters.push({
            OR: [
                {
                    first_name: {
                        contains: request.name
                    },
                    last_name: {
                        contains: request.name
                    }
                }
            ]
        })
    }

    if (request.email) {
        filters.push({
            email: {
                contains: request.email
            }
        })
    }

    if(request.phone) {
        filters.push({
            phone: {
                contains: request.phone
            }
        })
    }

    const contact = await prismaClient.contact.findMany({
        where: {
            AND: filters
        },
        take: request.size,
        skip: skip
    });

    const totalItem = await prismaClient.contact.count({
        where: {
            AND: filters
        }
    });

    return {
        data: contact,
        paging: {
            page: request.page,
            total_item: totalItem,
            total_page: Math.ceil(totalItem / request.size)
        }
    }
}

export default {
    create,
    get,
    update,
    remove,
    search
}