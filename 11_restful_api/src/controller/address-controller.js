import addressService from "../service/address-service.js";

const create = async (req, res, next) => {
    try {
        const user          = req.user;
        const resquest      = req.body;
        const contactId     = req.params.contactId;

        const result = await addressService.create(user, contactId, resquest);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const get = async (req, res, next) => {
    try {
        const user          = req.user;
        const contactId     = req.params.contactId;
        const addressId     = req.params.addressId;

        const result = await addressService.get(user, contactId, addressId);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export default {
    create,
    get
}