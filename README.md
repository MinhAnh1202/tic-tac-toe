# Tic-Tac-Toe (React)

Một phiên bản nhỏ của trò chơi Tic-Tac-Toe (Cờ ca-rô 3x3) được xây dựng bằng Create React App.

## Cách chạy và build

Trong thư mục dự án, bạn có thể dùng các lệnh sau:

### `npm install`

Cài các package cần thiết.

### `npm start`

Chạy ứng dụng ở chế độ phát triển. Mở http://localhost:3000 để xem.


### `npm run build`

Tạo bản production trong thư mục `build/`.

## Deploy lên GitHub Pages (tự động bằng gh-pages)

1. Cài `gh-pages` nếu chưa cài:

```powershell
npm install --save-dev gh-pages
```

2. Thêm `homepage` và script vào `package.json` (ví dụ):

```json
"homepage": "https://<your-github-username>.github.io/<repo-name>",
"scripts": {
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build"
}
```

3. Chạy:

```powershell
npm run deploy
```

## Ghi chú

- Nếu repo chưa tồn tại, tạo repo trên GitHub trước và thêm remote (`git remote add origin https://github.com/<username>/<repo>.git`).
- Nếu GitHub Pages dùng branch khác (ví dụ `main` + thư mục `docs/`), bạn có thể build vào `docs/` và push.
- Nếu gặp lỗi khi `npm start` (ví dụ exit code 1), mình có thể giúp chạy và debug log.

---

---

## Live demo

Trang đã được deploy qua GitHub Pages và có thể truy cập tại:

https://minhanh1202.github.io/tic-tac-toe

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
