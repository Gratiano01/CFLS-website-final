mongoose = require("mongoose")
mongoose.disconnect().then(() => {
  // 现在数据库连接已关闭，可以安全地重新连接
  mongoose.connect('mongodb://localhost:27017/mydatabase', {
    // 你的连接选项
  }).then(() => {
    console.log('重新连接成功');
  }).catch(err => {
    console.error('重新连接时发生错误:', err);
  });
});