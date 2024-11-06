const loginPage = require('../pageObjects/loginPage.js');
const overviewPage = require('../pageObjects/overviewPage.js');
const profilePage = require('../pageObjects/profilePage.js');
const bottomNavBar = require('../pageObjects/bottomNavBar.js');
const missionDashboardPage = require('../pageObjects/missionDashboardPage.js');
const missionDetailsPage = require('../pageObjects/missionDetailsPage.js');
const { delay } = require('../helpers/delayHelper.js');
const { checkEven } = require('../helpers/numberHelper.js');
import { parse } from 'csv-parse/sync'
import fs from 'node:fs'

const records = parse(fs.readFileSync('../mobile-automation/test_artifacts/aff_id_AB_Set_V.csv'), {
    columns: true,
    skip_empty_lines: true
  })

describe('Mission A/B Testing', ()=>{
    for(const record of records){
        it('Verify that login is successful', async ()=>{
            await loginPage.clickLogin();
            await loginPage.clickEmail();
            await loginPage.emailField.setValue(record.Email_Address);
            await loginPage.clickLogin();

            await delay(12000);
            console.log(overviewPage.termsConditions);
            if (await overviewPage.termsConditions.isDisplayed({ timeout: 30000})){
                await overviewPage.checkTC();
                await overviewPage.continueTnC();
            }
            else {
                console.log(overviewPage.missionOverviewPanel);
                return;
            }

        });

        it('Verify Mission variant is correct', async ()=>{
            let baselineText = '[BASELINE]';
            let variantText = '[VARIANT B]';
            let targetVariant = '';
            await expect(overviewPage.missionOverviewPanel).toBeDisplayed();
            await overviewPage.clickMissionOverviewPanel();
            delay(2000);
    
            if(checkEven(record.Affiliate_ID))
                targetVariant = baselineText;
            else
                targetVariant = variantText;
    
            //await expect(missionDashboardPage.firstMissionCard).toHaveAttr('content-desc', expect.stringContaining(targetVariant));
            await missionDashboardPage.clickFirstMissionCard();
            await expect(missionDetailsPage.missionTitleText).toHaveAttr('content-desc', expect.stringContaining(targetVariant));
    
            await missionDetailsPage.clickBack();
            await missionDashboardPage.clickBack();
    
        }); 
    
        it('Verify that logout is successful', async ()=>{
            await bottomNavBar.clickProfile();
            await profilePage.clickLogout();
            await profilePage.clickDialogLogout();
            delay(5000);
        });
    }
});