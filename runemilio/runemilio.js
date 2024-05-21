text/javascript

const cursor =
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\twidth="273.6px" height="360px" viewBox="0 0 273.6 360" enable-background="new 0 0 273.6 360" xml:space="preserve">\n<g>\n\t<g>\n\t\t<path d="M217.021,167.042c18.631-9.483,30.288-26.184,27.565-54.007c-3.667-38.023-36.526-50.773-78.006-54.404l-0.008-52.741\n\t\t\th-32.139l-0.009,51.354c-8.456,0-17.076,0.166-25.657,0.338L108.76,5.897l-32.11-0.003l-0.006,52.728\n\t\t\tc-6.959,0.142-13.793,0.277-20.466,0.277v-0.156l-44.33-0.018l0.006,34.282c0,0,23.734-0.446,23.343-0.013\n\t\t\tc13.013,0.009,17.262,7.559,18.484,14.076l0.01,60.083v84.397c-0.573,4.09-2.984,10.625-12.083,10.637\n\t\t\tc0.414,0.364-23.379-0.004-23.379-0.004l-6.375,38.335h41.817c7.792,0.009,15.448,0.13,22.959,0.19l0.028,53.338l32.102,0.009\n\t\t\tl-0.009-52.779c8.832,0.18,17.357,0.258,25.684,0.247l-0.009,52.532h32.138l0.018-53.249c54.022-3.1,91.842-16.697,96.544-67.385\n\t\t\tC266.916,192.612,247.692,174.396,217.021,167.042z M109.535,95.321c18.126,0,75.132-5.767,75.14,32.064\n\t\t\tc-0.008,36.269-56.996,32.032-75.14,32.032V95.321z M109.521,262.447l0.014-70.672c21.778-0.006,90.085-6.261,90.094,35.32\n\t\t\tC199.638,266.971,131.313,262.431,109.521,262.447z"/>\n\t</g>\n</g>\n</svg>',
  loader =
    '<svg class="gegga">\n  <defs>\n    <filter id="gegga">\n      <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />\n      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="inreGegga" />\n      <feComposite in="SourceGraphic" in2="inreGegga" operator="atop" />\n    </filter>\n  </defs>\n</svg>\n<svg class="snurra" width="200" height="200" viewBox="0 0 200 200">\n  <defs>\n    <linearGradient id="linjärGradient">\n      <stop class="stopp1" offset="0" />\n      <stop class="stopp2" offset="1" />\n    </linearGradient>\n    <linearGradient y2="160" x2="160" y1="40" x1="40" gradientUnits="userSpaceOnUse" id="gradient"\n      xlink:href="#linjärGradient" />\n  </defs>\n  <path class="halvan"\n    d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64" />\n  <circle class="strecken" cx="100" cy="100" r="64" />\n</svg>',
  playerCard =
    '     \n<div class="menu__container" style="display: none;">\n  <div class="menu">\n    <div class="name">\n      <h1>Odin</h1>\n    </div>\n    <div class="avatar-wrapper">\n    <div class="power-effect"></div>\n\n    <div class="avatar">\n      <img src="" alt="Avatar" style="width: 80px; height: 80px; border-radius: 50%;">\n    </div>\n    </div>\n\n    <div class="worthiness">\n      Worthiness\n      <div class="center">\n      </div>\n    </div>\n    <div class="ordinals">\n      <div class="burned">\n        A GIFT FOR THE GODS\n      <div class="center">\n        </div>\n      </div>\n      <div class="alive">\n        Runemilio\n      <div class="center">\n        </div>\n      </div>\n    </div>\n    <div class="wallet">\n    </div>\n  </div>\n</div>';
let notActive,
  targetDate,
  intervalId,
  dateChecked,
  updateRanOnce,
  seed,
  secretPage,
  endDateReached,
  foundPage;
(scriptTag = document.querySelector("script[data-w]")),
  (walletInfo = scriptTag?.dataset?.w),
  (notification =
    '<p></p><span class="close-btn" onclick="closeNotification()">&times;</span>'),
  (pids = {
    keyChildren:
      "0a8820cf850a11b9a7d84eb1721d6dd72820f8876447a8c08596dd3fca42dac1i0",
    imagesChildren:
      "f7594413b3d8b4b633b5b13a60f9c57fb606dde602ebd8e609aa0e3cdf6a9163i0",
    whitePaper:
      "68115815178ba0f385092950a405d20c6ce2f4ea20baad7b186b0f64844cf416i0",
    whitePaperHashes:
      "81643c0aae69acd865a7588bf27468491848ec0a972d3e40b50c90dbe16adc78i0",
  }),
  (runeToggles = {
    toggleBooster: toggleBooster,
    toggleSecretPage: toggleSecretPage,
    hideSecretPage: hideSecretPage,
  }),
  (document.body.style.backgroundColor = "black"),
  (bu = "/content/"),
  (runes = [
    "ᚠ",
    "ᚢ",
    "ᚦ",
    "ᚨ",
    "ᚱ",
    "ᚲ",
    "ᚷ",
    "ᚹ",
    "ᚺ",
    "ᚻ",
    "ᛁ",
    "ᛂ",
    "ᛃ",
    "ᛇ",
    "ᛈ",
    "ᛉ",
    "ᛊ",
    "ᛋ",
    "ᛏ",
    "ᛒ",
    "ᛗ",
    "ᛚ",
    "ᛜ",
    "ᛝ",
    "ᛟ",
    "ᛞ",
  ]),
  (staticRunes = runes),
  (lastPage = "main"),
  (loading = !0),
  (notificationAutoClose = 1e4),
  (imgUrls = []),
  (targetDate = new Date("2024-05-8T19:39:00Z"));
let metadata = { worthiness: 0, burned: 0, count: 0, user: "" };
(loaderDiv = document.createElement("div")),
  (loaderDiv.style.position = "absolute"),
  (loaderDiv.style.top = "50%"),
  (loaderDiv.style.left = "50%"),
  (loaderDiv.style.transform = "translate(-50%, -50%)"),
  (loaderDiv.id = "loader"),
  (loaderDiv.innerHTML = loader),
  document.body.appendChild(loaderDiv),
  (playerCardDiv = document.createElement("div")),
  (playerCardDiv.innerHTML = playerCard),
  document.body.appendChild(playerCardDiv);
const notificationDiv = document.createElement("div");
function addCss(e) {
  const t = document.createElement("style");
  (t.type = "text/css"), (t.innerHTML = e), document.head.appendChild(t);
}
async function fetchAndUpdateTargetDate() {
  const e = await load(
    "707c50148646e9810179626c1f2db507d2b4491efa4e2b8105ccd31e26a80466i0",
    (e) => fetchResource(e, "json", "Failed to fetch target date")
  );
  if (e?.targetDate)
    try {
      targetDate = new Date(e.targetDate);
    } catch (e) {
      console.error("Invalid date format:", e);
    }
}
function createSvgCursor(e) {
  const t = new Blob(
    [
      `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 350 350" enable-background="new 0 0 350 350" xml:space="preserve">\n    <g>\n      <rect width="25%" height="25%" fill="none"/>\n      <g transform="translate(25, 25) scale(0.85)">\n        <path fill="${e}" d="M217.021,167.042c18.631-9.483,30.288-26.184,27.565-54.007c-3.667-38.023-36.526-50.773-78.006-54.404l-0.008-52.741 h-32.139l-0.009,51.354c-8.456,0-17.076,0.166-25.657,0.338L108.76,5.897l-32.11-0.003l-0.006,52.728 c-6.959,0.142-13.793,0.277-20.466,0.277v-0.156l-44.33-0.018l0.006,34.282c0,0,23.734-0.446,23.343-0.013 c13.013,0.009,17.262,7.559,18.484,14.076l0.01,60.083v84.397c-0.573,4.09-2.984,10.625-12.083,10.637 c0.414,0.364-23.379-0.004-23.379-0.004l-6.375,38.335h41.817c7.792,0.009,15.448,0.13,22.959,0.19l0.028,53.338l32.102,0.009 l-0.009-52.779c8.832,0.18,17.357,0.258,25.684,0.247l-0.009,52.532h32.138l0.018-53.249c54.022-3.1,91.842-16.697,96.544-67.385 C266.916,192.612,247.692,174.396,217.021,167.042z M109.535,95.321c18.126,0,75.132-5.767,75.14,32.064 c-0.008,36.269-56.996,32.032-75.14,32.032V95.321z M109.521,262.447l0.014-70.672c21.778-0.006,90.085-6.261,90.094,35.32 C199.638,266.971,131.313,262.431,109.521,262.447z"/>\n      </g>\n    </g>\n    </svg>`,
    ],
    { type: "image/svg+xml" }
  );
  return `url(${URL.createObjectURL(t)}), auto`;
}
async function startCountdown() {
  return new Promise(async (e, t) => {
    dateChecked
      ? (intervalId = setInterval(updateCountdown, 1e3))
      : (await fetchAndUpdateTargetDate(),
        (dateChecked = !0),
        (intervalId = setInterval(updateCountdown, 1e3)),
        changeRuneColor("dark"),
        e());
  });
}
function stopCountdown() {
  clearInterval(intervalId);
}
function updateCountdown() {
  const e = new Date(),
    t = targetDate - e;
  if (
    ((document.getElementById("loader").style.display = "none"),
    (loading = !1),
    t <= 0)
  )
    return (
      clearInterval(intervalId),
      document
        .querySelectorAll(".digit div")
        .forEach((e) => (e.textContent = "00")),
      (endDateReached = !0),
      (document.querySelector(".countdown").style.display = "none"),
      void (document.getElementById("eye").style.display = "block")
    );
  (endDateReached = !1),
    "none" === document.querySelector(".countdown").style.display &&
      (document.querySelector(".countdown").style.display = "flex"),
    (document.getElementById("eye").style.display = "none");
  const n = Math.floor(t / 864e5),
    o = Math.floor((t / 36e5) % 24),
    a = Math.floor((t / 6e4) % 60),
    r = Math.floor((t / 1e3) % 60);
  updateDigit("days", formatDigit(n)),
    updateDigit("hours", formatDigit(o)),
    updateDigit("minutes", formatDigit(a)),
    updateDigit("seconds", formatDigit(r));
}
function cleanupDigits() {
  document.querySelectorAll(".exit").forEach((e) => {
    e && e.parentNode && e.remove();
  });
}
function updateDigit(e, t) {
  const n = document.getElementById(e);
  if (!n) return;
  let o = n.querySelector(".current");
  if (o && o.textContent === t) return;
  const a = document.createElement("div");
  (a.className = "enter"),
    (a.textContent = t),
    (a.style.transform = "translateY(-100%)"),
    (a.style.opacity = 0),
    n.prepend(a),
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        (a.className = "current"),
          (a.style.transform = "translateY(0)"),
          (a.style.opacity = 1),
          o &&
            ((o.className = "exit"),
            (o.style.transform = "translateY(100%)"),
            (o.style.opacity = 0));
      });
    }),
    setTimeout(() => {
      o && o.remove();
    }, 500);
}
function formatDigit(e) {
  return e < 10 ? `0${e}` : e.toString();
}
function updateHeadFromExternalHTML(e) {
  return fetch(e)
    .then((e) => e.text())
    .then((e) => {
      const t = new DOMParser().parseFromString(e, "text/html").head.children,
        n = [];
      for (const e of t)
        if ("SCRIPT" === e.tagName && (e.src || e.textContent)) {
          const t = document.createElement("script"),
            o = new Promise((n) => {
              (t.onload = n),
                e.src ? (t.src = e.src) : (t.textContent = e.textContent),
                document.head.appendChild(t);
            });
          t.src && n.push(o);
        } else document.head.appendChild(e.cloneNode(!0));
      return Promise.all(n);
    })
    .catch((e) => {
      throw (console.error("Error loading the HTML: ", e), e);
    });
}
function loadExternalHTML(e) {
  return new Promise((t, n) => {
    fetch(e)
      .then((e) => e.text())
      .then((e) => {
        const n = new DOMParser().parseFromString(e, "text/html");
        n.querySelector(".loader") && n.querySelector(".loader").remove();
        n.body.innerHTML;
        for (let e = 0; e < n.body.children.length; e++)
          document.body.appendChild(n.body.children[e]);
        t();
      })
      .catch((e) => {
        console.error("Error loading the HTML: ", e), n(e);
      });
  });
}
function loadCSS(e) {
  return new Promise((t, n) => {
    let o = document.createElement("link");
    (o.rel = "stylesheet"),
      (o.type = "text/css"),
      (o.href = e),
      (o.onload = t),
      document.head.appendChild(o);
  });
}
function padKey(e) {
  let t = CryptoJS.enc.Utf8.parse(e),
    n = CryptoJS.lib.WordArray.create();
  for (n.concat(t); n.sigBytes < 32; )
    n.concat(CryptoJS.lib.WordArray.create([0])),
      (n.sigBytes = Math.min(n.sigBytes + 4, 32));
  return (n.sigBytes = 32), n;
}
async function fetchResource(e, t, n, o = 0) {
  try {
    const n = await fetch(e);
    if (!n.ok) throw new Error("Network response was not ok.");
    if ("text" === t) return await n.text();
    if ("json" === t) return await n.json();
    throw new Error('Invalid type specified. Use "text" or "json".');
  } catch (a) {
    if ((console.error(`${n}: ${a}`), o < 10))
      return (
        console.log(`Retrying... Attempt ${o + 1}`),
        fetchResource(e, t, n, o + 1)
      );
    throw new Error(`Failed after ${o} retries.`);
  }
}
function decryptContent(e, t, n) {
  const o = padKey(t),
    a = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Hex.parse(e),
    });
  return CryptoJS.AES.decrypt(a, o, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Hex.parse(n),
  }).toString(CryptoJS.enc.Utf8);
}
function fetchChildren(e, t, n = 0, o = [], a = 0) {
  return fetch(`/r/children/${e}/${n}`)
    .then((e) => {
      if (!e.ok) throw new Error("Network response was not ok.");
      return t ? e.text() : e.json();
    })
    .then((r) => {
      if ((t && (r = JSON.parse(r)), o.push(...r.ids), r.more))
        return fetchChildren(e, t, n + 1, o, a);
      {
        const e = o[o.length - 1];
        return { ids: o, lci: e };
      }
    })
    .catch((r) =>
      a < 10
        ? new Promise((e) => setTimeout(e, 250)).then(() =>
            fetchChildren(e, t, n, o, a + 1)
          )
        : {
            ids: o,
            lci: o.length > 0 ? o[o.length - 1] : void 0,
            error: "Max retries reached. " + r.message,
          }
    );
}
async function grabEncryptedTxt(e) {
  try {
    const t = await fetchChildren(pids.whitePaper),
      n = await fetchChildren(pids.whitePaperHashes);
    t.ids.length;
    let o = [],
      a = e;
    for (let e = t.ids.length - 1; e >= 0; e--) {
      const r = t.ids[e],
        i = decryptContent(
          await fetchResource(
            `${bu}${r}`,
            "text",
            "Failed to fetch whitepaper"
          ),
          a,
          "00000000000000000000000000000000"
        );
      if (!i) throw new Error(`Decryption failed for whitepaper at index ${e}`);
      if ((o.push(i), e > 0)) {
        const t = n.ids[e - 1];
        a = await fetchResource(
          `${bu}${t}`,
          "text",
          "Failed to fetch hash inscription"
        );
      }
    }
    return (o = o.reverse()), o;
  } catch (e) {
    return console.error(e), [];
  }
}
async function getDataUrl(e, t, n) {
  const o = await n.arrayBuffer();
  (e = hexStringToUint8Array(e)), (t = hexStringToUint8Array(t));
  const a = await window.crypto.subtle.importKey(
      "raw",
      e,
      { name: "AES-CBC" },
      !1,
      ["decrypt"]
    ),
    r = await window.crypto.subtle.decrypt({ name: "AES-CBC", iv: t }, a, o),
    i = new Blob([r]);
  return URL.createObjectURL(i);
}
function changeRuneColor(e) {
  document.querySelectorAll(".rune").forEach((t) => {
    t.style.color = "light" === e ? "black" : "white";
  });
}
async function fetchEncryptedImage(e, t, n) {
  try {
    const e = document.createElement("img");
    if (
      ("59749f12c93856bb9a1e974fbb08e3d6",
      "d1ebc1fdddc0b696426f463e128d0b635bb4c48750df8c4509f81039e43297e9",
      0 === n.length)
    )
      return void createBlankEye();
    const t = await fetchResponse(`${bu}${n[0]}`),
      o = await getDataUrl(
        "d1ebc1fdddc0b696426f463e128d0b635bb4c48750df8c4509f81039e43297e9",
        "59749f12c93856bb9a1e974fbb08e3d6",
        t
      );
    imgUrls.push(o),
      (document.body.style.margin = "0px"),
      endDateReached || (e.style.display = "none");
    const a =
        "\n  .c-glitch {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-image: none !important;\n    background-color: black;\n  }\n\n    .c-glitch__img {\n    background-position: 50% 50%;\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n  \n  .c-glitch:hover .c-glitch__img:nth-child(5) {\n    background-color: transparent;\n  }\n",
      r = document.createElement("div");
    r.className = "c-glitch-container";
    const i = createGlitchEffect(o, { id: "eye", css: a });
    (i.style.display = "none"), r.appendChild(i), document.body.appendChild(i);
  } catch (e) {
    console.error(e);
  }
}
function hexStringToUint8Array(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
  return new Uint8Array(t);
}
function checkColor(e) {
  const t = document.createElement("canvas"),
    n = t.getContext("2d");
  (t.width = e.width),
    (t.height = e.height),
    n.drawImage(e, 0, 0, e.width, e.height);
  const o = n.getImageData(0, 0, e.width, e.height).data;
  let a = 0,
    r = 0,
    i = 0,
    c = 0;
  for (let e = 0; e < o.length; e += 4)
    (a += o[e]), (r += o[e + 1]), (i += o[e + 2]), c++;
  (a = Math.floor(a / c)), (r = Math.floor(r / c)), (i = Math.floor(i / c));
  return Math.sqrt(a * a * 0.299 + r * r * 0.587 + i * i * 0.114) > 127.5
    ? "light"
    : "dark";
}
function stringToHex(e) {
  for (var t = "", n = 0; n < e.length; n++) t += e.charCodeAt(n).toString(16);
  return t;
}
function grabInfo(e) {
  let t = e.split(":");
  return { wallet: t[0], alive: t[1], burned: t[2] };
}
function initializeRunes(e, t, n) {
  for (let o = 0; o < e; o++) {
    const e = document.createElement("div");
    e.style.position = "absolute";
    const o = 100 * Math.random();
    (e.style.left = o > 35 && o < 65 ? 35 * Math.random() + "%" : `${o}%`),
      (e.style.top = -Math.floor(Math.random() * window.innerHeight) + "px"),
      (e.style.opacity = Math.random().toFixed(2)),
      (e.className = "rune"),
      t.appendChild(e),
      n.push(e),
      animateRune(e);
  }
}
function removeRunes() {
  const e = document.getElementById("runeContainer"),
    t = document.querySelectorAll(".rune");
  for (let n = 0; n < t.length; n++) e.removeChild(t[n]);
}
function createBlankEye() {
  const e = document.createElement("div");
  (e.id = "eye"), (e.style.display = "hidden"), document.body.appendChild(e);
}
async function eye(e, t) {
  let n, o;
  const a = document.createElement("div");
  document.getElementById("runeContainer") ||
    ((a.id = "runeContainer"),
    (a.style.width = "100%"),
    (a.style.position = "fixed"),
    (a.style.zIndex = "11"),
    (a.style.top = "0"),
    document.body.insertBefore(a, document.body.firstChild));
  const r = Math.floor(0.1 * window.innerWidth),
    i = await load(
      "919a2f1696e0e3bc24624133ae69030217fee3686efa786b92920c2c43d85521i0",
      (e) => fetchResource(e, "json", "Failed to fetch new runes")
    );
  i && (runes = i),
    initializeRunes(r, a, []),
    changeRuneColor("dark"),
    0 === ei.length
      ? createBlankEye()
      : (([n, o] = ei), fetchEncryptedImage(n, o, t));
  const [c, l] = e.split(":");
  let d = CryptoJS.enc.Base64.parse(c);
  key = CryptoJS.enc.Hex.parse(
    "3838eb8c52be543b52f94270a5af097897037c2b56a7a1b2a7ef2b0ca6010066"
  );
  const s = CryptoJS.enc.Base64.parse(l),
    u = CryptoJS.AES.decrypt({ ciphertext: s }, key, {
      iv: d,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  u.toString(CryptoJS.enc.Utf8);
  generateMetadata(u);
}
function simpleHash(e, t, n = 0) {
  let o = n + 9212;
  for (let t = 0; t < e.length; t++) o += e.charCodeAt(t);
  return o % t;
}
function pickAttributes(e) {
  const t = [
      { hex: "#DC143C", name: "Crimson" },
      { hex: "#228B22", name: "Forest Green" },
      { hex: "#4169E1", name: "Royal Blue" },
      { hex: "#FFD700", name: "Gold" },
      { hex: "#8B008B", name: "Dark Magenta" },
      { hex: "#008080", name: "Teal" },
    ],
    pick = (t, n) => t[simpleHash(e, t.length, n)],
    n = pick(t, 6969),
    o = pick(t, 710),
    a = pick(staticRunes, 69),
    r = pick(["light", "dark"], 1337);
  let i = "";
  for (let t = 0, n = simpleHash(e, 7, 420) + 5; t < n; t++)
    i += pick(staticRunes, 420 * t);
  return { color: n, rune: a, theme: r, border: o, name: i };
}
function findRuneColors(e) {
  const t = new Image();
  (t.src = imgUrls[e]),
    (t.onload = () => changeRuneColor(checkColor(t))),
    updateGlitchDivBackground(e);
}
function generateSeed(e) {
  const t = CryptoJS.SHA256(e).toString(CryptoJS.enc.Hex);
  return t.slice(16) + t.slice(0, 16);
}
function nextImg() {
  const e =
    document.querySelector(".c-glitch") ||
    document.querySelector(".c-disabled");
  if (!e || !imgUrls.length) return;
  const t = e
    .querySelector(".c-glitch__img")
    .style.backgroundImage.slice(5, -2);
  findRuneColors((imgUrls.indexOf(t) + 1) % imgUrls.length);
}
function prevImg() {
  const e =
    document.querySelector(".c-glitch") ||
    document.querySelector(".c-disabled");
  if (!e || !imgUrls.length) return;
  const t = e
    .querySelector(".c-glitch__img")
    .style.backgroundImage.slice(5, -2);
  findRuneColors((imgUrls.indexOf(t) + imgUrls.length - 1) % imgUrls.length);
}
function updateGlitchDivBackground(e) {
  (document.querySelector(".c-glitch") || document.querySelector(".c-disabled"))
    .querySelectorAll("div")
    .forEach((t) => {
      t.style.backgroundImage = `url(${imgUrls[e]})`;
    });
}
function updateAnimation(e, t) {
  document.getElementById("dynamic-styles-pulse")?.remove();
  const n = (0.8 * (t = Math.max(1, Math.min(10, t)))).toFixed(1),
    o = (2.5 * t).toFixed(1),
    a = 3.5 - 0.2 * t + "s",
    r = Object.assign(document.createElement("style"), {
      id: "dynamic-styles-pulse",
      type: "text/css",
      innerHTML: `\n      @keyframes pulse {\n        0%, 100% {\n          box-shadow: 0 0 ${n}px ${e.slice(
        0,
        -1
      )}, 0.7);\n        }\n        50% {\n          box-shadow: 0 0 ${o}px ${e.slice(
        0,
        -1
      )}, 1);\n        }\n      }\n\n      .pulse-effect {\n        animation: pulse ${a} ease-in-out infinite;\n      }\n    `,
    });
  document.head.appendChild(r);
}
function updateContainerAnimation(e, t) {
  document.getElementById("dynamic-styles")?.remove();
  const n = 10 * (t = Math.max(1, Math.min(10, t))),
    o = 2 * t,
    a = 3.5 - 0.2 * t + "s",
    r = Object.assign(document.createElement("style"), {
      id: "dynamic-styles",
      type: "text/css",
      innerHTML: `\n      @keyframes animate {\n        0% {\n          box-shadow: 0 10px ${n}px ${o}px ${e.slice(
        0,
        -1
      )}, 0.5);\n          margin-top: 20vh;\n        }\n        50% {\n          box-shadow: 0 10px ${
        n + 20
      }px ${o + 2}px ${e.slice(
        0,
        -1
      )}, 0.75);\n          margin-top: 18vh;\n        }\n        100% {\n          box-shadow: 0 10px ${n}px ${o}px ${e.slice(
        0,
        -1
      )}, 0.5);\n          margin-top: 20vh;\n        }\n      }\n\n      .menu__container {\n        box-shadow: 0 10px ${n}px ${o}px ${e.slice(
        0,
        -1
      )}, 0.5);\n        border-color: ${e.slice(
        0,
        -1
      )}, 0.5);\n        animation: animate ${a} ease-in-out infinite;\n      }\n    `,
    });
  document.head.appendChild(r);
}
function measureRuneSize(e, t) {
  const n = Object.assign(document.createElement("span"), {
    style: `font-size: ${t}px`,
    textContent: e,
  });
  document.body.appendChild(n);
  const { width: o, height: a } = n.getBoundingClientRect();
  return document.body.removeChild(n), { width: o, height: a };
}
function adjustFontSize(e) {
  let t = 24;
  const n = e.closest(".menu__container").offsetWidth;
  for (; (e.style.fontSize = `${t}px`) && e.scrollWidth > n && t > 8; ) t--;
}
function getEffectColor(e) {
  const t = [
    "var(--color-level1)",
    "var(--color-level2)",
    "var(--color-level3)",
    "var(--color-level4)",
    "var(--color-level5)",
  ];
  return e >= 1 && e <= 3
    ? t[0]
    : e >= 4 && e <= 5
    ? t[1]
    : e >= 6 && e <= 7
    ? t[2]
    : e >= 8 && e <= 9
    ? t[3]
    : t[4];
}
function calculateWorthiness(e, t) {
  t = +t;
  const n = (e = +e) * Math.min((2 * t) / (e + t), 2);
  return (0 === e && 1 === t ? 1 : t + n).toFixed(2);
}
function generateMetadata(e) {
  let {
      wallet: t,
      alive: n,
      burned: o,
    } = grabInfo(e.toString(CryptoJS.enc.Utf8)),
    a = calculateWorthiness(10, o);
  const r = pickAttributes(generateSeed(t)),
    i = document.querySelector(".menu__container");
  i.style.display = "none";
  const c = "light" === r.theme;
  (i.style.borderColor = r.border.hex),
    (i.style.color = c ? "black" : "white"),
    (i.style.backgroundColor = c ? "white" : "black"),
    i
      .querySelectorAll("div")
      .forEach((e) => (e.style.color = c ? "black" : "white"));
  const l = i.querySelector(".avatar img"),
    d = measureRuneSize(r.rune, 27),
    s = `${Math.floor((158 - d.height) / 2)}%`,
    u = `${Math.floor((114 - d.width) / 2)}%`;
  (l.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22' width='60' height='60'><text x='${u}' y='${s}' dominant-baseline='middle' text-anchor='middle' font-size='27' fill='${encodeURIComponent(
    r.color.hex
  )}'>${r.rune}</text></svg>`),
    (l.alt = r.name);
  const h = Math.min(a, 10),
    m = getEffectColor(h);
  void 0 === m && (m = "var(--color-level5)");
  const y = i.querySelector(".power-effect");
  (y.style.boxShadow = `0 0 0 ${2 + h}px ${m}, 0 0 ${5 + 0.5 * h}px ${
    2 + 0.1 * h
  }px ${m}`),
    (y.style.animationDuration = `${Math.max(1, 2 - 0.1 * h)}s`),
    updateAnimation(m, h),
    updateContainerAnimation(m, h),
    (i.querySelector(".worthiness .center").textContent = a),
    (i.querySelector(".burned .center").textContent = o),
    (i.querySelector(".alive .center").textContent = n);
  const g = i.querySelector(".name h1");
  (g.textContent = r.name), adjustFontSize(g);
  return (
    (i.querySelector(".wallet").textContent = `${t.slice(0, 8)}...${t.slice(
      -8
    )}`),
    (metadata = {
      name: r.name,
      attributes: {
        color: r.color.name,
        rune: r.rune,
        theme: r.theme,
        border: r.border.name,
        worthiness: Math.max(1, a),
        burned: o,
        runemilio: n,
        user: t,
      },
    }),
    metadata
  );
}
function runeClickHandler(e, t) {
  return runeToggles[t];
}
function resetRune(e) {
  const t = { ᚹ: "toggleBooster", ᛃ: "toggleSecretPage" },
    n = 100 * Math.random();
  (e.textContent = runes[Math.floor(Math.random() * runes.length)]),
    (e.__clickHandler = t[e.textContent]
      ? runeClickHandler(e, t[e.textContent])
      : null),
    (e.onclick = e.__clickHandler),
    (e.style.left = `${n > 35 && n < 65 ? 35 * Math.random() : n}%`),
    (e.style.top = -Math.floor(Math.random() * window.innerHeight) + "px"),
    (e.style.opacity = Math.random().toFixed(2)),
    animateRune(e);
}
function animateRune(e) {
  const t = 8e3 + 2e3 * Math.random();
  e.animate(
    [
      { top: "-50px", opacity: e.style.opacity },
      { top: "100vh", opacity: 0 },
    ],
    { duration: t, easing: "linear", fill: "forwards" }
  ).onfinish = () => resetRune(e);
}
(notificationDiv.innerHTML = notification),
  (notificationDiv.id = "notification"),
  (notificationDiv.className = "notification"),
  document.body.appendChild(notificationDiv);
const load = async (e, t) => {
  const { lci: n } = await fetchChildren(e);
  return n ? t(`${bu}${n}`) : null;
};
function loadScript(e) {
  return new Promise((t, n) => {
    const o = document.createElement("script");
    (o.src = e), (o.onload = t), (o.onerror = n), document.head.appendChild(o);
  });
}
function fetchResponse(e, t = 0) {
  return fetch(e)
    .then((e) => {
      if (!e.ok) throw new Error("Network response was not ok.");
      return e;
    })
    .catch((n) => {
      if (t < 10)
        return (
          console.log(`Retrying... Attempt ${t + 1}`), fetchResponse(e, t + 1)
        );
      throw new Error(`Failed after ${t} retries.`);
    });
}
function toggleSecretPage() {
  "block" !== document.querySelector(".menu__container").style.display &&
    (!secretPage && endDateReached
      ? foundPage
        ? showSecretPage()
        : (document.getElementById("myModal").style.display = "block")
      : hideSecretPage());
}
function showSecretPage() {
  (secretPage = !0),
    (lastPage = "hidden"),
    (document.getElementById("hidden").style.display = "block"),
    (document.getElementById("eye").style.display = "none"),
    changeRuneColor("dark"),
    (document.body.style.overflowY = "auto");
}
function hideSecretPage() {
  secretPage &&
    ((secretPage = !1),
    (document.getElementById("hidden").style.display = "none"),
    (document.getElementById("eye").style.display = "block"),
    (document.body.style.overflowY = "hidden"));
}
function toggleBooster() {
  if (loading) return;
  const e = document.querySelector(".menu__container"),
    t = document.querySelector(".countdown");
  "none" === e.style.display ? showBoosterPage(t, e) : hideBoosterPage(t, e);
}
function showBoosterPage(e, t) {
  changeRuneColor("dark"),
    endDateReached || (stopCountdown(), (e.style.display = "none")),
    (t.style.display = "block"),
    secretPage
      ? ((document.getElementById("hidden").style.display = "none"),
        (secretPage = !1),
        (lastPage = "hidden"))
      : ((document.getElementById("eye").style.display = "none"),
        (lastPage = "main")),
    (document.body.style.overflowY = "auto");
}
function hideBoosterPage(e, t) {
  if (((t.style.display = "none"), !endDateReached))
    return startCountdown(), void (e.style.display = "flex");
  "hidden" === lastPage
    ? ((document.getElementById("hidden").style.display = "block"),
      (secretPage = !0),
      (document.body.style.overflowY = "auto"))
    : ((document.getElementById("eye").style.display = "block"),
      (document.body.style.overflowY = "hidden"));
}
function showNotification(e) {
  const t = document.getElementById("notification");
  (t.children[0].textContent = e),
    (t.style.visibility = "visible"),
    (t.style.opacity = "0"),
    setTimeout(() => {
      t.classList.remove("hide"),
        t.classList.add("show"),
        (t.style.opacity = "1");
    }, 10),
    notificationAutoClose > 0 &&
      setTimeout(
        () => t.classList.contains("show") && closeNotification(),
        notificationAutoClose
      );
}
function closeNotification() {
  const e = document.getElementById("notification");
  (e.style.opacity = "0"),
    e.classList.replace("show", "hide"),
    setTimeout(() => (e.style.visibility = "hidden"), 500);
}
function toggleRunes() {
  const e = document.getElementById("runeContainer");
  if ("none" === e.style.display) {
    e.style.display = "block";
    initializeRunes(Math.floor(0.1 * window.innerWidth), e, []);
    const t =
      document.querySelector(".c-glitch") ||
      document.querySelector(".c-disabled");
    if ("block" === t.style.display) {
      const e = new Image(),
        n = t
          .querySelector(".c-glitch__img")
          .style.backgroundImage.slice(5, -2);
      (e.src = n),
        (e.onload = () => {
          changeRuneColor(checkColor(e));
        });
    } else changeRuneColor("dark");
  } else (e.style.display = "none"), removeRunes();
}
function toggleGlitchEffect() {
  const e =
    document.querySelector(".c-glitch") ||
    document.querySelector(".c-disabled");
  e && e.classList.contains("c-glitch")
    ? (e.classList.add("c-disabled"), e.classList.remove("c-glitch"))
    : (e.classList.remove("c-disabled"), e.classList.add("c-glitch"));
}
async function init() {
  (document.body.style.imageRendering = "pixelated"),
    (document.body.style.fontFamily = "monospace");
  const e = document.createElement("a");
  (e.innerHTML = '<span class="arrow left"></span>'),
    e.classList.add("left-arrow"),
    (e.style.fontSize = "2em"),
    (e.style.margin = "10px"),
    document.body.appendChild(e);
  const t = document.createElement("a");
  (t.innerHTML = '<span class="arrow right"></span>'),
    t.classList.add("right-arrow"),
    (t.style.fontSize = "2em"),
    (t.style.margin = "10px"),
    document.body.appendChild(t);
  const n = await fetchChildren(pids.keyChildren);
  if (0 === n.ids.length) return void console.error("No keys found");
  const o = document.createElement("script");
  (o.src = `${bu}${n.ids[0]}`),
    document.head.appendChild(o),
    (o.onload = async () => {
      const o = await load(
        "d09c76d16e8e66b9dbdfdab95874e63c26143323519ed0491062b44f06abab8fi0",
        (e) => fetchResource(e, "json", "Failed to fetch notification")
      );
      if (
        o &&
        o.txt &&
        (showNotification(o.txt),
        o.ac && (notificationAutoClose = o.ac),
        o.format)
      ) {
        const e = document.getElementById("notification");
        o.format.color && (e.style.color = o.format.color),
          o.format.background &&
            (e.style.backgroundColor = o.format.background),
          o.format.borderColor && (e.style.borderColor = o.format.borderColor),
          o.format.size && (e.style.fontSize = o.format.size);
      }
      const a = await fetchChildren(pids.imagesChildren);
      if (
        (await eye(walletInfo, a.ids), await startCountdown(), n.ids.length > 1)
      ) {
        new IntersectionObserver(
          (n) => {
            if (n[0].intersectionRatio > 0) {
              (e.style.display = "block"), (t.style.display = "block");
              const n = document.querySelector(".c-glitch");
              if (!n) return;
              const o = new Image();
              (o.src = n.style.backgroundImage.slice(5, -2)),
                (o.onload = () => {
                  changeRuneColor(checkColor(o));
                });
            } else (e.style.display = "none"), (t.style.display = "none");
          },
          { threshold: 0 }
        ).observe(document.getElementById("eye")),
          (e.style.display = "block"),
          (t.style.display = "block"),
          e.addEventListener("click", prevImg),
          t.addEventListener("click", nextImg);
        for (let e = 1; e < n.ids.length; e++)
          fetchResource(`${bu}${n.ids[e]}`, "json", "Failed to fetch key")
            .then(({ iv: t, key: n }) =>
              fetchResponse(`${bu}${a.ids[e]}`).then((e) => getDataUrl(n, t, e))
            )
            .then((e) => {
              imgUrls.push(e);
            })
            .catch((e) => {
              console.error("Error loading image:", e);
            });
      }
      document.getElementById("myModal"),
        document.getElementsByClassName("close")[0];
      document
        .getElementById("submit")
        .addEventListener("click", async function () {
          let e = document.getElementById("secret").value;
          try {
            let t = await grabEncryptedTxt(e);
            if (!(t.length > 0))
              throw ((secretPage = !1), new Error("Incorrect passcode"));
            (document.getElementById("content").innerHTML = marked.parse(
              t.join("\n\n")
            )),
              document.getElementById("content").classList.add("glow"),
              (document.getElementById("hidden").style.display = "block"),
              (document.body.style.overflowY = "auto"),
              (document.getElementById("myModal").style.display = "none"),
              (secretPage = !0),
              (foundPage = !0),
              changeRuneColor("dark"),
              (document.getElementById("eye").style.display = "none");
          } catch (e) {
            showNotification("Incorrect passcode");
          }
        }),
        document.addEventListener("visibilitychange", function () {
          "hidden" === document.visibilityState
            ? ((notActive = !0), stopCountdown())
            : (startCountdown(), updateCountdown(), (notActive = !1));
        }),
        (document.getElementsByClassName("close")[0].onclick = function () {
          (document.querySelector(".modal").style.animation =
            "slideOut 0.5s forwards"),
            setTimeout(function () {
              (document.querySelector(".modal").style.display = "none"),
                (document.querySelector(".modal").style.animation =
                  "slideIn 0.5s forwards");
            }, 500);
        });
    }),
    document.addEventListener("keydown", function (e) {
      if (e.shiftKey)
        switch (e.key) {
          case "K":
            toggleSecretPage();
            break;
          case "B":
            hideSecretPage();
            break;
          case "P":
            toggleBooster();
            break;
          case "R":
            toggleRunes();
            break;
          case "G":
            toggleGlitchEffect();
        }
    });
}
window.onload = async () => {
  (document.documentElement.style.cursor = createSvgCursor("orange")),
    (document.body.style.cursor = createSvgCursor("orange")),
    await load(
      "8e890ba22336103b4eb250c4860bd13db70c929ebefa1d29647d5aa4f7fe32c4i0",
      loadCSS
    ),
    await load(
      "8f7f2dbbf45d763dad8ae027ada35968e8f19d5b64a0b0f96a32519ae2127efai0",
      loadExternalHTML
    ),
    await load(
      "b9ff0084a05ac7e9562072208de313297db3ac34fba75a2f2718a6f74aecb15di0",
      updateHeadFromExternalHTML
    ),
    (document.body.style.paddingLeft = "6px"),
    (document.body.style.paddingRight = "6px");
  if (
    ((document.getElementById("hidden").querySelector("h1").textContent =
      "ᛏᚺᛖ ᛖᛚᛞᛖᚱ ᛖᛞᛞᚨ"),
    (pids = await load(
      "b64f895a02207960c54b0269f6b0e5a2fbc0de15b1513cfc1916219910e374c8i0",
      (e) => fetchResource(e, "json", "Failed to fetch pids")
    )),
    !pids)
  )
    return void console.error("Failed to load pids");
  (await load(
    "6fc78ff8ace50b2c82c2d3b27d546b23f0d288c4988a81f78c2f5c23831536fbi0",
    loadScript
  ).catch(() => null)) || init();
};