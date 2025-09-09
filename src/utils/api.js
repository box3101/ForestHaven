import fs from 'fs';
import path from 'path';

export const fetchNavigationMenus = async () => {
  try {
    // 서버 사이드에서는 파일 시스템을 직접 읽기
    const filePath = path.join(process.cwd(), 'public', 'data', 'navigationMenus.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return data;
  } catch (error) {
    return [];
  }
};