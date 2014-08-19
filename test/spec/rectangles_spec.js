var rectangles;

beforeEach(function () {
    rectangles = require('../../lib/rectangles');
});

describe('Inner rectangles', function() {
    var result, container;
    it('should work for same aspect shape', function() {
        container = {minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}};
        result = rectangles.inner(container, {width: 100, height: 100})
        expect(result).toEqual({minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}});
    });

    it('should work for same aspect ratio', function () {
        container = {minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}};
        result = rectangles.inner(container, {width: 200, height: 200})
        expect(result).toEqual({minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}});
    });

    it('should work for a portrait splashscreen', function () {
        container = {minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}};
        result = rectangles.inner(container, {width: 50, height: 100})
        expect(result).toEqual({minimal: {x: 25, y: 0}, maximal: {x: 75, y: 100}});
    });

    it('should work for a landscape splashscreen', function () {
        container = {minimal: {x: 0, y: 0}, maximal: {x: 100, y: 100}};
        result = rectangles.inner(container, {width: 100, height: 50})
        expect(result).toEqual({minimal: {x: 0, y: 25}, maximal: {x: 100, y: 75}});
    });
});