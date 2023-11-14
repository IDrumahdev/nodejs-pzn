import {validate} from '../validation/validation.js';
import {prismaClient} from '../application/database.js';
import {getContactValidation} from '../validation/contact-validation.js';
import { ResponseError } from '../error/response-error.js';
import { createAddressValidation } from '../validation/address-validation';


const checkContactMustExists = async (user, contactId) => {
    contactId = validate(getContactValidation, contactId);

    const totalContactInDatabase = await prismaClient.contact.count({
        where: {
            username: user.username,
            id: contactId
        }
    });

    if(totalContactInDatabase !== 1) {
        throw new ResponseError(404, "Contact is not found.")
    }
        return contactId;
}


const create = async (user, contactId, resquest) => {
    
    contactId = await checkContactMustExists(user, contactId);

    const address = validate(createAddressValidation, resquest);
    address.contact_id = contactId;

    return prismaClient.address.create({
        data: address,
        select: {
            id: true,
            street: true,
            city: true,
            province: true,
            country: true,
            postal_code: true
        }
    });
}

const get = async (user, contactId, addressId) => {
    contactId   = await checkContactMustExists(user, contactId);
    addressId   = validate(getContactValidation, addressId);

    const address = await prismaClient.address.findFirst({
        where: {
            contact_id: contactId,
            id: addressId
        }
    });

    if(!address) {
        throw new ResponseError(404, "Address not found.");
    }
        return address;
}

export default {
    create,
    get
}