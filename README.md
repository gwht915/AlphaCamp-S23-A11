
# 專案

   - 學期2-3-A11 短網址產生器
      * 短網址產生工具
      
    
## 專案畫面

   - 主畫面
      ![image](https://github.com/gwht915/AlphaCamp-S23-A11/blob/main/images/S2-3-A8-1.png)

   
## Features - 功能

   - 輸入原生網址, 可自動產生一個縮短的網址, 用戶可在瀏覽器中輸入縮短的網址, 自動跳轉到原生網址的
     網頁

   - 原生網址可能是一個很長的網址, 以縮短的網址替換, 可以加快輸入網址的時間。

## Environment Setup – 環境建置

   - Node.js

## Installing – 專案安裝流程

   - 打開terminal, Clone此專案至本機

      $git clone https://github.com/gwht915/AlphaCamp-S23-A11.git

   - 進入存放此專案的資料夾

      $cd urlShortener

   - 安裝套件
      $npm install -g nodemon

   - 安裝Mongoose

      $ npm install mongoose@5.9.7
      設定連線

   - 安裝method-override

      $ npm install method-override@3.0.0

   - 在Robo 3T 新增資料庫 url-short

   - 可以在數據庫中建立種子資料
   
      $ node ./models/seeds/sUrlSeeder.js
      

   - 啟動伺服器，執行app.js專案

      $nodemon app.js 或
      $npm run dev

   - 在瀏覽器中輸入 http://localhost:3000

## Contributor – 專案開發人員

   - Gary Tse

