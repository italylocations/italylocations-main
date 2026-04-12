import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';

const s3 = new S3Client({
  region: 'auto',
  endpoint: 'https://b7229236b0e5a18f8a0b75dad4848d9b.r2.cloudflarestorage.com',
  credentials: {
    accessKeyId: 'b96f7fb98e5456bb16463ac0f6b8c81e',
    secretAccessKey: 'd5571419982e89c967851a54c7f68f382653493b3057c6376902645f6a95a039'
  }
});

const folder = 'C:/progetti/stazzotto_clean';
const locationCode = 'SRD-ZQKJ-HC6K';
const files = fs.readdirSync(folder).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
console.log('Files trovati:', files.length);

const urls = [];

for (const file of files) {
  const filePath = path.join(folder, file);
  const content = fs.readFileSync(filePath);
  const ext = path.extname(file).toLowerCase();
  const contentType = ext === '.png' ? 'image/png' : 'image/jpeg';
  const key = `${locationCode}/${file}`;
  await s3.send(new PutObjectCommand({ 
    Bucket: 'italy-locations-photos', 
    Key: key, 
    Body: content, 
    ContentType: contentType 
  }));
  const url = `https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/${key}`;
  urls.push(url);
  console.log('Caricato:', key);
}

console.log('\n=== URL DA COPIARE NEL GOOGLE SHEET (colonna V) ===');
console.log(urls.join('\n'));
console.log('\nCompletato! Totale:', urls.length, 'foto');
