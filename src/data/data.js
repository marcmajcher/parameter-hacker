export const stats = {
  level: 1,
  cash: 0,
  silverKeys: 0,
  goldKeys: 0,
  codeword: [],
  exp: 0,
  xpToNext: 100,
  life: 100,
  maxLife: 100,
  act: 50,
  maxAct: 50,
  recover: 10,
  atk: 10,
  maxAtk: 10,
  def: 10,
  maxDef: 10,
};

export const corp = {
  width: 1500,
  height: 1050,
  nodes: [
    { id: 'par_001', x: 4, y: 4, w: 88, h: 28, lock: false, type: 'open' }, 
    { id: 'par_002', x: 98, y: 4, w: 122, h: 28, lock: false, type: 'open' }, 
    { id: 'par_003', x: 4, y: 40, w: 216, h: 28, lock: true, type: 'ice', health: 108 }, 
    { id: 'par_004', x: 4, y: 76, w: 72, h: 64, lock: false, type: 'ice', health: 36 }, 
    { id: 'par_005', x: 84, y: 76, w: 136, h: 28, lock: false, type: 'open' }, 
    { id: 'par_006', x: 84, y: 112, w: 136, h: 28, lock: false, type: 'open' }, 
    { id: 'par_007', x: 4, y: 148, w: 80, h: 162, lock: true, type: 'open' },
    { id: 'par_008', x: 92, y: 148, w: 56, h: 162, lock: true, type: 'open' },
    { id: 'par_009', x: 156, y: 148, w: 64, h: 58, lock: true, type: 'ice', health: 32 }, 
    { id: 'par_010', x: 156, y: 214, w: 64, h: 60, lock: false, type: 'chest' },
    { id: 'par_011', x: 4, y: 318, w: 144, h: 48, lock: true, type: 'open' },
    { id: 'par_012', x: 156, y: 282, w: 82, h: 84, lock: true,  type: 'store', sell:'sword' },
    { id: 'par_013', x: 228, y: 4, w: 102, h: 78, lock: true, gold: true, type: 'store', sell: 'act++' },
    { id: 'par_014', x: 228, y: 90, w: 50, h: 184, lock: true, type: 'open' },
    { id: 'par_015', x: 286, y: 90, w: 72, h: 84, lock: true, type: 'open' },
    { id: 'par_016', x: 286, y: 182, w: 72, h: 32, lock: false, type: 'open' },
    { id: 'par_017', x: 286, y: 222, w: 72, h: 52, lock: true, type: 'ice', health: 36 },
    { id: 'par_018', x: 246, y: 282, w: 196, h: 84, lock: true, type: 'ice', health: 98 },
    { id: 'par_019', x: 338, y: 4, w: 80, h: 28, lock: false, type: 'ice', health: 40 },
    { id: 'par_020', x: 338, y: 40, w: 80, h: 42, lock: false, type: 'open' },
    { id: 'par_021', x: 426, y: 4, w: 106, h: 78, lock: true, type: 'open' },
    { id: 'par_022', x: 366, y: 90, w: 106, h: 44, lock: true, type: 'open' },
    { id: 'par_023', x: 480, y: 90, w: 52, h: 44, lock: false, type: 'open' },
    { id: 'par_024', x: 366, y: 142, w: 154, h: 32, lock: true, type: 'open' },
    { id: 'par_025', x: 366, y: 182, w: 76, h: 92, lock: true, type: 'open' },
    { id: 'par_026', x: 450, y: 182, w: 70, h: 48, lock: true, type: 'ice', health: 36 },
    { id: 'par_027', x: 450, y: 238, w: 162, h: 36, lock: true, type: 'open' },
    { id: 'par_028', x: 512, y: 282, w: 100, h: 100, lock: true, type: 'store', sell:'live rev' },
    { id: 'par_029', x: 540, y: 4, w: 212, h: 28, lock: true, type: 'open' },
    { id: 'par_030', x: 540, y: 40, w: 116, h: 94, lock: true, type: 'open' },
    { id: 'par_031', x: 528, y: 142, w: 188, h: 88, lock: true, type: 'ice', health: 94 },
    { id: 'par_032', x: 620, y: 238, w: 96, h: 60, lock: true, type: 'open' },
    { id: 'par_033', x: 664, y: 40, w: 88, h: 28, lock: false, type: 'ice', health: 44 },
    { id: 'par_034', x: 664, y: 76, w: 160, h: 58, lock: true, type: 'ice', health: 80 },
    { id: 'par_035', x: 760, y: 4, w: 64, h: 64, lock: false, type: 'chest' },
    { id: 'par_036', x: 724, y: 178, w: 120, h: 120, lock: true, type: 'store', sell:'sword' },
    { id: 'par_037', x: 832, y: 4, w: 146, h: 64, lock: true, type: 'open' },
    { id: 'par_038', x: 832, y: 76, w: 62, h: 58, lock: false, type: 'store', sell:'shield' },
    { id: 'par_039', x: 902, y: 76, w: 76, h: 58, lock: true, type: 'open' },
    { id: 'par_040', x: 986, y: 4, w: 66, h: 130, lock: true, type: 'open' },
    { id: 'par_041', x: 1060, y: 4, w: 92, h: 130, lock: true, type: 'ice', health: 46 },
    { id: 'par_042', x: 1160, y: 4, w: 58, h: 58, lock: false, type: 'store', sell:'sword' },
    { id: 'par_043', x: 1226, y: 4, w: 170, h: 58, lock: true, type: 'open' },
    { id: 'par_044', x: 1404, y: 4, w: 92, h: 94, lock: false, type: 'chest' },
    { id: 'par_045', x: 1160, y: 70, w: 236, h: 28, lock: true, type: 'ice', health: 118 },
    { id: 'par_046', x: 1160, y: 106, w: 336, h: 28, lock: true, type: 'ice', health: 170 },
    { id: 'par_047', x: 724, y: 142, w: 772, h: 28, lock: true, type: 'ice', health: 390 },
    { id: 'par_048', x: 1112, y: 178, w: 176, h: 174, lock: true, type: 'store', sell:'shield' },
    { id: 'par_049', x: 1296, y: 178, w: 140, h: 88, lock: true, type: 'open' },
    { id: 'par_050', x: 1444, y: 178, w: 52, h: 88, lock: true, type: 'open' },
    { id: 'par_051', x: 1296, y: 276, w: 76, h: 116, lock: true, type: 'open' },
    { id: 'par_052', x: 1380, y: 276, w: 116, h: 116, lock: false, type: 'chest' },
    { id: 'par_053', x: 4, y: 374, w: 54, h: 270, lock: true, type: 'open' },
    { id: 'par_054', x: 4, y: 652, w: 54, h: 164, lock: true, type: 'open' },
    { id: 'par_055', x: 66, y: 374, w: 376, h: 40, lock: true, type: 'open' },
    { id: 'par_056', x: 66, y: 422, w: 80, h: 80, lock: true, type: 'store',sell: 'shield' },
    { id: 'par_057', x: 154, y: 422, w: 176, h: 80, lock: true, type: 'ice', health: 88 },
    { id: 'par_059', x: 66, y: 510, w: 148, h: 58, lock: true, type: 'open' },
    { id: 'par_060', x: 66, y: 576, w: 148, h: 148, lock: true, type: 'store', sell:'sword' },
    { id: 'par_061', x: 66, y: 732, w: 288, h: 84, lock: true, type: 'ice', health: 144 },
    { id: 'par_062', x: 362, y: 732, w: 124, h: 84, lock: true, type: 'open' },
    { id: 'par_063', x: 222, y: 692, w: 264, h: 32, lock: true, type: 'open' },//.
    { id: 'par_064', x: 222, y: 510, w: 108, h: 134, lock: true, type: 'open' },
    { id: 'par_065', x: 338, y: 422, w: 104, h: 112, lock: true, gold: true, type: 'store', sell:'life++' },
    { id: 'par_066', x: 338, y: 542, w: 104, h: 102, lock: true, type: 'store', sell: 'shield' },
    { id: 'par_067', x: 450, y: 612, w: 160, h: 32, lock: true, type: 'ice', health: 80 },
    { id: 'par_068', x: 450, y: 282, w: 54, h: 322, lock: true, type: 'open' },
    { id: 'par_069', x: 512, y: 390, w: 168, h: 70, lock: true, type: 'open' },
    { id: 'par_070', x: 512, y: 508, w: 96, h: 96, lock: false, type: 'blank' },
    { id: 'par_071', x: 620, y: 306, w: 164, h: 76, lock: true, type: 'ice', health: 82 },
    { id: 'par_072', x: 688, y: 390, w: 96, h: 70, lock: true, type: 'open' },
    { id: 'par_073', x: 512, y: 468, w: 332, h: 32, lock: true, type: 'ice', health: 166 },
    { id: 'par_074', x: 616, y: 508, w: 450, h: 136, lock: true, type: 'ice', health: 226 },
    { id: 'par_075', x: 222, y: 652, w: 844, h: 32, lock: true, type: 'ice', health: 424 },
    { id: 'par_076', x: 4, y: 824, w: 74, h: 74, lock: false, type: 'chest' },
    { id: 'par_077', x: 86, y: 824, w: 400, h: 28, lock: true, type: 'ice', health: 200 },
    { id: 'par_078', x: 86, y: 860, w: 268, h: 38, lock: true, type: 'open' },
    { id: 'par_079', x: 362, y: 860, w: 124, h: 38, lock: true, type: 'open' },
    { id: 'par_080', x: 494, y: 692, w: 116, h: 206, lock: true, type: 'ice', health: 58 },
    { id: 'par_081', x: 618, y: 692, w: 56, h: 206, lock: true, type: 'open' },
    { id: 'par_082', x: 682, y: 692, w: 204, h: 56, lock: true, type: 'open' },
    { id: 'par_083', x: 682, y: 756, w: 204, h: 32, lock: true, type: 'open' },
    { id: 'par_084', x: 682, y: 796, w: 814, h: 102, lock: true, type: 'ice', health: 412 },
    { id: 'par_085', x: 894, y: 692, w: 96, h: 96, lock: false, type: 'special', cost: 400 },
    { id: 'par_086', x: 998, y: 732, w: 148, h: 56, lock: true, type: 'open' },
    { id: 'par_087', x: 1154, y: 732, w: 262, h: 56, lock: true, type: 'open' },
    { id: 'par_088', x: 998, y: 692, w: 290, h: 32, lock: true, type: 'open' },
    { id: 'par_089', x: 1074, y: 596, w: 134, h: 88, lock: true, type: 'open' },
    { id: 'par_090', x: 1216, y: 634, w: 72, h: 50, lock: false, type: 'open' },
    { id: 'par_091', x: 1296, y: 574, w: 52, h: 150, lock: true, type: 'open' },
    { id: 'par_092', x: 1356, y: 574, w: 60, h: 150, lock: true, type: 'open' },
    { id: 'par_093', x: 1424, y: 676, w: 72, h: 112, lock: true, type: 'open' },
    { id: 'par_094', x: 1424, y: 452, w: 72, h: 216, lock: true, type: 'open' },
    { id: 'par_095', x: 1424, y: 400, w: 72, h: 44, lock: false, type: 'open' },
    { id: 'par_096', x: 1296, y: 528, w: 120, h: 38, lock: true, type: 'open' },
    { id: 'par_097', x: 1296, y: 400, w: 120, h: 120, lock: true, type: 'store', sell:'shield' },
    { id: 'par_098', x: 1216, y: 360, w: 72, h: 266, lock: true, type: 'ice', health: 36 },
    { id: 'par_099', x: 1074, y: 454, w: 134, h: 134, lock: false, type: 'blank' },
    { id: 'par_100', x: 852, y: 454, w: 214, h: 46, lock: true, type: 'open' },
    { id: 'par_101', x: 792, y: 306, w: 52, h: 154, lock: true, type: 'open' },
    { id: 'par_102', x: 852, y: 306, w: 100, h: 100, lock: true, type: 'store', sell:'add param' },
    { id: 'par_103', x: 960, y: 306, w: 56, h: 100, lock: true, type: 'open' },
    { id: 'par_104', x: 1024, y: 360, w: 184, h: 46, lock: true, type: 'open' },
    { id: 'par_105', x: 1024, y: 306, w: 80, h: 46, lock: false, type: 'ice', health: 40 },
    { id: 'par_106', x: 852, y: 178, w: 252, h: 120, lock: true, type: 'ice', health: 126 },
    { id: 'par_107', x: 852, y: 414, w: 356, h: 32, lock: true, type: 'ice', health: 178 },
    { id: 'par_108', x: 4, y: 906, w: 1492, h: 140, lock: true, type: 'ice', health: 752 },
  ]
};

