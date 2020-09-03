import { configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

// To use fetchMock do below:
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();