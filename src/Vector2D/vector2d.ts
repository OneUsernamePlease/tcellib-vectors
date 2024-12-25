export interface IVector2D {
    x: number;
    y: number;
}

export class Vector2D {
    static add(v1: IVector2D, v2: IVector2D): Vector2D {
        return { x: v1.x + v2.x, y: v1.y + v2.y }
    }
    
    static subtract(v1: IVector2D, v2: IVector2D): Vector2D {
        return { x: v1.x - v2.x, y: v1.y - v2.y }
    }
    
    static scale(v: IVector2D, scalar: number): IVector2D {
        return { x: v.x * scalar, y: v.y * scalar }
    }
    
    static dotProduct(v1: IVector2D, v2: IVector2D): number {
        return v1.x * v2.x + v1.y * v2.y;
    }
    
    static magnitude(v: IVector2D): number {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    static normalize(v: IVector2D): IVector2D {
        const mag = this.magnitude(v);
        return mag === 0 ? { x: 0, y: 0 } : this.scale(v, 1 / mag);
    }
    
}