// ==UserScript==
// @name         Ulearn-Helper
// @name:zh-CN   Ulearn-Helper
// @name:en      Ulearn-Helper
// @namespace    http://tampermonkey.net/
// @version      4.18.3
// @description  Ulearn-Helper v4.18.3：修复综合题子题识别、文章上下文、来源错误提示与单题重试状态。
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
