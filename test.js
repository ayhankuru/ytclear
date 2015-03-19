var ytclear =require('./index.js')
var expect = require('expect.js');


describe('Test!!!...', function(){
	
	it(' Title Test ', function (done) {

			
	expect(ytclear("Adventure Club - Retro City (LOUDPVCK Remix) [FREE DL]")).to.eql("Adventure Club - Retro City");
	expect(ytclear("Deadmau5 - Strobe (Lemony's Trap Remix) 2012")).to.eql("Deadmau5 - Strobe");
	expect(ytclear("Skrillex - Dirty Vibe with Diplo, CL, & G-Dragon (OFFICIAL VIDEO)")).to.eql("Skrillex - Dirty Vibe with Diplo, CL, & G-Dragon");
	expect(ytclear("Jack U - Live at Madison Square Garden, NY - 1/1/15 (With Video)(FULL SET)")).to.eql("Jack U - Live at Madison Square Garden, NY - 1/1/15")
	done();
			


	});	


});
