export const actions = [
  {
    icon: "extension",
    title: "Add to Variable",
    name: "addToVariable",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Ask for Input",
    name: "ask",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    inputType: "Text",
    defaultAnswer: "",
    inputOptions: ["Text", "Number", "URL", "Date"]
  },
  {
    icon: "settings",
    title: "Base64 Encode",
    name: "base64Encode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    lineBreakOptions: ["None", "Every 64 Characters", "Every 76 Characters"],
    encodeOptions: ["Encode", "Decode"],
    encodeMode: "Encode",
    lineBreakMode: "Every 76 Characters"
  },
  {
    icon: "",
    title: "Calculate",
    name: "calculate",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    operand: 42,
    operation: "+",
    operationOptions: [
      "Modulus",
      "x^2",
      "x^3",
      "x^y",
      "e^x",
      "10^x",
      "ln(x)",
      "log(x)",
      "√x",
      "∛x",
      "x!",
      "sin(x)",
      "cos(x)",
      "tan(x)",
      "abs(x)"
    ],
    scientificOperation: ""
  },
  {
    icon: "",
    title: "Calculate Statistics",
    name: "calculateStatistics",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    operation: "Average",
    operationOptions: [
      "Average",
      "Minimum",
      "Maximum",
      "Sum",
      "Median",
      "Mode",
      "Range",
      "Standard Deviation"
    ]
  },
  {
    icon: "notes",
    title: "Comment",
    name: "comment",
    titleColor: "background-color: rgb(246, 231, 198)",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: rgb(248, 242, 226)",
    text: ""
  },
  {
    icon: "input",
    title: "Continue Shortcut in App",
    name: "continueShortcutInApp",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Count",
    name: "count",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    countOptions: ["Items", "Characters", "Words", "Sentences", "Lines"]
  },
  {
    icon: "settings",
    title: "Exit Shortcut",
    name: "exitShortcut",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Generate Hash",
    name: "generateHash",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    hashOptions: ["MD5", "SHA1", "SHA256", "SHA512"],
    hash: "MD5"
  },
  {
    icon: "battery_full",
    title: "Get Battery Level",
    name: "getBatteryLevel",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Get Contents of URL",
    name: "getContentsOfUrl",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(32, 178, 6); color: #FFF",
    bodyColor: "background-color: #FFF",
    headers: [{ key: "", value: "" }],
    headersVisible: false,
    method: "GET",
    methodOptions: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    requestBodyType: "",
    requestBody: {},
    requestOptions: ["JSON", "Form", "File"]
  },
  {
    icon: "trip_origin",
    title: "Get Current IP Address",
    name: "getCurrentIpAddress",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    type: "IPv4",
    typeOptions: ["IPv4", "IPv6"],
    source: "External",
    sourceOptions: ["External", "Internal"]
  },
  {
    icon: "settings",
    title: "Get Device Details",
    name: "getDeviceDetails",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    detail: "Average",
    detailOptions: [
      "Device Name",
      "Device Model",
      "System Version",
      "Screen Width",
      "Screen Height",
      "Current Volume",
      "Current Brightness"
    ]
  },
  {
    icon: "settings",
    title: "Get Dictionary Value",
    name: "getDictionaryValue",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    getOptions: ["Value", "All Keys", "All Values"],
    get: "Value",
    key: ""
  },
  {
    icon: "settings",
    title: "Get Name",
    name: "getName",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "wifi",
    title: "Get Network Details",
    name: "getNetworkDetails",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    network: "Wi-Fi",
    networkOptions: ["Wi-Fi", "Mobile Data"],
    get: "Network Name",
    getOptions: ["Network Name", "BSSID"]
  },
  {
    icon: "settings",
    title: "Get Type",
    name: "getType",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "extension",
    title: "Get Variable",
    name: "getVariable",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "If",
    name: "conditional",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    inputOptions: ["Equals", "Is Greater Than", "Is Less Than", "Contains"],
    input: "Contains",
    value: ""
  },
  {
    icon: "settings",
    title: "Otherwise",
    name: "otherwise",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "settings",
    title: "End If",
    name: "endIf",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "settings",
    title: "Nothing",
    name: "nothing",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Number",
    name: "number",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    number: 0
  },
  {
    icon: "pause",
    title: "Pause Music",
    name: "pauseMusic",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "print",
    title: "Print",
    name: "print",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(151, 153, 154); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "remove_red_eye",
    title: "Quick Look",
    name: "quickLook",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Open in Books",
    name: "openInBooks",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/books.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Random Number",
    name: "randomNumber",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    minimum: 0,
    maximum: 100
  },
  {
    icon: "settings",
    title: "Run Script Over SSH",
    name: "runScriptOverSSH",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    host: "",
    password: "",
    port: 22,
    script: "",
    user: ""
  },
  {
    icon: "",
    title: "Run Shortcut",
    name: "runShortcut",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/shortcuts.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    nameField: "",
    show: true
  },
  {
    icon: "airplanemode_active",
    title: "Set Airplane Mode",
    name: "setAirplaneMode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(254, 149, 0); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "bluetooth",
    title: "Set Bluetooth",
    name: "setBluetooth",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "wb_sunny",
    title: "Set Brightness",
    name: "setBrightness",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(254, 44, 85); color: #FFF",
    bodyColor: "background-color: #FFF",
    brightness: 50
  },
  {
    icon: "brightness_3",
    title: "Set Do Not Disturb",
    name: "setDoNotDisturb",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-color: rgb(67, 59, 205); color: #FFF; transform: rotate(180deg)",
    bodyColor: "background-color: #FFF",
    value: false,
    untilOptions: ["Turned Off", "Time", "I Leave", "Event Ends"],
    until: "Turned Off",
    time: ""
  },
  {
    icon: "battery_full",
    title: "Set Low Power Mode",
    name: "setLowPowerMode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "settings_input_antenna",
    title: "Set Mobile Data",
    name: "setCellularData",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "settings",
    title: "Set Name",
    name: "setName",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    dontIncludeFileExtension: false
  },
  {
    icon: "flash_on",
    title: "Set Torch",
    name: "setTorch",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(4, 95, 254); color: #FFF",
    bodyColor: "background-color: #FFF",
    setting: "On",
    settingOptions: ["On", "Off", "Toggle"]
  },
  {
    icon: "extension",
    title: "Set Variable",
    name: "setVariable",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "volume_up",
    title: "Set Volume",
    name: "setVolume",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF",
    volume: 50
  },
  {
    icon: "wifi",
    title: "Set Wi-Fi",
    name: "setWiFi",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "settings",
    title: "Show Alert",
    name: "showAlert",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    message: "Do you want to continue?",
    showCancelButton: true
  },
  {
    icon: "lens",
    title: "Show Notification",
    name: "showNotification",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 37, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    body: "Hello World",
    sound: true
  },
  {
    icon: "settings",
    title: "Show Result",
    name: "showResult",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "fast_rewind",
    title: "Skip Back",
    name: "skipBack",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    options: ["Beginning", "Previous Song"]
  },
  {
    icon: "fast_forward",
    title: "Skip Forward",
    name: "skipForward",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Text",
    name: "text",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "link",
    title: "URL",
    name: "url",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    url: ""
  },
  {
    icon: "lens",
    title: "Vibrate Device",
    name: "vibrateDevice",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 37, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "category",
    title: "View Content Graph",
    name: "viewContentGraph",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(41, 88, 212); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "settings",
    title: "Wait",
    name: "wait",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    time: 1
  },
  {
    icon: "settings",
    title: "Wait to Return",
    name: "waitToReturn",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  }
];

export default {
  actions
};
