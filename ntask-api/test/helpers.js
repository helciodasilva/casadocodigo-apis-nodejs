const supertest = require("supertest");
const chai = require("chai");
const app = require("../index.js");

global.app = app;
global.require = supertest(app);
global.expect = chai.expect;