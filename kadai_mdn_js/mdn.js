const today = new Date();

const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString(); 
const day = today.getDate().toString();

console.log(`${year}年${month}月${day}日`);

