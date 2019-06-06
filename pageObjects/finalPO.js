var finalCommands = {
    login: function () {
        this
            .waitForElementPresent('@login', 20000)
            .click('@login')
            .waitForElementPresent('@twitch', 20000)
            .click('@twitch')
            .waitForElementPresent('@username', 20000)
            .setValue('@username', '**************')
            .setValue('@password', '**************')
            .click('@tLogin')
            .waitForElementPresent('@authorize', 20000)
            .click('@authorize')
        return this
    },
    makeCharacter: function (testData) {
        testData.forEach(test => {
            this
                .waitForElementPresent('@characters', 20000)
                .click('@characters')
                .waitForElementPresent('@createCharacter', 20000)
                .click('@createCharacter')
                .waitForElementPresent('@standard', 20000)
                .click('@standard')
                .waitForElementPresent('@cName', 20000)
                .clearValue('@cName')
                .setValue('@cName', test.name)
                .click('@nextButton')
                .waitForElementPresent(test.race, 20000)
                .click(test.race)
                .waitForElementPresent('@chooseRace', 20000)
                .click('@chooseRace')
                .pause(1500)
            switch (test.raceName) {
                case 'dragonborn':
                    this
                        .waitForElementPresent('@draconicAncestry', 20000)
                        .click('@draconicAncestry')
                        .waitForElementPresent('@pickAncestry', 20000)
                        .click('@pickAncestry') //Black Dragon
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'half-elf':
                    this
                        .waitForElementPresent('@scoreIncrease', 20000)
                        .click('@scoreIncrease')
                        .waitForElementPresent('@increase1', 20000)
                        .click('@increase1') //Constitution Score
                        .click('@increase2') //Dexterity Score
                        .click('@skillVersatility')
                        .waitForElementPresent('@skill1', 20000)
                        .click('@skill1') //Acrobatics
                        .click('@skill2') //Animal Handling
                        .click('@language')
                        .waitForElementPresent('@pickLanguage', 20000)
                        .click('@pickLanguage') //Abyssal
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'half-orc':
                case 'aarakocra':
                case 'goliath':
                case 'tiefling':
                case 'aasimar':
                    this
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1500)
                        .click('@nextButton')
                    break;
            }
            this
                .waitForElementPresent(test.class, 20000)
                .click(test.class)
                .click('@addClass')
            switch (test.className) {
                case 'barbarian':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@barbProf1', 20000)
                        .click('@barbProf1') //Survival
                        .click('@barbProf2') //Perception
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'bard':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@bardProf1', 20000)
                        .click('@bardProf1') //Bagpipes
                        .click('@bardProf2') //Drum
                        .click('@bardProf3') //Dulcimer
                        .click('@bardProf4') //Survival
                        .click('@bardProf5') //Nature
                        .click('@bardProf6') //Sleight of Hand
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'cleric':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@clericProf1', 20000)
                        .click('@clericProf1') //Religion
                        .click('@clericProf2') //Persuation
                        .click('@divinedomain')
                        .waitForElementPresent('@pickDivine', 20000)
                        .click('@pickDivine') //Life Domain
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'druid':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@druidProf1', 20000)
                        .click('@druidProf1') //Survival
                        .click('@druidProf2') //Religion
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'fighter':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@fightProf1', 20000)
                        .click('@fightProf1') //Survival
                        .click('@fightProf2') //Perception
                        .click('@fightingStyle')
                        .waitForElementPresent('@pickFighting', 20000)
                        .click('@pickFighting') //Two-Weapon Fighting
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'monk':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@monkProf1', 20000)
                        .click('@monkProf1') //Alchemist's Supplies
                        .click('@monkProf2') //Insight
                        .click('@monkProf3') //Religion
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'paladin':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@pallyProf1', 20000)
                        .click('@pallyProf1') //Religion
                        .click('@pallyProf2') //Persuasion
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'ranger':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@rangerProf1', 20000)
                        .click('@rangerProf1') //Survival
                        .click('@rangerProf2') //Insight
                        .click('@rangerProf3') //Perception
                        .click('@favoredEnemy')
                        .waitForElementPresent('@pickFavored1', 20000)
                        .click('@pickFavored1') //Undead
                        .click('@pickFavored2') //Vedalken
                        .click('@naturalExplorer')
                        .waitForElementPresent('@pickExplorer', 20000)
                        .click('@pickExplorer')//Underdark
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'rogue':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@rogueProf1', 20000)
                        .click('@rogueProf1') //Perception
                        .click('@rogueProf2') //Sleight of Hand
                        .click('@rogueProf3') //Persuasion
                        .click('@rogueProf4') //Performance
                        .click('@expertise')
                        .waitForElementPresent('@pickExpertise1', 20000)
                        .click('@pickExpertise1') //Perception
                        .click('@pickExpertise2') //Slight of Hand
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'sorcerer':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@sorcProf1', 20000)
                        .click('@sorcProf1') //Religion
                        .click('@sorcProf2') //Persuasion
                        .click('@sorcerousOrigin')
                        .waitForElementPresent('@pickOrigin', 20000)
                        .click('@pickOrigin') //Draconic Bloodline
                        .pause(1500)
                        .click('@dragonAncestor')
                        .waitForElementPresent('@pickAncestor', 20000)
                        .click('@pickAncestor') //Black Dragon
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')

                    break;
                case 'warlock':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@warProf1', 20000)
                        .click('@warProf1') //Religion
                        .click('@warProf2') //Nature
                        .click('@otherworldlyPatron')
                        .waitForElementPresent('@pickPatron', 20000)
                        .click('@pickPatron') //The Fiend
                        .waitForElementPresent('@nextButton', 20000)
                        .pause(1000)
                        .click('@nextButton')
                    break;
                case 'wizard':
                    this
                        .waitForElementPresent('@proficiencies', 20000)
                        .click('@proficiencies')
                        .waitForElementPresent('@wizProf1', 20000)
                        .click('@wizProf1') //Religion
                        .click('@wizProf2') //Medicine
                        .pause(1500)
                        .click('@nextButton')
                    break;
            }
            this
                .waitForElementPresent('@scoreMethod', 20000)
                .click('@scoreMethod') //Standard Array
                .waitForElementPresent('@strength', 20000)
                .click('@strength') //8
                .click('@dexterity') //10
                .click('@constitution') //12
                .click('@intelligence') //13
                .click('@wisdom') //14
                .click('@charisma') //15
                .click('@nextButton')
                .waitForElementPresent('@background', 20000)
                .click('@background') //Criminal / Spy
            switch (test.className) {
                case 'rogue':
                    this
                        .waitForElementPresent('@rogueBG1', 20000)
                        .click('@rogueBG1')
                        .click('@rogueBG2')
                    break;
                case 'ranger':
                case 'barbarian':
                case 'bard':
                case 'cleric':
                case 'druid':
                case 'fighter':
                case 'monk':
                case 'paladin':
                case 'sorcerer':
                case 'warlock':
                case 'wizard':
                    this
                        .waitForElementPresent('@bgOption1', 20000)
                        .click('@bgOption1') //Three-Dragon Ante Set
                    break;
            }
            this
                .waitForElementPresent('@nextButton', 20000)
                .pause(1000)
                .click('@nextButton')
                .waitForElementPresent('@startingGold', 20000)
                .click('@startingGold')
                .pause(1500)
                .click('@randomizeGold')
                .pause(1500)
                .click('@addStartingGold')
                .pause(1500)
                .click('@nextButton')
                .waitForElementPresent('@whatsNextCharacters', 20000)
                .click('@whatsNextCharacters')
                .waitForElementPresent('@deleteCharacter', 20000)
                .click('@deleteCharacter')
                .waitForElementPresent('@confirmDelete', 20000)
                .click('@confirmDelete')
                .pause(1500)
                .click('.logo')
            return this
        })
    }
}

module.exports = {
    url: 'https://www.dndbeyond.com/',
    commands: [finalCommands],
    elements: {
        login: '#login-link',
        twitch: '#signin-with-twitch',
        username: '#username',
        password: 'input[name="password"]',
        tLogin: '.primary.button.js-login-button',
        authorize: '.button.js-authorize',
        creations: {
            selector: '//span[text()="Creations"]',
            locateStrategy: 'xpath'
        },
        characters: {
            selector: '(//a[text()="Characters"])[2]',
            locateStrategy: 'xpath'
        },
        createCharacter: '.button-alt.button-alt-character',
        standard: {
            selector: '(//a[@class="character-button-block builder-button"])[1]',
            locateStrategy: 'xpath'
        },
        cName: '#qry_2',
        nextButton: {
            selector: '(//div[@class="builder-navigation-large-action-icon"])[2]',
            locateStrategy: 'xpath'
        },
        aarakocra: {
            selector: '(//div[@class="race-filter-item-action"])[1]',
            locateStrategy: 'xpath'
        },
        chooseRace: '.ct-button.character-button.character-button.character-button-modal',
        dragonborn: {
            selector: '(//div[@class="race-filter-item-action"])[2]',
            locateStrategy: 'xpath'
        },
        draconicAncestry: {
            selector: '(//div[@class="collapsible-header-trigger"])[1]',
            locateStrategy: 'xpath'
        },
        pickAncestry: {
            selector: '(//select[@class="ct-select"])[1] //option[@value="1"]',
            locateStrategy: 'xpath'
        },
        goliath: {
            selector: '(//div[@class="race-filter-item-action"])[3]',
            locateStrategy: 'xpath'
        },
        halfElf: {
            selector: '(//div[@class="race-filter-item-action"])[4]',
            locateStrategy: 'xpath'
        },
        scoreIncrease: {
            selector: '(//div[@class="collapsible-header-trigger"])[1]',
            locateStrategy: 'xpath'
        },
        increase1: {
            selector: '(//select[@class="ct-select"])[1] //option[@value="3522"]',
            locateStrategy: 'xpath'
        },
        increase2: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="3521"]',
            locateStrategy: 'xpath'
        },
        skillVersatility: {
            selector: '(//div[@class="collapsible-header-trigger"])[4]',
            locateStrategy: 'xpath'
        },
        skill1: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="3784"]',
            locateStrategy: 'xpath'
        },
        skill2: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="3792"]',
            locateStrategy: 'xpath'
        },
        language: {
            selector: '(//div[@class="collapsible-header-trigger"])[5]',
            locateStrategy: 'xpath'
        },
        pickLanguage: {
            selector: '(//select[@class="ct-select"])[5] //option[@value="4045"]',
            locateStrategy: 'xpath'
        },
        halfOrc: {
            selector: '(//div[@class="race-filter-item-action"])[5]',
            locateStrategy: 'xpath'
        },
        tiefling: {
            selector: '(//div[@class="race-filter-item-action"])[6]',
            locateStrategy: 'xpath'
        },
        aasimar: {
            selector: '(//div[@class="race-filter-item-action"])[7]',
            locateStrategy: 'xpath'
        },
        barbarian: {
            selector: '(//div[@class="class-filter-item-header"])[1]',
            locateStrategy: 'xpath'
        },
        bard: {
            selector: '(//div[@class="race-filter-item-action"])[2]',
            locateStrategy: 'xpath'
        },
        cleric: {
            selector: '(//div[@class="race-filter-item-action"])[3]',
            locateStrategy: 'xpath'
        },
        druid: {
            selector: '(//div[@class="race-filter-item-action"])[4]',
            locateStrategy: 'xpath'
        },
        fighter: {
            selector: '(//div[@class="race-filter-item-action"])[5]',
            locateStrategy: 'xpath'
        },
        monk: {
            selector: '(//div[@class="race-filter-item-action"])[6]',
            locateStrategy: 'xpath'
        },
        paladin: {
            selector: '(//div[@class="race-filter-item-action"])[7]',
            locateStrategy: 'xpath'
        },
        ranger: {
            selector: '(//div[@class="race-filter-item-action"])[8]',
            locateStrategy: 'xpath'
        },
        rogue: {
            selector: '(//div[@class="race-filter-item-action"])[9]',
            locateStrategy: 'xpath'
        },
        sorcerer: {
            selector: '(//div[@class="race-filter-item-action"])[10]',
            locateStrategy: 'xpath'
        },
        warlock: {
            selector: '(//div[@class="race-filter-item-action"])[11]',
            locateStrategy: 'xpath'
        },
        wizard: {
            selector: '(//div[@class="race-filter-item-action"])[12]',
            locateStrategy: 'xpath'
        },
        addClass: '.ct-button.character-button.character-button.character-button-modal',
        proficiencies: {
            selector: '(//div[@class="collapsible-header-trigger"])[2]',
            locateStrategy: 'xpath'
        },
        barbProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4095"]',
            locateStrategy: 'xpath'
        },
        barbProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4094"]',
            locateStrategy: 'xpath'
        },
        bardProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="3900"]',
            locateStrategy: 'xpath'
        },
        bardProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="3901"]',
            locateStrategy: 'xpath'
        },
        bardProf3: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="3902"]',
            locateStrategy: 'xpath'
        },
        bardProf4: {
            selector: '(//select[@class="ct-select"])[5] //option[@value="3796"]',
            locateStrategy: 'xpath'
        },
        bardProf5: {
            selector: '(//select[@class="ct-select"])[6] //option[@value="3790"]',
            locateStrategy: 'xpath'
        },
        bardProf6: {
            selector: '(//select[@class="ct-select"])[7] //option[@value="3785"]',
            locateStrategy: 'xpath'
        },
        clericProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4100"]',
            locateStrategy: 'xpath'
        },
        clericProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4099"]',
            locateStrategy: 'xpath'
        },
        druidProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4108"]',
            locateStrategy: 'xpath'
        },
        druidProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4107"]',
            locateStrategy: 'xpath'
        },
        fightProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4116"]',
            locateStrategy: 'xpath'
        },
        fightProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4115"]',
            locateStrategy: 'xpath'
        },
        monkProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4229"]',
            locateStrategy: 'xpath'
        },
        monkProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4120"]',
            locateStrategy: 'xpath'
        },
        monkProf3: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="4121"]',
            locateStrategy: 'xpath'
        },
        pallyProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4128"]',
            locateStrategy: 'xpath'
        },
        pallyProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4127"]',
            locateStrategy: 'xpath'
        },
        rangerProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4136"]',
            locateStrategy: 'xpath'
        },
        rangerProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4131"]',
            locateStrategy: 'xpath'
        },
        rangerProf3: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="4134"]',
            locateStrategy: 'xpath'
        },
        rogueProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4143"]',
            locateStrategy: 'xpath'
        },
        rogueProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4146"]',
            locateStrategy: 'xpath'
        },
        rogueProf3: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="4145"]',
            locateStrategy: 'xpath'
        },
        rogueProf4: {
            selector: '(//select[@class="ct-select"])[5] //option[@value="4244"]',
            locateStrategy: 'xpath'
        },
        sorcProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4153"]',
            locateStrategy: 'xpath'
        },
        sorcProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4152"]',
            locateStrategy: 'xpath'
        },
        warProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4089"]',
            locateStrategy: 'xpath'
        },
        warProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4088"]',
            locateStrategy: 'xpath'
        },
        wizProf1: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="4159"]',
            locateStrategy: 'xpath'
        },
        wizProf2: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="4158"]',
            locateStrategy: 'xpath'
        },
        divinedomain: {
            selector: '(//div[@class="collapsible-header-trigger"])[4]',
            locateStrategy: 'xpath'
        },
        pickDivine: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="19"]',
            locateStrategy: 'xpath'
        },
        fightingStyle: {
            selector: '(//div[@class="collapsible-header-trigger"])[3]',
            locateStrategy: 'xpath'
        },
        pickFighting: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="6"]',
            locateStrategy: 'xpath'
        },
        favoredEnemy: {
            selector: '(//div[@class="collapsible-header-trigger"])[3]',
            locateStrategy: 'xpath'
        },
        pickFavored1: {
            selector: '(//select[@class="ct-select"])[5] //option[@value="61"]',
            locateStrategy: 'xpath'
        },
        pickFavored2: {
            selector: '(//select[@class="ct-select"])[6] //option[@value="5111"]',
            locateStrategy: 'xpath'
        },
        naturalExplorer: {
            selector: '(//div[@class="collapsible-header-trigger"])[4]',
            locateStrategy: 'xpath'
        },
        pickExplorer: {
            selector: '(//select[@class="ct-select"])[7] //option[@value="176"]',
            locateStrategy: 'xpath'
        },
        expertise: {
            selector: '(//div[@class="collapsible-header-trigger"])[3]',
            locateStrategy: 'xpath'
        },
        pickExpertise1: {
            selector: '(//select[@class="ct-select"])[6] //option[@value="4252"]',
            locateStrategy: 'xpath'
        },
        pickExpertise2: {
            selector: '(//select[@class="ct-select"])[7] //option[@value="4255"]',
            locateStrategy: 'xpath'
        },
        sorcerousOrigin: {
            selector: '(//div[@class="collapsible-header-trigger"])[4]',
            locateStrategy: 'xpath'
        },
        pickOrigin: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="24"]',
            locateStrategy: 'xpath'
        },
        dragonAncestor: {
            selector: '(//div[@class="collapsible-header-trigger"])[1]',
            locateStrategy: 'xpath'
        },
        pickAncestor: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="192"]',
            locateStrategy: 'xpath'
        },
        otherworldlyPatron: {
            selector: '(//div[@class="collapsible-header-trigger"])[3]',
            locateStrategy: 'xpath'
        },
        pickPatron: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="25"]',
            locateStrategy: 'xpath'
        },
        scoreMethod: {
            selector: '(//select[@class="ct-select"])[1] //option[@value="1"]',
            locateStrategy: 'xpath'
        },
        strength: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="8"]',
            locateStrategy: 'xpath'
        },
        dexterity: {
            selector: '(//select[@class="ct-select"])[3] //option[@value="10"]',
            locateStrategy: 'xpath'
        },
        constitution: {
            selector: '(//select[@class="ct-select"])[4] //option[@value="12"]',
            locateStrategy: 'xpath'
        },
        intelligence: {
            selector: '(//select[@class="ct-select"])[5] //option[@value="13"]',
            locateStrategy: 'xpath'
        },
        wisdom: {
            selector: '(//select[@class="ct-select"])[6] //option[@value="14"]',
            locateStrategy: 'xpath'
        },
        charisma: {
            selector: '(//select[@class="ct-select"])[7] //option[@value="15"]',
            locateStrategy: 'xpath'
        },
        background: '.ct-select.description-manage-background-chooser option[value="8"]',
        bgOption1: {
            selector: '(//select[@class="ct-select"])[1] //option[@value="4380"]',
            locateStrategy: 'xpath'
        },
        startingGold: {
            selector: '(//div[@class="starting-equipment-choice "])[2]',
            locateStrategy: 'xpath'
        },
        randomizeGold: '.starting-equipment-gold-entry-actions',
        addStartingGold: '.ct-button.character-button.character-button',
        whatsNextCharacters: '.whats-next-characters',
        deleteCharacter: '.modal-link.ddb-campaigns-character-card-footer-links-item.ddb-campaigns-character-card-footer-links-item-delete',
        confirmDelete: '.ajax-post',
        rogueBG1: {
            selector: '(//select[@class="ct-select"])[1] //option[@value="4380"]',
            locateStrategy: 'xpath'
        },
        rogueBG2: {
            selector: '(//select[@class="ct-select"])[2] //option[@value="3930"]',
            locateStrategy: 'xpath'
        },
    }
}