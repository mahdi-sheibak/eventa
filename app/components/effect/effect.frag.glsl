// @reference https://fragcoord.xyz/s/karqcnrj

#version 300 es

precision highp float;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
out vec4 fragColor;
in vec2 vUv;

float rects(vec3 p){
    vec3 o = p*p;
    float s = sqrt(o.x + o.y);
    return s;
}

vec3 path(vec3 p){
    p.y += sin(p.z * 1.0 + uTime * 2.0) * 0.05;
    p.z -= uTime;
    return p;
}

float map(vec3 p){
    vec3 p1 = p;
    p1 = path(p);
    p1 = vec3(mod(p1, 2.) - 1.);
    return rects(p1) - 0.1;
}

void main() {
    vec2 I = gl_FragCoord.xy;
    vec2 uv = (2. * I - uResolution.xy) / uResolution.y;
    vec3 ro = vec3(0, 0,-uTime*.0);
    vec3 rd = normalize(vec3(uv * 1., -1));
    float dt = 0.;
    fragColor=vec4(0.);

    for(int i=0; i< 60; i++){
        vec3 p = ro + rd * dt;
        p += path(p);
        p.xy *= mat2(cos(dt*.6 + vec4(0,11,33,0) ));
        p=round(p*25.)/25.;

        float d = map(p);
        dt += d*.252;

        I=abs(mod(p.xy-1.,2.)-1.)-1.,
        d=(abs(length(I*1.)-.13) + .051),
        fragColor+=exp(-dt)/d/(abs(sin((p.x*p.y*p.z)*2.3-uTime*.35+vec4(0,4.42,1.4,0)))+0.05);
   }

    fragColor = tanh(fragColor/2e3);
}
