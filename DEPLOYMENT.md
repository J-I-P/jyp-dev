# Vercel 部署說明

## 首次部署設定

### 1. 連接 GitHub Repository

1. 前往 [Vercel Dashboard](https://vercel.com/dashboard)
2. 點擊 "New Project"
3. 選擇此 GitHub repository
4. 確認專案設定：
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

### 2. 環境變數設定

在 Vercel Dashboard 的專案設定中添加必要的環境變數：

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 自動部署流程

- **生產部署**: 推送到 `main` 分支自動觸發生產環境部署
- **預覽部署**: Pull Request 會自動建立預覽環境
- **分支部署**: 其他分支推送會建立開發預覽

## 自訂網域設定

### 添加網域

1. 進入 Vercel Dashboard → 選擇專案
2. 前往 "Settings" → "Domains"
3. 點擊 "Add" 輸入你的網域名稱
4. 按照指示設定 DNS 記錄

### DNS 設定範例

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Vercel CLI 使用

### 安裝

```bash
npm i -g vercel
```

### 常用指令

```bash
# 登入
vercel login

# 本地開發
vercel dev

# 部署到預覽環境
vercel

# 部署到生產環境
vercel --prod

# 查看部署狀態
vercel ls
```

## 效能優化設定

### next.config.js 建議設定

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
```

## 故障排除

### 常見問題

**建構失敗**
- 檢查 package.json 中的 scripts
- 確認 TypeScript 編譯無誤
- 查看 Vercel 建構日誌

**環境變數問題**
- 確認變數名稱拼寫正確
- 檢查是否需要 `NEXT_PUBLIC_` 前綴
- 重新部署以套用新的環境變數

**網域設定問題**
- 檢查 DNS 設定是否正確
- 等待 DNS 傳播（最多 48 小時）
- 使用 `dig` 或線上工具檢查 DNS 狀態

## 監控與分析

- 啟用 Vercel Analytics 追蹤網站效能
- 查看 Core Web Vitals 指標
- 監控部署頻率和成功率