Push Messaging and Notification Sample
===

Learn more at https://www.chromestatus.com/feature/5416033485586432 and https://www.chromestatus.com/feature/5480344312610816

To use this sample please do the following:

1. Create a project on the [Firebase Developer Console](https://console.firebase.google.com).
2. Go to Settings (The cog near the top left corner), click the 'Cloud Messaging Tab'.
3. Create a copy of [config.sample.js](config.sample.js) called config.js.
4. Create a copy of [manifest.sample.json](manifest.sample.json) called manifest.json.
5. Replace `<Your Cloud Messaging API Key ...>` in your new `config.js` file with your own API key from your new project on Firebase Developer Console.
6. Replace `<Your Cloud Sender ID ...>` in your new `manifest.json` with your own sender ID from the Firebase Developer Console project.

# Related Samples
  Push messaging and notifications are built on [service workers](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker). 

中文简体
===
# 1.初始化 Initialization
1. 在谷歌API https://console.developers.google.com 创建项目。
2. 设置并验证域名来源 https://console.developers.google.com/apis/credentials/domainverification?project=YourProjectName。
3. 开启 Google Cloud Messaging API，获取 [`Cloud Messaging API Key`](https://console.developers.google.com/apis/credentials?project=YourProjectName)。
4. 在 IAM & Admin 内 Settings 获取 [`Sender ID`](https://console.developers.google.com/iam-admin/settings/project?project=YourProjectName)。
 * [Message limit 数量限制](https://developers.google.com/cloud-messaging/topic-messaging): Based on the publish/subscribe model, topic messaging supports unlimited subscriptions per app。
   
# 2. Web JS 
1. 页面通过JS `navigator.serviceWorker`唤起订阅按钮，当用户允许后获取页面的浏览器标识(需要通过 Google 网络获取，我们已被墙)。
2. 将浏览器标识发给服务端对应用户。
3. 通过 `navigator.serviceWorker.register('./SW.js')` 浏览器会安装相应的`SW.js`文件（这个文件是当有信息推送时执行的文件）。
 * 页面必须是 https 链接。
 * 每次获取浏览器标识都不同。

# 3. 服务端 Terminal
1.服务端向 Google API 发送消息执行推送
`curl --header "Authorization: key=[Cloud Messaging API Key]" --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[Subscripted ID]}"`

# 4. 客户端 Browser
1.执行订阅时安装的 `SW.js`

# 5. 备注:
 * 墙内不要想了。
	
This Project from [Google Github](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications).