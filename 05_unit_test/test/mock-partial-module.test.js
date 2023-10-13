import {getAllProduct, getProductById} from '../src/database.js';
import {ProductService} from '../src/product-service.js';

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");

    return {
        __esModule: true,
        ...originalModule,
        getAllProduct: jest.fn()
    }
});

test.failing("mock modules getProductById", () => {
    ProductService.findById(1);
});

test("mock modules getAllProducts", () => {
    const products = [
        {
            id: 1,
            name : "Product Mock"
        },
        {
            id: 2,
            name: "Product Mock"
        }
    ];

    getAllProduct.mockImplementation(() => {
        return products;
    });

    expect(ProductService.findAll()).toEqual(products);
});