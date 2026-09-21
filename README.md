# Cantonese Radio（自用）

廣東話電台直播播放器，純前端。

## 結構
- `index.html`：播放器，唔使改
- `stations.js`：電台總清單，決定有邊啲台同排序
- `stations/xxx.js`：每個台一個 file（URL、官網、時區、節目表）
- `stations/_template.js`：新台範本

## 加台（兩個方法）

**App 入面加（最快）**：撳轉台掣最尾嘅「＋」。
- 「搜尋」：喺公開電台目錄 Radio Browser（radio-browser.info）搵台，可以揀語言同地方，試聽啱就加入
- 「自己輸入」：填名稱同直播連結

只存喺嗰部機，冇節目表。長按（Mac 右撳）或者撳「改名或者刪除呢個台」可以改。

**改 file（長期用、有節目表、所有機都有）**：
1. 抄 `stations/_template.js`，改名，例如 `stations/abc.js`
2. 填資料（直播 URL 喺電台官網播放器度搵）
3. `stations.js` 加一行 `'abc',`

多過一個台，播放掣下面就會自動出轉台掣。

## 維護
- 節目改咗：改該台 file 入面嘅 `schedule`
- 條流死咗：去官網搵新 URL，改該台 file 入面嘅 `stream`

## 顏色
紅 = 停咗，橙黃（閃）= 連接緊 / 斷線重駁緊，綠 = 聽緊
