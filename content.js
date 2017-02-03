badUrls = [
	"www.build.com", //construction?
	"www.hsn.com", //https://www.shopmyexchange.com/
	"www.perfumania.com"
]

if (badUrls.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.textContent = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products";
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badSupporters = [
	"www.abcsupply.com",
	"www.hobbylobby.com",
	"www.kushnerompanies.com",
	"www.lendingtree.com",
	"www.millercoors.com",
	"www.nascar.com",
	"www.qvc.com",
	"www.trumpgolf.com",
	"www.trumphotels.com",
	"www.trumpwinery.com",
	"www.trump.com",
	"www.trumptowerny.com",
	"www.sentient.com",	
	"www.uline.com",
	"www.ufc.com",
	"www.welchs.com",
	"www.yuengling.com",
	"www.uber.com",
	"www.vno.com"
]

if (badSupporters.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.textContent = "Warning: This Company or a Company Executive has been financially supportive of Trump or the Trump Campaign"
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badMedia = [
	"www.forbesmedia.com"
]
if (badMedia.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Company or a Company Executive has been financially supportive of Trump or the Trump Campaign. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="http://www.nytimes.com/"> The New York Times </a>' + ' or <a href="https://www.bbc.co.uk"> BBC </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badOutdoor = [
	"www.llbean.com"
]
if (badOutdoor.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Company or a Company Executive has been financially supportive of Trump or the Trump Campaign. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="http://www.landsend.com/"> Lands End </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badFlash = [
	"www.bluefly.com",
	"www.filenesbasement.com",
	"www.c21.stores.com",
	"www.gilt.com"
]
if (badFlash.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://zulily.com"> Zulily </a>' + 'or <a href="https://ruelala.com"> RueLaLa </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badEverything= [
	"www.amazon.com",
	"www.jet.com"
]
if (badEverything.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://target.com"> Target </a>' + 'or <a href="https://www.rakuten.com"> Rakuten </a>' + 'or <a href="https://www.google.com/express"> Google Express </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badBaby = [
	"www.buybuybaby.com"
]
if (badBaby.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://babiesrus.com"> Babies "R" Us </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badMidDeptStores = [
	"www.nordstrom.com",
	"shop.nordstrom.com",
	"www.nordstromrack.com",
	"www.saksoff5th.com",	
	"www.lordandtaylor.com",
	"www.bloomingdales.com",
	"www1.bloomingdales.com",
	"www.shopstyle.com",
	"www.neimanmarcus.com"
]
if (badMidDeptStores.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://bergdorfgoodman.com"> Bergdorf Goodman </a>' + 'or <a href="https://www.net-a-porter.com"> Net-a-Porter </a>' + 'or <a href="https://www.shopbop.com"> Shopbop </a>' + 'or <a href="https://mmlafleur.com/mdash/election-conversation"> MM.LaFleur </a>' + 'or <a href="https://marios.mitchellstores.com/"> Marios </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badDeptStores = [
	"www.dillards.com",
	"www.bonton.com",
	"www.elder-beerman.com",
	"www.thebay.com",
	"www.belk.com",
	"www.carsons.com"
]
if (badDeptStores.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://macys.com"> Macys </a>' + 'or <a href="https://www.modcloth.com"> Modcloth </a>' + 'or <a href="https://www.jcrew.com"> J. Crew </a>' + 'or <a href="https://www.etsy.com"> Etsy </a>' + 'or <a href="https://melissamccarthy.com/"> Melissa McCarthy</a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badDiscount = [
	"walmart.com",
	"www.walmart.com",
	"www.kmart.com",
	"tjmaxx.tjx.com",
	"www.marshallsonline.com",
	"www.overstock.com",
	"www.rossstores.com",
	"www.burlingtoncoatfactory.com",
	"www.sears.com"
]
if (badDiscount.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://target.com"> Target </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badShoes = [
	"www.heels.com",
	"www.dsw.com",
	"www.zappos.com",
	"www.6pm.com",
]
if (badShoes.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://www.kohls.com"> Kohls </a>' + 'or <a href="http://www.toms.com/"> Toms </a>' + 'or <a href="http://www.macys.com/"> Macys </a>*';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

badHome = [
	"www.bedbathandbeyond.com"
]
if (badHome.indexOf(window.location.hostname) > -1) {
	var newSpan = document.createElement("newSpan");
	newSpan.id = "newSpan";
	newSpan.style.fontSize = "16px";
	newSpan.style.fontWeight = "bold";
	newSpan.innerHTML = "Warning: This Retailer Does Business with the Trump Family and/or Sells Trump Family Products. <br />";
	newSpan.innerHTML += '*TRUMP-FREE ALTERNATIVES: <a href="https://crateandbarrel.com"> Crate & Barrel </a>' + 'or <a href="https://target.com"> Target </a>' + 'or <a href="https://www.surlatable.com/"> Sur La Table </a>' + 'or <a href="http://www.localandlejos.com/"> Local & Lejos </a>' + 'or <a href="http://www.melaartisans.com/"> Mela Artisans</a>';
	newSpan.style.color = "white";
	var elemDiv = document.createElement('div');
	elemDiv.style.cssText = 'width:100%;height:10%;background:#EB5857;text-align:center;text-transform:uppercase;padding:10px;position:relative;z-index: 10000000000000000000;';
	elemDiv.appendChild(newSpan);

	window.document.body.insertBefore(elemDiv, window.document.body.firstChild);
}

//Source: https://grabyourwallet.org/
//Source: http://www.businessinsider.com/trump-related-businesses-boycotted-2016-11/#jet-15





