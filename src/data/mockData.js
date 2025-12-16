export const mockUsers = [
  { id: 1, username: 'BabyMom123', email: 'babymom@example.com' },
  { id: 2, username: 'DadSeller', email: 'dadseller@example.com' },
  { id: 3, username: 'ToyCollector', email: 'toycollector@example.com' }
];

// ✅ 種類選項（擴充至 16 個）
export const CATEGORIES = [
  '嬰兒車',
  '嬰兒床',
  '安全座椅',
  '揹帶 / 腰凳',
  '奶粉',
  '嬰兒食品',
  '奶樽 / 奶咀',
  '餵食用具',
  '玩具',
  '圖書',
  '衣服',
  '鞋襪',
  '尿片',
  '清潔用品',
  '洗護用品',
  '其他'
];

// 新舊狀況（保持不變）
export const CONDITIONS = [
  '全新',
  '95新',
  '9成新',
  '8成新',
  '7成新',
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