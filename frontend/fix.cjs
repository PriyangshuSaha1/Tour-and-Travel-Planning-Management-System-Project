const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix broken quotes from previous attempt
    content = content.replace(/\$\{import\.meta\.env\.VITE_API_URL \|\| "http:\/\/localhost:5600\/api"\}(.*?)",/g, '$,');
    content = content.replace(/\$\{import\.meta\.env\.VITE_API_URL \|\| "http:\/\/localhost:5600\/api"\}(.*?)"\)/g, '$)');

    // For any remaining http://localhost:5600
    content = content.replace(/"http:\/\/localhost:5600\/api(.*)"/g, '$');
    content = content.replace(/http:\/\/localhost:5600\/api(.*)/g, '$');

    fs.writeFileSync(filePath, content);
});
console.log('Fixed files');
