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
      '捷徑執行時，iPhone 與 SoundTouch 必須位於同一個可連線的區域網路。音量仍受 TonePilot 的一般及夜間安全上限保護；電源屬於切換指令，會在開機與待機之間切換。':'When a shortcut runs, the iPhone and SoundTouch must be on the same reachable local network. Volume remains subject to TonePilot’s normal and nighttime safety limits. Power is a toggle between on and standby.'
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
  if (lang === 'zh-Hant') return;
  const dictionary = {...Object.fromEntries(Object.entries(common).map(([k,v]) => [k, v[lang]]).filter(([,v]) => v)), ...(pageCopy[lang] || {})};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => { const raw = node.nodeValue; const trimmed = raw.trim(); if (dictionary[trimmed]) node.nodeValue = raw.replace(trimmed, dictionary[trimmed]); });
  const labels = nav[lang]; document.querySelectorAll('.nav-links a').forEach((a,i) => { if(labels[i]) a.textContent = labels[i]; });
  document.querySelectorAll('.site-footer nav a').forEach(a => { const i = a.href.includes('support') ? 1 : a.href.includes('privacy') ? 2 : a.href.includes('github') ? 3 : 0; if(labels[i]) a.textContent = labels[i]; });
})();
