var rectangles;

beforeEach(function () {
    rectangles = require('../../lib/rectangles');
});

describe('Inner rectangles', function() {
    var result, container;
    it('should work for same aspect ratio', function() {
        container = {minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}};
        result = rectangles.inner(container, {width: 100, height: 100})
        expect(result).toEqual({minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}});
    });
});