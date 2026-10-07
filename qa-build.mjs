import {mkdirSync,rmSync,copyFileSync,readFileSync} from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');
for(const f of ['index.html','about.html'])copyFileSync(f,'dist/'+f);
if(!readFileSync('dist/index.html','utf8').includes('qa-recovered-20261007'))throw Error('Missing QA release marker');
console.log('SHIPVELA_QA_RECOVERY_BUILD_OK');
