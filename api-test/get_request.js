const axios = require("axios");
const { expect } = require("chai");
var propertiesReader = require("properties-reader")
var properties = propertiesReader("config/env.properties")

describe("GET API Request Tests", async() => {
       it("should be able to get user list", async() => {
        const res = await axios.get(properties.get("baseUri") +'/users?page=2')
        console.log(res.data);
        expect(res.data.page).equal(2)
        expect(res.data.per_page).equal(6)
       })
})