(() => {
  const supported = ['zh-Hant', 'zh-Hans', 'ja', 'en', 'de', 'vi'];
  const nav = {
    'zh-Hant': ['產品介紹','客服支援','隱私權','GitHub 專案'],
    'zh-Hans': ['产品介绍','客户支持','隐私权','GitHub 项目'],
    ja: ['製品紹介','サポート','プライバシー','GitHub プロジェクト'],
    en: ['Overview','Support','Privacy','GitHub project'],
    de: ['Übersicht','Support','Datenschutz','GitHub-Projekt'],
    vi: ['Giới thiệu','Hỗ trợ','Quyền riêng tư','Dự án GitHub']
  };
  const common = {
    '核心特色': { 'zh-Hans':'核心特色',ja:'主な特長',en:'Key features',de:'Hauptfunktionen',vi:'Tính năng chính' },
    '從日常遙控，到進階音效調整': { 'zh-Hans':'从日常遥控到高级音效调整',ja:'日常操作から高度な音響調整まで',en:'From everyday control to advanced sound tuning',de:'Von der Fernbedienung bis zur Klangoptimierung',vi:'Từ điều khiển hằng ngày đến tinh chỉnh âm thanh' },
    '區域網路自動搜尋': { 'zh-Hans':'局域网自动搜索',ja:'ローカルネットワーク自動検出',en:'Automatic local discovery',de:'Automatische lokale Suche',vi:'Tự động tìm trong mạng nội bộ' },
    '完整本機遙控': { 'zh-Hans':'完整本地遥控',ja:'ローカルリモコン',en:'Complete local remote',de:'Lokale Fernbedienung',vi:'Điều khiển cục bộ đầy đủ' },
    '家庭劇院微調': { 'zh-Hans':'家庭影院微调',ja:'ホームシアター調整',en:'Home theater tuning',de:'Heimkino-Feinabstimmung',vi:'Tinh chỉnh rạp hát tại gia' },
    '智慧音效場景': { 'zh-Hans':'智能音效场景',ja:'スマートサウンドシーン',en:'Smart sound scenes',de:'Intelligente Klangszenen',vi:'Cảnh âm thanh thông minh' },
    '設備健康診斷': { 'zh-Hans':'设备健康诊断',ja:'デバイス診断',en:'Device health diagnostics',de:'Gerätediagnose',vi:'Chẩn đoán thiết bị' },
    '即時狀態同步': { 'zh-Hans':'实时状态同步',ja:'リアルタイム同期',en:'Real-time status sync',de:'Echtzeit-Synchronisierung',vi:'Đồng bộ trạng thái tức thời' },
    'A/B 音效盲測': { 'zh-Hans':'A/B 音效盲测',ja:'A/B ブラインド比較',en:'A/B blind sound test',de:'A/B-Blindtest',vi:'Thử mù âm thanh A/B' },
    '安全音量保護': { 'zh-Hans':'安全音量保护',ja:'音量安全保護',en:'Safe volume protection',de:'Lautstärkeschutz',vi:'Bảo vệ âm lượng an toàn' },
    '睡眠定時器': { 'zh-Hans':'睡眠定时器',ja:'スリープタイマー',en:'Sleep timer',de:'Schlaftimer',vi:'Hẹn giờ ngủ' },
    'Siri 與 Apple 捷徑': { 'zh-Hans':'Siri 与 Apple 快捷指令',ja:'SiriとAppleショートカット',en:'Siri and Apple Shortcuts',de:'Siri und Apple-Kurzbefehle',vi:'Siri và Phím tắt Apple' },
    '使用 Siri 與 Apple 捷徑': { 'zh-Hans':'使用 Siri 与 Apple 快捷指令',ja:'SiriとAppleショートカットを使う',en:'Use Siri and Apple Shortcuts',de:'Siri und Apple-Kurzbefehle verwenden',vi:'Sử dụng Siri và Phím tắt Apple' },
    '查看設定方式 →': { 'zh-Hans':'查看设置方法 →',ja:'設定方法を見る →',en:'View setup instructions →',de:'Einrichtung ansehen →',vi:'Xem hướng dẫn thiết lập →' },
    '實機畫面': { 'zh-Hans':'实机画面',ja:'アプリ画面',en:'App screenshots',de:'App-Ansichten',vi:'Ảnh chụp ứng dụng' },
    '隱私優先': { 'zh-Hans':'隐私优先',ja:'プライバシー重視',en:'Privacy first',de:'Datenschutz zuerst',vi:'Ưu tiên quyền riêng tư' },
    '不需要雲端帳號': { 'zh-Hans':'无需云端账号',ja:'クラウドアカウント不要',en:'No cloud account required',de:'Kein Cloud-Konto erforderlich',vi:'Không cần tài khoản đám mây' },
    '能力邊界': { 'zh-Hans':'功能边界',ja:'機能の範囲',en:'Capability boundaries',de:'Funktionsgrenzen',vi:'Giới hạn tính năng' },
    '只顯示設備確實支援的功能': { 'zh-Hans':'只显示设备确实支持的功能',ja:'対応機能だけを表示',en:'Only supported features are shown',de:'Nur unterstützte Funktionen',vi:'Chỉ hiển thị tính năng được hỗ trợ' },
    '客服支援': { 'zh-Hans':'客户支持',ja:'サポート',en:'Support',de:'Support',vi:'Hỗ trợ' },
    '開始前檢查': { 'zh-Hans':'开始前检查',ja:'開始前の確認',en:'Before you begin',de:'Vor dem Start',vi:'Trước khi bắt đầu' },
    '常見問題': { 'zh-Hans':'常见问题',ja:'よくある質問',en:'Frequently asked questions',de:'Häufige Fragen',vi:'Câu hỏi thường gặp' },
    '相容性與驗證狀態': { 'zh-Hans':'兼容性与验证状态',ja:'互換性と検証状況',en:'Compatibility and validation',de:'Kompatibilität und Prüfung',vi:'Tương thích và xác minh' },
    '聯絡客服': { 'zh-Hans':'联系客服',ja:'お問い合わせ',en:'Contact support',de:'Support kontaktieren',vi:'Liên hệ hỗ trợ' },
    '隱私權政策': { 'zh-Hans':'隐私权政策',ja:'プライバシーポリシー',en:'Privacy Policy',de:'Datenschutzerklärung',vi:'Chính sách quyền riêng tư' },
    '政策摘要': { 'zh-Hans':'政策摘要',ja:'概要',en:'Policy summary',de:'Zusammenfassung',vi:'Tóm tắt chính sách' },
    '本機網路存取': { 'zh-Hans':'本地网络访问',ja:'ローカルネットワークアクセス',en:'Local network access',de:'Lokaler Netzwerkzugriff',vi:'Truy cập mạng nội bộ' },
    '本機儲存資料': { 'zh-Hans':'本地存储数据',ja:'端末内の保存データ',en:'Data stored on device',de:'Auf dem Gerät gespeicherte Daten',vi:'Dữ liệu lưu trên thiết bị' },
    '相機與 QR Code': { 'zh-Hans':'相机与二维码',ja:'カメラとQRコード',en:'Camera and QR codes',de:'Kamera und QR-Codes',vi:'Camera và mã QR' },
    '資料蒐集與追蹤': { 'zh-Hans':'数据收集与跟踪',ja:'データ収集と追跡',en:'Data collection and tracking',de:'Datenerfassung und Tracking',vi:'Thu thập và theo dõi dữ liệu' },
    '客服 Email': { 'zh-Hans':'客服电子邮件',ja:'サポートメール',en:'Support email',de:'Support-E-Mail',vi:'Email hỗ trợ' },
    '第三方設備與服務': { 'zh-Hans':'第三方设备与服务',ja:'第三者の機器とサービス',en:'Third-party devices and services',de:'Drittgeräte und -dienste',vi:'Thiết bị và dịch vụ bên thứ ba' },
    '政策變更': { 'zh-Hans':'政策变更',ja:'ポリシーの変更',en:'Policy changes',de:'Änderungen',vi:'Thay đổi chính sách' },
    '聯絡方式': { 'zh-Hans':'联系方式',ja:'連絡先',en:'Contact',de:'Kontakt',vi:'Liên hệ' }
    ,'主要導覽': { 'zh-Hans':'主要导航',ja:'メインナビゲーション',en:'Main navigation',de:'Hauptnavigation',vi:'Điều hướng chính' }
    ,'Email：': { 'zh-Hans':'电子邮件：',ja:'メール：',en:'Email: ',de:'E-Mail: ',vi:'Email: ' }
    ,'TonePilot App 圖示': { 'zh-Hans':'TonePilot App 图标',ja:'TonePilotアプリアイコン',en:'TonePilot app icon',de:'TonePilot-App-Symbol',vi:'Biểu tượng ứng dụng TonePilot' }
    ,'TonePilot 主要遙控器畫面': { 'zh-Hans':'TonePilot 主遥控器画面',ja:'TonePilotメインリモコン画面',en:'TonePilot main remote screen',de:'TonePilot-Hauptfernbedienung',vi:'Màn hình điều khiển chính TonePilot' }
    ,'TonePilot 智慧音效場景': { 'zh-Hans':'TonePilot 智能音效场景',ja:'TonePilotスマートサウンドシーン',en:'TonePilot smart sound scenes',de:'TonePilot-Klangszenen',vi:'Cảnh âm thanh thông minh TonePilot' }
    ,'TonePilot 對白清晰度助手': { 'zh-Hans':'TonePilot 对白清晰度助手',ja:'TonePilot台詞明瞭化アシスタント',en:'TonePilot dialog clarity assistant',de:'TonePilot-Dialogassistent',vi:'Trợ lý hội thoại TonePilot' }
    ,'TonePilot 裝置搜尋畫面': { 'zh-Hans':'TonePilot 设备搜索画面',ja:'TonePilot機器検索画面',en:'TonePilot device discovery screen',de:'TonePilot-Gerätesuche',vi:'Màn hình tìm thiết bị TonePilot' }
    ,'TonePilot 安全音量與設備資訊': { 'zh-Hans':'TonePilot 安全音量与设备信息',ja:'TonePilot安全音量と機器情報',en:'TonePilot safe volume and device information',de:'TonePilot-Lautstärkeschutz und Geräteinfos',vi:'Âm lượng an toàn và thông tin thiết bị TonePilot' }
    ,'TonePilot 設備健康診斷': { 'zh-Hans':'TonePilot 设备健康诊断',ja:'TonePilot機器診断',en:'TonePilot device health diagnostics',de:'TonePilot-Gerätediagnose',vi:'Chẩn đoán thiết bị TonePilot' }
  };
  const pageCopy = {
    en: {
      '讓 SoundTouch 的每一個聲音細節，都更好掌握。':'Take control of every SoundTouch detail.',
      'TonePilot 將遙控、家庭劇院音效、智慧場景與設備診斷整合在同一個繁體中文介面。控制直接在家中區域網路完成，不需要 Bose 雲端帳號。':'TonePilot combines remote control, home-theater tuning, smart scenes, and device diagnostics. Control stays on your local network and requires no Bose cloud account.',
      '探索功能':'Explore features','取得客服支援':'Get support','簡潔，但不犧牲控制深度':'Simple without sacrificing control depth.',
      '生效日期：2026 年 10 月 13 日':'Effective: October 13, 2026',
      '先查看常見問題。若仍無法解決，請附上設備、網路環境與錯誤畫面聯絡開發者。':'Check the FAQ first. If the issue remains, contact the developer with your device, network details, and a screenshot.',
      'TonePilot（以下稱「本 App」）由 Mason Hung 提供。本 App 以區域網路控制使用者選擇的相容 SoundTouch 設備，不要求 Bose 雲端帳號，也不提供廣告或跨 App 追蹤。':'TonePilot (the “App”) is provided by Mason Hung. It controls compatible SoundTouch devices selected by the user over the local network. It requires no Bose cloud account and provides no advertising or cross-app tracking.',
      '本 App 需要 iOS 本機網路權限，使用 Bonjour、SSDP、HTTP 與 WebSocket 搜尋及連線至區域網路內的 SoundTouch 設備。通訊內容包含設備名稱、型號、韌體、IP、能力、音量、音源、播放狀態與可用音效設定。':'The App requires iOS Local Network permission and uses Bonjour, SSDP, HTTP, and WebSocket to discover and connect to SoundTouch devices. Communications may include device name, model, firmware, IP address, capabilities, volume, source, playback status, and available sound settings.',
      '本 App 可能在 iPhone 上保存已選設備、IP 與連接埠、音效場景、安全音量、睡眠定時器、A/B 快照與操作紀錄。這些設定用於恢復 App 狀態，不會由開發者伺服器同步。':'The App may store the selected device, IP and port, sound scenes, safe-volume settings, sleep timer, A/B snapshots, and action history on your iPhone. These settings restore app state and are not synced by a developer server.',
      '用語音切換電源、靜音、設定安全音量或套用音效場景，也能加入主畫面與控制中心快捷操作。':'Use your voice to toggle power or mute, set a safe volume, or apply a sound scene. Add the same actions to the Home Screen or Control Center.',
      'TonePilot 提供電源、靜音、音量及音效場景等 App 捷徑。第一次安裝新版後，請先開啟 TonePilot 一次並確認設備可以連線，iOS 才能索引這些動作。':'TonePilot provides App Shortcuts for power, mute, volume, and sound scenes. After installing the update, open TonePilot once and confirm the device connects so iOS can index these actions.',
      '開啟 Apple「捷徑」App，點選「捷徑」分頁，再選擇「App 捷徑」。':'Open Apple Shortcuts, select the Shortcuts tab, then choose App Shortcuts.',
      '找到 TonePilot，即可執行「切換電源」、「切換靜音」、「設定音量」或「音效場景」。':'Find TonePilot, then run Toggle Power, Toggle Mute, Set Volume, or Sound Scene.',
      '若要語音操作，可對 Siri 說：「用 TonePilot 切換靜音」或「用 TonePilot 設定音響音量」。':'For voice control, ask Siri to toggle mute with TonePilot or set the speaker volume with TonePilot.',
      '若要放在桌面，長按主畫面加入「捷徑」小工具，再選擇 TonePilot 捷徑。':'To add a Home Screen control, add the Shortcuts widget and select a TonePilot shortcut.',
      'iOS 18 或更新版本可編輯控制中心、加入「捷徑」控制項，再指定需要的 TonePilot 動作。':'On iOS 18 or later, edit Control Center, add the Shortcuts control, and assign the desired TonePilot action.',
      '捷徑執行時，iPhone 與 SoundTouch 必須位於同一個可連線的區域網路。音量仍受 TonePilot 的一般及夜間安全上限保護；電源屬於切換指令，會在開機與待機之間切換。':'When a shortcut runs, the iPhone and SoundTouch must be on the same reachable local network. Volume remains subject to TonePilot’s normal and nighttime safety limits. Power is a toggle between on and standby.',
      '本機控制 · iPhone 原生 App':'Local control · Native iPhone app',
      '目前為開發測試版本。SoundTouch 300 核心音效已實機驗證；其他型號依設備回報能力顯示，仍待實機驗證。':'Currently in development testing. Core SoundTouch 300 sound controls have been tested on real hardware; other models remain unverified and are shown according to reported capabilities.',
      'SoundTouch 智慧遙控器':'Smart SoundTouch remote',
      '所有功能會先讀取設備能力，不支援的控制不會假裝可用。':'Features are enabled only after reading device capabilities. Unsupported controls are never presented as working.',
      '透過 Bonjour 與 SSDP 尋找設備，也保留手動 IP；設備位址改變後可重新探索。':'Find devices using Bonjour and SSDP, with manual IP as a fallback and rediscovery after an address change.',
      '提供電源、音量、靜音、播放控制、可用音源切換與原廠 Preset 快捷鍵。':'Control power, volume, mute, playback, available sources, and factory presets.',
      '在支援設備上調整低音、高音、中央聲道、後環繞及對話增強模式。':'Adjust bass, treble, center channel, surround, and dialog mode on supported devices.',
      '電影、動作、人聲、深夜、音樂、遊戲等安全起始值，也能建立自己的場景。':'Start with safe scenes for movies, action, voices, night, music, and games, or create your own.',
      '檢查 API、即時同步、重低音、後環繞與設備能力；未取得的狀態不臆測。':'Check the API, live sync, bass module, surround speakers, and device capabilities without guessing unavailable states.',
      '使用 WebSocket 接收狀態變更，重新讀取實際音量、音源與音效設定。':'Receive changes over WebSocket and refresh the actual volume, source, and sound settings.',
      '比較兩組音效、揭曉結果，並可恢復比較前設定，降低反覆調音的負擔。':'Compare two sound profiles, reveal the result, and restore the original settings afterward.',
      '設定一般與夜間音量上限。限制只套用於 TonePilot 發出的音量指令。':'Set normal and nighttime volume limits. Limits apply only to commands sent by TonePilot.',
      '提供 15、30、60、90 分鐘快捷選項，到時先確認設備狀態再送出待機指令。':'Choose 15, 30, 60, or 90 minutes. TonePilot checks device status before sending standby.',
      '依照控制、場景、智慧助手與裝置四個工作情境整理，避免把所有功能塞進同一頁。':'Organized into Control, Scenes, Smart Assistant, and Devices instead of crowding everything onto one screen.',
      '主要遙控器':'Main remote',
      '目前音源、音量、播放控制、睡眠定時器及劇院狀態集中呈現。':'See the current source, volume, playback controls, sleep timer, and theater status together.',
      'Netflix 與更多家庭劇院情境可一鍵套用，再依房間微調。':'Apply Netflix and other home-theater scenes in one tap, then fine-tune them for your room.',
      '對白清晰度助手':'Dialog clarity assistant',
      '依聆聽問題提出可復原建議，不宣稱取代專業聲學量測。':'Get reversible suggestions based on what you hear, without claiming professional acoustic measurement.',
      '自動探索設備':'Automatic device discovery',
      '搜尋、驗證並保存設備，搜尋不到時仍可手動連線。':'Discover, verify, and save devices, with manual connection when discovery is unavailable.',
      '安全音量與設備資訊':'Safe volume and device information',
      '一般／夜間上限、設備名稱、型號與韌體資訊清楚可查。':'Review normal and nighttime limits, device name, model, and firmware.',
      'API、即時同步、重低音及後環繞狀態一頁檢查。':'Check API, live sync, bass module, and surround status on one screen.',
      'TonePilot 直接與家中 SoundTouch 設備通訊。音效場景及偏好保存在 iPhone；App 不提供遠端雲端控制，也不經營音樂串流服務。':'TonePilot communicates directly with SoundTouch devices at home. Scenes and preferences stay on the iPhone; the app offers neither remote cloud control nor music streaming.',
      '閱讀隱私權政策 →':'Read the Privacy Policy →',
      'TonePilot 不修改 Bose 韌體、不解鎖不存在的 DSP，也不宣稱讓任何設備支援 Dolby Atmos。HDMI／TV 若沒有提供節目名稱，App 只會誠實顯示音源。':'TonePilot does not modify Bose firmware, unlock nonexistent DSP features, or claim Dolby Atmos support. If HDMI/TV provides no program title, the app reports only the source.',
      '查看相容性說明 →':'View compatibility details →',
      '確認 iPhone 與 SoundTouch 設備連接可互通的同一個區域網路。':'Confirm the iPhone and SoundTouch are on the same reachable local network.',
      '到 iPhone「設定 → 隱私權與安全性 → 本機網路」允許 TonePilot。':'On iPhone, allow TonePilot under Settings → Privacy & Security → Local Network.',
      '先使用「裝置 → 搜尋 SoundTouch 設備」；找不到時再手動輸入 IP 與連接埠 8090。':'First use Devices → Search for SoundTouch Devices. If none are found, enter the IP address and port 8090 manually.',
      '若使用多房間，先分別確認每一台設備都能獨立連線。':'For multi-room use, first confirm that each device connects independently.',
      '為什麼自動搜尋不到設備？':'Why can’t automatic discovery find my device?',
      '請確認本機網路權限、Wi‑Fi 與路由器用戶端隔離設定。部分網路會阻擋 Bonjour 或 SSDP，這時可在 Bose 原廠設定或路由器內查看設備 IP，再使用手動連線。':'Check Local Network permission, Wi-Fi, and router client-isolation settings. Some networks block Bonjour or SSDP; find the device IP in Bose settings or your router and connect manually.',
      '顯示「The request timed out」怎麼辦？':'What should I do when “The request timed out” appears?',
      '為什麼目前播放只顯示 TV？':'Why does Now Playing show only TV?',
      'SoundTouch 的 HDMI／TV 音源通常不會回傳 Netflix 片名或電視節目名稱。TonePilot 會顯示設備真正提供的音源及播放狀態，不會猜測觀看內容。':'SoundTouch HDMI/TV sources usually do not return Netflix titles or TV program names. TonePilot shows only the source and playback state actually supplied by the device.',
      '調整滑桿後數值沒有一致？':'Why does a slider value change after adjustment?',
      'App 會把數值對齊設備支援的步進，再重新讀取實際狀態。請等待寫入完成；若設備回傳不同值，可重新整理並附上錯誤畫面回報。':'The app aligns values to supported steps and then reads the actual state again. Wait for the write to finish; if the device returns a different value, refresh and report it with a screenshot.',
      '場景可以控制 Netflix App 嗎？':'Can scenes control the Netflix app?',
      '不行。Netflix 場景只會調整 SoundTouch 的音效設定；請先在電視或播放裝置開啟 Netflix，再套用場景。':'No. Netflix scenes adjust only SoundTouch sound settings. Start Netflix on the TV or player first, then apply a scene.',
      '安全音量能阻止遙控器或電視調高音量嗎？':'Can Safe Volume block volume changes from the TV or remote?',
      '不能。安全上限只套用於 TonePilot 發出的音量指令，無法攔截實體遙控器、HDMI‑CEC 或其他 App 的操作。':'No. Safe limits apply only to TonePilot commands and cannot intercept a physical remote, HDMI-CEC, or another app.',
      'TonePilot 能讓 SoundTouch 支援 Dolby Atmos 嗎？':'Can TonePilot add Dolby Atmos to SoundTouch?',
      '不能。App 不修改韌體，也不會新增硬體不存在的解碼或高度聲道功能。':'No. The app does not modify firmware or add decoding or height channels absent from the hardware.',
      '設備':'Device','目前狀態':'Current status',
      '低音、高音、中央聲道、後環繞及 Dialog 核心音效已由使用者實機驗證。':'Bass, treble, center channel, surround, and Dialog controls have been verified by the user on real hardware.',
      '通用探索與遙控架構可依能力回報啟用；尚未實機驗證完整功能。':'The general discovery and remote-control framework can enable reported capabilities; full functionality has not yet been verified on real hardware.',
      'CineMate／Lifestyle／其他家庭劇院產品':'CineMate / Lifestyle / other home-theater products',
      '只在設備能通過 SoundTouch API 身分與能力驗證時顯示支援項目；尚未實機驗證。':'Supported items appear only after SoundTouch API identity and capability checks; not yet verified on real hardware.',
      '功能以設備實際回傳為準。不支援或尚未確認安全範圍的寫入功能會隱藏、停用或保持唯讀。':'Features depend on actual device responses. Unsupported writes, or writes without a confirmed safe range, are hidden, disabled, or read-only.',
      '開發者：Mason Hung':'Developer: Mason Hung',
      '來信請附上 iPhone 型號、iOS 版本、TonePilot 版本、SoundTouch 型號與韌體、連線方式及問題截圖。請先遮蔽公網 IP、Wi‑Fi 密碼或其他私人資料。':'Include the iPhone model, iOS and TonePilot versions, SoundTouch model and firmware, connection method, and a screenshot. Hide public IP addresses, Wi-Fi passwords, and other private data.',
      '只有在使用者主動選擇「掃描音效 QR Code」時，本 App 才會要求相機權限。相機畫面用於辨識 TonePilot 設定內容，不會上傳給開發者。使用者亦可自行匯出或分享設定 JSON／QR Code；分享目的地的處理由所選 App 或服務決定。':'The App requests camera access only when you choose Scan Sound QR Code. Camera images identify TonePilot settings and are not uploaded to the developer. You may export or share settings as JSON or QR codes; the chosen app or service handles the destination.',
      '本 App 不要求建立使用者帳號。':'The App does not require a user account.','本 App 不使用廣告識別碼，也不進行跨 App 或網站追蹤。':'The App uses no advertising identifier and performs no cross-app or cross-site tracking.','本 App 不出售使用者資料。':'The App does not sell user data.','本 App 不會將 SoundTouch 控制資料傳送至開發者伺服器。':'The App does not send SoundTouch control data to a developer server.',
      '若使用者主動寄送客服 Email，寄件地址、信件內容與附件會由使用者及收件人的郵件服務處理。問題回報前請遮蔽 Wi‑Fi 密碼、公網 IP 或其他不必要的私人資料。':'If you contact support by email, the sender address, message, and attachments are handled by the sender’s and recipient’s mail services. Hide Wi-Fi passwords, public IP addresses, and unnecessary private data before reporting an issue.',
      'SoundTouch 設備、家用路由器、iOS、電視、串流裝置及使用者選擇的分享服務，可能依其各自條款處理資料。本政策只說明 TonePilot 本身的資料處理方式。':'SoundTouch devices, routers, iOS, TVs, streaming devices, and selected sharing services may process data under their own terms. This policy describes only TonePilot’s processing.',
      '若 App 的功能或資料處理方式有重大變更，本頁會更新內容與生效日期。':'If the App’s features or data handling change materially, this page and its effective date will be updated.',
      'TonePilot 為獨立開發產品，未獲 Bose Corporation 贊助、授權或背書。Bose、SoundTouch 及相關商標屬其各自權利人所有。':'TonePilot is independently developed and is not sponsored, authorized, or endorsed by Bose Corporation. Bose, SoundTouch, and related marks belong to their respective owners.',
      'TonePilot 為獨立開發產品，未獲 Bose Corporation 或任何串流服務商贊助、授權或背書。Bose、SoundTouch 及相關商標屬其各自權利人所有。':'TonePilot is independently developed and is not sponsored, authorized, or endorsed by Bose Corporation or any streaming provider. Bose, SoundTouch, and related marks belong to their respective owners.'
    },
    'zh-Hans': {
      '讓 SoundTouch 的每一個聲音細節，都更好掌握。':'更好地掌控 SoundTouch 的每一个声音细节。','探索功能':'探索功能','取得客服支援':'获取客户支持','簡潔，但不犧牲控制深度':'简洁，但不牺牲控制深度','生效日期：2026 年 10 月 13 日':'生效日期：2026 年 10 月 13 日',
      '用語音切換電源、靜音、設定安全音量或套用音效場景，也能加入主畫面與控制中心快捷操作。':'通过语音切换电源或静音、设置安全音量、应用音效场景，也可添加到主屏幕与控制中心。',
      'TonePilot 提供電源、靜音、音量及音效場景等 App 捷徑。第一次安裝新版後，請先開啟 TonePilot 一次並確認設備可以連線，iOS 才能索引這些動作。':'TonePilot 提供电源、静音、音量及音效场景等 App 快捷指令。安装新版后请先打开 TonePilot 一次并确认设备可以连接，iOS 才能索引这些操作。',
      '開啟 Apple「捷徑」App，點選「捷徑」分頁，再選擇「App 捷徑」。':'打开 Apple“快捷指令”App，选择“快捷指令”标签页，再选择“App 快捷指令”。','找到 TonePilot，即可執行「切換電源」、「切換靜音」、「設定音量」或「音效場景」。':'找到 TonePilot，即可执行“切换电源”“切换静音”“设置音量”或“音效场景”。','若要語音操作，可對 Siri 說：「用 TonePilot 切換靜音」或「用 TonePilot 設定音響音量」。':'如需语音操作，可让 Siri 使用 TonePilot 切换静音或设置音响音量。','若要放在桌面，長按主畫面加入「捷徑」小工具，再選擇 TonePilot 捷徑。':'如需放在主屏幕，请添加“快捷指令”小组件，再选择 TonePilot 快捷指令。','iOS 18 或更新版本可編輯控制中心、加入「捷徑」控制項，再指定需要的 TonePilot 動作。':'iOS 18 或更高版本可编辑控制中心，添加“快捷指令”控制项，再指定所需的 TonePilot 操作。','捷徑執行時，iPhone 與 SoundTouch 必須位於同一個可連線的區域網路。音量仍受 TonePilot 的一般及夜間安全上限保護；電源屬於切換指令，會在開機與待機之間切換。':'运行快捷指令时，iPhone 与 SoundTouch 必须位于同一可连接的局域网。音量仍受一般及夜间安全上限保护；电源指令会在开机与待机之间切换。'
    },
    ja: {
      '讓 SoundTouch 的每一個聲音細節，都更好掌握。':'SoundTouchの細部まで、思いどおりに。','探索功能':'機能を見る','取得客服支援':'サポート','簡潔，但不犧牲控制深度':'シンプルで、妥協のない操作性','生效日期：2026 年 10 月 13 日':'発効日：2026年10月13日',
      '用語音切換電源、靜音、設定安全音量或套用音效場景，也能加入主畫面與控制中心快捷操作。':'音声で電源やミュートを切り替え、安全な音量設定やサウンドシーンを適用できます。ホーム画面やコントロールセンターにも追加できます。','TonePilot 提供電源、靜音、音量及音效場景等 App 捷徑。第一次安裝新版後，請先開啟 TonePilot 一次並確認設備可以連線，iOS 才能索引這些動作。':'TonePilotは電源、ミュート、音量、サウンドシーンのAppショートカットを提供します。更新後に一度TonePilotを開き、機器への接続を確認してください。','開啟 Apple「捷徑」App，點選「捷徑」分頁，再選擇「App 捷徑」。':'Appleの「ショートカット」Appを開き、「ショートカット」タブから「Appショートカット」を選びます。','找到 TonePilot，即可執行「切換電源」、「切換靜音」、「設定音量」或「音效場景」。':'TonePilotを選び、電源、ミュート、音量設定、サウンドシーンを実行します。','若要語音操作，可對 Siri 說：「用 TonePilot 切換靜音」或「用 TonePilot 設定音響音量」。':'SiriにTonePilotでミュートを切り替える、またはスピーカー音量を設定するよう頼めます。','若要放在桌面，長按主畫面加入「捷徑」小工具，再選擇 TonePilot 捷徑。':'ホーム画面に「ショートカット」ウィジェットを追加し、TonePilotのショートカットを選びます。','iOS 18 或更新版本可編輯控制中心、加入「捷徑」控制項，再指定需要的 TonePilot 動作。':'iOS 18以降では、コントロールセンターに「ショートカット」コントロールを追加してTonePilotの操作を割り当てます。','捷徑執行時，iPhone 與 SoundTouch 必須位於同一個可連線的區域網路。音量仍受 TonePilot 的一般及夜間安全上限保護；電源屬於切換指令，會在開機與待機之間切換。':'実行時はiPhoneとSoundTouchが同じ到達可能なローカルネットワーク上に必要です。音量には通常・夜間の安全上限が適用され、電源はオンと待機を切り替えます。'
    },
    de: {
      '讓 SoundTouch 的每一個聲音細節，都更好掌握。':'Jedes Klangdetail von SoundTouch im Griff.','探索功能':'Funktionen entdecken','取得客服支援':'Support erhalten','簡潔，但不犧牲控制深度':'Einfach und dennoch präzise','生效日期：2026 年 10 月 13 日':'Gültig ab: 13. Oktober 2026',
      '用語音切換電源、靜音、設定安全音量或套用音效場景，也能加入主畫面與控制中心快捷操作。':'Per Sprache Strom oder Stummschaltung umschalten, eine sichere Lautstärke einstellen oder eine Klangszene anwenden – auch über Home-Bildschirm und Kontrollzentrum.','TonePilot 提供電源、靜音、音量及音效場景等 App 捷徑。第一次安裝新版後，請先開啟 TonePilot 一次並確認設備可以連線，iOS 才能索引這些動作。':'TonePilot bietet App-Kurzbefehle für Strom, Stummschaltung, Lautstärke und Klangszenen. Öffnen Sie TonePilot nach dem Update einmal und prüfen Sie die Verbindung.','開啟 Apple「捷徑」App，點選「捷徑」分頁，再選擇「App 捷徑」。':'Öffnen Sie Apples App „Kurzbefehle“, wählen Sie den Tab „Kurzbefehle“ und dann „App-Kurzbefehle“.','找到 TonePilot，即可執行「切換電源」、「切換靜音」、「設定音量」或「音效場景」。':'Wählen Sie TonePilot und führen Sie Strom, Stummschaltung, Lautstärke oder Klangszene aus.','若要語音操作，可對 Siri 說：「用 TonePilot 切換靜音」或「用 TonePilot 設定音響音量」。':'Bitten Sie Siri, mit TonePilot stummzuschalten oder die Lautsprecherlautstärke einzustellen.','若要放在桌面，長按主畫面加入「捷徑」小工具，再選擇 TonePilot 捷徑。':'Fügen Sie das Kurzbefehle-Widget zum Home-Bildschirm hinzu und wählen Sie einen TonePilot-Kurzbefehl.','iOS 18 或更新版本可編輯控制中心、加入「捷徑」控制項，再指定需要的 TonePilot 動作。':'Ab iOS 18 können Sie im Kontrollzentrum das Steuerelement „Kurzbefehle“ hinzufügen und eine TonePilot-Aktion zuweisen.','捷徑執行時，iPhone 與 SoundTouch 必須位於同一個可連線的區域網路。音量仍受 TonePilot 的一般及夜間安全上限保護；電源屬於切換指令，會在開機與待機之間切換。':'iPhone und SoundTouch müssen sich im selben erreichbaren lokalen Netzwerk befinden. Die Lautstärke bleibt durch die normalen und nächtlichen Grenzen geschützt; Strom schaltet zwischen Ein und Standby um.'
    },
    vi: {
      '讓 SoundTouch 的每一個聲音細節，都更好掌握。':'Làm chủ từng chi tiết âm thanh SoundTouch.','探索功能':'Khám phá tính năng','取得客服支援':'Nhận hỗ trợ','簡潔，但不犧牲控制深度':'Đơn giản nhưng vẫn điều khiển chuyên sâu','生效日期：2026 年 10 月 13 日':'Có hiệu lực: 13 tháng 10, 2026',
      '用語音切換電源、靜音、設定安全音量或套用音效場景，也能加入主畫面與控制中心快捷操作。':'Dùng giọng nói để chuyển nguồn, tắt tiếng, đặt âm lượng an toàn hoặc áp dụng cảnh âm thanh; cũng có thể thêm vào Màn hình chính và Trung tâm điều khiển.','TonePilot 提供電源、靜音、音量及音效場景等 App 捷徑。第一次安裝新版後，請先開啟 TonePilot 一次並確認設備可以連線，iOS 才能索引這些動作。':'TonePilot cung cấp Phím tắt ứng dụng cho nguồn, tắt tiếng, âm lượng và cảnh âm thanh. Sau khi cập nhật, hãy mở TonePilot một lần và xác nhận thiết bị kết nối được.','開啟 Apple「捷徑」App，點選「捷徑」分頁，再選擇「App 捷徑」。':'Mở ứng dụng Phím tắt của Apple, chọn tab Phím tắt rồi chọn Phím tắt ứng dụng.','找到 TonePilot，即可執行「切換電源」、「切換靜音」、「設定音量」或「音效場景」。':'Tìm TonePilot rồi chạy Chuyển nguồn, Chuyển tắt tiếng, Đặt âm lượng hoặc Cảnh âm thanh.','若要語音操作，可對 Siri 說：「用 TonePilot 切換靜音」或「用 TonePilot 設定音響音量」。':'Bạn có thể yêu cầu Siri dùng TonePilot để chuyển tắt tiếng hoặc đặt âm lượng loa.','若要放在桌面，長按主畫面加入「捷徑」小工具，再選擇 TonePilot 捷徑。':'Thêm tiện ích Phím tắt vào Màn hình chính rồi chọn một phím tắt TonePilot.','iOS 18 或更新版本可編輯控制中心、加入「捷徑」控制項，再指定需要的 TonePilot 動作。':'Trên iOS 18 trở lên, thêm điều khiển Phím tắt vào Trung tâm điều khiển rồi gán thao tác TonePilot.','捷徑執行時，iPhone 與 SoundTouch 必須位於同一個可連線的區域網路。音量仍受 TonePilot 的一般及夜間安全上限保護；電源屬於切換指令，會在開機與待機之間切換。':'Khi chạy phím tắt, iPhone và SoundTouch phải ở cùng mạng nội bộ có thể kết nối. Âm lượng vẫn tuân theo giới hạn an toàn ban ngày và ban đêm; nguồn chuyển đổi giữa bật và chờ.'
    }
  };
  const aliases = {'zh-TW':'zh-Hant','zh-HK':'zh-Hant','zh-CN':'zh-Hans','zh-SG':'zh-Hans'};
  const requested = new URLSearchParams(location.search).get('lang') || localStorage.getItem('tonepilot-language') || aliases[navigator.language] || navigator.language;
  const lang = supported.includes(requested) ? requested : (requested.startsWith('zh') ? 'zh-Hant' : supported.find(x => requested.startsWith(x)) || 'en');
  document.documentElement.lang = lang;
  const page = location.pathname.split('/').pop() || 'index.html';
  const seo = {
    'zh-Hant': {index:['TonePilot｜SoundTouch 智慧遙控器','TonePilot 是相容 SoundTouch 設備的 iPhone 智慧遙控與音效控制中心。'],support:['客服支援｜TonePilot','TonePilot 客服支援、相容性說明與常見問題。'],privacy:['隱私權政策｜TonePilot','TonePilot App 隱私權政策。']},
    'zh-Hans': {index:['TonePilot｜SoundTouch 智能遥控器','TonePilot 是兼容 SoundTouch 设备的 iPhone 智能遥控与音效控制中心。'],support:['客户支持｜TonePilot','TonePilot 客户支持、兼容性说明与常见问题。'],privacy:['隐私权政策｜TonePilot','TonePilot App 隐私权政策。']},
    ja: {index:['TonePilot｜SoundTouchスマートリモコン','SoundTouch対応のiPhone用スマートリモコン・音響コントロールセンター。'],support:['サポート｜TonePilot','TonePilotのサポート、互換性、よくある質問。'],privacy:['プライバシーポリシー｜TonePilot','TonePilotアプリのプライバシーポリシー。']},
    en: {index:['TonePilot | Smart Remote for SoundTouch','An iPhone smart remote and sound control center for compatible SoundTouch devices.'],support:['Support | TonePilot','TonePilot support, compatibility, and frequently asked questions.'],privacy:['Privacy Policy | TonePilot','Privacy Policy for the TonePilot app.']},
    de: {index:['TonePilot | Smart Remote für SoundTouch','Eine iPhone-Fernbedienung und Klangzentrale für kompatible SoundTouch-Geräte.'],support:['Support | TonePilot','TonePilot-Support, Kompatibilität und häufige Fragen.'],privacy:['Datenschutzerklärung | TonePilot','Datenschutzerklärung der TonePilot-App.']},
    vi: {index:['TonePilot | Điều khiển thông minh cho SoundTouch','Ứng dụng iPhone điều khiển và tinh chỉnh âm thanh cho thiết bị SoundTouch tương thích.'],support:['Hỗ trợ | TonePilot','Hỗ trợ, tương thích và câu hỏi thường gặp về TonePilot.'],privacy:['Chính sách quyền riêng tư | TonePilot','Chính sách quyền riêng tư của ứng dụng TonePilot.']}
  };
  const kind = page.startsWith('support') ? 'support' : page.startsWith('privacy') ? 'privacy' : 'index';
  document.title = seo[lang][kind][0];
  const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = seo[lang][kind][1];
  const select = document.querySelector('[data-language]');
  if (select) { select.value = lang; select.addEventListener('change', e => { localStorage.setItem('tonepilot-language', e.target.value); const u = new URL(location.href); u.searchParams.set('lang', e.target.value); location.href = u; }); }
  // Keep the selected language when navigating between pages, even when
  // browser storage is unavailable or has been cleared.
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    if (url.origin === location.origin && /(?:^|\/)(?:index|support|privacy)\.html$/.test(url.pathname)) {
      url.searchParams.set('lang', lang);
      link.href = url.href;
    }
  });
  if (lang === 'zh-Hant') return;
  const fallbackEnglish = pageCopy.en || {};
  const generated = window.TONEPILOT_TRANSLATIONS?.[lang] || {};
  const dictionary = {...fallbackEnglish, ...generated, ...Object.fromEntries(Object.entries(common).map(([k,v]) => [k, v[lang] || v.en]).filter(([,v]) => v)), ...(pageCopy[lang] || {})};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => { const raw = node.nodeValue; const trimmed = raw.trim(); if (dictionary[trimmed]) node.nodeValue = raw.replace(trimmed, dictionary[trimmed]); });
  document.querySelectorAll('[alt], [aria-label]').forEach(el => {
    for (const attribute of ['alt', 'aria-label']) {
      const value = el.getAttribute(attribute);
      if (value && dictionary[value]) el.setAttribute(attribute, dictionary[value]);
    }
  });
  const labels = nav[lang]; document.querySelectorAll('.nav-links a').forEach((a,i) => { if(labels[i]) a.textContent = labels[i]; });
  document.querySelectorAll('.site-footer nav a').forEach(a => { const i = a.hostname === 'github.com' ? 3 : a.href.includes('support.html') ? 1 : a.href.includes('privacy.html') ? 2 : 0; if(labels[i]) a.textContent = labels[i]; });
  const languageNames = { 'zh-Hant':'語言', 'zh-Hans':'语言', ja:'言語', en:'Language', de:'Sprache', vi:'Ngôn ngữ' };
  document.querySelectorAll('.language-picker .sr-only').forEach(el => { el.textContent = languageNames[lang]; });
  if (select) select.setAttribute('aria-label', languageNames[lang]);
})();
