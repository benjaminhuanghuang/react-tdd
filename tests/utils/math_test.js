/* -- Scenario/Story
Given: Numerical values separated by '+' symbols are entered in the equation field

When: User clicks the '=' button

Then: Sum of all numerical values should display to the right of the '=' button
*/
import {expect} from 'chai';

import {Math4 as math} from '../../src/utils/math';

describe("test addition", () => {

  it('simple addition', () => {
    //Arrange/Act
    const rtnValue = math.parseEquation('1 + 1');

    //Assert
    expect(rtnValue).to.equal(2);
  });

  it('invalid input', () => {
    //Arrange/Act
    const rtnValue = math.parseEquation('1 + one');

    //Assert
    expect(rtnValue).to.be.NaN;
  });

  it('invalid input between numbers', () => {
    //Arrange/Act
    const rtnValue = math.parseEquation('1 + 123asdf453');

    //Assert
    expect(rtnValue).to.be.NaN;
  });
});