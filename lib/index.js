"use strict";

const chalk = require("chalk");
const gradient = require("gradient-string");
const pkg = require("../package.json"); // root -> ciaatopupbail/package.json

// Ambil info dari package.json
const version = pkg.version || "1.0.0";
const updateDate = pkg.update || "23 April 2026";
const name = "CiaaTopUpbail";
const creator = "CiaaSoft-Official";

// Konfigurasi tampilan
const PANEL_INFO = "beli panel premium di tokopanel.ciaatopup.com";
const STATUS = "Premium WhatsApp Web Library — Powered by CiaaSoft-Offical";

// Utils: lebar box otomatis mengikuti terminal, dengan batas aman
const termWidth = Math.max(60, Math.min(process.stdout.columns || 80, 100));
const boxInnerWidth = termWidth - 2;

function hr(char = "─") {
  return char.repeat(termWidth);
}

function padLine(text = "") {
  const clean = text.length > boxInnerWidth - 2 ? text.slice(0, boxInnerWidth - 5) + "..." : text;
  const spaces = " ".repeat(Math.max(0, boxInnerWidth - 2 - clean.length));
  return `│ ${clean}${spaces}`;
}

function centerLine(text = "") {
  const clean = text.length > boxInnerWidth - 2 ? text.slice(0, boxInnerWidth - 5) + "..." : text;
  const totalSpace = Math.max(0, boxInnerWidth - 2 - clean.length);
  const left = Math.floor(totalSpace / 2);
  const right = totalSpace - left;
  return `│ ${" ".repeat(left)}${clean}${" ".repeat(right)}`;
}

function box(lines, colorFn = (x) => x) {
  const top = `┌${"─".repeat(boxInnerWidth)}┐`;
  const bot = `└${"─".repeat(boxInnerWidth)}┘`;
  console.log(colorFn(top));
  for (const line of lines) console.log(colorFn(line));
  console.log(colorFn(bot));
}

function printBanner() {
  const grad = gradient(["#00c6ff", "#a685e2", "#ff6ec7"]);
  const dim = gradient(["#3a3a3a", "#6a6a6a"]);

  const title = `${name.toUpperCase()}`;
  const subtitle = "Multi-Device WhatsApp Engine";
  const tagline = "⋆｡ crafted by ciaasoft ｡⋆";

  console.log();
  console.log(grad("─".repeat(boxInnerWidth + 2)));
  console.log(grad(centerLine(`✦  ${title}  ✦`).replace("|", "").replace("|", "").trim()));
  console.log(dim(centerLine(subtitle).replace("|", "").replace("|", "").trim()));
  console.log(dim(centerLine(tagline).replace("|", "").replace("|", "").trim()));
  console.log(grad("─".repeat(boxInnerWidth + 2)));
  console.log();

  const infoLines = [
    padLine(""),
    padLine(`  Library    ${name}`),
    padLine(`  Author     ${creator}`),
    padLine(`  Version    v${version}`),
    padLine(`  Status     ${STATUS}`),
    padLine(`  Panel      ${PANEL_INFO}`),
    padLine(""),
  ];

  box(infoLines, (s) => grad(s));
  console.log();
}

printBanner();

/**
PEMBATAS
 */

var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function () { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function (m, exports) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
      __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.proto = exports.makeWASocket = void 0;

const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", {
  enumerable: true,
  get: function () {
    return WAProto_1.proto;
  }
});

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
exports.default = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
__exportStar(require("./Store"), exports);



