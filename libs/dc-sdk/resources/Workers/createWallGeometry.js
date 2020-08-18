define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-ec27f304","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-44fb48f1","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./IntersectionTests-2626c9e9","./Plane-231f1723","./VertexFormat-7572c785","./arrayRemoveDuplicates-ebc732b0","./EllipsoidRhumbLine-c704bf4c","./EllipsoidGeodesic-30fae80b","./PolylinePipeline-8a1a1e4f","./WallGeometryLibrary-cfdc73e3"],function(Y,e,Z,j,K,t,a,Q,X,$,ee,i,n,p,r,o,s,m,te){"use strict";var ae=new j.Cartesian3,ie=new j.Cartesian3,ne=new j.Cartesian3,re=new j.Cartesian3,oe=new j.Cartesian3,se=new j.Cartesian3,me=new j.Cartesian3;function d(e){var t=(e=Y.defaultValue(e,Y.defaultValue.EMPTY_OBJECT)).positions,a=e.maximumHeights,i=e.minimumHeights,n=Y.defaultValue(e.vertexFormat,p.VertexFormat.DEFAULT),r=Y.defaultValue(e.granularity,Z.CesiumMath.RADIANS_PER_DEGREE),o=Y.defaultValue(e.ellipsoid,j.Ellipsoid.WGS84);this._positions=t,this._minimumHeights=i,this._maximumHeights=a,this._vertexFormat=p.VertexFormat.clone(n),this._granularity=r,this._ellipsoid=j.Ellipsoid.clone(o),this._workerName="createWallGeometry";var s=1+t.length*j.Cartesian3.packedLength+2;Y.defined(i)&&(s+=i.length),Y.defined(a)&&(s+=a.length),this.packedLength=s+j.Ellipsoid.packedLength+p.VertexFormat.packedLength+1}d.pack=function(e,t,a){var i;a=Y.defaultValue(a,0);var n=e._positions,r=n.length;for(t[a++]=r,i=0;i<r;++i,a+=j.Cartesian3.packedLength)j.Cartesian3.pack(n[i],t,a);var o=e._minimumHeights,r=Y.defined(o)?o.length:0;if(t[a++]=r,Y.defined(o))for(i=0;i<r;++i)t[a++]=o[i];var s=e._maximumHeights;if(r=Y.defined(s)?s.length:0,t[a++]=r,Y.defined(s))for(i=0;i<r;++i)t[a++]=s[i];return j.Ellipsoid.pack(e._ellipsoid,t,a),a+=j.Ellipsoid.packedLength,p.VertexFormat.pack(e._vertexFormat,t,a),t[a+=p.VertexFormat.packedLength]=e._granularity,t};var c=j.Ellipsoid.clone(j.Ellipsoid.UNIT_SPHERE),f=new p.VertexFormat,y={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:c,vertexFormat:f,granularity:void 0};return d.unpack=function(e,t,a){t=Y.defaultValue(t,0);for(var i,n,r=e[t++],o=new Array(r),s=0;s<r;++s,t+=j.Cartesian3.packedLength)o[s]=j.Cartesian3.unpack(e,t);if(0<(r=e[t++]))for(i=new Array(r),s=0;s<r;++s)i[s]=e[t++];if(0<(r=e[t++]))for(n=new Array(r),s=0;s<r;++s)n[s]=e[t++];var m=j.Ellipsoid.unpack(e,t,c);t+=j.Ellipsoid.packedLength;var l=p.VertexFormat.unpack(e,t,f),u=e[t+=p.VertexFormat.packedLength];return Y.defined(a)?(a._positions=o,a._minimumHeights=i,a._maximumHeights=n,a._ellipsoid=j.Ellipsoid.clone(m,a._ellipsoid),a._vertexFormat=p.VertexFormat.clone(l,a._vertexFormat),a._granularity=u,a):(y.positions=o,y.minimumHeights=i,y.maximumHeights=n,y.granularity=u,new d(y))},d.fromConstantHeights=function(e){var t=(e=Y.defaultValue(e,Y.defaultValue.EMPTY_OBJECT)).positions,a=e.minimumHeight,i=e.maximumHeight,n=Y.defined(a),r=Y.defined(i);if(n||r)for(var o=t.length,s=n?new Array(o):void 0,m=r?new Array(o):void 0,l=0;l<o;++l)n&&(s[l]=a),r&&(m[l]=i);return new d({positions:t,maximumHeights:m,minimumHeights:s,ellipsoid:e.ellipsoid,vertexFormat:e.vertexFormat})},d.createGeometry=function(e){var t=e._positions,a=e._minimumHeights,i=e._maximumHeights,n=e._vertexFormat,r=e._granularity,o=e._ellipsoid,s=te.WallGeometryLibrary.computePositions(o,t,i,a,r,!0);if(Y.defined(s)){for(var m=s.bottomPositions,l=s.topPositions,u=s.numCorners,p=l.length,d=2*p,c=n.position?new Float64Array(d):void 0,f=n.normal?new Float32Array(d):void 0,y=n.tangent?new Float32Array(d):void 0,g=n.bitangent?new Float32Array(d):void 0,h=n.st?new Float32Array(d/3*2):void 0,v=0,C=0,b=0,x=0,A=0,_=me,E=se,w=oe,F=!0,L=0,k=1/((p/=3)-u-1),H=0;H<p;++H){var V,G,D,P,T=3*H,z=j.Cartesian3.fromArray(l,T,ae),O=j.Cartesian3.fromArray(m,T,ie);n.position&&(c[v++]=O.x,c[v++]=O.y,c[v++]=O.z,c[v++]=z.x,c[v++]=z.y,c[v++]=z.z),n.st&&(h[A++]=L,h[A++]=0,h[A++]=L,h[A++]=1),(n.normal||n.tangent||n.bitangent)&&(V=j.Cartesian3.clone(j.Cartesian3.ZERO,re),G=j.Cartesian3.subtract(z,o.geodeticSurfaceNormal(z,ie),ie),H+1<p&&(V=j.Cartesian3.fromArray(l,3+T,re)),F&&(D=j.Cartesian3.subtract(V,z,ne),P=j.Cartesian3.subtract(G,z,ae),_=j.Cartesian3.normalize(j.Cartesian3.cross(P,D,_),_),F=!1),j.Cartesian3.equalsEpsilon(z,V,Z.CesiumMath.EPSILON10)?F=!0:(L+=k,n.tangent&&(E=j.Cartesian3.normalize(j.Cartesian3.subtract(V,z,E),E)),n.bitangent&&(w=j.Cartesian3.normalize(j.Cartesian3.cross(_,E,w),w))),n.normal&&(f[C++]=_.x,f[C++]=_.y,f[C++]=_.z,f[C++]=_.x,f[C++]=_.y,f[C++]=_.z),n.tangent&&(y[x++]=E.x,y[x++]=E.y,y[x++]=E.z,y[x++]=E.x,y[x++]=E.y,y[x++]=E.z),n.bitangent&&(g[b++]=w.x,g[b++]=w.y,g[b++]=w.z,g[b++]=w.x,g[b++]=w.y,g[b++]=w.z))}var R=new $.GeometryAttributes;n.position&&(R.position=new X.GeometryAttribute({componentDatatype:Q.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c})),n.normal&&(R.normal=new X.GeometryAttribute({componentDatatype:Q.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),n.tangent&&(R.tangent=new X.GeometryAttribute({componentDatatype:Q.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),n.bitangent&&(R.bitangent=new X.GeometryAttribute({componentDatatype:Q.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g})),n.st&&(R.st=new X.GeometryAttribute({componentDatatype:Q.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:h}));var S=d/3;d-=6*(u+1);var I=ee.IndexDatatype.createTypedArray(S,d),N=0;for(H=0;H<S-2;H+=2){var M,W,B=H,U=H+2,q=j.Cartesian3.fromArray(c,3*B,ae),J=j.Cartesian3.fromArray(c,3*U,ie);j.Cartesian3.equalsEpsilon(q,J,Z.CesiumMath.EPSILON10)||(M=H+1,W=H+3,I[N++]=M,I[N++]=B,I[N++]=W,I[N++]=W,I[N++]=B,I[N++]=U)}return new X.Geometry({attributes:R,indices:I,primitiveType:X.PrimitiveType.TRIANGLES,boundingSphere:new K.BoundingSphere.fromVertices(c)})}},function(e,t){return Y.defined(t)&&(e=d.unpack(e,t)),e._ellipsoid=j.Ellipsoid.clone(e._ellipsoid),d.createGeometry(e)}});
