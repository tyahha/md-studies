export type JapanAreaId =
  | "hokkaido"
  | "tohoku"
  | "chubu"
  | "kanto"
  | "kinki"
  | "chugoku"
  | "shikoku"
  | "kyusyu"
  | "aomori"
  | "akita"
  | "iwate"
  | "yamagata"
  | "miyagi"
  | "niigata"
  | "fukushima"
  | "ishikawa"
  | "tochigi"
  | "nagano"
  | "gunma"
  | "fukui"
  | "ibaraki"
  | "gifu"
  | "toyama"
  | "saitama"
  | "chiba"
  | "yamanashi"
  | "tokyo"
  | "kyoto"
  | "hyogo"
  | "shimane"
  | "kanagawa"
  | "shiga"
  | "tottori"
  | "shizuoka"
  | "aichi"
  | "okayama"
  | "mie"
  | "hiroshima"
  | "osaka"
  | "yamaguchi"
  | "nara"
  | "kagawa"
  | "wakayama"
  | "tokushima"
  | "ehime"
  | "fukuoka"
  | "kochi"
  | "oita"
  | "saga"
  | "nagasaki"
  | "kumamoto"
  | "miyazaki"
  | "okinawa"
  | "kagoshima"

export type JapanArea = {
  id: JapanAreaId
  name: string
  capitalName: string
  type: "prefecture" | "rural"
  rural: JapanAreaId
}

export const japanArea = new Map<JapanAreaId, JapanArea>([
  [
    "hokkaido",
    { id: "hokkaido", name: "北海道", capitalName: "", type: "rural", rural: "hokkaido" },
  ],
  [
    "hokkaido",
    {
      id: "hokkaido",
      name: "北海道",
      capitalName: "札幌市",
      type: "prefecture",
      rural: "hokkaido",
    },
  ],

  ["tohoku", { id: "tohoku", name: "東北地方", capitalName: "", type: "rural", rural: "tohoku" }],
  [
    "aomori",
    { id: "aomori", name: "青森県", capitalName: "青森市", type: "prefecture", rural: "tohoku" },
  ],
  [
    "akita",
    { id: "akita", name: "秋田県", capitalName: "秋田市", type: "prefecture", rural: "tohoku" },
  ],
  [
    "iwate",
    { id: "iwate", name: "岩手県", capitalName: "盛岡市", type: "prefecture", rural: "tohoku" },
  ],
  [
    "yamagata",
    { id: "yamagata", name: "山形県", capitalName: "山形市", type: "prefecture", rural: "tohoku" },
  ],
  [
    "miyagi",
    { id: "miyagi", name: "宮城県", capitalName: "仙台市", type: "prefecture", rural: "tohoku" },
  ],
  [
    "fukushima",
    { id: "fukushima", name: "福島県", capitalName: "福島市", type: "prefecture", rural: "tohoku" },
  ],

  ["kanto", { id: "kanto", name: "関東地方", capitalName: "", type: "rural", rural: "kanto" }],
  [
    "tochigi",
    { id: "tochigi", name: "栃木県", capitalName: "宇都宮市", type: "prefecture", rural: "kanto" },
  ],
  [
    "gunma",
    { id: "gunma", name: "群馬県", capitalName: "前橋市", type: "prefecture", rural: "kanto" },
  ],
  [
    "ibaraki",
    { id: "ibaraki", name: "茨城県", capitalName: "水戸市", type: "prefecture", rural: "kanto" },
  ],
  [
    "saitama",
    {
      id: "saitama",
      name: "埼玉県",
      capitalName: "さいたま市",
      type: "prefecture",
      rural: "kanto",
    },
  ],
  [
    "chiba",
    { id: "chiba", name: "千葉県", capitalName: "千葉市", type: "prefecture", rural: "kanto" },
  ],
  [
    "tokyo",
    { id: "tokyo", name: "東京都", capitalName: "新宿区", type: "prefecture", rural: "kanto" },
  ],
  [
    "kanagawa",
    { id: "kanagawa", name: "神奈川県", capitalName: "横浜市", type: "prefecture", rural: "kanto" },
  ],

  ["chubu", { id: "chubu", name: "中部地方", capitalName: "", type: "rural", rural: "chubu" }],
  [
    "niigata",
    { id: "niigata", name: "新潟県", capitalName: "新潟市", type: "prefecture", rural: "chubu" },
  ],
  [
    "ishikawa",
    { id: "ishikawa", name: "石川県", capitalName: "金沢市", type: "prefecture", rural: "chubu" },
  ],
  [
    "nagano",
    { id: "nagano", name: "長野県", capitalName: "長野市", type: "prefecture", rural: "chubu" },
  ],
  [
    "fukui",
    { id: "fukui", name: "福井県", capitalName: "福井市", type: "prefecture", rural: "chubu" },
  ],
  [
    "gifu",
    { id: "gifu", name: "岐阜県", capitalName: "岐阜市", type: "prefecture", rural: "chubu" },
  ],
  [
    "toyama",
    { id: "toyama", name: "富山県", capitalName: "富山市", type: "prefecture", rural: "chubu" },
  ],
  [
    "yamanashi",
    { id: "yamanashi", name: "山梨県", capitalName: "甲府市", type: "prefecture", rural: "chubu" },
  ],
  [
    "shizuoka",
    { id: "shizuoka", name: "静岡県", capitalName: "静岡市", type: "prefecture", rural: "chubu" },
  ],
  [
    "aichi",
    { id: "aichi", name: "愛知県", capitalName: "名古屋市", type: "prefecture", rural: "chubu" },
  ],

  ["kinki", { id: "kinki", name: "近畿地方", capitalName: "", type: "rural", rural: "kinki" }],
  [
    "kyoto",
    { id: "kyoto", name: "京都府", capitalName: "京都市", type: "prefecture", rural: "kinki" },
  ],
  [
    "hyogo",
    { id: "hyogo", name: "兵庫県", capitalName: "神戸市", type: "prefecture", rural: "kinki" },
  ],
  [
    "shiga",
    { id: "shiga", name: "滋賀県", capitalName: "大津市", type: "prefecture", rural: "kinki" },
  ],
  ["mie", { id: "mie", name: "三重県", capitalName: "津市", type: "prefecture", rural: "kinki" }],
  [
    "osaka",
    { id: "osaka", name: "大阪府", capitalName: "大阪市", type: "prefecture", rural: "kinki" },
  ],
  [
    "nara",
    { id: "nara", name: "奈良県", capitalName: "奈良市", type: "prefecture", rural: "kinki" },
  ],
  [
    "wakayama",
    {
      id: "wakayama",
      name: "和歌山県",
      capitalName: "和歌山市",
      type: "prefecture",
      rural: "kinki",
    },
  ],

  [
    "chugoku",
    { id: "chugoku", name: "中国地方", capitalName: "", type: "rural", rural: "chugoku" },
  ],
  [
    "shimane",
    { id: "shimane", name: "島根県", capitalName: "松江市", type: "prefecture", rural: "chugoku" },
  ],
  [
    "tottori",
    { id: "tottori", name: "鳥取県", capitalName: "鳥取市", type: "prefecture", rural: "chugoku" },
  ],
  [
    "okayama",
    { id: "okayama", name: "岡山県", capitalName: "岡山市", type: "prefecture", rural: "chugoku" },
  ],
  [
    "hiroshima",
    {
      id: "hiroshima",
      name: "広島県",
      capitalName: "広島市",
      type: "prefecture",
      rural: "chugoku",
    },
  ],
  [
    "yamaguchi",
    {
      id: "yamaguchi",
      name: "山口県",
      capitalName: "山口市",
      type: "prefecture",
      rural: "chugoku",
    },
  ],

  [
    "shikoku",
    { id: "shikoku", name: "四国地方", capitalName: "", type: "rural", rural: "shikoku" },
  ],
  [
    "kagawa",
    { id: "kagawa", name: "香川県", capitalName: "高松市", type: "prefecture", rural: "shikoku" },
  ],
  [
    "tokushima",
    {
      id: "tokushima",
      name: "徳島県",
      capitalName: "徳島市",
      type: "prefecture",
      rural: "shikoku",
    },
  ],
  [
    "ehime",
    { id: "ehime", name: "愛媛県", capitalName: "松山市", type: "prefecture", rural: "shikoku" },
  ],
  [
    "kochi",
    { id: "kochi", name: "高知県", capitalName: "高知市", type: "prefecture", rural: "shikoku" },
  ],

  ["kyusyu", { id: "kyusyu", name: "九州地方", capitalName: "", type: "rural", rural: "kyusyu" }],
  [
    "fukuoka",
    { id: "fukuoka", name: "福岡県", capitalName: "福岡市", type: "prefecture", rural: "kyusyu" },
  ],
  [
    "oita",
    { id: "oita", name: "大分県", capitalName: "大分市", type: "prefecture", rural: "kyusyu" },
  ],
  [
    "saga",
    { id: "saga", name: "佐賀県", capitalName: "佐賀市", type: "prefecture", rural: "kyusyu" },
  ],
  [
    "nagasaki",
    { id: "nagasaki", name: "長崎県", capitalName: "長崎市", type: "prefecture", rural: "kyusyu" },
  ],
  [
    "kumamoto",
    { id: "kumamoto", name: "熊本県", capitalName: "熊本市", type: "prefecture", rural: "kyusyu" },
  ],
  [
    "miyazaki",
    { id: "miyazaki", name: "宮崎県", capitalName: "宮崎市", type: "prefecture", rural: "kyusyu" },
  ],
  [
    "okinawa",
    { id: "okinawa", name: "沖縄県", capitalName: "那覇市", type: "prefecture", rural: "kyusyu" },
  ],
  [
    "kagoshima",
    {
      id: "kagoshima",
      name: "鹿児島県",
      capitalName: "鹿児島市",
      type: "prefecture",
      rural: "kyusyu",
    },
  ],
])
