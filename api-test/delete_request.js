const axios = require("axios");
const { expect } = require("chai");
var propertiesReader = require("properties-reader")
var properties = propertiesReader("config/env.properties")


describe("DELETE API Request Tests", async() => {
       it("should be able to delete user", async() => {
        const res = await axios.delete(properties.get("baseUri") +'/users/7')
        console.log(res.data);
        expect(res.status).equal(204)
       })
})