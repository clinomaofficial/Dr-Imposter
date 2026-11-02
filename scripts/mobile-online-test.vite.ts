import { defineConfig,mergeConfig } from 'vite';
import path from 'node:path';
import appConfig from '../vite.config';
export default defineConfig(env => mergeConfig(appConfig(env), {
  plugins:[{name:'local-room-transport',enforce:'pre',transform(code,id) {
    if(id.replaceAll('\\','/').endsWith('/src/components/views/MedicalCupView.tsx'))
      return code.replace("from 'firebase/firestore';", "from '/scripts/mobile-ui-room-store.ts';");
  }}],
  build:{rollupOptions:{input:path.resolve(__dirname,'mobile-online-fixtures.html')}},
}));
