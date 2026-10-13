// ==UserScript==
// @name         🥇优学院小助手（AI版）|视频-章节测试-作业考试查题(三合一)|本地题库+AI答题
// @name:zh-CN   Ulearn-Helper
// @name:en      Ulearn-Helper
// @namespace    http://tampermonkey.net/
// @version      4.18.0
// @description  Ulearn-Helper v4.18.0：课程进度工作台；考试填写失败时由 AI 有限操作题目控件；GitHub 自动更新与 AI 接口管理。
// @homepageURL  https://github.com/ghost0190/Ulearn-Helper
// @supportURL   https://github.com/ghost0190/Ulearn-Helper/issues
// @updateURL    https://raw.githubusercontent.com/ghost0190/Ulearn-Helper/main/Ulearn-Helper.meta.js
// @downloadURL  https://raw.githubusercontent.com/ghost0190/Ulearn-Helper/main/Ulearn-Helper.user.js
// @author       Miss. / AI-patch
// @match        https://utest.ulearning.cn/*
// @match        https://*.ulearning.cn/*/homework.do*
// @match        https://homework.ulearning.cn/*
// @match        https://ua.ulearning.cn/*
// @match        https://*.ulearning.cn/learnCourse/*
// @match        https://*.ulearning.cn/*/learnCourse/*
// @match        https://*.ulearning.cn/*
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @run-at       document-start
// @all-frames   true
// @grant        unsafeWindow
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      api.deepseek.com
// @connect      *
// ==/UserScript==
