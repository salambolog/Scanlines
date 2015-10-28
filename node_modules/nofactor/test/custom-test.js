var expect = require("expect.js"),
nofactor   = require(".."),
custom     = require("../lib/custom"),
string     = require("../lib/string");


describe("custom#", function () {

	var c = custom(string);



	it("can register a custom element", function () {
		c.registerElement("br", string.Element.extend({
			toString: function () {
				return "<" + this._name + " />";
			}
		}));
	});

	it("can create and stringify the registered element", function () {
		expect(c.createElement("br").toString()).to.be("<br />");
	});

	it("can properly stringify the custom element when it's part of a div", function () {
		var div = c.createElement("div");
		div.appendChild(c.createElement("br"));
		expect(div.toString()).to.be("<div><br /></div>")
	})
});