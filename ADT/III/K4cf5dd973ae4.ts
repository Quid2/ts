import * as Q from '../../core'
import * as Kb3a2642b4a84 from  '../Int8/Kb3a2642b4a84'
import * as K3dac6bd4fa9c from  '../Int16/K3dac6bd4fa9c'
import * as Kfb94cb4d4ede from  '../Int64/Kfb94cb4d4ede'
import * as Kb53bec846608 from  '../IEEE_754_binary32/Kb53bec846608'
import * as Kcba9596b4657 from  '../IEEE_754_binary64/Kcba9596b4657'
import * as K102a3bb904e3 from  '../Int/K102a3bb904e3'

export const $III:Q.zmFold<III> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x4c,0xf5,0xdd,0x97,0x3a,0xe4],
  decoder : function (decoders) {
    return function(st) { return new III (decoders[0](st),decoders[1](st),decoders[2](st),decoders[3](st),decoders[4](st),decoders[5](st),decoders[6](st),decoders[7](st)) }
  }
}

export class III  implements Q.Flat {
  constructor(
    public w8: Kb3a2642b4a84.Int8,
    public w16: K3dac6bd4fa9c.Int16,
    public w: Kfb94cb4d4ede.Int64,
    public i8: Kb3a2642b4a84.Int8,
    public i: Kfb94cb4d4ede.Int64,
    public f: Kb53bec846608.IEEE_754_binary32,
    public d: Kcba9596b4657.IEEE_754_binary64,
    public ii: K102a3bb904e3.Int,

  ) { }

  match <R>(m:{III:(v0:Kb3a2642b4a84.Int8,v1:K3dac6bd4fa9c.Int16,v2:Kfb94cb4d4ede.Int64,v3:Kb3a2642b4a84.Int8,v4:Kfb94cb4d4ede.Int64,v5:Kb53bec846608.IEEE_754_binary32,v6:Kcba9596b4657.IEEE_754_binary64,v7:K102a3bb904e3.Int)=>R}) : R {return m.III(this.w8,this.w16,this.w,this.i8,this.i,this.f,this.d,this.ii);}
  flatMaxSize():number {return this.w8.flatMaxSize()+this.w16.flatMaxSize()+this.w.flatMaxSize()+this.i8.flatMaxSize()+this.i.flatMaxSize()+this.f.flatMaxSize()+this.d.flatMaxSize()+this.ii.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.w8.flatEncode(st);this.w16.flatEncode(st);this.w.flatEncode(st);this.i8.flatEncode(st);this.i.flatEncode(st);this.f.flatEncode(st);this.d.flatEncode(st);this.ii.flatEncode(st);}

}


