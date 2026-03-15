import {test,expect, Locator} from "@playwright/test"

test("XPath Axes demo",async ({page})=>{

 await page.goto("https://www.w3schools.com/html/html_tables.asp");
 
 // 1. self axis - Select <td> element that contains "Germany"

// const germanyCell: Locator=page.locator("//td[text()='Germany']/self::td");
// await expect(germanyCell).toHaveText('Germany');

// 2. parent axis - Get parent <tr> of the "Germany" cell
  
// const parentRow:Locator=page.locator("//td[text()='Germany']/parent::tr")
// await expect(parentRow).toContainText("Maria Anders");

 // 3. child axis - Get all <td> children of the second <tr> in the table

//  const secondRowCells: Locator=page.locator("//table[@id='customers']//tr[2]/child::td"); // returns multiple elements( td's)
//  await expect(secondRowCells).toHaveCount(3);

  // 4. ancestor axis - Get ancestor <table> of the "Germany" cell

  // const table:Locator=page.locator("//td[text()='Germany']/ancestor::table")
  // await expect(table).toHaveAttribute('id','customers');

  // 5. descendant axis - Get all <td> elements under the table
  // const allTds:Locator=page.locator("//table[@id='customers']/descendant::td")
  // await expect(allTds).toHaveCount(18);

  // 6. following axis - Get the <td> that comes after "Germany" in document order

  // const followingCell:Locator=page.locator("//td[normalize-space()='Germany']/following::td[4]");
  // await expect(followingCell).toHaveText("Ernst Handel");

  // const rightsiblings:Locator=page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
  // await expect(rightsiblings).toHaveCount(1);

   // 8. preceding axis - Get the <td> just before "Germany"

    // const precedingCell:Locator=page.locator("//td[text()='Germany']/preceding::td[2]");
    // await expect(precedingCell).toHaveText("Alfreds Futterkiste");

    // 9. preceding-sibling axis - Get <td>s to the left of "Germany"

     const leftSiblings:Locator=page.locator("//td[text()='Austria']/preceding-sibling::td");
     await expect(leftSiblings).toHaveCount(2);
});