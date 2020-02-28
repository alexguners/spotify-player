import "jsdom-global/register";
import { expect } from "chai";
import ConvertToHumanTime from "../src/ConvertToHumanTime";

describe("ConvertToHumanTime", () => {
  it("should recive zero ms and convert to 0:00", () => {
    expect(ConvertToHumanTime(0)).to.be.eql("0:00");
  });

  it("should recive 1000 ms and convert to 0:01", () => {
    expect(ConvertToHumanTime(1000)).to.be.eql("0:01");
  });

  it("should recive 11000 ms and convert to 0:11", () => {
    expect(ConvertToHumanTime(11000)).to.be.eql("0:11");
  });

  it("should recive 600000 ms and convert to 1:00", () => {
    expect(ConvertToHumanTime(60000)).to.be.eql("1:00");
  });
});
