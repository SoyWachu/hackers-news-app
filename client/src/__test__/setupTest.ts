// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure = require("enzyme");
// Adapter = require("enzyme-adapter-react-16");

const configure = require("enzyme").configure;
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
configure({ adapter: new Adapter() });

global.fetch = require("jest-fetch-mock");

export {};
