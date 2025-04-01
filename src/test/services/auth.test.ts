import { describe, expect, test } from '@jest/globals';
import { comparePassword, generatePassword } from '../../utils/services/auth';

describe('Auth Module', () => {
  test('Encrypt password', () => {
    const password = 'pass123testing'
    generatePassword(password)
    .then( result => {
      expect(typeof result).toBe('string');
    });
  });

  test('Validate same password', () => {
    const password = 'pass123testing'
    generatePassword(password)
      .then(result => {
        comparePassword(password, result)
        .then( isValid => {
          expect(isValid).toBeTruthy();
        });
      });
  });

  test('Validate different password', () => {
    const password = 'pass123testing';
    const password2 = 'pass123testing2';

    generatePassword(password)
      .then(result => {
        comparePassword(password2, result)
          .then(isValid => {
            expect(isValid).toBeFalsy();
          });
      });
  });
});