import {expect, assert} from 'chai';
import {parse} from './index';

const mrz = 'P<CANMARTIN<<SARAH<<<<<<<<<<<<<<<<<<<<<<<<<<ZE000509<9CAN8501019F2301147<<<<<<<<<<<<<<08';

describe('newtondev-mrz-parser', () => {
  describe('parse', function() {
    let passport = parse(mrz);

    it('should return object for parsed MRZ', () => {
      assert.isObject(parse(mrz));
    });

    it('documentCode should be: P', () => {
      expect(passport.documentCode).to.equal('P');
    });

    it('documentType should be: PASSPORT', () => {
      expect(passport.documentType).to.equal('PASSPORT');
    });

    it('documentTypeCode should be: null', () => {
      expect(passport.documentTypeCode).to.equal(null);
    });

    it('issuer should be: CAN', () => {
      expect(passport.issuer).to.equal('CAN');
    });

    it('names should be an Object', () => {
      assert.isObject(passport.names);
    });

    it('names.lastName should be: MARTIN', () => {
      expect(passport.names.lastName).to.equal('MARTIN');
    });

    it('names.names should be an Array', () => {
      assert.isArray(passport.names.names);
    });

    it('names.names should contain: SARAH', () => {
      expect(passport.names.names).to.include('SARAH');
    });

    it('documentNumber should be: ZE000509', () => {
      expect(passport.documentNumber).to.equal('ZE000509');
    });

    it('nationality should be an Object', () => {
      assert.isObject(passport.nationality);
    });

    it('nationality.abbr should be: CAN', () => {
      expect(passport.nationality.abbr).to.equal('CAN');
    });

    it('nationality.full should be: Canada', () => {
      expect(passport.nationality.full).to.equal('Canada');
    });

    it('dob should be an Object', () => {
      assert.isObject(passport.dob);
    });

    it('dob.year should be: 1985', () => {
      expect(passport.dob.year).to.equal('1985');
    });

    it('dob.month should be: 01', () => {
      expect(passport.dob.month).to.equal('01');
    });

    it('dob.day should be: 01', () => {
      expect(passport.dob.day).to.equal('01');
    });

    it('dob.original should be: 850101', () => {
      expect(passport.dob.original).to.equal('850101');
    });

    it('sex should be an Object', () => {
      assert.isObject(passport.sex);
    });

    it('sex.abbr should be: F', () => {
      expect(passport.sex.abbr).to.equal('F');
    });

    it('sex.full should be: Female', () => {
      expect(passport.sex.full).to.equal('Female');
    });

    it('checkDigit should be an Object', () => {
      assert.isObject(passport.checkDigit);
    });

    it('checkDigit.documentNumber should be an Object', () => {
      assert.isObject(passport.checkDigit.documentNumber);
    });

    it('checkDigit.documentNumber.value should be: 9', () => {
      expect(passport.checkDigit.documentNumber.value).to.equal('9');
    });

    it('checkDigit.documentNumber.valid should be: true', () => {
      assert.equal(passport.checkDigit.documentNumber.valid, true);
    });

    it('checkDigit.dob should be an Object', () => {
      assert.isObject(passport.checkDigit.dob);
    });

    it('checkDigit.dob.value should be: 9', () => {
      expect(passport.checkDigit.dob.value).to.equal('9');
    });

    it('checkDigit.dob.valid should be: true', () => {
      assert.equal(passport.checkDigit.dob.valid, true);
    });

    it('checkDigit.expiry should be an Object', () => {
      assert.isObject(passport.checkDigit.expiry);
    });

    it('checkDigit.expiry.value should be: 7', () => {
      expect(passport.checkDigit.expiry.value).to.equal('7');
    });

    it('checkDigit.expiry.valid should be: true', () => {
      assert.equal(passport.checkDigit.expiry.valid, true);
    });

    it('checkDigit.personalNumber should be an Object', () => {
      assert.isObject(passport.checkDigit.personalNumber);
    });

    it('checkDigit.personalNumber.value should be: 0', () => {
      expect(passport.checkDigit.personalNumber.value).to.equal('0');
    });

    it('checkDigit.personalNumber.valid should be: true', () => {
      assert.equal(passport.checkDigit.personalNumber.valid, true);
    });

    it('checkDigit.finalCheck should be an Object', () => {
      assert.isObject(passport.checkDigit.finalCheck);
    });

    it('checkDigit.finalCheck.value should be: 8', () => {
      expect(passport.checkDigit.finalCheck.value).to.equal('8');
    });

    it('checkDigit.finalCheck.valid should be: true', () => {
      assert.equal(passport.checkDigit.finalCheck.valid, true);
    });

    it('checkDigit.valid should be: true', () => {
      assert.equal(passport.checkDigit.valid, true);
    });

    it('expiry should be an Object', () => {
      assert.isObject(passport.expiry);
    });

    it('expiry.year should be: 2023', () => {
      expect(passport.expiry.year).to.equal('2023');
    });

    it('expiry.month should be: 01', () => {
      expect(passport.expiry.month).to.equal('01');
    });

    it('expiry.day should be: 14', () => {
      expect(passport.expiry.day).to.equal('14');
    });

    it('expiry.original should be: 230114', () => {
      expect(passport.expiry.original).to.equal('230114');
    });

    it('personalNumber should be an empty string', () => {
      expect(passport.personalNumber).to.equal('');
    });
  });
});