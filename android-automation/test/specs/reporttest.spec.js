import { delay } from '../helpers/delayHelper.js';
import { checkEven } from '../helpers/numberHelper.js';
import { parse } from 'csv-parse/sync'
import fs from 'node:fs'

const records = parse(fs.readFileSync('../mobile-automation/test_artifacts/aff_id_AB_Set_V.csv'), {
    columns: true,
    skip_empty_lines: true
  })

  describe('Mission A/B Testing', ()=>{
    for(const record of records){
        it('Sort Publisher with A and B', async()=> {
            let targetVariant = '';
            await loginPage.clickLogin();
            await loginPage.clickEmail();
            await loginPage.emailField.setValue(record.Email_Address);
            await loginPage.clickLogin();

            await delay(12000);
            if(checkEven(record.Affiliate_ID))
                targetVariant = 'A';
            else
                targetVariant = 'B';

            await bottomNavBar.clickProfile();
            await profilePage.clickLogout();
            await profilePage.clickDialogLogout();
            delay(5000);
        })
    }
    }
)
