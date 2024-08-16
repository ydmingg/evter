import Evter from "../index.ts";

// 初始化事件
const evter = new Evter();
let idx = 0


const btn = new Array();
["事件按钮", "反馈A","反馈B","反馈C"].forEach((item) => {
    const button = document.createElement('button');
    button.innerText = item;
    document.querySelector("#app")?.appendChild(button);
    btn.push(button);
    
    // 绑定事件A
    evter.on("btnChange1", (val) => { 
        button.innerText =item + val;
    })
    // 绑定事件B
    evter.on("btnChange2", (color) => { 
        button.style.backgroundColor = color;
    })
})

// 绑定一次性事件C
evter.once('btnChange3', (val) => { 
    console.log(val);
})



btn[0].addEventListener('click', () => { 
    idx += 1

    // 触发事件A
    evter.emit("btnChange1", idx)
    // 触发事件B
    evter.emit("btnChange2", "#00bad7")
    // 一次性触发事件C
    evter.emit("btnChange3", "只触发一次"+idx)
})


// 移除事件B
evter.off("btnChange2")
// 移除所有事件
// evter.allClear()
// 获取所有事件及其回调函数
console.log(evter.all());