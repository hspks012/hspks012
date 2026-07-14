// 여러 주제 답변에 공통으로 등장하는 표현/논리 패턴
// topics: 이 패턴이 실제 ans 문장에 등장하는 카드 번호(1-based)
const PATTERNS = [
  {
    group: "도입 템플릿 (모든 주제 공통)",
    en: "I think ... . I will give you some reasons and examples to support my opinion.",
    ko: "저는 ~라고 생각합니다. 이유와 예시를 몇 가지 말씀드리겠습니다.",
    topics: []
  },
  {
    group: "마무리 템플릿 (모든 주제 공통)",
    en: "That's why I think so. / That's why I think [주장 반복].",
    ko: "그것이 제가 그렇게 생각하는 이유입니다. / 그래서 저는 ~라고 생각합니다.",
    topics: []
  },
  {
    group: "배경 설명",
    en: "Nowadays, the economy is really tough (or bad), and the cost of living is high, so (young) people are having a hard time.",
    ko: "요즘 경제가 정말 어렵고 생활비도 높아서, (젊은) 사람들이 힘든 시간을 보내고 있다.",
    topics: [2, 6, 12, 15]
  },
  {
    group: "경험 연결",
    en: "I met new people, and we could share information (and help each other). It was a great experience.",
    ko: "새로운 사람들을 만나 정보를 공유(하고 서로 도움을 주고받음)했다. 훌륭한 경험이었다.",
    topics: [3, 7, 14]
  },
  {
    group: "감정/효과",
    en: "It helps me get rid of my stress.",
    ko: "그것은 스트레스를 해소하는 데 도움이 된다.",
    topics: [4, 6, 14]
  },
  {
    group: "바쁨/압박",
    en: "Competition is high, so people are busy and don't have time. / It has a strict deadline.",
    ko: "경쟁이 치열해서 사람들이 바쁘고 시간이 없다 / 마감 기한이 엄격하다.",
    topics: [1, 8]
  },
  {
    group: "신뢰 대비",
    en: "I can trust them because they are honest, but it's hard to trust others (they tend to exaggerate).",
    ko: "그들은 정직해서 신뢰할 수 있지만, 다른 사람들은 신뢰하기 어렵다(과장하는 경향이 있음).",
    topics: [5, 11]
  },
  {
    group: "마무리 클리셰",
    en: "I think it will be very useful / helpful / beneficial / effective.",
    ko: "그것은 매우 유용/도움이 됨/유익함/효과적일 것이라고 생각한다.",
    topics: [1, 2, 3, 4, 7, 10, 18]
  }
];
