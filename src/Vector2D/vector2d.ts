export class Vector2D {
    public x: number;
    public y: number;
    constructor(x?: number, y?: number) {
        if (x === undefined) { x = 0; }
        if (y === undefined) { y = 0; }
        this.x = x;
        this.y = y;
    }
    public toString() {
        return `x: ${this.x}, y: ${this.y}`;
    }
    public static add(...vectors: Vector2D[]): Vector2D {
        return vectors.reduce((previous, current) => {
            return {x: previous.x + current.x, y: previous.y + current.y};
        }, {x: 0, y: 0});
    }
    /**
     * @returns v1 - v2
     */
    public static subtract(v1: Vector2D, v2: Vector2D): Vector2D {
        return { x: v1.x - v2.x, y: v1.y - v2.y }
    }
    
    public static scale(v: Vector2D, scalar: number): Vector2D {
        return { x: v.x * scalar, y: v.y * scalar }
    }
    
    public static dotProduct(v1: Vector2D, v2: Vector2D): number {
        return v1.x * v2.x + v1.y * v2.y;
    }
    
    public static magnitude(v: Vector2D): number {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    public static normalize(v: Vector2D): Vector2D {
        const mag = this.magnitude(v);
        return mag === 0 ? { x: 0, y: 0 } : this.scale(v, 1 / mag);
    }
    /**
     * @param v1 Vector2D
     * @param v2 Vector2D
     * @returns Distance from v1 to v2
     */
    public static distance(v1: Vector2D, v2: Vector2D): number {
        return Math.sqrt((v2.x - v1.x)**2 + (v2.y - v1.y)**2);
    }
    /**
     * returns a vector pointing from v1 to v2
     */
    public static displacementVector(v1: Vector2D, v2: Vector2D): Vector2D {
        return this.subtract(v2, v1);
    }
    public static hadamardProduct(v1: Vector2D, v2: Vector2D): Vector2D {
        return {x: v1.x * v2.x, y: v1.y * v2.y};
    }
}