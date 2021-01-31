import {hasZero, findZeros} from "./helpers";

describe("hasZero", () => {
    test("Array with one zero element", () => {
        expect(hasZero([0])).toBe(true);
    });

    test("Array with one non-zero element", () => {
        expect(hasZero([1])).toBe(false);
    });

    test("Empty array", () => {
        expect(hasZero([])).toBe(false);
    });
});

describe("findZeros", () => {
    test("Case 1", () => {
        const inputValue = [1,[0,[0,2]],3];
        expect(findZeros(inputValue)).toEqual([2,3]);
    })

    test("Case 2", () => {
        const inputValue = [1,[2,[3,4]],5];
        expect(findZeros(inputValue)).toEqual([null,null]);
    })

    test("Case 3", () => {
        const inputValue = [1,0,2,0,3];
        expect(findZeros(inputValue)).toEqual([1,1]);
    })

    test("Case 4", () => {
        const inputValue = [[1,0,0,0]];
        expect(findZeros(inputValue)).toEqual([2,2]);
    })

    test("Case 5", () => {
        const inputValue = [1,[5,0,2],0,[7,[2,[0],3]],[[0]]];
        expect(findZeros(inputValue)).toEqual([1,4]);
    })
})
