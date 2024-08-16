# Evter 事件管理器

## 介绍

Evter 是一个事件管理器，用于管理事件。

## 安装

```bash
npm install https://github.com/ydmingg/evter.git
cd vincijs
npm install
npm run dev

```

## 使用

```js
import Evter from 'evter';

// 示例使用
const evter = new Evter();

function callback1(data: any) {
    console.log('回调A:', data);
}

function callback2(data: any) {
    console.log('回调B:', data);
}

function callback3(data: any) {
    console.log('回调C:', data);
}

// 绑定事件
evter.on('event1', callback1);
evter.on('event1', callback2);

// 只绑定一次事件
evter.once('event1', callback3); 

// 触发事件
evter.emit('event1', { some: 'data' });

// 取消某个事件的一个回调函数
evter.off('event1', callback1);

// 触发事件，验证回调函数是否已被取消
evter.emit('event1', { some: 'other data' });

// 取消某个事件的所有回调函数
evter.off('event1');

// 移除所有事件
evter.allClear();

// 触发事件，验证所有回调函数是否已被取消
evter.emit('event1', { some: 'data' });

// 获取所有事件及其回调函数
console.log(evter.all());

```


## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/ydmingg/evter/issues/new) 或者提交一个 Pull Request。

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`


## Git 贡献提交规范

- 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))
- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
