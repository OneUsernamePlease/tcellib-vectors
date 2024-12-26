export class Vector3D {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        if (x === undefined) { x = 0; }      
        if (y === undefined) { y = 0; }      
        if (z === undefined) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static add(v1: Vector3D, v2: Vector3D): Vector3D {
      return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
    }
  
    static subtract(v1: Vector3D, v2: Vector3D): Vector3D {
      return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
    }
  
    static scale(v: Vector3D, scalar: number): Vector3D {
      return { x: v.x * scalar, y: v.y * scalar, z: v.z * scalar };
    }
  
    static dotProduct(v1: Vector3D, v2: Vector3D): number {
      return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }
  
    static magnitude(v: Vector3D): number {
      return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
  
    static normalize(v: Vector3D): Vector3D {
      const mag = Vector3D.magnitude(v);
      return mag === 0 ? { x: 0, y: 0, z: 0 } : Vector3D.scale(v, 1 / mag);
    }
}
  