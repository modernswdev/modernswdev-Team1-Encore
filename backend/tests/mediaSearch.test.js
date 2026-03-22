const searchMedia = require('../src/searchMedia');

describe('Media Search Function', () => {

  test('returns matching movies', () => {
    const movies = [
      { title: 'Inception' },
      { title: 'Interstellar' },
      { title: 'Barbie' }
    ];

    const results = searchMedia('in', movies);

    expect(results.length).toBe(2);
  });

  test('returns empty array if no match', () => {
    const movies = [
      { title: 'Inception' },
      { title: 'Interstellar' }
    ];

    const results = searchMedia('batman', movies);

    expect(results).toEqual([]);
  });

  test('returns empty array for empty query', () => {
    const movies = [
      { title: 'Inception' }
    ];

    const results = searchMedia('', movies);

    expect(results).toEqual([]);
  });

});