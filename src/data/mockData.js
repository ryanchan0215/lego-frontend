export const mockUsers = [
  { id: 1, username: 'LegoFan123', email: 'legofan@example.com' },
  { id: 2, username: 'BrickMaster', email: 'brickmaster@example.com' },
  { id: 3, username: 'BuilderPro', email: 'builderpro@example.com' }
];

export const COLORS = [
  '紅色', '藍色', '黃色', '綠色', '黑色', '白色', 
  '灰色', '橙色', '紫色', '粉紅色', '啡色', '透明'
];

export const mockPosts = [
  // 出售
  {
    id: 1,
    userId: 1,
    username: 'LegoFan123',
    type: 'sell',
    items: [
      { partNumber: '3001', color: '紅色', quantity: 50, pricePerUnit: 0.5 },
      { partNumber: '3001', color: '藍色', quantity: 30, pricePerUnit: 0.5 },
      { partNumber: '3004', color: '黃色', quantity: 20, pricePerUnit: 0.8 }
    ],
    createdAt: new Date('2025-12-01'),
    status: 'available'
  },
  {
    id: 2,
    userId: 2,
    username: 'BrickMaster',
    type: 'sell',
    items: [
      { partNumber: '2x4', color: '黑色', quantity: 100, pricePerUnit: 1.2 },
      { partNumber: '2x2', color: '白色', quantity: 80, pricePerUnit: 0.6 }
    ],
    createdAt: new Date('2025-12-02'),
    status: 'available'
  },
  // 求購
  {
    id: 3,
    userId: 3,
    username: 'BuilderPro',
    type: 'buy',
    items: [
      { partNumber: '3023', color: '綠色', quantity: 40, pricePerUnit: 0.9 }
    ],
    createdAt: new Date('2025-12-03'),
    status: 'available'
  },
  {
    id: 4,
    userId: 1,
    username: 'LegoFan123',
    type: 'buy',
    items: [
      { partNumber: '3001', color: '透明', quantity: 100, pricePerUnit: 1.5 },
      { partNumber: '2x6', color: '紅色', quantity: 50, pricePerUnit: 2.0 }
    ],
    createdAt: new Date('2025-12-03'),
    status: 'available'
  }
];