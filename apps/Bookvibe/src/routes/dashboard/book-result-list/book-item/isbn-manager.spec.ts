import { getISBNTypeFromIndustryIdentifier } from './isbn-manager';

describe('utils', () => {
  it('should get ISBN-13', () => {
    const isbn13 = getISBNTypeFromIndustryIdentifier('ISBN_13',
      [
        {
          'type': 'ISBN_13',
          'identifier': '9781506722245'
        },
        {
          'type': 'ISBN_10',
          'identifier': '1506722245'
        }
      ]
    );
    expect(isbn13).toEqual('9781506722245');
  });

  it('should get ISBN-10', () => {
    const isbn13 = getISBNTypeFromIndustryIdentifier('ISBN_10',
      [
        {
          'type': 'ISBN_13',
          'identifier': '9781506722245'
        },
        {
          'type': 'ISBN_10',
          'identifier': '1506722245'
        }
      ]
    );
    expect(isbn13).toEqual('1506722245');
  });

  it("should get ISBN-10 when ISBN-13 is missing",()=>{
    const isbn13 = getISBNTypeFromIndustryIdentifier('ISBN_13',
      [
        {
          "type": "ISBN_10",
          "identifier": "1506722245"
        }
      ]
    )
    expect(isbn13).toEqual("1506722245")
  });
});
