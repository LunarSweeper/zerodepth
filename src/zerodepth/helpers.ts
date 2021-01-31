type HasZeroValueArray = Array<number>;

export function hasZero(a: HasZeroValueArray): boolean {
    return a.indexOf(0) !== -1;
}

type FindZerosValueArray = Array<number | Array<number>>;
type FindZerosReturnType = Array<number | null>;

export function findZeros (a: FindZerosValueArray): FindZerosReturnType {
    const levels: Array<number> = [];

    function traverseArray (values: any[], depth: number) {
        if (depth > 100) {
            // Maximum recursion depth reached
            return;
        }

        // Does current array have zeros?
        if (hasZero(values)) {
            levels.push(depth);
        }

        // Recurse into nested arrays
        values
            .filter(item => Array.isArray(item))
            .forEach(item => {
                traverseArray(item, depth + 1);
            })
    }

    traverseArray(a, 1);

    if (levels.length === 0) {
        return [null, null];
    }

    return [Math.min(...levels), Math.max(...levels)];
}
