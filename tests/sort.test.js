const sortByRating = require('../sort');

test("Movies should be sorted by rating descending", () => {

    const movies = [
        { name: "Movie A", rating: 3 },
        { name: "Movie B", rating: 5 },
        { name: "Movie C", rating: 4 }
    ];

    const result = sortByRating(movies);

    expect(result[0].rating).toBe(5);
    expect(result[1].rating).toBe(4);
    expect(result[2].rating).toBe(3);

});

test("Sorting empty array should return empty array", () => {

    const result = sortByRating([]);

    expect(result).toEqual([]);

});