var ytclear =require('./index.js')
var expect = require('expect.js');


describe('Test!!!...', function(){
	
	it(' Title Test ', function (done) {

			
	expect(ytclear("Adventure Club - Retro City (LOUDPVCK Remix) [FREE DL]")).to.eql("Adventure Club - Retro City");
	expect(ytclear("Deadmau5 - Strobe (Lemony's Trap Remix) 2012")).to.eql("Deadmau5 - Strobe");
	expect(ytclear("Skrillex - Dirty Vibe with Diplo, CL, & G-Dragon (OFFICIAL VIDEO)")).to.eql("Skrillex - Dirty Vibe with Diplo, CL, & G-Dragon");
	expect(ytclear("Jack U - Live at Madison Square Garden, NY - 1/1/15 (With Video)(FULL SET)")).to.eql("Jack U - Live at Madison Square Garden, NY - 1/1/15")
	expect(ytclear("Example - 'Changed The Way You Kiss Me' (Official Video)")).to.eql("Example - Changed The Way You Kiss Me")
	expect(ytclear("DJ Fresh - 'Gold Dust' (Official Video)")).to.eql("DJ Fresh - Gold Dust")
	expect(ytclear("Kid Cudi vs. Crookers - Day 'n' Night")).to.eql("Kid Cudi vs. Crookers - Day n Night")	
	expect(ytclear("Stromae - Alors on danse (clip officiel)")).to.eql("Stromae - Alors on danse");
	expect(ytclear("Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song)")).to.eql("Shakira - Waka Waka");
	expect(ytclear("Alison Wonderland, AWE - Back It Up (Alison Wonderland x AWE) [Audio]")).to.eql("Alison Wonderland, AWE - Back It Up");


	done();
			


	});	


});
