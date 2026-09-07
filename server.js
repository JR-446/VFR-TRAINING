const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=__dirname;   // sert le dossier où se trouve ce fichier (portable)
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.md':'text/markdown; charset=utf-8'};
http.createServer((req,res)=>{
  let p=decodeURIComponent((req.url||'/').split('?')[0]);
  if(p==='/')p='/index.html';
  const f=path.join(ROOT,p);
  fs.readFile(f,(e,data)=>{
    if(e){res.writeHead(404);res.end('404');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});
    res.end(data);
  });
}).listen(5500,()=>console.log('VFR Radio served on http://localhost:5500'));
