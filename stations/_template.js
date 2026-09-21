// ===== 新電台範本 =====
// 用法：
// 1. 抄一份呢個 file，改名，例如 stations/abc.js
// 2. 填好下面資料
// 3. 去 stations.js 加 'abc'
// （呢個範本本身唔會被載入）

CantoneseRadio.add({
  id: 'abc',                      // 同 file 名一樣
  name: '電台全名',
  shortName: '短名',              // 轉台掣上面嘅字，越短越好
  tagline: '一句簡介',
  stream: 'https://...',          // 直播 URL，喺電台官網個播放器度搵
  website: 'https://...',
  timeZone: 'Asia/Hong_Kong',     // 例如 Asia/Hong_Kong、America/Vancouver、Australia/Sydney
  timeZoneLabel: '香港時間',
  dayStart: '0:00',               // 節目表每日由幾點開始

  // 冇節目表就刪走成個 schedule，畫面會淨係顯示「直播中」
  schedule: {
    mon: ["0:00|節目名", "6:00|節目名"],
    tue: [], wed: [], thu: [], fri: [], sat: [], sun: []
  }
});
