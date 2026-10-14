// ==UserScript==
// @name         Ulearn-Helper
// @name:zh-CN   Ulearn-Helper
// @name:en      Ulearn-Helper
// @namespace    http://tampermonkey.net/
// @version      4.18.6
// @description  Ulearn-Helper v4.18.6：修复英语下拉填空题干、选项匹配和长 JSON 答案解析，增加答题诊断日志。
// @homepageURL  https://github.com/ghost0190/Ulearn-Helper
// @supportURL   https://github.com/ghost0190/Ulearn-Helper/issues
// @updateURL    https://raw.githubusercontent.com/ghost0190/Ulearn-Helper/main/Ulearn-Helper.meta.js
// @downloadURL  https://raw.githubusercontent.com/ghost0190/Ulearn-Helper/main/Ulearn-Helper.user.js
// @author       Miss. (original) / ghost0190 (maintenance)
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
// @grant        GM_addValueChangeListener
// @grant        GM_listValues
// @grant        GM_getValue
// @connect      api.deepseek.com
// @connect      *
// ==/UserScript==
