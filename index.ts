type EventHandler = (...args: any[]) => void;

export default class Evter {
    private events: Map<string, Set<EventHandler>>;

    constructor() {
        this.events = new Map();
    }

    // 返回所有事件及其回调函数
    public all(): Map<string, Set<EventHandler>> {
        return this.events;
    }

    // 清除所有事件
    public allClear(): void {
        this.events.clear();
    }

    // 绑定事件和回调函数
    public on(event: string, callback: EventHandler): void{
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event)!.add(callback);
    }

    // 触发事件，调用所有绑定的回调函数
    public emit(event: string, ...args: any[]): void {
        const callbacks = this.events.get(event);
        if (callbacks) {
            callbacks.forEach(callback => {
                this.invokeCallback(event, callback, args);
            });
        }
    }

    // 取消事件的某个或所有回调函数
    public off(event: string, callback?: EventHandler): void {
        if (!this.events.has(event)) return;

        if (!callback) {
            // 如果没有提供具体的回调函数，移除该事件的所有回调函数
            this.events.delete(event);
        } else {
            // 移除该事件的指定回调函数
            const callbacks = this.events.get(event);
            if (callbacks) {
                callbacks.delete(callback);
                if (callbacks.size === 0) {
                    this.events.delete(event);
                }
            }
        }
    }

    // 注册一个只执行一次的回调函数
    public once(event: string, callback: EventHandler): void {
        const oneTimeCallback = (...args: any[]) => {
            this.off(event, oneTimeCallback);
            callback(...args);
        };
        this.on(event, oneTimeCallback);
    }

    // 私有调用回调函数并处理错误
    private invokeCallback(event: string, callback: EventHandler, args: any[]): void {
        try {
            callback(...args);
        } catch (error) {
            console.error(`Error in event callback for event "${event}":`, error);
        }
    }
}