"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('app testing.', () => {
    it('responds with with sdsdsd', done => {
        (0, supertest_1.default)(app_1.default)
            .get('/what')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);
    });
});
