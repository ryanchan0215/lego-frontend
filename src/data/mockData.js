export const mockUsers = [
  { id: 1, username: 'BabyMom123', email: 'babymom@example.com' },
  { id: 2, username: 'DadSeller', email: 'dadseller@example.com' },
  { id: 3, username: 'ToyCollector', email: 'toycollector@example.com' }
];

// ✅ 改：種類（嬰幼兒用品）
export const CATEGORIES = [
  '嬰兒車',
  '汽車座椅',
  '嬰兒床/搖籃',
  '餐椅',
  '學行車',
  '玩具',
  '衣服',
  '鞋仔',
  '奶樽/奶咀',
  '尿片袋',
  '揹帶',
  '沖涼用品',
  '圖書',
  '其他'
];

// ✅ 品牌選項（非必填）
export const BRANDS = [
  'Chicco',
  'Combi',
  'Maclaren',
  'Stokke',
  'Bugaboo',
  'Aprica',
  'Fisher-Price',
  'VTech',
  "Carter's",
  'Baby Gap',
  'Philips Avent',
  'Tommee Tippee',
  'Pigeon',
  'Ergobaby',
  '其他'
];

// ✅ 新舊程度
export const CONDITIONS = [
  '全新未開封',
  '全新已開封',
  '9成新',
  '8成新',
  '7成新',
  '6成新',
  '5成新或以下',
  '其他'
];

export const mockPosts = [
  // 出售
  {
    id: 1,
    userId: 1,
    username: 'BabyMom123',
    type: 'sell',
    items: [
      { 
        itemDescription: 'Chicco 嬰兒車，輕便可摺疊', 
        category: '嬰兒車', 
        brand: 'Chicco',
        condition: '8成新',
        pricePerUnit: 800
      }
    ],
    createdAt: new Date('2025-12-01'),
    status: 'available'
  }
];