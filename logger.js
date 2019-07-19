; (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      global.logger = factory();
}(this, (function () {
  'use strict';
  var globalConsole = {};

  var Logger = {
    get log() {
      if (isConsole(globalConsole)) {
        return console.log;
      }
      return new Function();
    },
    /**
     * log别名，输出信息
     */
    get info() {
      if (isConsole(globalConsole)) {
        return console.info;
      }
      return new Function();
    },
  
    get debug() {
      if (isConsole(globalConsole)) {
        return console.debug;
      }
      return new Function();
    },
    /**
     * 输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。
     */
    get error() {
      if (isConsole(globalConsole)) {
        return console.error;
      }
      return new Function();
    },
    /**
     * 输出警告信息
     */
    get warn() {
      if (isConsole(globalConsole)) {
        return console.warn;
      }
      return new Function();
    },
    /**
     * @param boolean
     * @param string
     * @description 接受两个参数，只有当第一个参数为false，才会输出第二个参数，否则不输出任何东西
     */
    get assert() {
      if (isConsole(globalConsole)) {
        return console.assert;
      }
      return new Function();
    },
    /**
     * 清除当前控制台的所有输出，将光标回置到第一行
     */
    get clear() {
      return console.clear;
    },
    /**
     * 用于计数，输出它被调用了多少次。
     */
    get count() {
      if (isConsole(globalConsole)) {
        return console.count;
      }
      return new Function();
    },
    /**
     * 用于将显示的信息分组，可以把信息进行折叠和展开。
     */
    get group() {
      if (isConsole(globalConsole)) {
        return console.group;
      }
      return new Function();
    },
    /**
     * 与group方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的
     */
    get groupCollapsed() {
      if (isConsole(globalConsole)) {
        return console.groupCollapsed;
      }
      return new Function();
    },
    /**
     * 	结束内联分组
     */
    get groupEnd() {
      if (isConsole(globalConsole)) {
        return console.groupEnd;
      }
      return new Function();
    },
    /**
     * 将复合类型的数据转为表格显示
     */
    get table() {
      if (isConsole(globalConsole)) {
        return console.table;
      }
      return new Function();
    },
    /**
     * 计时开始
     */
    get time() {
      if (isConsole(globalConsole)) {
        return console.time;
      }
      return new Function();
    },
    /**
     * 计时结束
     */
    get timeEnd() {
      if (isConsole(globalConsole)) {
        return console.timeEnd;
      }
      return new Function();
    },
    /**
     * 追踪函数的调用过程
     */
    get trace() {
      if (isConsole(globalConsole)) {
        return console.trace;
      }
      return new Function();
    },
    /**
     * 性能分析器
     */
    get profile() {
      if (isConsole(globalConsole)) {
        return console.profile;
      }
      return new Function();
    },
    init: function() {
      return this;
    },
    globalConfig: function(config) {
      if (config.enable !== undefined) {
        globalConsole.enable = config.enable;
      }
    }
  };

  function isConsole(global) {
    if (global.enable === undefined) {
      return true;
    }
    return global.enable;
  }
  return Logger.init();
})));