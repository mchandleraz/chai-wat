import { expect } from 'chai';
import getRandomArrayItem from '../src/utils/getRandomArrayItem';

describe('getRandomArrayItem', () => {
  it('exists', () => {
    expect(getRandomArrayItem).to.be.defined;
  });
  it('returns something', () => {
    expect(getRandomArrayItem()).to.be.defined;
  });
});
