// src/3d/Vector3D.ts

export interface IVector3D {
    x: number;
    y: number;
    z: number;
  }
  
export class Vector3D {
    static add(v1: IVector3D, v2: IVector3D): IVector3D {
      return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
    }
  
    static subtract(v1: IVector3D, v2: IVector3D): IVector3D {
      return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
    }
  
    static scale(v: IVector3D, scalar: number): IVector3D {
      return { x: v.x * scalar, y: v.y * scalar, z: v.z * scalar };
    }
  
    static dotProduct(v1: IVector3D, v2: IVector3D): number {
      return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }
  
    static magnitude(v: IVector3D): number {
      return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
  
    static normalize(v: IVector3D): IVector3D {
      const mag = Vector3D.magnitude(v);
      return mag === 0 ? { x: 0, y: 0, z: 0 } : Vector3D.scale(v, 1 / mag);
    }
}
  