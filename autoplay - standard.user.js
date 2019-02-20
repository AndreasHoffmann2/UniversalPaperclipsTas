// ==UserScript==
// @name         Speedrun paperclip game
// @namespace    http://www.decisionproblem.com/paperclips/index2.html
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.decisionproblem.com/paperclips/index2.html
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	window.setTimeout(function () {
		resetPrestige();
		//loadGame(manuallySaved);
		log("Game time logged");
	}, 0);
	window.setTimeout(function () {
		assAutoStrategy.start();
	}, 10);

	prepareContainers();
	var assistantsContainer = $("assistantsContainer");

	var btnBuyWire = $("btnBuyWire");
	var btnMakePaperclip = $("btnMakePaperclip");
	var btnLowerPrice = $("btnLowerPrice");
	var btnRaisePrice = $("btnRaisePrice");
	var btnExpandMarketing = $("btnExpandMarketing");
	var btnAddProc = $("btnAddProc");
	var btnAddMem = $("btnAddMem");
	var btnMakeClipper = $("btnMakeClipper");
	var btnNewTournament = $("btnNewTournament");
	var btnRunTournament = $("btnRunTournament");
	var btnImproveInvestments = $("btnImproveInvestments");
	var btnMakeMegaClipper = $("btnMakeMegaClipper");
	var btnDeposit = $("btnInvest");
	var btnWithdraw = $("btnWithdraw");
	var lblUnsoldClips = $("unsoldClips");
	var lblWireCount = $("wire");
	var lblPrice = $("margin");
	var lblMarketingLevel = $("marketingLvl");
	var lblFunds = $("funds");
	var lblProcessors = $("processors");
	var lblMemory = $("memory");
	var lblTrust = $("trust");
	var lblClipmakerRate = $("clipmakerRate");
	var lblAutoClippers = $("clipmakerLevel2");
	var lblAutoClipperCost = $("clipperCost");
	var lblWireCost = $("wireCost");
	var lblOperations = $("operations");
	var lblMaxOps = $("maxOps");
	var lblNewTourneyCost = $("newTourneyCost");
	var lblMegaClippers = $("megaClipperLevel");
	var lblMegaClipperCost = $("megaClipperCost");
	var lblMarketingCost = $("adCost");
	var lblCreativity = $("creativity");
	var lblInvestmentCash = $("investmentBankroll");
	var lblInvestmentTotal = $("portValue");
	var lblInvestmentLevel = $("investmentLevel");
	var lblClips = $("clips");
	var lblStoredPower = $("storedPower");
	var lblYomi = $("yomiDisplay");
	var riskPicker = $("investStrat");
	var strategyPicker = $("stratPicker");
	var tourneyEngine = $("strategyEngine");
	var lblStock1Total = $("stock1Total");
	var lblStock1Name = $("stock1Symbol");
	var lblStock2Name = $("stock2Symbol");
	var lblStock3Name = $("stock3Symbol");
	var lblStock4Name = $("stock4Symbol");
	var lblStock5Name = $("stock5Symbol");

	//Phase2
	var lblUnusedClips = $("unusedClipsDisplay");
	var lblAvailableMatter = $("availableMatterDisplay");
	var lblAcquiredMatter = $("acquiredMatterDisplay");
	var lblNanoWire = $("nanoWire");
	var lblClipFactoryCount = $("factoryLevelDisplay");
	var lblHarvesterDroneCount = $("harvesterLevelDisplay");
	var lblWireDroneCount = $("wireDroneLevelDisplay");
	var lblSolarFarmCount = $("farmLevel");
	var lblBatteryTowerCount = $("batteryLevel");
	var lblDisassembleFactoryIncome = $("factoryRebootToolTip");
	var lblDisassembleHarvesterDronesIncome = $("harvesterRebootToolTip");
	var lblDisassembleWireDronesIncome = $("wireDroneRebootToolTip");
	var lblDisassembleSolarFarmsIncome = $("farmRebootToolTip");
	var btnMakeClipFactory = $("btnMakeFactory");
	var btnMakeHarvesterDrone = $("btnMakeHarvester");
	var btnMakeHarvesterDrone10 = $("btnHarvesterx10");
	var btnMakeHarvesterDrone100 = $("btnHarvesterx100");
	var btnMakeHarvesterDrone1000 = $("btnHarvesterx1000");
	var btnMakeWireDrone = $("btnMakeWireDrone");
	var btnMakeWireDrone10 = $("btnWireDronex10");
	var btnMakeWireDrone100 = $("btnWireDronex100");
	var btnMakeWireDrone1000 = $("btnWireDronex1000");
	var btnMakeSolarFarm = $("btnMakeFarm");
	var btnMakeSolarFarm10 = $("btnFarmx10");
	var btnMakeSolarFarm100 = $("btnFarmx100");

	var btnDisassembleClipFactories = $("btnFactoryReboot");
	var btnDisassembleHarvesterDrones = $("btnHarvesterReboot");
	var btnDisassembleWireDrones = $("btnWireDroneReboot");
	var btnDisassembleSolarFarms = $("btnFarmReboot");

	var btnMakeBatteryTower = $("btnMakeBattery");
	var btnMakeBatteryTower10 = $("btnBatteryx10");
	var btnMakeBatteryTower100 = $("btnBatteryx100");
	var thinkWorkSlider = $("slider");
	var lblSwarmGifts = $("swarmGifts");
	var lblGiftCountdown = $("giftCountdown");

	//Phase 3:
	var btnLaunchProbe = $("btnMakeProbe");
	var lblProbesLaunched = $("probesLaunchedDisplay");
	var btnLowerProbeSpeed = $("btnLowerProbeSpeed");
	var btnLowerProbeExploration = $("btnLowerProbeNav");
	var btnLowerProbeReplication = $("btnLowerProbeRep");
	var btnLowerProbeHazardRemediation = $("btnLowerProbeHaz");
	var btnLowerProbeFactoryProduction = $("btnLowerProbeFac");
	var btnLowerProbeHarvesterDroneProduction = $("btnLowerProbeHarv");
	var btnLowerProbeWireDroneProduction = $("btnLowerProbeWire");
	var btnLowerProbeCombat = $("btnLowerProbeCombat");
	var btnRaiseProbeSpeed = $("btnRaiseProbeSpeed");
	var btnRaiseProbeExploration = $("btnRaiseProbeNav");
	var btnRaiseProbeReplication = $("btnRaiseProbeRep");
	var btnRaiseProbeHazardRemediation = $("btnRaiseProbeHaz");
	var btnRaiseProbeFactoryProduction = $("btnRaiseProbeFac");
	var btnRaiseProbeHarvesterDroneProduction = $("btnRaiseProbeHarv");
	var btnRaiseProbeWireDroneProduction = $("btnRaiseProbeWire");
	var btnRaiseProbeCombat = $("btnRaiseProbeCombat");
	var btnIncreaseProbeTrust = $("btnIncreaseProbeTrust");
	var btnIncreaseMaxTrust = $("btnIncreaseMaxTrust");

	var lblProbeTrust = $("probeTrustDisplay");
	var lblProbeTrustUsed = $("probeTrustUsedDisplay");
	var lblProbeTrustMax = $("maxTrustDisplay");
	var lblProbeSpeed = $("probeSpeedDisplay");
	var lblProbeExploration = $("probeNavDisplay");
	var lblProbeReplication = $("probeRepDisplay");
	var lblProbeHazardRemediation = $("probeHazDisplay");
	var lblProbeFactoryProduction = $("probeFacDisplay");
	var lblProbeHarvesterDroneProduction = $("probeHarvDisplay");
	var lblProbeWireDroneProduction = $("probeWireDisplay");
	var lblProbeCombat = $("probeCombatDisplay");
	var lblPercentExplored = $("colonizedDisplay");

	var lblTotalProbes = $("probesTotalDisplay");

	var lblProbeTrustCost = $("probeTrustCostDisplay");

	var divCombatButtons = $("combatButtonDiv");

	var projects = {};
	projects.autoclippers1 = createProject("projectButton1", "Autoclippers + 25%", { ops: 750 }, "pre: 1 autoclipper"); //OK
	projects.begWire = createProject("projectButton2", "Get more wire", { trust: 1 }, "pre: no clips, no money"); //OK
	projects.creativity = createProject("projectButton3", "Use idle-time for creativity", { ops: 1000 }, "pre: full ops"); //OK
	projects.autoclippers2 = createProject("projectButton4", "Autoclippers + 50%", { ops: 2500 }, "pre: autoclippers1"); //OK
	projects.autoclippers3 = createProject("projectButton5", "Autoclippers + 75%", { ops: 5000 }, "pre: autoclippers2"); //OK
	projects.trust1 = createProject("projectButton6", "Limerick (trust + 1)", { creat: 10 }, "pre: creativity"); //OK
	projects.wireExtrusion1 = createProject("projectButton7", "50% more wire from each spool", { ops: 1750 }, "pre: bought wire"); //OK
	projects.wireExtrusion2 = createProject("projectButton8", "75% more wire from each spool", { ops: 3500 }, "pre: > 1.500 wire supply"); //OK
	projects.wireExtrusion3 = createProject("projectButton9", "100% more wire from each spool", { ops: 7500 }, "pre: > 2.600 wire supply"); //OK
	projects.wireExtrusion4 = createProject("projectButton10", "200% more wire from each spool", { ops: 12 * 1000 }, "pre: > 5.000 wire supply"); //OK
	projects.wireExtrusion5 = createProject("projectButton10b", "10.000% more wire from each spool", { ops: 15 * 1000 }, "pre: > 125 wire cost"); //OK
	projects.marketing1 = createProject("projectButton11", "Marketing + 50% (New slogan)", { creat: 25, ops: 2500 }, "pre: trust2"); //OK
	projects.marketing2 = createProject("projectButton12", "Marketing x 2 (Catchy Jingle)", { creat: 45, ops: 4500 }, "pre: trust3"); //OK
	projects.trust2 = createProject("projectButton13", "Lexical Processing (trust + 1)", { creat: 50 }, "pre: 50 creat"); //OK
	projects.trust3 = createProject("projectButton14", "Combinatory Harmonics (trust + 1)", { creat: 100 }, "pre: 100 creat"); //OK
	projects.trust4 = createProject("projectButton15", "The Hadwiger Problem (trust + 1)", { creat: 150 }, "pre: 150 creat"); //OK
	projects.autoclippers4 = createProject("projectButton16", "Autoclippers + 500%", { ops: 6000 }, "pre: prjTrust4"); //OK
	projects.trust5 = createProject("projectButton17", "The T\xF3th Sausage Conjecture (trust + 1)", { creat: 200 }, "pre: 200 creat"); //OK
	projects.initPhase2 = createProject("projectButton18", "Mandatory at the start of phase 2", { ops: 45 * 1000 }, "pre: phase2 && prjTrust5"); //OK
	//18 gibt es nicht
	projects.trust6 = createProject("projectButton19", "Donkey Space (trust + 1)", { creat: 250 }, "pre 250 creat"); //OK
	projects.strategicModeling = createProject("projectButton20", "strategicModeling", { ops: 12 * 1000 }, "pre: prjTrust6"); //OK
	projects.algorithmicTrading = createProject("projectButton21", "algorithmic trading", { ops: 10 * 1000 }, "pre: trust >= 8"); //OK
	projects.megaClippers1 = createProject("projectButton22", "invent megaclippers", { ops: 12 * 1000 }, "pre: 75 autoclippers"); //OK
	projects.megaClippers2 = createProject("projectButton23", "megaclippers + 25%", { ops: 14 * 1000 }, "pre: megaclippers1"); //OK
	projects.megaClippers3 = createProject("projectButton24", "megaclippers + 50%", { ops: 17 * 1000 }, "pre: megaclippers2"); //OK
	projects.megaClippers4 = createProject("projectButton25", "megaclippers + 100%", { ops: 19500 }, "pre: megaclippers3"); //OK
	projects.wireBuyer = createProject("projectButton26", "Auto-buy wire", { ops: 7000 }, "pre: >15 times bought wire"); //OK
	projects.trust7 = createProject("projectButton27", "Coherent Extrapolated Volition (trust + 1)", { creat: 500, yomi: 3000, ops: 20 * 1000 }, "pre: yomi > 1"); //OK
	projects.trust8 = createProject("projectButton28", "Cancer (trust + 10)", { ops: 25 * 1000 }, "pre: prjTrust7"); //OK
	projects.trust9 = createProject("projectButton29", "World peace (trust + 12)", { ops: 30 * 1000, yomi: 15 * 1000 }, "pre: prjTrust7"); //OK
	projects.trust10 = createProject("projectButton30", "Global warming (trust + 15)", { ops: 50 * 1000, yomi: 4500 }, "pre: prjTrust7"); //OK
	projects.trust11 = createProject("projectButton31", "Male baldness, (trust + 20)", { ops: 20 * 1000 }, "pre: prjTrust7"); //OK
	//32,33 gibt es nicht.
	projects.marketing3 = createProject("projectButton34", "HypnoHarmonics, Marketing x 5", { ops: 7.500, trust: 1 }, "pre: marketing2"); //OK
	projects.releaseHypnoDrones = createProject("projectButton35", "Release HypnoDrones", { trust: 100 }, "pre: prjHypnoDrones"); //OK
	//36 gibt es nicht
	projects.hostileTakeover = createProject("projectButton37", "Hostile Takeover, demand x 5, trust + 1", { funds: 1 * 1000 * 1000 * 100 }, "pre: totalFunds >= 10.000"); //OK
	projects.fullMonopoly = createProject("projectButton38", "Full Monopoly, demand x 10, trust + 1", { funds: 10 * 1000 * 1000 * 100, yomi: 3000 }, "pre: hostileTakeover"); //OK
	//39 gibt es nicht
	projects.goodwill1 = createProject("projectButton40", "trust + 1", { funds: 500 * 1000 * 100 }, "pre: trust >= 85 && totalClips >= 101.000.000"); //OK
	projects.goodwill2 = createProject("projectButton40b", "trust + 1", { funds: 1000 * 1000 * 100 }, "pre: goodwill1"); //OK
	projects.goodwill3 = createProject("projectButton40b", "trust + 1", { funds: 2 * 1000 * 1000 * 100 }, "pre: goodwill2"); //OK
	projects.goodwill4 = createProject("projectButton40b", "trust + 1", { funds: 4 * 1000 * 1000 * 100 }, "pre: goodwill3"); //OK
	projects.goodwill5 = createProject("projectButton40b", "trust + 1", { funds: 8 * 1000 * 1000 * 100 }, "pre: goodwill4"); //OK
	projects.goodwill6 = createProject("projectButton40b", "trust + 1", { funds: 16 * 1000 * 1000 * 100 }, "pre: goodwill5"); //OK
	projects.goodwill7 = createProject("projectButton40b", "trust + 1", { funds: 32 * 1000 * 1000 * 100 }, "pre: goodwill6"); //OK
	projects.goodwill8 = createProject("projectButton40b", "trust + 1", { funds: 64 * 1000 * 1000 * 100 }, "pre: goodwill7"); //OK
	projects.goodwill9 = createProject("projectButton40b", "trust + 1", { funds: 128 * 1000 * 1000 * 100 }, "pre: goodwill8"); //OK
	projects.goodwill10 = createProject("projectButton40b", "trust + 1", { funds: 256 * 1000 * 1000 * 100 }, "pre: goodwill9"); //OK
	projects.goodwill11 = createProject("projectButton40b", "trust + 1", { funds: 512 * 1000 * 1000 * 100 }, "pre: goodwill10"); //OK

	projects.nanoscaleWire = createProject("projectButton41", "Mandatory", { ops: 35 * 1000 }, "pre: prjTrust7"); //OK
	projects.revTracker = createProject("projectButton42", "Shows average revenue per second", { ops: 500 }, "pre: nothing"); //OK
	projects.harvesterDrones1 = createProject("projectButton43", "Invent", { ops: 25 * 1000 }, "pre: prjNanoscaleWire"); //OK
	projects.wireDrones1 = createProject("projectButton44", "Invent", { ops: 25 * 1000 }, "pre: prjNanoscaleWire"); //OK
	projects.clipFactories1 = createProject("projectButton45", "Invent", { ops: 35 * 1000 }, "pre: prjHarvesterDrones1 && prjWireDrones1"); //OK

	projects.spaceExploration = createProject("projectButton46", "Trigger phase 3", { ops: 120 * 1000, mwSeconds: 10 * 1000 * 1000, clips: 5 * Math.pow(10, 27) }, "pre: no matter left"); //OK
	//47-49 gibt es nicht.
	projects.quantum = createProject("projectButton50", "Quantum computing", { ops: 10 * 1000 }, "pre: >= 5 processors"); //OK
	projects.chip1 = createProject("projectButton51", "Photonic chip 1", { ops: 10 * 1000 }, "pre: quantum"); //OK
	projects.chip2 = createProject("projectButton51", "Photonic chip 2", { ops: 15 * 1000 }, "pre: chip1"); //OK
	projects.chip3 = createProject("projectButton51", "Photonic chip 3", { ops: 20 * 1000 }, "pre: chip2"); //OK
	projects.chip4 = createProject("projectButton51", "Photonic chip 4", { ops: 25 * 1000 }, "pre: chip3"); //OK
	projects.chip5 = createProject("projectButton51", "Photonic chip 5", { ops: 30 * 1000 }, "pre: chip4"); //OK
	projects.chip6 = createProject("projectButton51", "Photonic chip 6", { ops: 35 * 1000 }, "pre: chip5"); //OK
	projects.chip7 = createProject("projectButton51", "Photonic chip 7", { ops: 40 * 1000 }, "pre: chip6"); //OK
	projects.chip8 = createProject("projectButton51", "Photonic chip 8", { ops: 45 * 1000 }, "pre: chip7"); //OK
	projects.chip9 = createProject("projectButton51", "Photonic chip 9", { ops: 50 * 1000 }, "pre: chip8"); //OK
	projects.chip10 = createProject("projectButton51", "Photonic chip 10", { ops: 55 * 1000 }, "pre: chip9"); //OK

	//51: Photonic chips
	projects.stratA100 = createProject("projectButton60", "Strategy A100", { ops: 15 * 1000 }, "pre: strategic modeling"); //OK
	projects.stratB100 = createProject("projectButton61", "Strategy B100", { ops: 17 * 1000 }, "pre: A100"); //OK
	projects.stratGreedy = createProject("projectButton62", "Strategy Greedy", { ops: 20 * 1000 }, "pre: B100"); //OK
	projects.stratGenerous = createProject("projectButton63", "Strategy Generous", { ops: 22500 }, "pre: Greedy"); //OK
	projects.stratMinimax = createProject("projectButton64", "Strategy Minimax", { ops: 25 * 1000 }, "pre: Greedy"); //OK
	projects.stratTitForTat = createProject("projectButton65", "Strategy Tit for tat", { ops: 30 * 1000 }, "pre: Minimax"); //OK
	projects.stratBeatLast = createProject("projectButton66", "Strategy Beat last", { ops: 13500 }, "pre: TitForTat"); //OK
	projects.hypnoDrones = createProject("projectButton70", "Get hypno-drones", { ops: 70 * 1000 }, "pre: prjMarketing3"); //OK

	projects.clipFactories2 = createProject("projectButton100", "Factory * 100", { ops: 80 * 1000 }, "pre: 10 factories"); //OK
	projects.clipFactories3 = createProject("projectButton101", "Factory * 1000", { ops: 85 * 1000 }, "pre: 20 factories"); //OK
	projects.clipFactories4 = createProject("projectButton102", "Exponential factories", { clips: Math.pow(10, 21) }, "pre: 50 factories"); //OK
	projects.drones2 = createProject("projectButton110", "all drones * 100", { ops: 80 * 1000 }, "pre: 500 drones total"); //OK
	projects.drones3 = createProject("projectButton111", "all drones * 1000", { ops: 100 * 1000 }, "pre: 5.000 drones total"); //OK
	projects.drones4 = createProject("projectButton112", "Exponential drones", { yomi: 50 * 1000 }, "pre: 50.000 drones total"); //OK
	projects.autoTourney = createProject("projectButton118", "Auto tournament", { creat: 50 * 1000 }, "pre: 90 trust, strategicModeling");
	projects.doubleTourney = createProject("projectButton119", "double cost and effectiveness of strategicModeling", { creat: 25 * 1000 }, "pre: all strats"); //OK

	projects.combat2 = createProject("projectButton120", "better combat", { ops: 175 * 1000, yomi: 45 * 1000 }, "pre: project131, 10M probes lost in combat"); //OK
	projects.nameTheBattles = createProject("projectButton121", "named battles -> get honour", { creat: 225 * 1000 }, "pre: 10M probes lost in combat");
	projects.momentum = createProject("projectButton125", "momentum", { creat: 20 * 1000 }, "pre: 30 powerFarms"); // OK
	projects.swarmComputing = createProject("projectButton126", "more gifts", { yomi: 36 * 1000 }, "pre: 200 drones"); //OK
	projects.powerGrid1 = createProject("projectButton127", "Invent (mandatory at the beginning of phase 2)", { ops: 40 * 1000 }, "pre: initPhase2"); //OK
	projects.strategicAttachment = createProject("projectButton128", "Bonus for picked strategy", { creat: 175 * 1000 }, "pre: space, all strats, not enough yomi to increase trust");
	projects.probeProtection = createProject("projectButton129", "Elliptic Hull Polyopes (better hazard-protection)", { ops: 125 * 1000 }, "pre: 100 drones lost to hazards"); //OK
	projects.rebootSwarm = createProject("projectButton130", "Reboots the swarm", { ops: 100 * 1000 }, "pre: space, 2 drones");
	projects.combat = createProject("projectButton131", "Invent", { ops: 150 * 1000 }, "pre: lost one probe in combat"); //OK
	projects.honor1 = createProject("projectButton132", "Get 50k honour", { ops: 250 * 1000, creat: 125 * 1000, clips: 50 * Math.pow(10, 30) }, "pre: nameTheBattles");

	projects.honor2 = createProject("projectButton133", "Get 10k honour", { creat: 50 * 1000, yomi: 20 * 1000 }, "pre: honor1");
	projects.honor3 = createProject("projectButton133", "Get 10k honour", { creat: 60 * 1000, yomi: 24 * 1000 }, "pre: honor2");
	projects.honor4 = createProject("projectButton133", "Get 10k honour", { creat: 70 * 1000, yomi: 28 * 1000 }, "pre: honor3");
	projects.honor5 = createProject("projectButton133", "Get 10k honour", { creat: 80 * 1000, yomi: 32 * 1000 }, "pre: honor4");
	projects.honor6 = createProject("projectButton133", "Get 10k honour", { creat: 90 * 1000, yomi: 36 * 1000 }, "pre: honor5");
	projects.honor7 = createProject("projectButton133", "Get 10k honour", { creat: 100 * 1000, yomi: 40 * 1000 }, "pre: honor6");
	projects.honor8 = createProject("projectButton133", "Get 10k honour", { creat: 110 * 1000, yomi: 44 * 1000 }, "pre: honor7");
	projects.honor9 = createProject("projectButton133", "Get 10k honour", { creat: 120 * 1000, yomi: 48 * 1000 }, "pre: honor8");

	//133: Multiple more gains of honour
	projects.consecutiveVictory = createProject("projectButton134", "Bonus for consecutive victories", { ops: 200 * 1000, yomi: 30 * 1000 }, "pre: nameTheBattles");
	//135: dismantle memory
	//140, 141, 142, 143, 144, 145, 146, 147, 148, 200, 201, 210, 211, 212, 213, 214, 215, 216, 217: final words
	//218: limerick without effect for 1.000.000 creat
	//219: re-allocate the trust while human.

	//ops für honor: max 250 für honor1
	//creativity für honor: 225k (name the battles), 125k für honor1 (50k honor), 50k für honor2 (10k honor), 60k für honor3 (10k honor), 70k für honor4 (10k honor), 80k für honor5 (10k honor)
	//creativity gesamt: 610k
	//yomi gesamt: 45k combat2, (50+60+70+80)*2/5 = 104k -> 149k yomi


	//Weiter bei projekt 121

	var projectsByBtnId = {};
	var projectsByName = {};
	for (var prjName in projects) {
		if (projects.hasOwnProperty(prjName)) {
			var prj = projects[prjName];
			prj.name = prjName;
			projectsByName[prj.name] = prj;
			projectsByBtnId[prj.btnId] = prj;
		}
	}

	var engineState = {};
	function getCurrentPrice() {
		return readMoney(lblPrice.innerText);
	}

	function getWireCount() {
		return readNumber(lblWireCount.innerText);
	}

	function getMarketingLevel() {
		return readNumber(lblMarketingLevel.innerText);
	}

	function getUnsoldClips() {
		return readNumber(lblUnsoldClips.innerText);
	}

	function getFunds() {
		return readMoney(lblFunds.innerText);
	}

	function getProcessors() {
		return readNumber(lblProcessors.innerText);
	}

	function getMemory() {
		return readNumber(lblMemory.innerText);
	}

	function getTrust() {
		return readNumber(lblTrust.innerText);
	}

	function getClipmakerRate() {
		return readNumber(lblClipmakerRate.innerText);
	}

	function getAutoClippers() {
		return readNumber(lblAutoClippers.innerText);
	}

	function getAutoClipperCost() {
		return readMoney(lblAutoClipperCost.innerText);
	}

	function getWireCost() {
		return readMoney(lblWireCost.innerText);
	}

	function getOperations() {
		return readNumber(lblOperations.innerText);
	}

	function getMaxOps() {
		return readNumber(lblMaxOps.innerText);
	}

	function getNewTourneyCost() {
		return readNumber(lblNewTourneyCost.innerText);
	}

	function getMegaClippers() {
		return readNumber(lblMegaClippers.innerText);
	}
	function getMegaClipperCost() {
		return readMoney(lblMegaClipperCost.innerText);
	}
	function getMarketingCost() {
		return readMoney(lblMarketingCost.innerText);
	}

	function getCreativity() {
		return readNumber(lblCreativity.innerText);
	}

	function getInvestmentTotal() {
		return readMoney(lblInvestmentTotal.innerText);
	}

	function getInvestmentCash() {
		return readMoney(lblInvestmentCash.innerText);
	}

	function getInvestmentLevel() {
		return readNumber(lblInvestmentLevel.innerText);
	}

	function getTotalClips() {
		return readNumber(lblClips.innerText);
	}
	function getYomi() {
		return readYomi(lblYomi.innerText);
	}

	function getStock1Total() {
		return readMoney(lblStock1Total.innerText);
	}

	function getStock1Name() {
		return lblStock1Name.innerText;
	}
	function getStock2Name() {
		return lblStock2Name.innerText;
	}
	function getStock3Name() {
		return lblStock3Name.innerText;
	}
	function getStock4Name() {
		return lblStock4Name.innerText;
	}
	function getStock5Name() {
		return lblStock5Name.innerText;
	}

	function getUnusedClips() {
		return readBigNumber(lblUnusedClips.innerText);
	}
	function getAvailableMatter() {
		return readBigNumber(lblAvailableMatter.innerText);
	}
	function getAcquiredMatter() {
		return readBigNumber(lblAcquiredMatter.innerText);
	}
	function getNanoWire() {
		return readBigNumber(lblNanoWire.innerText);
	}
	function getClipFactoryCount() {
		return readBigNumber(lblClipFactoryCount.innerText);
	}
	function getHarvesterDroneCount() {
		return readBigNumber(lblHarvesterDroneCount.innerText);
	}
	function getWireDroneCount() {
		return readBigNumber(lblWireDroneCount.innerText);
	}
	function getSolarFarmCount() {
		return readNumber(lblSolarFarmCount.innerText);
	}
	function getBatteryTowerCount() {
		return readNumber(lblBatteryTowerCount.innerText);
	}
	function getSwarmGifts() {
		return readNumber(lblSwarmGifts.innerText);
	}

	function getStoredPower() {
		return readNumber(lblStoredPower.innerText);
	}

	function getDisassembleFactoryIncome() {
		return readBigNumber(lblDisassembleFactoryIncome.innerHTML);
	}
	function getDisassembleHarvesterDronesIncome() {
		return readBigNumber(lblDisassembleHarvesterDronesIncome.innerHTML);
	}
	function getDisassembleWireDronesIncome() {
		return readBigNumber(lblDisassembleWireDronesIncome.innerHTML);
	}
	function getDisassembleSolarFarmsIncome() {
		return readBigNumber(lblDisassembleSolarFarmsIncome.innerHTML);
	}

	function getProbeTrustUsed() {
		return readNumber(lblProbeTrustUsed.innerText);
	}

	function getProbeTrustMax() {
		//There is a bug that displays the maxTrust as zero if the game is played from start to end without reloading.
		return Math.max(readNumber(lblProbeTrustMax.innerText), 20);
	}

	function getProbeTrustCost() {
		return readNumber(lblProbeTrustCost.innerText);
	}

	function getProbeSpeed() {
		return readNumber(lblProbeSpeed.innerText);
	}
	function getProbeExploration() {
		return readNumber(lblProbeExploration.innerText);
	}
	function getProbeReplication() {
		return readNumber(lblProbeReplication.innerText);
	}
	function getProbeHazardRemediation() {
		return readNumber(lblProbeHazardRemediation.innerText);
	}
	function getProbeFactoryProduction() {
		return readNumber(lblProbeFactoryProduction.innerText);
	}
	function getProbeHarvesterDroneProduction() {
		return readNumber(lblProbeHarvesterDroneProduction.innerText);
	}
	function getProbeWireDroneProduction() {
		return readNumber(lblProbeWireDroneProduction.innerText);
	}
	function getProbeCombat() {
		return readNumber(lblProbeCombat.innerText);
	}

	function getProbeTrust() {
		return readNumber(lblProbeTrust.innerText);
	}
	function getProbesLaunched() {
		return readNumber(lblProbesLaunched.innerText);
	}

	function getTotalProbes() {
		return readBigNumber(lblTotalProbes.innerText);
	}

	function getPercentExplored() {
		return readNumber(lblPercentExplored.innerText);
	}

	function getGiftSeconds() {
		var s = lblGiftCountdown.innerText;
		if (s.trim() == "Infinity hours") {
			return null;
		} else if (s.trim() == "") {
			return 0;
		} else {
			var m = s.match(/^((\d+) hours?)? ?((\d+) minutes?)? ?((\d+) seconds?)?$/);
			if (m == null) {
				throw new Error("Could not parse giftSeconds");
			} else {
				var seconds = 0;
				if (m[2] != null) {
					seconds += 3600 * parseInt(m[2], 10);
				}
				if (m[4] != null) {
					seconds += 60 * parseInt(m[4], 10);
				}
				if (m[6] != null) {
					seconds += parseInt(m[6], 10);
				}
				return seconds;
			}
		}
	}

	function setPrice(cents) {
		var current = getCurrentPrice();
		while (current > cents) {
			click(btnLowerPrice);
			current--;
		}
		while (current < cents) {
			click(btnRaisePrice);
			current++;
		}
	}

	function readMoney(s) {
		return parseFloat(s.replace(/,/g, "")) * 100;
	}
	function readNumber(s) {
		return parseInt(s.replace(/,/g, ""));
	}
	function readYomi(s) {
		//There is a bug in a project that makes yomi appear with a grouping-dot (e.g. 318.023 instead of 318,023)
		//Since yomi never has a decimal-place, it can always be ignored.
		return parseInt(s.replace(/[,\.]/g, ""));
	}
	var factors = {
		sexdecillion: 1000000000000000000000000000000000000000000000000000,
		quindecillion: 1000000000000000000000000000000000000000000000000,
		quattuordecillion: 1000000000000000000000000000000000000000000000,
		tredecillion: 1000000000000000000000000000000000000000000,
		duodecillion: 1000000000000000000000000000000000000000,
		undecillion: 1000000000000000000000000000000000000,
		decillion: 1000000000000000000000000000000000,
		nonillion: 1000000000000000000000000000000,
		octillion: 1000000000000000000000000000,
		septillion: 1000000000000000000000000,
		sextillion: 1000000000000000000000,
		quintillion: 1000000000000000000,
		quadrillion: 1000000000000000,
		trillion: 1000000000000,
		billion: 1000000000,
		million: 1000000,
		thousand: 1000
	};
	function readBigNumber(s) {
		var parts = s.split(" ");
		var value = parseFloat(parts[0].replace(/,/g, ""))
		if (parts.length > 1 && parts[1] != "") {
			value *= factors[parts[1]];
		}
		return value;
	}

	engineState.currentPhase = 1;
	engineState.gameTime = {
		timeBefore: 0,
		currentStart: new Date().getTime()
	};

	var logEntries = [];

	function logSavegame(name) {
		save();
		var now = new Date().getTime();
		engineState.gameTime.timeBefore += now - engineState.gameTime.currentStart;
		engineState.gameTime.currentStart = now;
		var assistantStates = {};
		for (var key in assistants) {
			if (assistants.hasOwnProperty(key)) {
				assistantStates[key] = assistants[key].isRunning;
			}
		}

		var guiState = {
			riskPicker: riskPicker.value,
			strategyPicker: strategyPicker.value,
			thinkWorkSlider: thinkWorkSlider.value
		};

		var game = {
			engineState: engineState,
			assistantStates: assistantStates,
			guiState: guiState,
			saveGame: localStorage.getItem("saveGame"),
			saveProjectsUses: localStorage.getItem("saveProjectsUses"),
			saveProjectsFlags: localStorage.getItem("saveProjectsFlags"),
			saveProjectsActive: localStorage.getItem("saveProjectsActive"),
			saveStratsActive: localStorage.getItem("saveStratsActive"),
		};
		var savegame = "\tvar " + name + " = \"" + JSON.stringify(game).replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/'/g, "\\\'") + "\";"
		logEntries.push(savegame);
		console.log(savegame);
	}

	function loadGame(s) {
		//Get the engine-state:
		var game = JSON.parse(s);
		var guiState = game.guiState;
		var engineStateLoaded = game.engineState;
		var assistantStates = game.assistantStates;
		delete game.assistantStates;
		delete game.engineState;
		delete game.guiState;
		for (var key in engineState) {
			if (engineState.hasOwnProperty(key)) {
				//A "normal" property
				var loaded = engineStateLoaded[key];
				var current = engineState[key];
				if (typeof current != "object" || key === "flags" || key === "tasks") {
					if (engineStateLoaded.hasOwnProperty(key)) {
						engineState[key] = loaded;
					}
				} else {
					if (typeof loaded == "object") {
						//Both properties are objects. The properties of those are copied as well down to a level of 2
						for (var key2 in current) {
							if (current.hasOwnProperty(key2) && loaded.hasOwnProperty(key2)) {
								current[key2] = loaded[key2];
							}
						}
					} //else: better ignore the incompatible value...
				}
			}
		}


		engineState.gameTime.currentStart = new Date().getTime();

		//The project-list is not reset properly.
		var prjList = $("projectListTop");
		while (prjList.firstChild) {
			prjList.removeChild(prjList.firstChild);
		}
		for (var key in game) {
			if (game.hasOwnProperty(key)) {
				if (key == "saveProjectsActive") {
					var value = JSON.parse(game[key]);
					var newValues = [];
					for (var i = 0; i < value.length; i++) {
						var btnId = value[i];
						if (btnId == "projectButton51") {
							//Chips get a special treatment.
							if (!projectActivated(projects.chip10)) {
								if (!newValues.includes(value[i])) {
									newValues.push(value[i]);
								}
							}
						} else if (btnId == "projectButton40b") {
							if (!projectActivated(projects.goodwill11)) {
								if (!newValues.includes(value[i])) {
									newValues.push(value[i]);
								}
							}
						} else {
							var prj = projectsByBtnId[btnId];
							if (prj != null && !projectActivated(prj)) {
								if (!newValues.includes(value[i])) {
									newValues.push(value[i]);
								}
							}
						}
					}
					localStorage.setItem("saveProjectsActive", JSON.stringify(newValues));
				} else {
					localStorage.setItem(key, game[key]);
				}
			}
		}
		strategyPicker.options.length = 2; //The strategies in the dropdown will be filled in "load"
		strats.length = 1;
		load();
		//Bug: Sometimes, there all strategies exist twice.
		if (strategyPicker.options.length > 9) {
			strategyPicker.options.length = 9;
		}
		if (strats.length > 8) {
			strats.length = 8;
		}

		if (guiState != null) {
			riskPicker.value = guiState.riskPicker;
			strategyPicker.value = guiState.strategyPicker;
			thinkWorkSlider.value = guiState.thinkWorkSlider;
		}

		for (var goal in engineState.goalsReached) {
			if (engineState.goalsReached.hasOwnProperty(goal)) {
				if (engineState.goalsReached[goal]) {
					$(goal).innerText = toTimeString(engineState.goalsReached[goal]).substr(0, 7);
				}
			}
		}


		//start the necessary assistants
		window.setTimeout(function () {
			for (var assKey in assistants) {
				if (assistants.hasOwnProperty(assKey) && assistantStates[assKey]) {
					assistants[assKey].start();
				}
			}
		}, 0);
	}

	var assistants = {};

	assistants.fireClips = createAssistant("Autofire paperclip", false, 3, function () {
		if (!btnMakePaperclip.disabled) {
			click(btnMakePaperclip);
		}
	});

	var computingTargets = [
		{ processors: 3 },
		{ memory: 2 },
		{ processors: 5 },
		{ memory: 10 },
		{ processors: 37 },
		{ memory: 21 },
		{ processors: 52 },
		{ memory: 65 },
		{ processors: 105 },
		{ memory: 125 },
		{ processors: 300 },
		{ memory: 200 },
		{ processors: 5000 }
	];

	assistants.computingTargets = createAssistant("Use all trust", false, 100, function () {
		if (!btnAddProc.disabled) {
			var processors = getProcessors();
			var memory = getMemory();
			var unassigned = projectActivated(projects.releaseHypnoDrones) ? getSwarmGifts() : (getTrust() - processors - memory);
			while (unassigned > 0) {
				if (computingTargets.length == 0) {
					logSavegame("computingTargetsMissing");
					throw new Error("Please provide more computing targets.");
				} else {
					var nextTarget = computingTargets[0];
					if (nextTarget.processors != null) {
						if (processors >= nextTarget.processors) {
							computingTargets.shift();
						} else {
							click(btnAddProc);
							processors++;
							unassigned--;
						}
					} else if (nextTarget.memory != null) {
						if (memory >= nextTarget.memory) {
							computingTargets.shift();
						} else {
							click(btnAddMem);
							memory++;
							unassigned--;
						}
					} else {
						throw new Error("Unexpected target.");
					}
				}
			}
		}
	});

	engineState.assActivateProjects = {
		projectsActivated: {},
		functionsPassed: {},
		savegamesLogged: {}
	};

	function projectActivated(prj) {
		return engineState.assActivateProjects.projectsActivated[prj.name] != null;
	}

	var projectChains = null;
	assistants.projectTargets = createAssistant("Auto-activate projects", false, 100, function () {
		if (projectChains == null) {
			//Not yet initialized...
			return;
		}
		var state = engineState.assActivateProjects;
		var toActivate = state.projectsToActivate;
		var chainIndex = 0;
		var changed = true;
		while (changed) {
			changed = false;
			while (chainIndex < projectChains.length) {
				var chain = projectChains[chainIndex];
				var chainResult = processChain(chain);
				if (chain.length == 0) {
					changed = true;
					projectChains.splice(chainIndex, 1);
				} else {
					chainIndex++;
				}
				if (chainResult.projectActivated) {
					return;
				}
				changed = changed | chainResult.changed;
			}
		}

		function processChain(chain) {
			var changedAnything = false;
			var changed = true;
			while (changed && chain.length > 0) {
				var first = chain[0];
				changed = false;
				switch (first.cmd) {
					case "activate":
						var projectWasActivated = processActivations(first.activationDetails);
						if (first.activationDetails.length == 0) {
							chain.shift();
							changed = true;
						}
						if (projectWasActivated) {
							return { projectActivated: true }
						}
						break;
					case "waitForProject":
						if (projectActivated(first.prj)) {
							chain.shift();
							changed = true;
						}
						break;
					case "waitForFunction":
						if (state.functionsPassed[first.functionId] || first.f()) {
							state.functionsPassed[first.functionId] = true;
							chain.shift();
							changed = true;
						}
						break;
					case "setFlag":
						if (!isFlagSet(first.flag)) {
							setFlag(first.flag);
						}
						chain.shift();
						changed = true;
						break;
					case "waitForFlag":
						if (isFlagSet(first.flag)) {
							chain.shift();
							changed = true;
						}
						break;
					case "logSavegame":
						if (!state.savegamesLogged[first.name]) {
							state.savegamesLogged[first.name] = true;
							log("Logging savegame: " + first.name);
							logSavegame(first.name);
						}
						chain.shift();
						changed = true;
						break;
					default:
						throw new Error("Unexpected command: " + first.cmd);
				}
				changedAnything = changedAnything || changed;
			}
			return { projectActivated: false, changed: changedAnything };
		}

		function processActivations(activationDetails) {
			var i = 0;
			while (i < activationDetails.length) {
				var activationDetail = activationDetails[i];
				var prj = activationDetail.prj;
				if (projectActivated(prj)) {
					//projects already activated are just removed without notice.
					activationDetails.splice(i, 1);
				} else if (isFlagSet(activationDetails.skipIfFlagIsSet)) {
					//project should be skipped -> remove without any notice.
					activationDetails.splice(i, 1);
				} else {
					var btn = $(prj.btnId);
					if (btn != null && !btn.disabled && (!activationDetail.avoidOpsBelowMax || getOperations() - prj.cost.ops > getMaxOps() || engineState.assQuantum.cycleStart)) {
						log("Activating project: " + prj.name + ", " + prj.description);
						state.projectsActivated[prj.name] = getGameTimeMs();
						activationDetails.splice(i, 1);
						click(btn);
						return true;
					} else {
						i++;
					}
				}
			}
			return false;
		}
	});

	engineState.assCheapAutobuy = {
		mode: "FundRange",

		sellPrice: 4,
		stopAtPossibleFunds: 12700,
		expectedSellsPerMinute: 3100,

		stopAtWireRangeMs: 60000,

		previousPrice: 20,
		previousTrend: 1,
		latestMin: 16
	};
	assistants.cheapAutobuy = createAssistant("Cheap autobuy wire", false, 100, function () {
		var state = engineState.assCheapAutobuy;
		var cost = getWireCost();
		var justPassedMin = false;
		//Determine current trend and extreme values
		if (state.previousPrice != null && cost != state.previousPrice) {
			if (cost > state.previousPrice) {
				if (state.previousTrend === -1) {
					//The minimum has passed.
					state.latestMin = state.previousPrice;
					justPassedMin = true;
				}
				state.previousPrice = cost;
				state.previousTrend = 1;
			} else { //cost < previousPrice
				state.previousPrice = cost;
				state.previousTrend = -1;
			}
		}
		if (!btnBuyWire.disabled) {
			var wire = getWireCount();
			if (wire > 0 && btnMakePaperclip.disabled) {
				//Sometimes, the game starts in an invalid state.
				//Clicking the wire-button fixes this.
				click(btnBuyWire);
			} else if (state.mode == "FundRange") {
				var possibleFunds = getFunds() + (getWireCount() + getUnsoldClips()) * state.sellPrice;
				if (possibleFunds < state.stopAtPossibleFunds) {
					var unsoldClips = getUnsoldClips();
					var allSoldInMs = 60000 * unsoldClips / state.expectedSellsPerMinute;
					//Decide, whether to buy wire or not.
					if (allSoldInMs < 300 || cost <= (state.latestMin + 200) || (justPassedMin && allSoldInMs < 40000)) {
						click(btnBuyWire);
					}
				}
			} else if (state.mode == "WireRange") {
				var clipsPerSecond = Math.max(250, getClipmakerRate());
				var wireRangeMs = 1000 * wire / clipsPerSecond;
				if (wireRangeMs < 200 || (wireRangeMs < state.stopAtWireRangeMs && (cost <= (state.latestMin + 200) || (justPassedMin && wireRangeMs < 40000)))) {
					//Case 1: Wire is almost empty -> buy
					//Case 2: Wire is currently cheap AND there is not enough wire to reach the next cheap phase.
					click(btnBuyWire);
				}
			} else {
				throw new Error("Unknown mode: " + state.mode);
			}
		}
	});

	engineState.assWireCostChecker = {
		maxWirePrice: 2700 //Der niedrigste maxWirePrice, der möglich ist.
	};
	assistants.wireCostChecker = createAssistant("Max wire cost checker", false, 1000, function () {
		var state = engineState.assWireCostChecker;
		var currentPrice = getWireCost();
		if (currentPrice > state.maxWirePrice) {
			state.maxWirePrice = currentPrice;
		}
	});


	engineState.assBalancePriceDirect = {
		minProfitPerSecond: null,
		maxProfitPerSecond: null,
	};

	assistants.balancePriceDirect = createAssistant("BalancePriceDirect", false, 1000, function () {
		var state = engineState.assBalancePriceDirect;
		//Es wird direkt der korrekte Preis berechnet.
		//Funktioniert nur, wenn demand über 100 liegt.
		//Der echte Preis liegt ständigt etwas darunter oder darüber.
		//Die Formeln sind direkt aus dem Code.
		//Originale:
		//marketing = (Math.pow(1.1,(marketingLvl-1)));
		//demand = (((.8/margin) * marketing * marketingEffectiveness)*demandBoost);
		//if (Math.random() < (demand/100)){
		//    sellClips(Math.floor(.7 * Math.pow(demand, 1.15)));
		//    }
		//    var chanceOfPurchase = demand/100;
		//if (chanceOfPurchase > 1) {chanceOfPurchase = 1;}
		//if (unsoldClips < 1) {chanceOfPurchase = 0;}
		//avgSales = chanceOfPurchase * (.7*Math.pow(demand,1.15))*10;
		//
		//Das "sellClips" wird 10 mal pro Sekunde ausgeführt.

		var marginForStable = null;
		var marginToDecreaseStock = null;
		var marginToIncreaseStock = null;

		var marketing = Math.pow(1.1, (getMarketingLevel() - 1));
		var demandBoost = 1 * (projectActivated(projects.hostileTakeover) ? 5 : 1) * (projectActivated(projects.fullMonopoly) ? 10 : 1);
		var marketingEffectiveness = 1 * (projectActivated(projects.marketing1) ? 1.5 : 1) * (projectActivated(projects.marketing2) ? 2 : 1) * (projectActivated(projects.marketing3) ? 5 : 1);
		var clipsPerSecond = calculateClipsPerSecond();

		var price = 1;
		var demandConstant = marketing * marketingEffectiveness * demandBoost;

		while (marginToIncreaseStock == null) {
			var margin = price / 100;
			var demand = demandConstant * 0.8 / margin;
			//demand ist die angezeigte Prozentzahl / 10, also 484% sind hier 48.4.
			var sellsPerSecond = Math.min(1, demand / 100) * (.7 * Math.pow(demand, 1.15)) * 10
			if (sellsPerSecond > clipsPerSecond) {
				state.minProfitPerSecond = price * sellsPerSecond;
				marginToDecreaseStock = margin;
			} else if (sellsPerSecond == clipsPerSecond) {
				marginForStable = margin;
			} else {
				state.maxProfitPerSecond = price * sellsPerSecond;
				marginToIncreaseStock = margin;
			}
			price++;
		}

		var reserve = getUnsoldClips() / clipsPerSecond;

		var newPrice = null;
		if (reserve < 2) {
			newPrice = marginToIncreaseStock * 100;
		} else if (marginForStable != null && reserve > 2.5 && reserve < 3.5) {
			newPrice = marginForStable * 100;
		} else if (reserve > 4) {
			newPrice = marginToDecreaseStock * 100;
		}
		if (newPrice != null) {
			setPrice(Math.max(1, newPrice));
		}
	});

	engineState.assQuantum = {
		cycleStart: false,
		maxWhilePositive: 0,
		cycleStartTime: null,
		lastAllPositive: false,
	};
	assistants.autoQuantum = createAssistant("Detect quantum autofire", false, 100, function () {
		var state = engineState.assQuantum;
		var sum = 0;
		var allPositive = true;
		for (var i = 0; i < 10; i++) {
			var chip = document.getElementById("qChip" + i);
			if (chip != null) {
				var value = parseFloat(chip.style.opacity)
				allPositive = allPositive & value >= 0;
				sum += value;
			}
		}

		if (allPositive) {
			if (!state.lastAllPositive) {
				state.cycleStartTime = ticks * 10;
			}
			if (sum > state.maxWhilePositive) {
				state.cycleStart = true;
				state.maxWhilePositive = sum;
			} else if (sum > state.maxWhilePositive / 3) {
				state.cycleStart = true;
			} else {
				state.cycleStart = false;
			}
		} else {
			state.maxWhilePositive = 0;
			state.cycleStart = false;
		}

		state.lastAllPositive = allPositive;

		if (!assistants.quantumFire.isRunning && sum > 0) {
			assistants.quantumFire.start();
		}
	});

	assistants.quantumFire = createAssistant("FireQuantum", false, 3, function () {
		click(document.getElementById("btnQcompute"));
		var display = document.getElementById("qCompDisplay").innerText;
		var txt = display.replace(/^qOps: /, "").replace(/[\.,]+/, "");
		var result = parseInt(txt);
		if (result <= 0) {
			assistants.quantumFire.stop();
		}
	});

	engineState.assAutoTournament = {
		aboveMaxOnly: true
	};
	assistants.autoTournament = createAssistant("Auto-tournament", false, 100, function () {
		if (tourneyEngine.style.display != "none" && strategyPicker.options.length > 1 && (!btnNewTournament.disabled || !btnRunTournament.disabled)) {
			var ops = getOperations();
			var maxOps = getMaxOps();
			var tourneyCost = getNewTourneyCost();
			if (!engineState.assAutoTournament.aboveMaxOnly || ops >= maxOps + tourneyCost) {
				if (strategyPicker.options[0].selected) {
					//Make sure that an option is selected.
					strategyPicker.options[1].selected = true;
				}
				if (btnNewTournament != null && !btnNewTournament.disabled) {
					click(btnNewTournament);
				}
				if (btnRunTournament != null && !btnRunTournament.disabled) {
					click(btnRunTournament);
				}
			}
		}
	});

	assistants.selectBestStrategy = createAssistant("Select best strategy", false, 1000, function () {
		function findBiggestPayoff() {
			if (aa >= ab && aa >= ba && aa >= bb) {
				return 1;
			} else if (ab >= aa && ab >= ba && ab >= bb) {
				return 2;
			} else if (ba >= aa && ba >= ab && ba >= bb) {
				return 3;
			} else {
				return 4;
			}
		}
		function whatBeatsLast(myPos) {
			var oppsPos = 1;
			if (myPos == 1) {
				oppsPos = 2;
			} else {
				oppsPos = 1;
			}
			if (oppsPos == 1 && hMovePrev == 1) {
				if (aa > ba) {
					return 1;
				} else {
					return 2;
				}
			} else if (oppsPos == 1 && hMovePrev == 2) {
				if (ab > bb) {
					return 1;
				} else {
					return 2;
				}
			} else if (oppsPos == 2 && vMovePrev == 1) {
				if (aa > ba) {
					return 1;
				} else {
					return 2;
				}
			} else {
				if (ab > bb) {
					return 1;
				} else {
					return 2;
				}

			}
		}

		var hStrat = null, vStrat = null;
		var hMovePrev = 1, vMovePrev = 1;
		var stratCounter = 0;

		var h = 0, v = 0;
		function pickStrats(roundNum) {
			if (roundNum < strats.length) {
				h = 0;
				v = roundNum;
			} else {
				stratCounter++;
				if (stratCounter >= strats.length) {
					stratCounter = stratCounter - strats.length;
				}
				h = Math.floor(roundNum / strats.length);
				v = stratCounter;
			}

			vStrat = strats[v];
			hStrat = strats[h];

			strats[h].currentPos = 1;
			strats[v].currentPos = 2;
		}

		function calcPayoff(hm, vm) {
			if (hm == 1 && vm == 1) {
				strats[h].currentScore = strats[h].currentScore + aa;
				strats[v].currentScore = strats[v].currentScore + aa;
			} else if (hm == 1 && vm == 2) {
				strats[h].currentScore = strats[h].currentScore + ab;
				strats[v].currentScore = strats[v].currentScore + ba;
			} else if (hm == 2 && vm == 1) {
				strats[h].currentScore = strats[h].currentScore + ba;
				strats[v].currentScore = strats[v].currentScore + ab;
			} else if (hm == 2 && vm == 2) {
				strats[h].currentScore = strats[h].currentScore + bb;
				strats[v].currentScore = strats[v].currentScore + bb;
			}
		}

		var aa = parseInt($("aaPayoffH").innerHTML, 10);
		var ab = parseInt($("abPayoffH").innerHTML, 10);
		var ba = parseInt($("baPayoffH").innerHTML, 10);
		var bb = parseInt($("bbPayoffH").innerHTML, 10);
		var allStrats = [
			{ name: "A100", selectValue: "1", currentScore: 0, currentPos: 1, pickMove: function () { return 1; } },
			{ name: "B100", selectValue: "2", currentScore: 0, currentPos: 1, pickMove: function () { return 2; } },
			{
				name: "GREEDY", selectValue: "3", currentScore: 0, currentPos: 1, pickMove: function () {
					var x = findBiggestPayoff();
					if (x < 3) {
						return 1;
					} else {
						return 2;
					}
				}
			},
			{
				name: "GENEROUS", selectValue: "4", currentScore: 0, currentPos: 1, pickMove: function () {
					var x = findBiggestPayoff();
					if (x == 1) {
						return 1;
					} else if (x == 3) {
						return 1;
					} else {
						return 2;
					}
				}
			},
			{
				name: "MINIMAX", selectValue: "5", currentScore: 0, currentPos: 1, pickMove: function () {
					var x = findBiggestPayoff();
					if (x == 1) {
						return 2;
					} else if (x == 3) {
						return 2;
					} else {
						return 1;
					}
				}
			},
			{
				name: "TIT FOR TAT", selectValue: "6", currentScore: 0, currentPos: 1, pickMove: function () {
					if (this.currentPos == 1) {
						return vMovePrev;
					} else {
						return hMovePrev;
					}
				}
			},
			{
				name: "BEAT LAST", selectValue: "7", currentScore: 0, currentPos: 1, pickMove: function () {
					var w = whatBeatsLast(this.currentPos);
					return w;
				}
			}
		];

		var stratCount = strategyPicker.options.length - 2;
		if (stratCount > 0) {
			var strats = allStrats.slice(0, stratCount);
			for (var i = 0; i < strats.length; i++) {
				strats[i].currentScore = 0;
			}
			var rounds = strats.length * strats.length;
			for (var currentRound = 0; currentRound < rounds; currentRound++) {
				pickStrats(currentRound);
				var hMove = 0, vMove = 0;
				for (var roundCounter = 0; roundCounter < 10; roundCounter++) {
					hMovePrev = hMove;
					vMovePrev = vMove;
					hMove = hStrat.pickMove();
					vMove = vStrat.pickMove();
					calcPayoff(hMove, vMove);
				}
			}

			//Pick the winner:
			var winner = strats[0];
			for (var j = 1; j < strats.length; j++) {
				if (strats[j].currentScore > winner.currentScore) {
					winner = strats[j];
				}
			}
			strategyPicker.value = winner.selectValue;

		}
	});

	assistants.autoInvestment = createAssistant("Auto investment level", false, 500, function () {
		if (getInvestmentLevel() >= 9) {
			assistants.autoInvestment.stop();
		}
		if (!btnImproveInvestments.disabled) {
			click(btnImproveInvestments);
		}
	});


	engineState.assPhase1Rampup = {
		protectFunds: 0,
		protectCheapWireBuyer: true
	};

	var phase1RampupIsSavingUp = false;

	assistants.phase1Rampup = createAssistant("Phase 1 rampup", false, 500, function () {
		if (!assistants.wireCostChecker.isRunning) {
			console.log("Please activate the wire cost checker!");
		}
		var state = engineState.assPhase1Rampup;
		var getCount = 0;
		var funds = getFunds() - state.protectFunds; //Bei einem megaClipper wird die Anzeige sofort aktualisiert, bei einem autoClipper nicht.
		var gotSomething = true;
		while (gotSomething) {
			gotSomething = false;
			var autoClipperCost = getAutoClipperCost();
			var autoClipperCount = getAutoClippers();
			var autoClipperLevel = 1 + (projectActivated(projects.autoclippers1) ? 0.25 : 0) + (projectActivated(projects.autoclippers2) ? 0.5 : 0) + (projectActivated(projects.autoclippers3) ? 0.75 : 0) + (projectActivated(projects.autoclippers4) ? 5 : 0);
			var production = 250 + autoClipperLevel * autoClipperCount;

			if (projectActivated(projects.megaClippers1)) {
				var megaClipperCost = getMegaClipperCost();
				var megaClipperCount = getMegaClippers();
				var megaClipperLevel = 500 * (1 + (projectActivated(projects.megaClippers2) ? 0.25 : 0) + (projectActivated(projects.megaClippers3) ? 0.5 : 0) + (projectActivated(projects.megaClippers4) ? 1 : 0))
				production += megaClipperCount * megaClipperLevel;
			}

			var marketingCost = getMarketingCost();

			var toGet;
			var marketingLevel = getMarketingLevel();
			var autoClipperCount = getAutoClippers();
			//First: targets.
			if (marketingLevel < 4) {
				toGet = getBest(true);
				assert(toGet == "marketing", "Das sollte am Anfang von alleine passieren");
			} else if (autoClipperCount < 27) {
				//Hier wird eigentlich Marketing für $800 empfohlen. Das wird aber nicht mehr erreicht, bevor die AutoClipper einen Boost bekommen.
				//Mit Boost folgen auf Marketing == 4 erstmal 27 Autclipper, bevor wieder Marketing dran ist.
				//Die Anschaffung wird halt vorgezogen, da sie sowieso kommt.
				toGet = "autoClipper";
			} else if (marketingLevel < 6) {
				//Jetzt folgt eine Phase, in der eigentlich immer das Beste genommen wird.
				//Treibt man das weiter, kommt Marketing bis auf Level 11 ($ 52k), bevor die 75 Autoclipper erreicht sind.
				//Das dauert zu lange. Das marketingLevel wird also gedeckelt.
				//Betrachtung der Zeiten (mm:ss) bis 75 autoclipper, 17 Megaclipper und Marketing 10 erreicht sind, also der weitere Verlauf wieder identisch ist.
				//Marketing bis 5 -> 17:31.012
				//Marketing bis 6 -> 17:27.745
				//Marketing bis 7 -> 17:28.916
				//Marketing bis 8 -> 17:46.223
				//Marketing bis 9 -> 18:20.589
				//ABER: Die Einnahmen steigen durch die Megaclipper nicht so schnell wie erwartet.
				toGet = getBest(true);
			} else if (autoClipperCount < 75) {
				toGet = "autoClipper";
			} else if (marketingLevel < 13) {
				toGet = getBest(true);
			} else {
				toGet = getBest(false);
			}

			//Einige Berechnungen für die nötigen Puffer
			var maxWirePrice = engineState.assWireCostChecker.maxWirePrice;

			var wireCount = getWireCount();
			var wireRange = wireCount / production;
			var perfectRange = 40;
			var perfectWireCount = 40 * production;
			var wireMissing = Math.max(0, perfectWireCount - wireCount);
			var wireBuySize = 1000 * (projectActivated(projects.wireExtrusion1) ? 1.5 : 1) * (projectActivated(projects.wireExtrusion2) ? 1.75 : 1) * (projectActivated(projects.wireExtrusion3) ? 2 : 1) * (projectActivated(projects.wireExtrusion3) ? 3 : 1) * (projectActivated(projects.wireExtrusion4) ? 11 : 1);
			//Das ist die Anzahl der Käufe, die der cheapWireBuyer aktuell gerne tätigen würde. Mehr Puffer muss man auf keinen Fall übrig lassen.
			var wireBuysMissing = wireMissing / wireBuySize;

			var fullBuffer = Math.min(5, wireBuysMissing); //Mehr als 5 Wire-Buys werden einfach nicht vorgehalten. Punkt.
			//Um so mehr wire vorrätig ist, um so niedriger kann der Preis angesetzt werden (denn es wird ja billiger gekauft).
			var priceAdjust = 6 * wireRange / perfectRange;

			var stopBuying = false;
			switch (toGet) {
				case "autoClipper":
					var reserveFunds = state.protectCheapWireBuyer ? (maxWirePrice - priceAdjust) * fullBuffer : maxWirePrice;
					if (funds - reserveFunds >= autoClipperCost) {
						click(btnMakeClipper);
						//Bei einem Autoclipper wird die funds-Anzeige nicht aktualisiert.
						funds -= autoClipperCost + 1; //1 ct Rundungsfehler.
						gotSomething = true;
						getCount++;
						if (getCount > 90) {
							var i = 0;
						} else if (getCount > 100) {
							throw new Error("Got too much!");
						}
					}
					break;
				case "megaClipper":
					var reserveFunds = state.protectCheapWireBuyer ? (maxWirePrice - priceAdjust) * fullBuffer : maxWirePrice;
					if (funds - reserveFunds >= megaClipperCost) {
						click(btnMakeMegaClipper);
						funds = getFunds() - state.protectFunds;
						gotSomething = true;
						getCount++;
						if (getCount > 90) {
							var i = 0;
						} else if (getCount > 100) {
							throw new Error("Got too much!");
						}
					}

					break;
				case "marketing":
					//Für Marketing-Erhöhungen muss nicht so viel Geld gepuffert sein, da die Einnahmen stark steigen.
					//TargetFunds: Diese werden perspektivisch benötigt, um den cheapAutobuyer zu bremsen.
					var targetFunds = marketingCost + maxWirePrice * Math.min(1, wireBuysMissing);
					//TriggerFunds: Wenn die überschritten sind, wird sofort gekauft.
					var minProfitPerSecond = engineState.assBalancePriceDirect.minProfitPerSecond;

					var triggerFunds = marketingCost + Math.max(maxWirePrice - wireRange * minProfitPerSecond, 0);
					if (funds >= triggerFunds || funds >= targetFunds) { //targetFunds sollten "eigentlich" immer größer sein als TriggerFunds. Aber wozu etwas riskieren?
						click(btnExpandMarketing);
						funds = getFunds() - state.protectFunds;
						gotSomething = true;
						getCount++;
						if (getCount > 90) {
							var i = 0;
						} else if (getCount > 100) {
							throw new Error("Got too much!");
						}
					} else {
						//Das Geld reicht noch nicht --> wenn genug Wire vorhanden ist, um die Ansparphase zu überbrücken, wird der cheapBuyer temporär deaktiviert.
						if (minProfitPerSecond != null) {
							var durationToTarget = (targetFunds - funds) / minProfitPerSecond;
							if (durationToTarget < wireRange) {
								stopBuying = true;
							}
						}
					}
					break;
				default:
					throw new Error("Unexpected value: " + toGet);
			}

			//Autobuy anweisen, weiter zu kaufen oder halt nicht.
			engineState.assCheapAutobuy.stopAtWireRangeMs = stopBuying ? 0 : 60000;
		}
		phase1RampupIsSavingUp = !gotSomething;

		function getBest(allowMarketing) {
			//Buys what makes most profit.
			var autoClipperProfitIncrease = (Math.pow(1 + autoClipperLevel / production, 0.15 / 1.15) - 1);
			var autoClipperBenefit = autoClipperProfitIncrease / autoClipperCost;

			var megaClipperBenefit;
			if (projectActivated(projects.megaClippers1)) {
				var megaClipperProfitIncrease = (Math.pow(1 + megaClipperLevel / production, 0.15 / 1.15) - 1);
				megaClipperBenefit = megaClipperProfitIncrease / megaClipperCost;
			} else {
				megaClipperBenefit = 0;
			}

			var marketingBenefit = allowMarketing ? (0.1 / marketingCost) : 0;

			if (autoClipperBenefit >= megaClipperBenefit && autoClipperBenefit > marketingBenefit) {
				return "autoClipper";
			} else if (megaClipperBenefit >= autoClipperBenefit && megaClipperBenefit >= marketingBenefit) {
				return "megaClipper";
			} else {
				return "marketing";

			}
		}
	});

	var clipFactoryRate = 1000000000;
	var harvesterRate = 2 * 26180337; //*2 für "Slider links"
	var wireRate = 2 * 16180339; //*2 für "Slider links"
	var solarFarmPower = 50;
	var clipFactoryPower = 200;
	var harvesterDronePower = 1;
	var wireDronePower = 1;

	function getMaxProduction(harvesterDroneCount, wireDroneCount, clipFactoryCount) {
		var droneRateBoost = (projectActivated(projects.drones2) ? 100 : 1) * (projectActivated(projects.drones3) ? 1000 : 1)
		var harvesterBoost = droneRateBoost * (projectActivated(projects.drones4) ? 2 * harvesterDroneCount : 1);
		var wireBoost = droneRateBoost * (projectActivated(projects.drones4) ? 2 * wireDroneCount : 1);
		return {
			matter: harvesterRate * harvesterBoost * harvesterDroneCount,
			wire: wireRate * wireBoost * wireDroneCount,
			clips: clipFactoryCount * clipFactoryRate * (projectActivated(projects.clipFactories2) ? 100 : 1) * (projectActivated(projects.clipFactories3) ? 1000 : 1) * (projectActivated(projects.clipFactories4) ? 1000 * clipFactoryCount : 1)
		};
	}

	engineState.assPhase2Rampup1 = {
		workFactor: 1,
		reduceWorkFactorAt50Factories: true,
		stopAt500And10: true,
		stopAt5k: true,
		stopAtFactories: 171
	};

	assistants.phase2Rampup1 = createAssistant("Phase 2 rampup 1", false, 100, function () {
		var state = engineState.assPhase2Rampup1;
		var madeSomething = true;
		var count = 0;
		var adjustSlider;
		var massBuy = null;
		var unusedClips;
		var rawMatter = getAvailableMatter() + getAcquiredMatter() + getNanoWire();
		var rounds = 0;
		var forceWorkFactor = null;
		while (madeSomething && rounds < 2000) {
			rounds++;
			madeSomething = false;
			if (massBuy == null) {
				unusedClips = getUnusedClips();
			}

			var clipFactoryCount = getClipFactoryCount();
			var harvesterDroneCount = getHarvesterDroneCount() + (massBuy != null ? massBuy.harvesterDrones : 0);
			var wireDroneCount = getWireDroneCount() + (massBuy != null ? massBuy.wireDrones : 0);
			var totalDroneCount = harvesterDroneCount + wireDroneCount;
			var solarFarmCount = getSolarFarmCount() + (massBuy != null ? massBuy.solarFarms : 0);
			var batteryTowersOnly;
			if (state.stopAt500And10 && clipFactoryCount >= 10 && totalDroneCount >= 500) {
				forceWorkFactor = 0;
				batteryTowersOnly = true;
			} else if (state.stopAt5k && totalDroneCount >= 5624 /* That's the next step for a bigger swarm-gift. And this time, we will get one. */) {
				forceWorkFactor = 0;
				batteryTowersOnly = true;
			} else if (clipFactoryCount >= state.stopAtFactories) {
				var production = getMaxProduction(harvesterDroneCount, wireDroneCount, clipFactoryCount);
				var maxHarvesterRate = production.matter;
				var maxWireRate = production.wire;
				var maxClipRate = production.clips;
				break;
			} else {
				batteryTowersOnly = false;
			}
			var batteryTowerCount = getBatteryTowerCount();
			var powerStored = getStoredPower();

			var batteryTowerCapacity = batteryTowerCount * 10000;
			var powerProduction = solarFarmPower * solarFarmCount;
			var powerConsumption = clipFactoryCount * clipFactoryPower + harvesterDroneCount * harvesterDronePower + wireDroneCount * wireDronePower;

			var production = getMaxProduction(harvesterDroneCount, wireDroneCount, clipFactoryCount);
			var maxHarvesterRate = production.matter;
			var maxWireRate = production.wire;
			var maxClipRate = production.clips;

			//Beim Massenkauf von Dronen gibt es Performanceprobleme. Deshalb werden die typischen Käufe virtuell abgewickelt und am Ende die Buttons effizienter geklickt.
			var harvesterDroneCost = Math.pow((harvesterDroneCount + 1), 2.25) * 1000000;
			var wireDroneCost = Math.pow((wireDroneCount + 1), 2.25) * 1000000;
			var solarFarmCost = Math.pow(solarFarmCount + 1, 2.78) * 100000000;

			if ((powerProduction > powerConsumption) && batteryTowerCapacity < 10000000 && (batteryTowerCapacity <= powerStored || (batteryTowerCapacity - powerStored) / (powerProduction - powerConsumption) <= 1)) {
				//Get a battery-tower to store the energy.
				doMassBuy();
				madeSomething = tryMake(btnMakeBatteryTower, batteryTowerCount, getBatteryTowerCount);
			} else if (solarFarmCount >= 20 && solarFarmCount < 30) {
				//Enable project "Momentum"
				doMassBuy();
				madeSomething = tryMake(btnMakeSolarFarm, solarFarmCount, getSolarFarmCount);
			} else if (!batteryTowersOnly) {
				var allowFactory;
				var equalDroneCount;
				if (totalDroneCount > 450 && totalDroneCount < 500) {
					//Das erste Dronenprojekt schnell freischalten.
					equalDroneCount = false;
					allowFactory = false;
				} else if (state.reduceWorkFactorAt50Factories && clipFactoryCount == 50 && totalDroneCount < 50000) {
					//Es werden keine Factories mehr produziert, sondern möglichst preiswert 50k Drohnen erreicht.
					equalDroneCount = true;
					allowFactory = false;
				} else if (totalDroneCount == 562) {
					//Hier gibt es ein Swarm-gift. Und bei 563 ist es 6 groß, sonst nur 2.
					allowFactory = false;
				} else {
					equalDroneCount = false;
					allowFactory = true;
				}
				var totalClipRate = maxClipRate;
				var targetWorkFactor;
				if (clipFactoryCount < 5) {
					targetWorkFactor = 1;
				} else if (!projectActivated(projects.swarmComputing)) {
					targetWorkFactor = 1;
				} else if (!projectActivated(projects.momentum)) {
					targetWorkFactor = 0.5;
				} else {
					targetWorkFactor = 1;
				}
				var totalWireRate = maxWireRate * targetWorkFactor;
				var totalHarvesterRate = maxHarvesterRate * targetWorkFactor;

				if (allowFactory && totalClipRate <= totalHarvesterRate && totalClipRate <= totalWireRate) {
					//Die Buttons werden leider nicht sofort disabled, reagieren aber nicht, wenn nicht genügend clips existieren.
					//Get clipFactory
					if (powerProduction < powerConsumption + clipFactoryPower - 5 && (powerProduction != 200 && clipFactoryCount != 1) /*hack for the second factory.*/) {
						//Grund für die "-5": Es ist lächerlich, eine Factory zu verzögern, nur weil ein Schnaps fehlt. Und das passiert ohne diesen Abzug mehrfach.
						if (unusedClips >= solarFarmCost) {
							unusedClips -= solarFarmCost;
							lazyInitMassBuy();
							massBuy.solarFarms++;
							madeSomething = true;
						}
					} else {
						doMassBuy();
						madeSomething = tryMake(btnMakeClipFactory, clipFactoryCount, getClipFactoryCount);
					}
				} else if (
					(!equalDroneCount && totalWireRate <= totalHarvesterRate)
					|| (equalDroneCount && wireDroneCount < harvesterDroneCount)
				) {
					//Get wireDrone
					if (powerProduction < powerConsumption + harvesterDronePower) {
						if (unusedClips >= solarFarmCost) {
							unusedClips -= solarFarmCost;
							lazyInitMassBuy();
							massBuy.solarFarms++;
							madeSomething = true;
						}
					} else {
						if (unusedClips >= wireDroneCost) {
							unusedClips -= wireDroneCost;
							lazyInitMassBuy();
							massBuy.wireDrones++;
							madeSomething = true;
						}
					}
				} else {
					//Get harvesterDrone
					if (powerProduction < powerConsumption + wireDronePower) {
						if (unusedClips >= solarFarmCost) {
							unusedClips -= solarFarmCost;
							lazyInitMassBuy();
							massBuy.solarFarms++;
							madeSomething = true;
						}
					} else {
						if (unusedClips >= harvesterDroneCost) {
							unusedClips -= harvesterDroneCost;
							lazyInitMassBuy();
							massBuy.harvesterDrones++;
							madeSomething = true;
						}
					}
				}
			}
			count++;
			if (count > 900) {
				var i = 0;
			} else if (count > 1000) {
				throw new Error("Endless loop?");
			}
		}
		doMassBuy();
		if (getGiftSeconds() == 0) {
			thinkWorkSlider.value = 200;
		} else {
			if (forceWorkFactor == null) {
				forceWorkFactor = maxClipRate / Math.min(maxHarvesterRate, maxWireRate);
				forceWorkFactor = Math.min(Math.max(forceWorkFactor, 0), 1);
			}
			var reserveSeconds = getNanoWire() / Math.min(maxHarvesterRate, maxWireRate);
			if (reserveSeconds > 1) {
				//Hier flackerte der Assistent teilweise zwischen 0 und 1, was sehr störend wirkte. Im Ergebnis macht es kaum einen Unterschied, aber die hüpfende GUI nervt.
				var targetValue = Math.ceil((1 - forceWorkFactor) * 200);
				thinkWorkSlider.value = targetValue == 1 ? 0 : targetValue;
			} else {
				thinkWorkSlider.value = Math.floor((1 - forceWorkFactor) * 200);
			}
		}

		function tryMake(button, currentCount, getNextCount) {
			if (button.disabled) {
				return false;
			} else {
				click(button);
				return getNextCount() > currentCount;
			}
		}
		function lazyInitMassBuy() {
			if (massBuy == null) {
				massBuy = {
					solarFarms: 0,
					harvesterDrones: 0,
					wireDrones: 0
				};
			}
		}
		function doMassBuy() {
			if (massBuy != null) {
				var solarFarms = massBuy.solarFarms;
				var harvesterDrones = massBuy.harvesterDrones;
				var wireDrones = massBuy.wireDrones;

				massGet(massBuy.solarFarms, btnMakeSolarFarm, btnMakeSolarFarm10, btnMakeSolarFarm100, null);
				massGet(massBuy.harvesterDrones, btnMakeHarvesterDrone, btnMakeHarvesterDrone10, btnMakeHarvesterDrone100, btnMakeHarvesterDrone1000);
				massGet(massBuy.wireDrones, btnMakeWireDrone, btnMakeWireDrone10, btnMakeWireDrone100, btnMakeWireDrone1000);

				massBuy = null;
			}
		}
	});

	function massGet(amount, btn1, btn10, btn100, btn1000) {
		if (btn1000 != null) {
			while (amount >= 1000) {
				if (!btn1000.disabled) {
					click(btn1000);
				}
				amount -= 1000;
			}
		}
		while (amount >= 100) {
			if (!btn100.disabled) {
				click(btn100);
			}
			amount -= 100;
		}
		while (amount >= 10) {
			if (!btn10.disabled) {
				click(btn10);
			}
			amount -= 10;
		}
		while (amount > 0) {
			if (!btn1.disabled) {
				click(btn1);
			}
			amount -= 1;
		}
	}

	engineState.assPhase2Rampup2 = {
		workInterruptedAt: null,
		workRestarted: false,
	};
	assistants.phase2Rampup2 = createAssistant("Phase 2 rampup 2", false, 10, function () {
		var state = engineState.assPhase2Rampup2;
		var clipFactoryCount = getClipFactoryCount();
		var harvesterDroneCount = getHarvesterDroneCount();
		var wireDroneCount = getWireDroneCount();
		var solarFarmCount = getSolarFarmCount();
		var powerProduction = solarFarmPower * solarFarmCount;
		var powerConsumption = clipFactoryCount * clipFactoryPower + harvesterDroneCount * harvesterDronePower + wireDroneCount * wireDronePower;
		var batteryTowerCount = getBatteryTowerCount();
		var maxDrones = 1778280; //1778280; //5623414;
		var dronesToGet = maxDrones - harvesterDroneCount - wireDroneCount;

		var powerReserve = (dronesToGet > 0) ? 20000 /* up to 20k drones per step during Rampup */ : (solarFarmCount < 10000 ? 0 /* nothing while buying solar farms */ : (getStoredPower() < 10000000 ? 40000 : 200));
		var powerMissing = powerConsumption + powerReserve - powerProduction;

		if (batteryTowerCount < 1000) {
			//1.) Get enough battery towers.
			var toGet = 1000 - batteryTowerCount;
			massGet(1000 - batteryTowerCount, btnMakeBatteryTower, btnMakeBatteryTower10, btnMakeBatteryTower100, null);
		} else if (powerMissing > 0) {
			//Make sure there is enough power.
			var toGet = Math.ceil(powerMissing / 50);
			massGet(toGet, btnMakeSolarFarm, btnMakeSolarFarm10, btnMakeSolarFarm100, null);
		} else if (dronesToGet > 0) {
			//Drones weiter aufrüsten.
			//Aber bis wohin?
			//Drone-Gifts berechnen sich bei 100% thinking aus:
			//Math.Round(log_10(Anzahl_Drohnen) * 2)
			//Für 13 Punkte muss vor dem Runden 12,5 stehen, log_10 also mindestens 6,25 sein -> 1,7 Mio Drohnen (1.778.280)
			//Für 14 Punkte muss vor dem Runden 13,5 stehen, log_10 also mindestens 6,75 sein -> 5,6 Mio Drohnen (5.623.414)
			//Für 15 Punkte muss vor dem Runden 14,5 stehen, log_10 also mindestens 7,25 sein -> 17 Mio Drohnen -> Nicht sinnvoll.
			//Das Aufrüsten bis 5,6 Mio dauert recht lange. Darum wird es nicht gemacht.
			var maxHarvesters = Math.round(maxDrones / 2);
			var maxWires = maxDrones - maxHarvesters;
			var getHarvesters = maxHarvesters - harvesterDroneCount;
			var getWires = maxWires - wireDroneCount;
			//Reihenfolge des gets wir variiert, damit die Anzahlen nicht zu stark auseinanderlaufen.
			if (getHarvesters > getWires) {
				massGet(Math.min(20000, getHarvesters), btnMakeHarvesterDrone, btnMakeHarvesterDrone10, btnMakeHarvesterDrone100, btnMakeHarvesterDrone1000);
				massGet(Math.min(20000, getWires), btnMakeWireDrone, btnMakeWireDrone10, btnMakeWireDrone100, btnMakeWireDrone1000);
			} else {
				massGet(Math.min(20000, getWires), btnMakeWireDrone, btnMakeWireDrone10, btnMakeWireDrone100, btnMakeWireDrone1000);
				massGet(Math.min(20000, getHarvesters), btnMakeHarvesterDrone, btnMakeHarvesterDrone10, btnMakeHarvesterDrone100, btnMakeHarvesterDrone1000);
			}
		} else if (!btnMakeClipFactory.disabled) {
			//Factory als Fallback.
			click(btnMakeClipFactory);
		}
		//Der Schwarm langweilt sich bei der Produktion der 5 oct wires. Also wird der Abbau unterbrochen.
		var nanowire = getNanoWire();
		var giftSeconds = getGiftSeconds();
		if (giftSeconds != null && giftSeconds <= 1) {
			//Im Moment des Geschenks muss der Slider auf "Think" stehen.
			thinkWorkSlider.value = 200;
		} else if (nanowire < 100000000000000000000000000 /* 0.1 oct */) {
			thinkWorkSlider.value = 199;
		} if ((getAvailableMatter() == 0 && getAcquiredMatter() == 0) || nanowire > 200000000000000000000000000 /* 0.5 oct */) {
			thinkWorkSlider.value = 200;
		}
	});

	assistants.autoLaunchProbes = createAssistant("Auto-launch probes", false, 3, function () {
		if (getProbesLaunched() < 100000) {
			click(btnLaunchProbe);
		} else {
			assistants.autoLaunchProbes.stop();
		}
	});

	engineState.phase3Status = {
		boredomLevel: 0,
		disorgCounter: 0
	}

	function updateBoredom(availableMatter, harvesterDroneCount, wireDroneCount) {
		var state = engineState.phase3Status;
		if (availableMatter == 0 && harvesterDroneCount + wireDroneCount > 0) {
			state.boredomLevel++;
		} else if (availableMatter > 0 && state.boredomLevel > 0) {
			state.boredomLevel--;
		}
	}

	function riskOfBoredom() {
		var state = engineState.phase3Status;
		return state.boredomLevel > 2900;
	}

	var probeHazBaseRate = .01;
	var probeRepBaseRate = .00005;
	var probeDriftBaseRate = .000001;
	var drifterCombat = 1.75;
	var probeCombatBaseRate = .15;
	var probeCost = Math.pow(10, 17);

	engineState.phase3Rampup1 = {
		giftSecondsZeroSince: null,
		lastHarvesterDroneProduction: 0,
		lastWireDroneProduction: 0,
	};

	assistants.phase3Rampup1 = createAssistant("Phase 3 rampup 1", false, 100, function () {
		var state = engineState.phase3Rampup1;
		//Try to increase max probe trust
		if (!btnIncreaseMaxTrust.disabled) {
			click(btnIncreaseMaxTrust);
		}
		//Get all possible trust.
		while (!btnIncreaseProbeTrust.disabled && getYomi() >= getProbeTrustCost() && getProbeTrust() < getProbeTrustMax()) {
			click(btnIncreaseProbeTrust);
		}
		var now = ticks * 10;
		//Get the replication-rate.
		var trustDistribution = { speed: 0, exploration: 0, replication: 0, hazardRemediation: 0, factoryProduction: 0, harvesterDroneProduction: 0, wireDroneProduction: 0, combat: 0 };
		fillRemainingTrust(trustDistribution);
		var nextProbeGeneration = probeRepBaseRate * trustDistribution.replication * getTotalProbes();
		var nextProbeGenerationCost = nextProbeGeneration * probeCost;
		var productionTarget = nextProbeGenerationCost * 1.00; //Some reserve for: drones, pauses during the last second of gift-generation.

		var harvesterDroneCount = getHarvesterDroneCount();
		var wireDroneCount = getWireDroneCount();
		var droneRatio = Math.max(harvesterDroneCount + 1, wireDroneCount + 1) / Math.min(harvesterDroneCount + 1, wireDroneCount + 1);
		updateDisorgCounter(droneRatio);

		var maxProduction = getMaxProduction(harvesterDroneCount, wireDroneCount, getClipFactoryCount());
		var targetWorkFactor = 0.05;
		trustDistribution = { speed: 0, exploration: 0, replication: 0, hazardRemediation: 0, factoryProduction: 0, harvesterDroneProduction: 0, wireDroneProduction: 0, combat: 0 };
		var availableMatter = getAvailableMatter();
		updateBoredom(availableMatter, harvesterDroneCount, wireDroneCount);
		var unusedClips = getUnusedClips();
		var acquiredMatter = getAcquiredMatter();
		var wire = getNanoWire();

		var enoughMatter = acquiredMatter > 0 && acquiredMatter > 200 * (productionTarget - maxProduction.matter * targetWorkFactor);
		var enoughWire = wire > 0 && wire > 200 * (productionTarget - maxProduction.wire * targetWorkFactor);
		var enoughClips = unusedClips > 0 && unusedClips > 200 * (productionTarget - maxProduction.clips);

		var droneProductionEvery = 30 * 1000; //create drones every few seconds to keep the gifts flowing in.
		var explore = riskOfBoredom() || (availableMatter + acquiredMatter + wire + unusedClips < 200 * productionTarget);
		var needMoreGifts = !projectActivated(projects.honor4);
		var makeHarvesterDrones = (maxProduction.matter * targetWorkFactor < productionTarget && !enoughMatter) || (needMoreGifts && harvesterDroneCount > 0 && state.lastHarvesterDroneProduction + droneProductionEvery < now);
		var makeWireDrones = (maxProduction.wire * targetWorkFactor < productionTarget && !enoughWire) || (needMoreGifts && wireDroneCount > 0 && state.lastWireDroneProduction + droneProductionEvery < now);
		var makeClipFactories = maxProduction.clips < productionTarget && !enoughClips;

		if (riskOfDisorganization(droneRatio)) {
			//The will be disorganization soon. Try to level the drone-count ASAP
			if (harvesterDroneCount < wireDroneCount) {
				trustDistribution.harvesterDroneProduction = 1;
			} else {
				trustDistribution.wireDroneProduction = 1;
			}
		} else if (explore) {
			trustDistribution.speed = 1;
			trustDistribution.exploration = 1;
		} else if (makeHarvesterDrones && (!makeWireDrones || maxProduction.wire > maxProduction.matter) && (!makeClipFactories || maxProduction.clips > maxProduction.matter)) {
			state.lastHarvesterDroneProduction = now;
			trustDistribution.harvesterDroneProduction = 1;
		} else if (makeWireDrones && (!makeClipFactories || maxProduction.clips > maxProduction.wire)) {
			state.lastWireDroneProduction = now;
			trustDistribution.wireDroneProduction = 1;
		} else if (makeClipFactories) {
			trustDistribution.factoryProduction = 1;
		}
		fillRemainingTrust(trustDistribution);
		applyTrust(trustDistribution);

		//Set the workFactor
		var setWorkFactorZero = false;
		if (getGiftSeconds() == 0) {
			var now = ticks * 10; //ms sind game-start //new Date().getTime();
			if (state.giftSecondsZeroSince == null) {
				state.giftSecondsZeroSince = now;
			} else if (now - state.giftSecondsZeroSince > 870) {
				//Set the workFactor to zero only for the last fraction of the last second
				setWorkFactorZero = true;
			}
		} else {
			state.giftSecondsZeroSince = null;
		}
		var workFactor;
		if (setWorkFactorZero) {
			workFactor = 0;
		} else if (harvesterDroneCount == 0 && wireDroneCount == 0) {
			workFactor = 1;
		} else if (harvesterDroneCount == 0) {
			workFactor = productionTarget / maxProduction.wire;
		} else if (wireDroneCount == 0) {
			workFactor = productionTarget / maxProduction.matter;
		} else {
			workFactor = productionTarget / Math.min(maxProduction.matter, maxProduction.wire);
		}
		workFactor = Math.max(Math.min(1, workFactor), 0)
		var sliderValue = 200 - 200 * workFactor;
		if (unusedClips > 100 * productionTarget) {
			sliderValue = Math.ceil(sliderValue);
		} else {
			//In this branch, the slider must never reach 200.
			//Even when we have this many drones that the sliderValue is equal to 200 due to limitations in precision.
			sliderValue = Math.min(199, Math.floor(sliderValue));
		}
		thinkWorkSlider.value = sliderValue;
	});

	function updateDisorgCounter(droneRatio) {
		var state = engineState.phase3Status;
		if (droneRatio < 1.5 && state.disorgCounter > 1) {
			state.disorgCounter = state.disorgCounter - .1;
		} else if (droneRatio > 1.5) {
			var x = droneRatio / 1000;
			if (x > .1) { x = .1; }
			state.disorgCounter = state.disorgCounter + x;
		}
	}
	function riskOfDisorganization(droneRatio) {
		var state = engineState.phase3Status;
		return state.disorgCounter > 90 && droneRatio > 1.5
	}

	engineState.phase3Rampup2 = {
		rampupProduction: true
	};

	//localStorage.setItem("phase3FinalExperiments", null);
	var phase3FinalExperiments = localStorage.getItem("phase3FinalExperiments");
	if (phase3FinalExperiments != null) {
		phase3FinalExperiments = JSON.parse(phase3FinalExperiments);
	}
	if (phase3FinalExperiments == null) {
		phase3FinalExperiments = {
			lastAction: { getMatter: 0, increased: true },
			bestStrategy: null,
			bestTime: null
		}
	};
	//Determine the strategy for this run
	var phase3FinalStrategy = {
		"exitAt": 154,
		"trusts": [
			//Die PercentExplored wurden mal mit max 20 trust automatischen Experimenten ermittelt und anschließend "entrundet", da eine Schrittweite von 20% eingestellt war (die letzten waren 60-80-80-100-100)
			//Inzwischen sind sie nur noch lose daran orientiert und vieles ist erfunden, um die Sache etwas interessanter zu machen.
			{ "percentExplored": 0, "reserve": 10, "maxCombat": 0 },
			{ "percentExplored": 7, "reserve": 9, "maxCombat": 0 },
			{ "percentExplored": 12, "reserve": 8, "maxCombat": 0 },
			{ "percentExplored": 34, "reserve": 7, "maxCombat": 0 },
			{ "percentExplored": 69, "reserve": 6, "maxCombat": 0 },
			{ "percentExplored": 85, "reserve": 5, "maxCombat": 0 },
			{ "percentExplored": 88, "reserve": 4, "maxCombat": 0 },
			{ "percentExplored": 91, "reserve": 3, "maxCombat": 0 },
			{ "percentExplored": 94, "reserve": 2, "maxCombat": 0 },
			{ "percentExplored": 96, "reserve": 1, "maxCombat": 0 },
			{ "percentExplored": 98, "reserve": 0, "maxCombat": 0 },
		]
	};
    /*
    Der folgende Code wurde genutzt, um die Prozentsprünge zu ermitteln.
	if (phase3FinalExperiments.bestStrategy == null) {
		phase3FinalStrategy = {
			exitAt: 148,
			trusts: [
				{ percentExplored: 0, getMatter: 3, maxCombat: 5 },
				{ percentExplored: 0, getMatter: 4, maxCombat: 5 },
				{ percentExplored: 0, getMatter: 5, maxCombat: 5 },
				{ percentExplored: 0, getMatter: 6, maxCombat: 5 },
				{ percentExplored: 0, getMatter: 7, maxCombat: 5 },
				{ percentExplored: 0, getMatter: 8, maxCombat: 5 },
				{ percentExplored: 0, getMatter: 9, maxCombat: 5 },
				{ percentExplored: 0, getMatter: 10, maxCombat: 4 },
				{ percentExplored: 0, getMatter: 11, maxCombat: 3 },
				{ percentExplored: 0, getMatter: 12, maxCombat: 2 },
				{ percentExplored: 0, getMatter: 13, maxCombat: 1 },
				{ percentExplored: 0, getMatter: 14, maxCombat: 0 },
				{ percentExplored: 0, getMatter: 15, maxCombat: 0 },
				{ percentExplored: 100, getMatter: 16, maxCombat: 0 },
				{ percentExplored: 100, getMatter: 17, maxCombat: 0 },
				{ percentExplored: 100, getMatter: 18, maxCombat: 0 },
				{ percentExplored: 100, getMatter: 19, maxCombat: 0 },
				{ percentExplored: 100, getMatter: 20, maxCombat: 0 }
			]
		};
	} else {
		phase3FinalStrategy = JSON.parse(JSON.stringify(phase3FinalExperiments.bestStrategy));
		//Neue Strategie ermitteln:
		var findMatter = phase3FinalExperiments.lastAction.getMatter;
		var increase = phase3FinalExperiments.lastAction.increased;
		var stepSize = 20;
		var matterStepSize = 1;
		//Nächste Aktion:
        //throw new Error("Wait!");
        incrementAction();
		var counter = 0;
		var changed = false;
		while (!changed) {
			if (counter > 100) {
				var i = 0;
			} else if (counter > 150) {
				throw new Error("Infinite loop");
			}
			var trusts = phase3FinalStrategy.trusts;
			if (findMatter == 0) {
				if (increase) {
					phase3FinalStrategy.exitAt += matterStepSize;
					changed = true;
				} else {
					if (phase3FinalStrategy.exitAt - matterStepSize >= 110) {
						phase3FinalStrategy.exitAt -= matterStepSize;
						changed = true;
					} else {
						incrementAction();
					}
				}
			} else {
				for (var i = 0; i < trusts.length; i++) {
					if (trusts[i].getMatter == findMatter) {
						//Found the desired step. Decide if the strategy can be changed.
						if (increase) {
							//Try increase
							if (trusts[i].percentExplored < 100 && (i == trusts.length - 1 || trusts[i + 1].percentExplored > trusts[i].percentExplored)) {
								trusts[i].percentExplored = Math.min(trusts[i].percentExplored + stepSize, 100);
								if (i < trusts.length - 1 && trusts[i].percentExplored > trusts[i + 1].percentExplored) {
									trusts[i].percentExplored = trusts[i + 1].percentExplored;
								}
								changed = true;
								break;
							} else {
								incrementAction();
								break;
							}
						} else {
							//Try decrease
							if (trusts[i].percentExplored > 0 && (i == 0 || trusts[i - 1].percentExplored < trusts[i].percentExplored)) {
								trusts[i].percentExplored = Math.max(trusts[i].percentExplored - stepSize, 0);
								if (i > 0 && trusts[i].percentExplored < trusts[i - 1].percentExplored) {
									trusts[i].percentExplored = trusts[i - 1].percentExplored;
								}
								changed = true;
								break;
							} else {
								incrementAction();
								break;
							}
						}
					}
				}
			}
		}
		phase3FinalExperiments.lastAction.getMatter = findMatter;
		phase3FinalExperiments.lastAction.increase = increase;
		function incrementAction() {
			if (increase) {
                if (findMatter == 0){
                    findMatter = 3;
                } else if (findMatter == 20) {
					findMatter = 0;
				} else {
					findMatter++;
				}
				increase = false;
			} else {
				increase = true;
			}
		}
	}

	var finalPhaseStarted = null;
*/
	assistants.phase3Rampup2 = createAssistant("Phase 3 rampup 2", false, 100, function () {
		var state = engineState.phase3Rampup2;
		var harvesterDroneCount = getHarvesterDroneCount();
		var wireDroneCount = getWireDroneCount();
		var clipFactoryCount = getClipFactoryCount();
		var trustDistribution = { speed: 0, exploration: 0, replication: 0, hazardRemediation: 0, factoryProduction: 0, harvesterDroneProduction: 0, wireDroneProduction: 0, combat: 0 };
		if (state.rampupProduction) {
			var productionTarget = Math.pow(10, 53);
			var production = getMaxProduction(harvesterDroneCount, wireDroneCount, clipFactoryCount);
			if (production.matter < productionTarget) {
				trustDistribution.harvesterDroneProduction = 1;
			} else if (production.wire < productionTarget) {
				trustDistribution.wireDroneProduction = 1;
			} else if (production.clips < productionTarget) {
				trustDistribution.factoryProduction = 1;
			} else {
				state.rampupProduction = false;
			}
		}
		if (state.rampupProduction) {
			fillRemainingTrust(trustDistribution);
			applyTrust(trustDistribution);
		} else {
			thinkWorkSlider.value = 0;
			var trust = null;
			var percentExplored = getPercentExplored();
			for (var i = 0; i < phase3FinalStrategy.trusts.length; i++) {
				if (phase3FinalStrategy.trusts[i].percentExplored > percentExplored) {
					break;
				} else {
					trust = phase3FinalStrategy.trusts[i];
				}
			}
			var reserve;
			var maxCombat;
			if (trust == null) {
				reserve = 15;
				maxCombat = 5;
			} else {
				reserve = trust.reserve;
				maxCombat = trust.maxCombat;
			}
			var getMatter = getProbeTrust() - reserve - maxCombat;
			var exploration = Math.floor(getMatter / 2);
			var trustDistribution = { speed: getMatter - exploration, exploration: exploration, replication: 0, hazardRemediation: 0, factoryProduction: 0, harvesterDroneProduction: 0, wireDroneProduction: 0, combat: 0 };
			fillRemainingTrust(trustDistribution, maxCombat);
			applyTrust(trustDistribution);
		}
	});

	function trustUsed(trustDistribution) {
		return trustDistribution.speed + trustDistribution.exploration + trustDistribution.replication + trustDistribution.hazardRemediation + trustDistribution.factoryProduction + trustDistribution.harvesterDroneProduction + trustDistribution.wireDroneProduction + trustDistribution.combat;
	}

	engineState.fillRemainingTrust = {
		battleStart: null,
		battleHasEnded: false
	};

	function fillRemainingTrust(trustDistribution, maxCombat) {
		//The strategy is pretty simple:
		//Use 6 for hazardRemediation (5 if probeProtection is active). The remainder is used for replication.
		var state = engineState.fillRemainingTrust;
		var now = ticks * 10;
		if (numLeftShips > 3 && numRightShips > 0 && numLeftShips + numRightShips > 6 && (state.battleStart == null || now > state.battleStart + 500)) {
			if (maxCombat == null) {
				maxCombat = 5;
			}
			if (projectActivated(projects.combat2)) {
				trustDistribution.speed = Math.max(trustDistribution.speed, 1);
				trustDistribution.combat = Math.max(trustDistribution.combat, maxCombat);
			} else if (projectActivated(projects.combat)) {
				trustDistribution.combat = Math.max(trustDistribution.combat, maxCombat);
			}
		}
		if (numLeftShips == 0 || numRightShips == 0) {
			state.battleHasEnded = true;
			state.battleStart = null;
		} else if (state.battleHasEnded) {
			state.battleHasEnded = false;
			if (state.battleStart == null) {
				state.battleStart = now;
			}
		}
		var hazardRemediationLimit = projectActivated(projects.probeProtection) ? 5 : 6;
		var probeTrust = getProbeTrust();
		var remaining = probeTrust - trustUsed(trustDistribution);
		if (remaining > 0) {
			trustDistribution.hazardRemediation = Math.min(remaining, hazardRemediationLimit);
			trustDistribution.replication = remaining - trustDistribution.hazardRemediation;
		} //else: Do nothing. This should be fixed automatically soon.
	}

	function applyTrust(trustDistribution) {
		var probeSpeed = getProbeSpeed();
		var probeExploration = getProbeExploration();
		var probeReplication = getProbeReplication();
		var probeHazardRemediation = getProbeHazardRemediation();
		var probeFactoryProduction = getProbeFactoryProduction();
		var probeHarvesterDroneProduction = getProbeHarvesterDroneProduction();
		var probeWireDroneProduction = getProbeWireDroneProduction();
		var probeCombat = getProbeCombat();

		for (var i = probeSpeed; i > trustDistribution.speed; i--) {
			click(btnLowerProbeSpeed);
		}
		for (var i = probeExploration; i > trustDistribution.exploration; i--) {
			click(btnLowerProbeExploration);
		}
		for (var i = probeReplication; i > trustDistribution.replication; i--) {
			click(btnLowerProbeReplication);
		}
		for (var i = probeHazardRemediation; i > trustDistribution.hazardRemediation; i--) {
			click(btnLowerProbeHazardRemediation);
		}
		for (var i = probeFactoryProduction; i > trustDistribution.factoryProduction; i--) {
			click(btnLowerProbeFactoryProduction);
		}
		for (var i = probeHarvesterDroneProduction; i > trustDistribution.harvesterDroneProduction; i--) {
			click(btnLowerProbeHarvesterDroneProduction);
		}
		for (var i = probeWireDroneProduction; i > trustDistribution.wireDroneProduction; i--) {
			click(btnLowerProbeWireDroneProduction);
		}
		for (var i = probeCombat; i > trustDistribution.combat; i--) {
			click(btnLowerProbeCombat);
		}

		//The buttons are enabled in the main-loop only (every 10ms)
		window.setTimeout(function () {
			for (var i = probeSpeed; i < trustDistribution.speed; i++) {
				click(btnRaiseProbeSpeed);
			}
			for (var i = probeExploration; i < trustDistribution.exploration; i++) {
				click(btnRaiseProbeExploration);
			}
			for (var i = probeReplication; i < trustDistribution.replication; i++) {
				click(btnRaiseProbeReplication);
			}
			for (var i = probeHazardRemediation; i < trustDistribution.hazardRemediation; i++) {
				click(btnRaiseProbeHazardRemediation);
			}
			for (var i = probeFactoryProduction; i < trustDistribution.factoryProduction; i++) {
				click(btnRaiseProbeFactoryProduction);
			}
			for (var i = probeHarvesterDroneProduction; i < trustDistribution.harvesterDroneProduction; i++) {
				click(btnRaiseProbeHarvesterDroneProduction);
			}
			for (var i = probeWireDroneProduction; i < trustDistribution.wireDroneProduction; i++) {
				click(btnRaiseProbeWireDroneProduction);
			}
			for (var i = probeCombat; i < trustDistribution.combat; i++) {
				click(btnRaiseProbeCombat);
			}
		}, 10);
	}

	function calculateClipsPerSecond() {
		var autoClipperCount = getAutoClippers();
		var autoClipperLevel = 1 + (projectActivated(projects.autoclippers1) ? 0.25 : 0) + (projectActivated(projects.autoclippers2) ? 0.5 : 0) + (projectActivated(projects.autoclippers3) ? 0.75 : 0) + (projectActivated(projects.autoclippers4) ? 5 : 0);

		var megaClipperLevel = 500 * (1 + (projectActivated(projects.megaClippers2) ? 0.25 : 0) + (projectActivated(projects.megaClippers3) ? 0.5 : 0) + (projectActivated(projects.megaClippers4) ? 1 : 0))
		var megaClipperCount = getMegaClippers();

		return 250 + autoClipperCount * autoClipperLevel + megaClipperLevel * megaClipperCount;

	}

	function getReproductionPer10ms(trust, speed, replication, hazardRemediation, combat, hasCombat, hasCombat2, hasProbeProtection) {
		var lostToHazard = probeHazBaseRate / (3 * Math.pow(hazardRemediation, 1.6) + 1)
		if (hasProbeProtection) {
			lostToHazard *= 0.5;
		}
		var hazardFactor = 1 - lostToHazard;
		var repFactor = 1 + probeRepBaseRate * replication;

		//Probability to loose a ship in a fight against a drifter:
		//var dX = drifterCombat;
		//diceRoll = Math.random() * dX * ((numRightTeam / numLeftTeam) * .5);
		//battleDEATH_THRESHOLD = battleDEATH_THRESHOLD + ooda;

		var combatFactor;
		if (hasCombat) {
			var drifters = probeDriftBaseRate * Math.pow(trust, 1.2);
			//Eigener Tod im Kampf
			var diceFactor = drifterCombat * 0.5;
			var threshold = (0.5 - (hasCombat2 ? speed / 5 : 0));
			var pOwnDeath = Math.min(Math.max(0, 1 - threshold / diceFactor), 1);
			//Beispiele:
			//diceFactor == 0.5, threshold == 0.5 -> pOwnDeath == 0 -> OK
			//diceFactor == 1, threshold == 0.5 -> pOwnDeath == 0.5 -> OK
			//diceFactor == 2, threshold == 0.5 -> pOwnDeath == 0.75 -> OK
			//diceFactor == 0.1, threshold == 0.5 -> pOwnDeath == -4, also 0 -> OK

			//fremder Tod im Kampf
			//var pX = probeCombat * probeCombatBaseRate;
			//diceRoll = ((Math.random() * pX) + (probeCombat * .1)) * ((numLeftTeam / numRightTeam) * .5);
			//if diceRoll > 0.5 -> death
			//probeCombat * 0.1 * 0.5 ist nicht zufallsabhängig und senkt quasi den threshold
			diceFactor = combat * probeCombatBaseRate * .5 * .5;
			threshold = 0.5 - (probeCombat * .1 * .5);
			var pOtherDeath = Math.min(Math.max(0, 1 - threshold / diceFactor), 1);

			//pOtherDeath für combat == 1:
			//BaseValue: 0.15, threshold: 0.4

			var fightsPerDrifter = Math.min(Math.max(10, 100 - 10 * probeCombat), 1 / pOtherDeath) + 1 /* Selbst wenn er geschlagen wird, kämpft der Drifter noch einmal */;
			//Math.max(10, 100-10*probeCombat): Bringt die Engine dazu, auch die ersten Stufen bei Combat zu nehmen. Sonst ist ja bis Combat == 6 keine Chance
			var killsPerDrifter = pOwnDeath * fightsPerDrifter;

			var killedByDrifters = drifters * killsPerDrifter;
			combatFactor = 1 - drifters - killsPerDrifter;
		} else {
			combatFactor = 1;
		}

		return repFactor * hazardFactor * combatFactor;
	}

	var trustUsagesSimple = [];
	var trustUsagesCombat1 = [];
	var trustUsagesHazard = [];
	var maxTrust = 40;

	function generateTrustUsages() {
		//trustUsagesSimple
		var current = { speed: 0, replication: 0, hazardRemediation: 0, combat: 0 };
		trustUsagesSimple.push(current);
		for (var trust = 1; trust <= maxTrust; trust++) {
			current = getNextTrust(current, false, false, false);
			if (current != null) {
				trustUsagesSimple.push(current);
			}
		}

		//trustUsagesHazard
		current = { speed: 0, replication: 0, hazardRemediation: 0, combat: 0 };
		trustUsagesHazard.push(current);
		for (var trust = 1; trust <= maxTrust; trust++) {
			current = getNextTrust(current, false, false, true);
			if (current != null) {
				trustUsagesHazard.push(current);
			}
		}

		//trustUsagesCombat1
		current = { speed: 0, replication: 0, hazardRemediation: 0, combat: 0 };
		trustUsagesCombat1.push(current);
		for (var trust = 1; trust <= maxTrust; trust++) {
			if (trust <= 0) {
				current = { speed: 0, replication: 0, hazardRemediation: 0, combat: trust };
			} else {
				current = getNextTrust(current, true, false, false);
			}
			if (current != null) {
				trustUsagesCombat1.push(current);
			}
		}

		function getNextTrust(current, hasCombat, hasCombat2, hasProbeProtection) {
			var currentRate = getReproductionPer10ms(trust, current.speed, current.replication, current.hazardRemediation, current.combat, hasCombat, hasCombat2, hasProbeProtection);
			var forSpeed = getReproductionPer10ms(trust, current.speed + 1, current.replication, current.hazardRemediation, current.combat, hasCombat, hasCombat2, hasProbeProtection);
			var forReplication = getReproductionPer10ms(trust, current.speed, current.replication + 1, current.hazardRemediation, current.combat, hasCombat, hasCombat2, hasProbeProtection);
			var forHazard = getReproductionPer10ms(trust, current.speed, current.replication, current.hazardRemediation + 1, current.combat, hasCombat, hasCombat2, hasProbeProtection);
			var forCombat = getReproductionPer10ms(trust, current.speed, current.replication, current.hazardRemediation, current.combat + 1, hasCombat, hasCombat2, hasProbeProtection);
			var max = Math.max(forSpeed, forReplication, forHazard, forCombat);
			if (max < currentRate) {
				//No improvement
				return null;
			} else if (max == forReplication) {
				return { speed: current.speed, replication: current.replication + 1, hazardRemediation: current.hazardRemediation, combat: current.combat };
			} else if (max == forHazard) {
				return { speed: current.speed, replication: current.replication, hazardRemediation: current.hazardRemediation + 1, combat: current.combat };
			} else if (max == forCombat) {
				return { speed: current.speed, replication: current.replication, hazardRemediation: current.hazardRemediation, combat: current.combat + 1 };
			} else if (max == forSpeed) {
				return { speed: current.speed + 1, replication: current.replication, hazardRemediation: current.hazardRemediation, combat: current.combat };
			} else {
				throw new Error("Unreachable");
			}
		}
	}
	generateTrustUsages();

	assistants.logStatus = createAssistant("Log status", false, 60 * 1000, function () {
		logStatus();
	});

	assistants.resetFailedGames = createAssistant("Reset failed games", false, 10 * 1000, function () {
		var now = ticks * 10;
		if (coalesce(engineState.goalsReached.goalIWE, now) >= 85 * 1000) {
			//Bestes bisher: 1:16
			//Aber: mit < 1:20 knapp 1h laufen gelassen -> kein einziger Erfolg
			//Daher ab jetzt: < 1:25
			autoReset("Did not reach improved wire extrusion quickly enough -> reset");
		} else if (coalesce(engineState.goalsReached.goalTakeover, now) > 27 * 60 * 1000) {
			autoReset("Did not reach hostileTakeover quickly enough -> reset");
		} else if (coalesce(engineState.goalsReached.goalMonopoly, now) > 32 * 60 * 1000) {
			autoReset("Did not reach fullMonopoly quickly enough -> reset");
		} else if (coalesce(engineState.goalsReached.goalHypnodrones, now) > 41 * 60 * 1000) {
			autoReset("Did not release the hypnoDrones quickly enough -> reset");
		} else if (engineState.goalsReached.goalHypnodrones == null && getTotalClips() > 125000000) {
			autoReset("Reached 125,000,000 clips without releasing the hypno-drones -> reset");
		}
	});

	function coalesce(v1, v2) {
		return v1 == null ? v2 : v1;
	}

	function autoReset(message) {
		logStatus();
		logSavegame("beforeReset");
		log(message);
		downloadLogs("beforeAutomaticReset");
		window.setTimeout(resetNow, 5000);
	}
	function resetNow() {
		localStorage.removeItem("saveGame");
		localStorage.removeItem("saveProjectsUses");
		localStorage.removeItem("saveProjectsFlags");
		localStorage.removeItem("saveProjectsActive");
		localStorage.removeItem("saveStratsActive");
		location.href = "http://www.decisionproblem.com/paperclips/";
	}
	function downloadLogs(name) {
		download("Paperclips." + name + "." + isoDate(new Date()) + ".txt", logEntries.join("\r\n"));
	}

	function isoDate(d) {
		return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).substr(-2) + "-" + ("0" + d.getDate()).substr(-2) + "_" + ("0" + d.getHours()).substr(-2) + "_" + ("0" + d.getMinutes()).substr(-2) + "_" + ("0" + d.getSeconds()).substr(-2) + "_" + ("00" + d.getMilliseconds()).substr(-3)
	}

	function logStatus() {
		if (!projectActivated(projects.releaseHypnoDrones)) {
			var funds = getFunds();
			var trust = getTrust();
			var processors = getProcessors();
			var memory = getMemory();
			var ops = getOperations();
			var yomi = getYomi();
			var autoClippers = getAutoClippers();
			var megaClippers = getMegaClippers();
			var investmentTotal = getInvestmentTotal();
			var investmentCash = getInvestmentCash();
			var investmentLevel = getInvestmentLevel();
			var marketingLevel = getMarketingLevel();
			log("Human era. Funds: " + formatNumber(funds / 100, 2) + ", trust: " + formatNumber(trust, 0) + ", processors: " + formatNumber(processors, 0) + ", memory: " + formatNumber(memory, 0) + ", ops: " + formatNumber(ops, 0) + ", yomi: " + formatNumber(yomi, 0) + ", autoClippers: " + formatNumber(autoClippers, 0) + ", megaClippers: " + formatNumber(megaClippers, 0) + ", marketingLevel: " + formatNumber(marketingLevel, 0) + ", investmentLevel: " + formatNumber(investmentLevel, 0) + ", investmentCash: " + formatNumber(investmentCash / 100, 0) + ", investmentTotal: " + formatNumber(investmentTotal / 100, 0));
		} else if (!projectActivated(projects.spaceExploration)) {
			log("Drone era. Factories: " + formatNumber(getClipFactoryCount()) + ", harvesterDrones: " + formatNumber(getHarvesterDroneCount()) + ", wireDrones: " + formatNumber(getWireDroneCount()) + ", solarFarms: " + formatNumber(getSolarFarmCount()) + ", batteryTowers: " + formatNumber(getBatteryTowerCount()) + ", processors: " + formatNumber(getProcessors()) + ", memory: " + formatNumber(getMemory()) + ", creativity: " + formatNumber(getCreativity()) + ", ops: " + formatNumber(getOperations()));
		} else {
			log("Space era. Factories: " + formatNumber(getClipFactoryCount()) + ", havesterDrones: " + formatNumber(getHarvesterDroneCount()) + ", wireDrones: " + formatNumber(getHarvesterDroneCount()) + ", probes: " + formatNumber(getTotalProbes()));
		}
	}

	function formatNumber(n, c, d, t) {
		var c = isNaN(c = Math.abs(c)) ? 2 : c,
			d = d == undefined ? "." : d,
			t = t == undefined ? "," : t,
			s = n < 0 ? "-" : "",
			i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
			j = (j = i.length) > 3 ? j % 3 : 0;
		return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	};
	var assAutoStrategy = createAssistant("Strategy control", false, 100, strategyMain);

	var saveGame = document.createElement("button");
	saveGame.innerText = "LogSavegame";
	saveGame.addEventListener("click", function () {
		logSavegame("manuallySaved");
	});
	assistantsContainer.appendChild(saveGame);
	assistantsContainer.appendChild(document.createElement("br"));

	var logTime = document.createElement("button");
	logTime.innerText = "DownloadLogs";
	logTime.addEventListener("click", function () {
		downloadLogs("manual");
	});
	assistantsContainer.appendChild(logTime);
	assistantsContainer.appendChild(document.createElement("br"));

	var reset = document.createElement("button");
	reset.innerText = "Reset";
	reset.addEventListener("click", function () {
		if (window.confirm("Reset the game?")) {
			resetNow();
		}
	});
	assistantsContainer.appendChild(reset);

	function $(id) {
		return document.getElementById(id);
	}

	function createProject(btnId, description, cost, pre) {
		for (var key in cost) {
			if (cost.hasOwnProperty(key)) {
				if (key != "ops" && key != "yomi" && key != "creat" && key != "clips" && key != "funds" && key != "mwSeconds" && key != "trust") {
					throw new Error("Unknown key: " + key);
				}
			}
		}
		lazyFill(cost, "ops");
		lazyFill(cost, "yomi");
		lazyFill(cost, "creat");
		lazyFill(cost, "clips");
		lazyFill(cost, "funds");
		lazyFill(cost, "mwSeconds");
		lazyFill(cost, "trust");

		return { btnId: btnId, description: description, cost: cost, pre: pre };
		function lazyFill(obj, key) {
			if (obj[key] == null) {
				obj[key] = 0;
			}
		}
	}

	function createAssistant(caption, defaultActive, frequency, execute) {
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		assistantsContainer.appendChild(checkbox);
		checkbox.addEventListener("change", checkboxChanged);
		assistantsContainer.appendChild(document.createTextNode(caption));
		assistantsContainer.appendChild(document.createElement("br"));
		var assistant = {
			isRunning: defaultActive,
			start: function () {
				checkbox.checked = true;
				checkboxChanged(this);
			},
			stop: function () {
				checkbox.checked = false;
				checkboxChanged(this);
			}
		};
		if (defaultActive) {
			checkbox.checked = true;
			window.setTimeout(function () { checkboxChanged(this); }, 0);
		}
		return assistant;
		var interval = null;
		var timeout = null;
		function checkboxChanged(assistant) {
			if (checkbox.checked) {
				if (interval == null) {
					assistant.isRunning = true;
					timeout = window.setTimeout(execute(), 0);
					interval = window.setInterval(execute, frequency);
				}
			} else {
				if (interval != null) {
					assistant.isRunning = false;
					window.clearTimeout(timeout);
					window.clearInterval(interval);
					interval = null;
				}
			}
		}
	}

	function assert(a, s) {
		if (!a) {
			throw new Error(s);
		}
	}

	function getGameTimeMs() {
		return engineState.gameTime.timeBefore + new Date().getTime() - engineState.gameTime.currentStart
	}

	function log(s) {
		var tickTime = toTimeString(ticks * 10);
		var logString = toTimeString(getGameTimeMs()) + " (" + tickTime.substring(0, tickTime.length - 1) + "): " + s;
		logEntries.push(logString);
		console.log(logString);
	}

	function download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	var buttonTimeouts = {};
	function click(button) {
		var id = button.id;
		var timeout = buttonTimeouts[id];
		if (timeout != null) {
			window.clearTimeout(timeout);
		}
		if (button.style.color) {
			button.style.color = "";
		} else {
			button.style.color = "red";
			buttonTimeouts[id] = window.setTimeout(function () { button.style.color = ""; }, 500);
		}
		button.click();
	}

	function toTimeString(totalMs) {
		var ms = totalMs % 1000;
		var totalSeconds = (totalMs - ms) / 1000;
		var seconds = totalSeconds % 60;
		var totalMinutes = (totalSeconds - seconds) / 60;
		var minutes = totalMinutes % 60;
		var hours = (totalMinutes - minutes) / 60;
		return hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + "." + ("00" + ms).substr(-3)
	}

	var chain1 = new ProjectChain();
	var chain2 = new ProjectChain();
	var chain3 = new ProjectChain();
	var chain4 = new ProjectChain();
	var chain5 = new ProjectChain();

	chain1.addSingleProject(projects.wireExtrusion1, false, false);

	chain1.addLogSavegame("afterWireExtrusion1");
	chain1.addSingleProject(projects.quantum, false, false);
	chain1.addLogSavegame("gotQuantum");
	chain1.addSingleProject(projects.chip1, false, false);
	chain1.addLogSavegame("gotChip1");

	chain1.beginCluster();
	//Das sind diverse Projekte, die nur ops benötigen.
	chain1.addProjectToCluster(projects.wireExtrusion2, false, false);
	chain1.addProjectToCluster(projects.wireExtrusion3, false, false);
	chain1.addProjectToCluster(projects.wireExtrusion4, false, false);
	chain1.addProjectToCluster(projects.autoclippers1, false, false);
	chain1.addProjectToCluster(projects.autoclippers2, false, false);
	chain1.addProjectToCluster(projects.autoclippers3, false, false);
	chain1.addProjectToCluster(projects.autoclippers4, false, false);
	chain1.endCluster();

	chain1.addSingleProject(projects.strategicModeling, false, false);
	chain1.addSetFlag("GotMainProjects");
	chain1.addLogSavegame("gotMainProjects");
	chain1.addSingleProject(projects.marketing2, false, false); //45 creat, 4.500 ops -> marketing x 2
	chain1.addSingleProject(projects.marketing1, false, false); //25 creat, 2.500 ops -> marketing x 1,5
	chain1.addSingleProject(projects.algorithmicTrading, true, false);
	chain1.beginCluster();
	//Jetzt ist etwas Zeit für die unwichtigeren (bzw. sogar überflüssigen) Projekte
	chain1.addProjectToCluster(projects.wireBuyer, true, false);
	chain1.addProjectToCluster(projects.revTracker, true, false);
	chain1.endCluster();

	//Nun noch so schnell die verbliebenen Trust-Project wie möglich.
	chain1.beginCluster();
	chain1.addProjectToCluster(projects.trust7, true, false);
	chain1.addProjectToCluster(projects.trust8, false, false);
	chain1.addProjectToCluster(projects.trust11, false, false);
	chain1.endCluster();

	chain1.addWaitForFlag("getYomiProjects");
	chain1.beginCluster();
	chain1.addProjectToCluster(projects.trust9, false, false);
	chain1.addProjectToCluster(projects.trust10, false, false);
	chain1.endCluster();


	//chain2: Die ersten Trust-Projekte, die ausschließliche creativity benötigen.
	//Soll gestartet werden, sobald wireExtrusion1 aktiviert ist und der Verkauf voll läuft. Läuft vermutlich eine Weile.
	chain2.addWaitForProject(projects.wireExtrusion1);
	chain2.addSingleProject(projects.creativity, false, false);
	chain2.addSingleProject(projects.trust1, false, false);
	chain2.addSingleProject(projects.trust2, false, false);
	//Activate for marketing
	//chain2.addWaitForProject(projects.marketing1);

	chain2.addSingleProject(projects.trust3, false, false);
	//Activate for marketing
	//chain2.addWaitForProject(projects.marketing2);

	chain2.addSingleProject(projects.trust4, false, false);
	chain2.addSingleProject(projects.trust6, false, false); //Früher, damit StrategicModelling früher zur Verfügung steht.
	chain2.addSingleProject(projects.trust5, false, false);

	chain2.addWaitForFlag("getStrategies");
	chain2.addSingleProject(projects.stratA100, false, false);
	chain2.addSingleProject(projects.stratB100, false, false);
	chain2.addSingleProject(projects.stratGreedy, false, false);
	chain2.addSingleProject(projects.stratGenerous, false, false);
	chain2.addSingleProject(projects.stratMinimax, false, false);
	chain2.addSingleProject(projects.stratTitForTat, false, false);
	chain2.addSingleProject(projects.stratBeatLast, false, false);
	chain2.addSingleProject(projects.doubleTourney, false, false);
	chain2.addLogSavegame("gotAllStrategies");

	//Chain3: Photonic chips
	chain3.addWaitForFlag("GotMainProjects");
	chain3.addSingleProject(projects.chip2, false, false);
	chain3.addSingleProject(projects.chip3, false, false);
	chain3.addSingleProject(projects.chip4, false, false);
	chain3.addSingleProject(projects.chip5, false, false);
	chain3.addSingleProject(projects.chip6, false, false);
	chain3.addSingleProject(projects.chip7, false, false);
	chain3.addSingleProject(projects.chip8, false, false);
	chain3.addSingleProject(projects.chip9, false, false);
	chain3.addSingleProject(projects.chip10, false, false);

	//Chain4: The things to get whenever they are ready.
	chain4.beginCluster();
	chain4.addProjectToCluster(projects.wireExtrusion5, false, false); //Needs WirePrice above 125. Take whenever it is ready.
	//Activate for quantum
	chain4.addProjectToCluster(projects.marketing3, false, false);

	chain4.addProjectToCluster(projects.hostileTakeover, false, false);
	chain4.addProjectToCluster(projects.fullMonopoly, false, false);
	chain4.endCluster();
	chain4.addSingleProject(projects.strategicAttachment, false, false);
	//Just get the remaining projects. It doesn't matter, but looks much cleaner.
	chain4.beginCluster();
	chain4.addProjectToCluster(projects.nameTheBattles, false, false);
	chain4.addProjectToCluster(projects.honor1, false, false);
	chain4.endCluster();

	chain4.addSingleProject(projects.honor2, false, false);
	chain4.addSingleProject(projects.honor3, false, false);
	chain4.addSingleProject(projects.honor4, false, false);
	chain4.addSingleProject(projects.honor5, false, false);

	chain4.beginCluster();
	chain4.addProjectToCluster(projects.autoTourney, false, false);
	chain4.endCluster();

	chain4.addWaitForFlag("getConsecutiveVictory");
	chain4.addSingleProject(projects.consecutiveVictory, false, false);

	chain5.addSingleProject(projects.megaClippers1, false, false);
	chain5.addSingleProject(projects.megaClippers2, false, false);
	chain5.addSingleProject(projects.megaClippers3, false, false);
	chain5.addSingleProject(projects.megaClippers4, false, false);
	chain5.addLogSavegame("gotMegaclippers");
	chain5.addSingleProject(projects.hypnoDrones, false, false);
	chain5.addLogSavegame("gotHypnoDrones");
	chain5.addWaitForFlag("getGoodwill1");//Bei einer allzu schnellen Abfolge verhaspelt er sich :(
	chain5.addSingleProject(projects.goodwill1, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill2");
	chain5.addSingleProject(projects.goodwill2, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill3");
	chain5.addSingleProject(projects.goodwill3, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill4");
	chain5.addSingleProject(projects.goodwill4, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill5");
	chain5.addSingleProject(projects.goodwill5, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill6");
	chain5.addSingleProject(projects.goodwill6, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill7");
	chain5.addSingleProject(projects.goodwill7, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill8");
	chain5.addSingleProject(projects.goodwill8, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill9");
	chain5.addSingleProject(projects.goodwill9, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill10");
	chain5.addSingleProject(projects.goodwill10, false, false, "skipGoodwill");
	chain5.addWaitForFlag("getGoodwill11");
	chain5.addSingleProject(projects.goodwill11, false, false, "skipGoodwill");
	chain5.addWaitForFlag("fullTrustInvested");
	chain5.addSingleProject(projects.releaseHypnoDrones, false, false);
	chain5.addSingleProject(projects.initPhase2, false, false);
	chain5.addSingleProject(projects.powerGrid1, false, false);
	chain5.addSingleProject(projects.nanoscaleWire, false, false);
	chain5.addSingleProject(projects.harvesterDrones1, false, false);
	chain5.addSingleProject(projects.wireDrones1, false, false);
	chain5.addSingleProject(projects.clipFactories1, false, false);
	chain5.addLogSavegame("phase2ReadyToGo");
	chain5.beginCluster();
	chain5.addProjectToCluster(projects.swarmComputing, false, false);
	chain5.addProjectToCluster(projects.momentum, false, false);
	chain5.endCluster();
	chain5.addSingleProject(projects.clipFactories2, false, false);
	chain5.beginCluster();
	chain5.addProjectToCluster(projects.drones2, false, false);
	chain5.addProjectToCluster(projects.drones3, false, false);
	chain5.addProjectToCluster(projects.drones4, false, false);
	chain5.addProjectToCluster(projects.clipFactories3, false, false);
	chain5.addProjectToCluster(projects.clipFactories4, false, false);
	chain5.endCluster();
	chain5.addWaitForFlag("spaceExploration");
	chain5.addSingleProject(projects.spaceExploration);
	chain5.beginCluster();
	chain5.addProjectToCluster(projects.rebootSwarm);
	chain5.addProjectToCluster(projects.probeProtection);
	chain5.addProjectToCluster(projects.combat);
	chain5.addProjectToCluster(projects.combat2);
	chain5.endCluster();

	projectChains = [chain1.getArray(), chain2.getArray(), chain3.getArray(), chain4.getArray(), chain5.getArray()];
	function ProjectChain() {
		var projectList = [];

		var currentCluster = null;

		this.beginCluster = function () {
			assert(currentCluster == null, "There must not be a current cluster.");
			currentCluster = [];
		};
		this.addProjectToCluster = function (prj, avoidOpsBelowMax, skipIfFlagIsSet) {
			assert(currentCluster != null, "The current cluster must not be null.");
			assert(prj != null, "Project must not be null.");
			currentCluster.push({ prj: prj, avoidOpsBelowMax: avoidOpsBelowMax, stopTournament: false, skipIfFlagIsSet: skipIfFlagIsSet });
		};
		this.endCluster = function () {
			assert(currentCluster != null, "There has to be an open cluster");
			assert(currentCluster.length > 0, "There should always be projects in a cluster.")
			projectList.push({ cmd: "activate", activationDetails: currentCluster });
			currentCluster = null;
		};

		this.addSingleProject = function (prj, avoidOpsBelowMax, stopTournament) {
			this.beginCluster();
			this.addProjectToCluster(prj, avoidOpsBelowMax, stopTournament);
			this.endCluster();
		};

		this.addWaitForProject = function (prj) {
			assert(currentCluster == null, "There must not be a current cluster.");
			assert(prj != null, "Project must not be null.");
			projectList.push({ cmd: "waitForProject", prj: prj });
		};

		this.addWaitForFunction = function (functionId, f) {
			assert(currentCluster == null, "There must not be a current cluster.");
			projectList.push({ cmd: "waitForFunction", functionId: functionId, f: f });
		};

		this.addSetFlag = function (flag) {
			assert(currentCluster == null, "There must not be a current cluster.");
			projectList.push({ cmd: "setFlag", flag: flag });
		};

		this.addWaitForFlag = function (flag) {
			assert(currentCluster == null, "There must not be a current cluster.");
			projectList.push({ cmd: "waitForFlag", flag: flag });
		};

		this.addLogSavegame = function (name) {
			assert(currentCluster == null, "There must not be a current cluster.");
			projectList.push({ cmd: "logSavegame", name: name });
		};

		this.getArray = function () {
			assert(currentCluster == null, "The current cluster is not finished yet.");
			return projectList;
		};
	}

	engineState.goalsReached = {
		goalIWE: null,
		goalQuantum: null,
		goalChip1: null,
		goalTakeover: null,
		goalMonopoly: null,
		goalHypnodrones: null,
		goalMomentum: null,
		goalSextillion: null,
		goalSpace: null,
		goalDone: null,
		goal500: null,
		goal1k: null,
		goal10k: null,
		goal100k: null,
		goal1million: null,
		goal1billion: null,
		goal1trillion: null,
		goal1quadrillion: null,
		goal1quintillion: null,
		goal1sextillion: null,
		goal1septillion: null,
		goal1octillion: null,
		goal1nonillion: null,
		goal1decillion: null,
		goal1undecillion: null,
		goal1duodecillion: null,
		goal1tredecillion: null,
		goal1quattuordecillion: null,
		goal1quindecillion: null,
		goal1sexdecillion: null,
	};

	function setGoal(id) {
		log("Reached goal: " + id);
		$(id).innerText = toTimeString(ticks * 10).substr(0, 7);
		engineState.goalsReached[id] = ticks * 10;
	}

	function prepareContainers() {
		var mainContainer = document.createElement("div");
		mainContainer.style.position = "fixed";
		mainContainer.style.top = "30px";
		mainContainer.style.left = "1000px";
		//mainContainer.style.position = "relative";
		//mainContainer.style.top = "-55px";
		//mainContainer.style.float = "left";
		//mainContainer.style.marginLeft = "10px";
		mainContainer.style.backgroundColor = "white";
		mainContainer.addEventListener("dblclick", function () { var cont = $("assistantsContainer"); cont.style.display = cont.style.display == "none" ? "" : "none"; });
		mainContainer.innerHTML = '<h1>Goals (TAS)</h1><div style="float:left;margin-right: 20px;"><table><colgroup><col /><col style="align: right; width: 50px;" /></colgroup>' +
			'<tr><td>Improved Wire Ext.:</td><td id="goalIWE"></td></tr>' +
			'<tr><td>Quantum computing:</td><td id="goalQuantum"></td></tr>' +
			'<tr><td>First photonic chip:</td><td id="goalChip1"></td></tr>' +
			'<tr><td>Hostile takeover:</td><td id="goalTakeover"></td></tr>' +
			'<tr><td>Full monopoly:</td><td id="goalMonopoly"></td></tr>' +
			'<tr><td>Release Hypnodrones:</td><td id="goalHypnodrones"></td></tr>' +
			'<tr><td>Momentum:</td><td id="goalMomentum"></td></tr>' +
			'<tr><td>1 sextillion clips:</td><td id="goalSextillion"></td></tr>' +
			'<tr><td>Space exploration:</td><td id="goalSpace"></td></tr>' +
			'<tr><td>Done:</td><td id="goalDone"></td></tr>' +
			'</table></div>' +
			'<div style="float:left;"><table><colgroup><col /><col style="align: right; width: 50px;" /></colgroup>' +
			'<tr><td>500 clips:</td><td id="goal500"></td></tr>' +
			'<tr><td>1k clips:</td><td id="goal1k"></td></tr>' +
			'<tr><td>10k clips:</td><td id="goal10k"></td></tr>' +
			'<tr><td>100k clips:</td><td id="goal100k"></td></tr>' +
			'<tr><td>1 million clips:</td><td id="goal1million"></td></tr>' +
			'<tr><td>1 billion clips:</td><td id="goal1billion"></td></tr>' +
			'<tr><td>1 trillion clips:</td><td id="goal1trillion"></td></tr>' +
			'<tr><td>1 quadrillion clips:</td><td id="goal1quadrillion"></td></tr>' +
			'<tr><td>1 quintillion clips:</td><td id="goal1quintillion"></td></tr>' +
			'<tr><td>1 sextillion clips:</td><td id="goal1sextillion"></td></tr>' +
			'<tr><td>1 septillion clips:</td><td id="goal1septillion"></td></tr>' +
			'<tr><td>1 octillion clips:</td><td id="goal1octillion"></td></tr>' +
			'<tr><td>1 nonillion clips:</td><td id="goal1nonillion"></td></tr>' +
			'<tr><td>1 decillion clips:</td><td id="goal1decillion"></td></tr>' +
			'<tr><td>1 undecillion clips:</td><td id="goal1undecillion"></td></tr>' +
			'<tr><td>1 duodecillion clips:</td><td id="goal1duodecillion"></td></tr>' +
			'<tr><td>1 tredecillion clips:</td><td id="goal1tredecillion"></td></tr>' +
			'<tr><td>1 quattuordecillion clips:</td><td id="goal1quattuordecillion"></td></tr>' +
			'<tr><td>1 quindecillion clips:</td><td id="goal1quindecillion"></td></tr>' +
			'<tr><td>1 sexdecillion clips:</td><td id="goal1sexdecillion"></td></tr>' +
			'</table></div>' +
			'<div id="assistantsContainer" style="float:left;background-color: yellow; padding: 10px; display: none"></div>' +
			'<div id="messages" style="padding-top: 20px; clear:both;width: 400px"></div>';
		document.body.appendChild(mainContainer);
	}

	var showMessageTimeout = null;

	function showMessage(message, markArea, timeout, callback) {
		$("messages").innerHTML = message;
		if (markArea != null) {
			var marker = $("messageMarker");
			if (marker == null) {
				marker = document.createElement("div");
				marker.style = "border: 3px solid red;position:absolute;";
				marker.id = "messageMarker";
				document.body.appendChild(marker);
			}
			marker.style.top = markArea.top;
			marker.style.left = markArea.left;
			marker.style.height = markArea.height;
			marker.style.width = markArea.width;
			marker.style.display = "block";
		} else if (marker != null) {
			marker.style.disply = "none";
		}

		if (showMessageTimeout != null) {
			window.clearTimeout(showMessageTimeout);
		}
		if (timeout != null) {
			showMessageTimeout = window.setTimeout(function () {
				$("messages").innerText = "";
				if (marker != null) {
					marker.style.display = "none";
				}
				if (callback != null) {
					callback();
				}
			}, timeout);
		}
	}

	function showMessages(toShow) {
		var first = toShow[0];
		var i = 0;
		showMessage(first.text, first.marker, first.timeout, callback);
		function callback() {
			i++;
			if (i < toShow.length) {
				var next = toShow[i];
				showMessage(next.text, next.marker, next.timeout, callback);
			}
		}
	}

	var defaultTimeout = 30000;
	showMessages([
		{ text: "<p>Welcome to my TAS.</p><p>You are watching a Tool-assisted-speedrun: all actions are executed automatically. A human would be able to play this in theory - if he could act fast enough.</p>", timeout: defaultTimeout },
		{ text: "<p>This is in no way meant to show playing skill.</p><p>It's all about trying to find the fastest automated way of beating the game.</p>", timeout: defaultTimeout },
		{ text: "<p>The first goal is to establish a continuing flow of clips. For this, &quot;Improved Wire Extrusion&quot; is required.</p><p>Let's wait for that to happen.</p>" },
	]);
	var messagesUntilQuantum = [
		{ text: "<p>Next stop: &quot;Quantum Computing&quot;.</p><p>Since a TAS can click pretty fast, quantum computing can generate ops really quickly. Thus getting the first photonic chip as quickly as possible is the decisive factor here.</p>" },
	];
	var messagesAfterQuantum = [
		{ text: "<p>Now that we have the first photonic chip, operations are not an issue anymore (at least for the moment). Thus we get the most important projects now to ramp up the production.</p>", timeout: defaultTimeout },
		{ text: "<p>As soon as we have strategic modeling, we will start to build up yomi.</p>" },
	];
	var messagesAfterAlgorithmicTrading = [
		{ text: "<p>Finally, we got algorithmic trading. As soon as we have marketing level 9, we will start buying stocks.</p>", timeout: defaultTimeout },
		{ text: "<p>The logic for the stocks is pretty simple: Every few seconds (random), the price of a stock gets updated. First, the game determines the amount the price will change by. If a higher risk-level is chosen, this amount tends to be higher.</p>", timeout: defaultTimeout },
		{ text: "<p>After the amount has been set, the game decides, whether this amount is gained or lost. Having a good investment-engine helps in this step - and in this step only.</p>", timeout: defaultTimeout },
		{ text: "<p>Let's wait for marketing level 9 now before investments will start.</p>" },
	];
	var messagesOnInvest = [
		{ text: "<p>Starting investment now.</p>" },
	];
	var messagesAfterInvest = [
		{ text: "<p>Investing is finished.</p><p>Waiting for enough money to get hostile takeover and full monopoly now.</p>" },
	];
	var messagesAfterHuman = [
		{ text: "<p>Phase 2 is pretty straightforward: since there is no money anymore, the only bottleneck is the production of clips.</p><p>There are three possible bottlenecks in the production: factories, wire-drones and harvester-drones. The TAS does always create the type that is the current bottleneck.</p>", timeout: 30000 },
		{ text: "<p>For momentum, 30 solar factories are required. That is the next goal.</p>" },
	];
	var messagesAfterMomentum = [
		{ text: "<p>Got momentum. Production will increase steadily now.</p>", timeout: defaultTimeout },
		{ text: "<p>The next big goal is one sextillion clips. When reaching this, all facilities will be disassembled to get the project.</p>" },
	];
	var messagesAfter1Sext = [
		{ text: "<p>That was the last important project on earth. We will harvest 5 oct now and use the time to get some swarm-gifts.</p><p>If we only had a single drone less, the gift would be smaller. For a bigger gift, about 5.6 million drones would be needed. That is not worth the wait.</p>" },
	];
	var messageAfterSpace = [
		{ text: "<p>Finally reached the space-era. The first step is simple: launch probes as quickly as possible.</p>", timeout: defaultTimeout },
		{ text: "<p>The rest is pretty straightforward as well: never run out of clips and waste as little time producing drones and factories.</p>", timeout: defaultTimeout },
		{ text: "<p>We try to keep as little drones and factories as possible of course. There is also some micro-management going on for combats to avoid wasting points for combat when they are not needed.</p>", timeout: defaultTimeout },
		{ text: "<p>After some time, very little drones are needed only and the small amount is hard to control. But if the ratio of the drone-types is bigger than 1.5 for too long, the swarm becomes disorganized. This will be avoided of course.</p>", timeout: defaultTimeout },
		{ text: "<p>Since there is not much left to do, now is the right moment to talk about the technical details.</p>", timeout: defaultTimeout },
		{ text: "<p>The TAS has been implemented using a Greasemonkey-script that runs in chrome.</p>", timeout: defaultTimeout },
		{ text: "<p>All it does, is read the values from the site and click the buttons. Just like a player would do. No cheats are involved.</p>", timeout: defaultTimeout },
		{ text: "<p>It uses about 20 different strategies for the different goals and triggers a total 95 projects.</p>", timeout: defaultTimeout },
		{ text: "<p>Now we just have to wait for 154 nonillion drones.</p>" },
	];

	var messagesDone = [
		{ text: "<p>This is it! The game is finished.</p>" },
	];

	function remainingGoodwillCost() {
		if (!projectActivated(projects.goodwill1)) {
			return 1023.5 * funds1M;
		} else if (!projectActivated(projects.goodwill2)) {
			return 1023 * funds1M;
		} else if (!projectActivated(projects.goodwill3)) {
			return 1022 * funds1M;
		} else if (!projectActivated(projects.goodwill4)) {
			return 1020 * funds1M;
		} else if (!projectActivated(projects.goodwill5)) {
			return 1016 * funds1M;
		} else if (!projectActivated(projects.goodwill6)) {
			return 1008 * funds1M;
		} else if (!projectActivated(projects.goodwill7)) {
			return 992 * funds1M;
		} else if (!projectActivated(projects.goodwill8)) {
			return 960 * funds1M;
		} else if (!projectActivated(projects.goodwill9)) {
			return 896 * funds1M;
		} else if (!projectActivated(projects.goodwill10)) {
			return 768 * funds1M;
		} else if (!projectActivated(projects.goodwill11)) {
			return 512 * funds1M;
		} else {
			return 0;
		}
	}

	var funds1M = 100000000;
	var funds10M = 1000000000;
	var funds100M = 10000000000;

	engineState.deinvest = {
		state: null,
		deinvested: 0,
		tasks: null
	};

	engineState.deinvestAboveThreshold = {
		status: "waiting",
		deinvested: 0,
		reinvested: 0
	};

	engineState.watchMonopolyProjects = {
		gotHostileTakeover: false,
	};

	engineState.manageInvestments = {
		state: null,
		deinvested: 0,
		tasks: null,
	};

	engineState.deposited = 0;

	engineState.clipGoals = {
		reached: 0
	};

	var taskFunctions = {
		watchMonopolyProjects: function (me) {
			if (!engineState.watchMonopolyProjects.gotHostileTakeover && projectActivated(projects.hostileTakeover)) {
				setGoal("goalTakeover");
				engineState.watchMonopolyProjects.gotHostileTakeover = true;
			}
			if (projectActivated(projects.fullMonopoly)) {
				setGoal("goalMonopoly");
				stopTask(me);
			}
		},
		deposit100k: function (me) {
			var funds = getFunds();
			if (funds >= 100000 && getWireCount() > 10000) {
				click(btnDeposit);
				engineState.deposited += funds;
				if (engineState.deposited >= 10000000) { //100k
					logSavegame("deposited100k");
					assistants.phase1Rampup.start();
					log("Deposited 100k in funds.");
					engineState.manageInvestments.state = "waitForTaskTarget";
					engineState.manageInvestments.tasks = [
						{ waitForInvestmentTotal: 10 * funds1M, targetDeinvest: 0, targetReinvest: 0, waitForProjectName: "hostileTakeover", projectCost: funds1M },
						{ waitForInvestmentTotal: 100 * funds1M, targetDeinvest: 0, targetReinvest: 0, waitForProjectName: "fullMonopoly", projectCost: funds10M },
						{ waitForInvestmentTotal: remainingGoodwillCost(), sellAll: true },
					];
					showMessages(messagesAfterInvest);
					nextTask(me, "manageInvestments");
				}
			}
		},
		manageInvestments: function (me) {
			//Der Task durchläuft einen Zyklus:
			//1.) Warte auf investmentTotal oder investmentCash
			//2.) Warte auf ausreichenden Deinvest
			//3.) Warte auf das Projekt
			//4.) Reinvestiere wieder (das, was zu viel deinvestiert wurde und das, was zusätzlich wieder investiert werden soll.)
			var state = engineState.manageInvestments;
			var stateChanged = true;
			while (stateChanged) {
				stateChanged = false;
				var currentTask = state.tasks[0];
				switch (state.state) {
					case "waitForTaskTarget":
						var investmentTotal = getInvestmentTotal();
						var investmentCash = getInvestmentCash();
						if (investmentTotal >= currentTask.waitForInvestmentTotal) {
							log("investmentTaskReached: " + JSON.stringify(currentTask));
							logSavegame("investmentTaskReached");
							if (currentTask.sellAll) {
								state.state = "sellAll";
								state.deinvested = 0;
								stateChanged = true;
							} else {
								state.state = "deinvest";
								state.deinvested = 0;
								state.reinvested = 0;
								stateChanged = true;
							}
						}
						break;
					case "deinvest":
						var investmentCash = getInvestmentCash();
						if (investmentCash > 0) {
							click(btnWithdraw);
							state.deinvested += investmentCash;
							var totalTargetDeinvest = currentTask.targetDeinvest + currentTask.projectCost;
							engineState.assPhase1Rampup.protectFunds = fundsToProtectAfterDeinvest(state, currentTask);
							if (state.deinvested > totalTargetDeinvest) {
								state.state = "waitForProject";
								stateChanged = true;
							}
						} else if (getInvestmentTotal() == 0) {
							log("Could not deinvest enough due to losses probably.");
							autoReset("deinvestFailed");
							stopTask(me);
						}
						break;
					case "waitForProject":
						if (currentTask.waitForProjectName == null || projectActivated(projectsByName[currentTask.waitForProjectName])) {
							engineState.assPhase1Rampup.protectFunds = fundsToProtectAfterDeinvest(state, currentTask);
							state.state = "waitForReinvest";
							phase1RampupIsSavingUp = false;
							stateChanged = true;
						}
						break;
					case "waitForReinvest":
						var funds = getFunds();
						var wireCount = getWireCount();
						if (getWireCount() > 0 && funds >= Math.max(5000, currentTask.targetReinvest / 100) && (currentTask.targetDeinvest == 0 || phase1RampupIsSavingUp)) {
							//Es kann wieder reinvestiert werden: Es ist etwas Geld da, aber auch nicht zu viel (das wird ja dann der allgemeinen Verfügung entzogen).
							click(btnDeposit);
							state.reinvested += funds;
							engineState.assPhase1Rampup.protectFunds = Math.max(0, currentTask.targetReinvest - state.reinvested);
							if (engineState.assPhase1Rampup.protectFunds == 0) {
								//Der Task ist abgeschlossen -> auf zum nächsten.
								state.deinvested = 0;
								state.reinvested = 0;

								state.tasks.shift();

								if (state.tasks.length == 0) {
									//Done!
									stopTask(me);
								} else {
									state.state = "waitForTaskTarget";
									//Kein stateChanged = true, falls die Funds nicht rechtzeitig ein Update erhalten.
									//Dürfte für die Laufzeit egal sein.
								}
							}
						}
						break;
					case "sellAll":
						var investmentCash = getInvestmentCash();
						if (investmentCash > 0) {
							click(btnWithdraw);
							state.deinvested += investmentCash;
							engineState.assPhase1Rampup.protectFunds = Math.min(remainingGoodwillCost(), state.deinvested);
						}
						if (getInvestmentTotal() == 0) {
							stopTask(me);
						}
						break;
					default:
						throw new Error("Unexpected state: " + state.state);
				}
			}

			function allStocksActive() {
				return getStock5Name().trim() != "" && getStock5Name().trim() != getStock4Name().trim();
			}

			function fundsToProtectAfterDeinvest(state, currentTask) {
				var totalTargetDeinvest = currentTask.targetDeinvest + currentTask.projectCost;
				//state.deinvested zerfällt in drei Teile:
				//1.) Der Teil, der für das Projekt deinvestiert wurde (schutzwürdig, bis das Projekt aktiviert wurde).
				//2.) Der Teil, der zur allgemeinen Verfügung deinvestiert wurde (nicht schutzwürdig).
				//3.) Der Teil, der zu viel deinvestiert wurde bzw. wieder reinvestiert werden soll (schutzwürdig).
				//Wenn in einem Task gleichzeitig de- und reinvestiert werden soll, macht das überhaupt keinen Sinn, schadet aber auch nicht.
				//state.reinvested ist der Teil, der bereits wieder reinvestiert wurde, wird also vom schutzwürdigen Teil abgezogen.
				var protectProject = currentTask.waitForProjectName == null || !projectActivated(projectsByName[currentTask.waitForProjectName]);
				var deinvestedForProject = Math.min(state.deinvested, currentTask.projectCost);

				var deinvestedTooMuch = Math.max(0, state.deinvested - totalTargetDeinvest);

				var max = state.deinvested - (protectProject ? 0 : deinvestedForProject) - state.reinvested;
				return Math.max(0, Math.min(max, (protectProject ? deinvestedForProject : 0) + Math.max(currentTask.targetReinvest, deinvestedTooMuch) - state.reinvested));
			}
		},
		clipGoals: function (me) {
			switch (engineState.clipGoals.reached) {
				case 0:
					if (getTotalClips() >= 500) {
						setGoal("goal500");
						engineState.clipGoals.reached++;
					}
					break;
				case 1:
					if (getTotalClips() >= 1000) {
						setGoal("goal1k");
						engineState.clipGoals.reached++;
					}
					break;
				case 2:
					if (getTotalClips() >= 10000) {
						setGoal("goal10k");
						engineState.clipGoals.reached++;
					}
					break;
				case 3:
					if (getTotalClips() >= 100000) {
						setGoal("goal100k");
						engineState.clipGoals.reached++;
					}
					break;
				case 4:
					if (getTotalClips() >= factors.million) {
						setGoal("goal1million");
						engineState.clipGoals.reached++;
					}
					break;
				case 5:
					if (getTotalClips() >= factors.billion) {
						setGoal("goal1billion");
						engineState.clipGoals.reached++;
					}
					break;
				case 6:
					if (getTotalClips() >= factors.trillion) {
						setGoal("goal1trillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 7:
					if (getTotalClips() >= factors.quadrillion) {
						setGoal("goal1quadrillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 8:
					if (getTotalClips() >= factors.quintillion) {
						setGoal("goal1quintillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 9:
					if (getTotalClips() >= factors.sextillion) {
						setGoal("goal1sextillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 10:
					if (getTotalClips() >= factors.septillion) {
						setGoal("goal1septillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 11:
					if (getTotalClips() >= factors.octillion) {
						setGoal("goal1octillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 12:
					if (getTotalClips() >= factors.nonillion) {
						setGoal("goal1nonillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 13:
					if (getTotalClips() >= factors.decillion) {
						setGoal("goal1decillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 14:
					if (getTotalClips() >= factors.undecillion) {
						setGoal("goal1undecillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 15:
					if (getTotalClips() >= factors.duodecillion) {
						setGoal("goal1duodecillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 16:
					if (getTotalClips() >= factors.tredecillion) {
						setGoal("goal1tredecillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 17:
					if (getTotalClips() >= factors.quattuordecillion) {
						setGoal("goal1quattuordecillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 18:
					if (getTotalClips() >= factors.quindecillion) {
						setGoal("goal1quindecillion");
						engineState.clipGoals.reached++;
					}
					break;
				case 19:
					if (getTotalClips() >= factors.sexdecillion) {
						setGoal("goal1sexdecillion");
						stopTask(me);
					}
					break;
			}
		}
	};

	engineState.tasks = {};
	engineState.flags = {};
	function isFlagSet(flag) {
		return engineState.flags[flag];
	}
	function setFlag(flag) {
		if (isFlagSet(flag)) {
			log("Flag is already set: " + flag);
		} else {
			engineState.flags[flag] = true;
			log("Setting flag: " + flag);
		}
	}

	function startTask(name) {
		log("Starting task: " + name);
		engineState.tasks[name] = true;
	}
	function stopTask(name) {
		log("Stopping task: " + name);
		delete engineState.tasks[name];
	}
	function nextTask(toStop, toStart) {
		stopTask(toStop);
		startTask(toStart);
	}
	engineState.phases = {
		phase3FullyExploredCounter: 0
	};

	var timer = 0;
	function strategyMain() {
		for (var task in engineState.tasks) {
			if (engineState.tasks.hasOwnProperty(task)) {
				taskFunctions[task](task);
			}
		}
		switch (engineState.currentPhase) {
			case 1:
				assistants.fireClips.start();
				assistants.logStatus.start();
				assistants.computingTargets.start();
				assistants.projectTargets.start();
				assistants.wireCostChecker.start(); //Just to have a decent state when needed..
				assistants.resetFailedGames.start();

				engineState.assCheapAutobuy.mode = "WireRange";
				engineState.assCheapAutobuy.stopAtWireRangeMs = 60000;
				assistants.cheapAutobuy.start();
				engineState.assPhase1Rampup.protectCheapWireBuyer = true;
				engineState.tasks.clipGoals = true;
				setPrice(3);
				log("Init is done. Now producing to reach marketing level 2.");
				engineState.currentPhase++;
				break;
			case 2:
				if (projectActivated(projects.wireExtrusion1)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setGoal("goalIWE");
					showMessages(messagesUntilQuantum);
					assistants.balancePriceDirect.start();
					assistants.phase1Rampup.start();
					engineState.currentPhase++;
					log("Got wireExtrusion. Waiting for quantum computing now.");
				}
				break;
			case 3:
				if (projectActivated(projects.quantum)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setGoal("goalQuantum");
					engineState.currentPhase++;
					log("Got quantum computing. Waiting for chip1 now.");
				}
			case 4:
				if (projectActivated(projects.chip1)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					showMessages(messagesAfterQuantum);
					setGoal("goalChip1");
					assistants.autoQuantum.start();
					log("Got the first photonic chip. Waiting for strategic modelling now.");
					engineState.currentPhase++;
					strategyMain();
				}
				break;
			case 5:
				if (projectActivated(projects.strategicModeling)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					engineState.assAutoTournament.aboveMaxOnly = true;
					assistants.autoTournament.start();
					assistants.autoInvestment.start();
					log("Got strategic modeling. Waiting to get marketing-project \"Catchy Jingle\" now.");
					engineState.currentPhase++;
				}
				break;
			case 6:
				if (projectActivated(projects.algorithmicTrading)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					showMessages(messagesAfterAlgorithmicTrading);
					engineState.currentPhase++;
				}
			case 7:
				if (getMarketingLevel() >= 9) {
					/* Zwischen Megaclipper 9 und 10. */
					logSavegame("event" + engineState.currentPhase + "Reached");
					assistants.cheapAutobuy.stop(); //Does not really do anything anymore.
					engineState.assPhase1Rampup.protectCheapWireBuyer = false;
					assistants.phase1Rampup.stop();
					riskPicker.value = "hi";
					showMessages(messagesOnInvest);
					engineState.tasks.deposit100k = true;
					engineState.tasks.watchMonopolyProjects = true;
					log("Got 10 megaclippers megaclipper. Started task to deposit 100k.");
					engineState.currentPhase++;
				}
				break;
			case 8:
				engineState.currentPhase++;
				break;
			case 9:
				if (getInvestmentLevel() >= 9) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setFlag("getYomiProjects");
					engineState.currentPhase++;
				}
				break;
			case 10:
				if (getCreativity() >= 25000 && ticks * 10 - engineState.assQuantum.cycleStartTime < 500) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setFlag("getStrategies");
					assistants.autoTournament.stop();
					log("Getting all the strategies to increase yomi now.")
					engineState.currentPhase++;
				}
				break;
			case 11:
				if (projectActivated(projects.doubleTourney)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					assistants.autoTournament.start();
					assistants.selectBestStrategy.start();
					log("Get all the strategies");
					engineState.currentPhase++;
				}
				break;
			case 12:
				if (getFunds() > 1023 * funds1M) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setFlag("getGoodwill1");
					engineState.currentPhase++;
				}
				break;
			case 13:
				var timerThreshold = 1;
				if (!isFlagSet("getGoodwill2")) {
					if (projectActivated(projects.goodwill1) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill2");
					}
				} else if (!isFlagSet("getGoodwill3")) {
					if (projectActivated(projects.goodwill2) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill3");
					}
				} else if (!isFlagSet("getGoodwill4")) {
					if (projectActivated(projects.goodwill3) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill4");
					}
				} else if (!isFlagSet("getGoodwill5")) {
					if (projectActivated(projects.goodwill4) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill5");
					}
				} else if (!isFlagSet("getGoodwill6")) {
					if (projectActivated(projects.goodwill5) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill6");
					}
				} else if (!isFlagSet("getGoodwill7")) {
					if (projectActivated(projects.goodwill6) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill7");
					}
				} else if (!isFlagSet("getGoodwill8")) {
					if (projectActivated(projects.goodwill7) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill8");
					}
				} else if (!isFlagSet("getGoodwill9")) {
					if (projectActivated(projects.goodwill8) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill9");
					}
				} else if (!isFlagSet("getGoodwill10")) {
					if (projectActivated(projects.goodwill9) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill10");
					}
				} else if (!isFlagSet("getGoodwill11")) {
					if (projectActivated(projects.goodwill10) && timer++ > timerThreshold) {
						timer = 0;
						setFlag("getGoodwill11");
					}
				} else if (projectActivated(projects.goodwill11)) {
					engineState.assPhase1Rampup.protectFunds = 0;
					if (getProcessors() + getMemory() >= 100 && getTotalClips() > 112000000) {
						logStatus();
						logSavegame("event" + engineState.currentPhase + "Reached");
						if (engineState.tasks.manageInvestments) {
							log("Deinvest aborted.");
							stopTask("manageInvestments");
						}
						setFlag("fullTrustInvested");
						engineState.currentPhase++;
					}
				}
				break;
			case 14:
				if (projectActivated(projects.releaseHypnoDrones)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setGoal("goalHypnodrones");
					showMessages(messagesAfterHuman);
					assistants.balancePriceDirect.stop();
					assistants.wireCostChecker.stop();
					assistants.phase1Rampup.stop();
					engineState.currentPhase++;
				}
			case 15:
				var solarFarmCount = getSolarFarmCount();
				var harvesterDroneCount = getHarvesterDroneCount();
				var wireDroneCount = getWireDroneCount();
				var clipFactoryCount = getClipFactoryCount();
				if (solarFarmCount == 0 && projectActivated(projects.powerGrid1)) {
					click(btnMakeSolarFarm);
				}
				if (harvesterDroneCount == 0 && projectActivated(projects.harvesterDrones1)) {
					click(btnMakeHarvesterDrone);
				}
				if (wireDroneCount == 0 && projectActivated(projects.wireDrones1)) {
					click(btnMakeWireDrone);
				}
				if (clipFactoryCount == 0 && projectActivated(projects.clipFactories1)) {
					click(btnMakeClipFactory);
				}
				if (solarFarmCount == 1 && harvesterDroneCount == 1 && wireDroneCount == 1 && clipFactoryCount == 1) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					engineState.assPhase2Rampup1.reduceWorkFactorAt50Factories = true;
					engineState.assPhase2Rampup1.stopAt500And10 = true;
					engineState.assPhase2Rampup1.stopAt5k = true;
					assistants.phase2Rampup1.start();
					assistants.fireClips.stop(); //Doesn't matter anymore.
					engineState.assAutoTournament.aboveMaxOnly = false;
					if (getYomi() < 36000) {
						log("Not enough yomi, aborting.");
						engineState.currentPhase = 1000;
					}
					engineState.currentPhase++;
				}
				break;
			case 16:
				if (projectActivated(projects.momentum)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setGoal("goalMomentum");
					showMessages(messagesAfterMomentum);
					engineState.currentPhase++;
				}
				break;
			case 17:
				if (getClipFactoryCount() >= 10) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					//Ops for the next few projects will not suffice for projects clipFactories2 & 3 and drones2 & 3, since these will cost ops: 80k, 85k, 80k, 100k -> temporarily stop tournaments until all are reached.
					assistants.autoTournament.stop();
					engineState.currentPhase++;
				}
				break;
			case 18:
				if (projectActivated(projects.drones2) && projectActivated(projects.clipFactories2)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					//Start ramping up again.
					engineState.assPhase2Rampup1.stopAt500And10 = false;
					engineState.currentPhase++;
				}
				break;
			case 19:
				if (projectActivated(projects.drones3) && projectActivated(projects.clipFactories3)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					//Will get more memory later. Start auto tournaments again.
					assistants.autoTournament.start();
					//Start ramping up again.
					engineState.assPhase2Rampup1.stopAt5k = false;
					engineState.currentPhase++;
				}
				break;
			case 20:
				if (projectActivated(projects.drones4) && getClipFactoryCount() >= 50
					&& getTotalClips() >= 1001 * factors.quintillion) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setGoal("goalSextillion");
					//DisassembleAll
					assistants.phase2Rampup1.stop();
					engineState.assPhase2Rampup1.reduceWorkFactorAt50Factories = false;
					click(btnDisassembleClipFactories);
					click(btnDisassembleHarvesterDrones);
					click(btnDisassembleWireDrones)
					click(btnDisassembleSolarFarms);
					engineState.currentPhase++;
				}
				break;
			case 21:
				if (projectActivated(projects.clipFactories4)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					showMessages(messagesAfter1Sext);
					//Got 1 sextillion clips.
					engineState.assPhase2Rampup1.reduceWorkFactorAt50Factories = false;
					assistants.phase2Rampup1.start();
					engineState.currentPhase++;
				}
				break;
			case 22:
				if (getClipFactoryCount() >= 171) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					assistants.phase2Rampup1.stop();
					assistants.phase2Rampup2.start();
					engineState.currentPhase++;
				}
				break;
			case 23:
				if (getTotalClips() > 5 * factors.octillion + 2 * factors.sextillion /* 1 sext reserve for space age, about 1 sext is lost somewhere. */) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					assistants.phase2Rampup2.stop();
					click(btnDisassembleClipFactories);
					click(btnDisassembleHarvesterDrones);
					click(btnDisassembleWireDrones);
					click(btnDisassembleSolarFarms);
					setFlag("spaceExploration");
					engineState.currentPhase++;
				}
				break;
			case 24:
				if (projectActivated(projects.spaceExploration)) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setGoal("goalSpace");
					showMessages(messageAfterSpace);
					assistants.autoLaunchProbes.start();
					thinkWorkSlider.value = 200; //Do not work at all while using up the remaining supplies.
					assistants.phase3Rampup1.start();
					engineState.currentPhase++;
				}
				break;
			case 25:
				var totalProbes = getTotalProbes();
                /*
                Code zur Ermittlung der Exit-Strategie
                if (finalPhaseStarted == null && totalProbes >= 100 * factors.nonillion) {
                    log("Final phase started");
                    finalPhaseStarted = ticks * 10;
                }
                */
				if (totalProbes > phase3FinalStrategy.exitAt * factors.nonillion) { //148 nonillion sind numerisch ermittelt.
					logSavegame("event" + engineState.currentPhase + "Reached");
					assistants.phase3Rampup1.stop();
					assistants.phase3Rampup2.start();
					//Get this for the sake of cleanliness.
					setFlag("getConsecutiveVictory");
					engineState.currentPhase++;
				}
				break;
			case 26:
				if (getPercentExplored() >= 100) {
					engineState.phases.phase3FullyExploredCounter++;
				}
				if (engineState.phases.phase3FullyExploredCounter > 1 && getAvailableMatter() == 0) {
					logSavegame("event" + engineState.currentPhase + "Reached");
					setGoal("goalDone");
					showMessages(messagesDone);
					//The game is finished.
					//Stop all assistants and restore a stable state.
					assistants.phase3Rampup2.stop();
					assistants.computingTargets.stop();
					assistants.projectTargets.stop();
					assistants.autoQuantum.stop();
					assistants.autoTournament.stop();
					assistants.selectBestStrategy.stop();
					assistants.logStatus.stop();
					assistants.resetFailedGames.stop();
					thinkWorkSlider.value = 200;
					var trustDistribution = { speed: 0, exploration: 0, replication: 0, hazardRemediation: 0, factoryProduction: 0, harvesterDroneProduction: 0, wireDroneProduction: 0, combat: 0 };
					fillRemainingTrust(trustDistribution);
					applyTrust(trustDistribution);
                    /*
                    Reset-Code für die Ermittlung der besten Exit-Strategie.
                    var time = ticks * 10 - finalPhaseStarted;
					log("Finished final phae in " + ticks + "ms");
					if (phase3FinalExperiments.bestTime == null || time < phase3FinalExperiments.bestTime) {
						phase3FinalExperiments.bestTime = time;
						phase3FinalExperiments.bestStrategy = phase3FinalStrategy;
					}
                    localStorage.setItem("phase3FinalExperiments", JSON.stringify(phase3FinalExperiments));
					//Reset the game
					log("ExperimentStatus: " + JSON.stringify(phase3FinalExperiments));
					//downloadLogs("phase3FinalExperiments");
					autoReset("Experiment finished");
                    */

					engineState.currentPhase++;
				}
				break;
			case 27:
				var hasKey = false;
				for (var key in engineState.tasks) {
					if (engineState.tasks.hasOwnProperty(key)) {
						hasKey = true;
						break;
					}
				}
				if (!hasKey) {
					log("No more strategy");
					assAutoStrategy.stop();
				}
				break;
			default:
				assAutoStrategy.stop();
				throw new Error("Unknown phase: " + engineState.currentPhase);
		}
	}

})();
