// eslint-disable-next-line @typescript-eslint/no-var-requires
const bodyParser = require("body-parser");

// 'Express'アプリケーションのインスタンスを受け取る関数
module.exports = app => {
  app.use(bodyParser.json());
  // TODO: ここにAPIの実装内容を追記していく
};
