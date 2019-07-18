; (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      global.logger = factory();
}(this, (function () {
  'use strict';
  var globalConsole;

  function argumentsToArray(param) {
    return Array.prototype.slice.call(param);
  }

  function getSetGlobalConsole(value) {
    globalConsole = value;
    return globalConsole;
  }

  function Logger() {
  }

  function log() {
    if (isConsole(globalConsole)) {
      return console.log.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }

  /**
   * log别名，输出信息
   */
  function info() {
    if (isConsole(globalConsole)) {
      return console.info.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }

  function debug() {
    if (isConsole(globalConsole)) {
      return console.debug.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。
   */
  function error() {
    if (isConsole(globalConsole)) {
      return console.error.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 输出警告信息
   */
  function warn() {
    if (isConsole(globalConsole)) {
      return console.warn.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * @param boolean
   * @param string
   * @description 接受两个参数，只有当第一个参数为false，才会输出第二个参数，否则不输出任何东西
   */
  function assert() {
    if (isConsole(globalConsole)) {
      return console.assert.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 清除当前控制台的所有输出，将光标回置到第一行
   */
  function clear() {
    return console.clear.apply(null, argumentsToArray(arguments));
  }
  /**
   * 用于计数，输出它被调用了多少次。
   */
  function count() {
    if (isConsole(globalConsole)) {
      return console.count.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 用于将显示的信息分组，可以把信息进行折叠和展开。
   */
  function group() {
    if (isConsole(globalConsole)) {
      return console.group.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 与group方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的
   */
  function groupCollapsed() {
    if (isConsole(globalConsole)) {
      return console.groupCollapsed.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 	结束内联分组
   */
  function groupEnd() {
    if (isConsole(globalConsole)) {
      return console.groupEnd.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 将复合类型的数据转为表格显示
   */
  function table() {
    if (isConsole(globalConsole)) {
      return console.table.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 计时开始
   */
  function time() {
    if (isConsole(globalConsole)) {
      return console.time.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 计时结束
   */
  function timeEnd() {
    if (isConsole(globalConsole)) {
      return console.timeEnd.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 追踪函数的调用过程
   */
  function trace() {
    if (isConsole(globalConsole)) {
      return console.trace.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }
  /**
   * 性能分析器
   */
  function profile() {
    if (isConsole(globalConsole)) {
      return console.profile.apply(null, argumentsToArray(arguments));
    }
    return new Function();
  }

  function isConsole(global) {
    if (global === undefined) {
      return true;
    }
    return global;
  }

  var proto = Logger.prototype;
  proto.canConsole = getSetGlobalConsole;
  proto.log = log;
  proto.info = info;
  proto.debug = debug;
  proto.error = error;
  proto.warn = warn;
  proto.assert = assert;
  proto.clear = clear;
  proto.count = count;
  proto.group = group;
  proto.groupCollapsed = groupCollapsed;
  proto.groupEnd = groupEnd;
  proto.table = table;
  proto.time = time;
  proto.timeEnd = timeEnd;
  proto.trace = trace;
  proto.profile = profile;

  return new Logger();
})));