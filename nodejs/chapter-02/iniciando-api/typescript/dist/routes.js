"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Jon"
    });
    CreateCourseService_1.default.execute({
        name: "ReactJS",
        educator: "Isiane"
    });
    return response.send();
}
exports.createCourse = createCourse;
