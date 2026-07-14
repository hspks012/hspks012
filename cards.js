// 토익스피킹 파트5 카드 데이터
// 카드 추가/수정은 이 파일만 건드리면 됩니다. (index.html, app.js는 그대로 둬도 됨)
const CARDS = [
  {
    theme: "성공/커리어", tc: "#2563eb",
    topic: "01. 성공 조건 - 비즈니스 파트너",
    q: "Which of the following is most important for a business partner?\n• Time management skills\n• An ability to adapt to changes\n• Effective communication skills",
    qko: "다음 중 비즈니스 파트너에게 가장 중요한 것은?\n• 시간 관리 기술\n• 변화에 적응하는 능력\n• 효과적인 커뮤니케이션 기술",
    hints: [
      "이유1: 시간관리 선택 → 팀워크에 효과적 → 대학 팀프로젝트 → 문제가 있었지만 → 시간관리 덕분에 → 제시간에 완료 → 매우 도움됨",
      "이유2: 요즘 비즈니스 환경 거침(코로나) → 업무가 시간에 민감 → 엄격한 마감기한 존재 → 시간관리 = 유익"
    ],
    ans: "First, I think it will be effective for teamwork. Actually, I'm a senior in college. When I was in college, I had many team projects and sometimes we had problems. But, my team members had time management skills. So we could finish work on time. It was very helpful.\n\nSecond, nowadays, the business environment is very tough because of Covid-19. So a lot of work is time-sensitive. I mean it has a strict deadline. Therefore, if you have time management skills, it will be beneficial.",
    ansko: "첫째, 팀워크에 효과적일 것입니다. 저는 대학교 4학년입니다. 대학 때 팀 프로젝트가 많았고 문제가 생기기도 했습니다. 하지만 팀원들이 시간 관리 기술이 있어서 제시간에 끝낼 수 있었습니다. 매우 도움이 되었습니다.\n\n둘째, 요즘 비즈니스 환경은 코로나19로 매우 어렵습니다. 많은 업무가 시간에 민감하고 마감기한이 엄격합니다. 시간 관리 기술이 있다면 유익할 것입니다.",
    sim: [
      "For that job, which is more important for a new employee, educational background or relevant work experience?",
      "Which of the following is most important for success in business: Leadership / Creativity / Communication?"
    ]
  },
  {
    theme: "교육/학교", tc: "#7c3aed",
    topic: "02. 온라인/테크 - 인터넷과 교육",
    q: "In your opinion, has the Internet had a positive or negative effect on education? Why?",
    qko: "당신 생각에 인터넷은 교육에 긍정적인 영향을 미쳤나요, 아니면 부정적인 영향을 미쳤나요?",
    hints: [
      "이유1: 인터넷 = 긍정적 → 학교 갈 필요 없음 → 시간 절약 → 편리함 + 정보 풍부 → 매우 도움됨",
      "이유2: 무료 or 저렴 → 돈 절약 → 요즘 경제 어렵고 젊은 사람 힘든 시간 → 매우 유익"
    ],
    ans: "I think the Internet has had a positive effect on education. First, people can save time because they don't have to go to school. It's very convenient. There is a lot of information on the Internet. It's very helpful. Second, they can save money because it's free or cheaper. Nowadays, the economy is really tough, so young people are having a hard time. I think it's very beneficial.",
    ansko: "인터넷은 교육에 긍정적인 효과를 가져왔다고 생각합니다. 첫째, 학교에 갈 필요가 없어 시간을 절약할 수 있습니다. 매우 편리하고 인터넷에 정보도 많습니다. 둘째, 무료이거나 더 저렴해서 돈을 절약할 수 있습니다. 요즘 경제가 어렵고 젊은 사람들이 힘든 시간을 보내고 있습니다. 매우 유익합니다.",
    sim: [
      "What are the advantages of taking a university class online rather than in a classroom?",
      "Agree/disagree: Due to advances in technology, students can study more effectively.",
      "Do you think technology helps people maintain a balance between work and personal lives?"
    ]
  },
  {
    theme: "교육/학교", tc: "#7c3aed",
    topic: "03. 아이들 사회생활 - 봉사/스포츠",
    q: "Should university students be encouraged to spend their free time volunteering in the community? Why or why not?",
    qko: "대학생들이 여가 시간을 지역사회 봉사에 사용하도록 장려되어야 할까요?",
    hints: [
      "이유1: 새로운 사람 만나 친구 사귐 → 대학 때 병원 봉사 경험 → 정보 공유 + 서로 도움 → 훌륭한 경험",
      "이유2: 사회적 기술 + 팀워크 + 리더십 배울 수 있음 → 매우 유용"
    ],
    ans: "I think university students should be encouraged to spend their free time volunteering in the community. First, they can meet new people and make friends. When I was in college, I volunteered at a hospital near my house. We could share information and help each other. It was a great experience. Second, they can learn social skills, teamwork, and leadership. I think it will be very useful.",
    ansko: "대학생들이 지역사회에서 봉사하며 여가를 보내도록 장려되어야 한다고 생각합니다. 첫째, 새로운 사람을 만나 친구를 사귈 수 있습니다. 대학 때 집 근처 병원에서 봉사했는데, 정보를 공유하고 서로 도울 수 있었습니다. 훌륭한 경험이었습니다. 둘째, 사회적 기술, 팀워크, 리더십을 배울 수 있습니다. 매우 유용할 것입니다.",
    sim: [
      "Should children be encouraged to spend their free time playing sports?",
      "Agree/Disagree: Students should participate in organized activities such as soccer or group sports.",
      "What are the benefits of participating in sports in elementary school?"
    ]
  },
  {
    theme: "생활/개인", tc: "#059669",
    topic: "04. 혼자 VS 같이 - 가족과 함께 살기",
    q: "For university students, what are the advantages of living at home with their families and commuting to school?",
    qko: "대학생들에게 가족과 함께 집에 살면서 통학하는 것의 장점은 무엇입니까?",
    hints: [
      "이유1: 재미있고 흥미로움 → 사람 좋아하는 성격 → 가족과 저녁 식사 → 스트레스 해소",
      "이유2: 정보 공유 + 서로 도움 가능 → 부모님 경험 많음 → 항상 조언 해주심 → 매우 도움됨"
    ],
    ans: "First, it's fun and interesting. I'm a people person, so I like spending time with others. I usually eat dinner with my family, and I can get rid of my stress. Second, we can share information and help each other. My parents have a lot of experience, so they always give me advice. It's very helpful.",
    ansko: "첫째, 재미있고 흥미롭습니다. 저는 사람을 좋아하는 성격이라 다른 사람들과 시간 보내는 것을 좋아합니다. 가족과 저녁을 먹으며 스트레스를 해소할 수 있습니다. 둘째, 정보를 공유하고 서로 도울 수 있습니다. 부모님은 경험이 많으셔서 항상 조언을 해주십니다. 매우 도움이 됩니다.",
    sim: [
      "What are the advantages of living with parents instead of living alone?",
      "If you were a recent university graduate, would you prefer living on your own or with your parents?",
      "What are the disadvantages of exercising alone?"
    ]
  },
  {
    theme: "성공/커리어", tc: "#2563eb",
    topic: "05. 조언자 - 가족 vs 상사",
    q: "If you started your own business, who would be better to consult with, family or supervisor?",
    qko: "사업을 시작한다면 가족과 상의하는 것이 나을까요, 상사와 상의하는 것이 나을까요?",
    hints: [
      "이유1: 가족 선택 → 나를 잘 안다 → 내 재능 + 기술 파악 → 경험도 많다 → 항상 좋은 조언 해줌",
      "이유2: 편안함 느낌 → 정직할 수 있다 → 신뢰할 수 있다 → vs 타인은 신뢰 어려움"
    ],
    ans: "I think it would be better to consult with my family. First, they know me well. For example, my parents know my talents and skills, so they always give me advice. Also, they have a lot of experience. Second, I feel comfortable with them, so I can be honest. I cannot be honest with others because I cannot trust them.",
    ansko: "가족과 상의하는 것이 더 나을 것 같습니다. 첫째, 그들은 저를 잘 압니다. 예를 들어 부모님은 제 재능과 기술을 알고 있어서 항상 조언을 해주십니다. 또한 경험도 많으십니다. 둘째, 그들과 함께 있으면 편안해서 솔직할 수 있습니다. 다른 사람들은 신뢰하기 어려워 솔직해지기가 힘듭니다.",
    sim: [
      "When you choose a job, what are the advantages of getting advice from family members?",
      "When changing jobs, who is the best person to get advice from?",
      "When learning new skills, who is better: co-workers or managers?",
      "Should employees provide feedback on their manager's job performance?"
    ]
  },
  {
    theme: "성공/커리어", tc: "#2563eb",
    topic: "06. 직장/학교 제공 - 소득 / 복지",
    q: "Do you think it is good to have a high income for your happiness?",
    qko: "행복을 위해 높은 소득을 갖는 것이 좋다고 생각합니까?",
    hints: [
      "이유1(경제 배경): 요즘 경제 어렵고 생활비 높음 → 젊은 사람 힘든 시간",
      "이유2(개인 동기): 여행을 좋아함 → 돈을 벌고 싶음 → 스트레스 해소 → 업무 집중 → 생산성 향상"
    ],
    ans: "I think it's good to have a high income for my happiness. First, nowadays, the economy is really tough, and the cost of living is high. Young people are having a hard time. Second, I want to make money because I like traveling. I can get rid of my stress. Eventually, I can focus on my work better, which is effective for productivity.",
    ansko: "행복을 위해 높은 소득을 갖는 것이 좋다고 생각합니다. 첫째, 요즘 경제가 정말 어렵고 생활비도 높습니다. 젊은 사람들이 힘든 시간을 보내고 있습니다. 둘째, 여행을 좋아하기 때문에 돈을 벌고 싶습니다. 스트레스를 해소할 수 있고, 결국 업무에 더 잘 집중하여 생산성이 높아집니다.",
    sim: [
      "What are the advantages of working as a doctor?",
      "Should companies provide fitness classes or wellness programs for employees?"
    ]
  },
  {
    theme: "성공/커리어", tc: "#2563eb",
    topic: "07. 잦은 이직 - 커리어 변경의 장점",
    q: "For employees, what are the advantages of frequently changing careers throughout their working lives?",
    qko: "직원들에게 직장 생활 전반에 걸쳐 자주 커리어를 바꾸는 것의 장점은 무엇입니까?",
    hints: [
      "이유1: 새로운 사람 만나 친구됨 → 대학 때 아르바이트 많이 함 → 새 사람 만남 → 정보 공유 → 경력에 도움",
      "이유2: 사회적 기술 배울 수 있음 → 비즈니스에서 매우 중요 → 매우 유용"
    ],
    ans: "First, they can meet new people and become friends. When I was in college, I had many part-time jobs. I met new people, and we could share information. It was helpful for my career. Second, they can learn social skills, which are very important in business. I think it will be very useful.",
    ansko: "첫째, 새로운 사람들을 만나 친구가 될 수 있습니다. 대학 시절 아르바이트를 많이 했는데, 새로운 사람들을 만나 정보를 공유할 수 있었습니다. 경력에 도움이 되었습니다. 둘째, 사회적 기술을 배울 수 있는데, 비즈니스에서 매우 중요합니다. 매우 유용할 것입니다.",
    sim: [
      "Some people frequently change companies. Do you think this is beneficial for a career?",
      "What are the advantages of working in a different field than what you majored in?",
      "During a vacation, what are the disadvantages of traveling to several locations?"
    ]
  },
  {
    theme: "사회/정책", tc: "#d97706",
    topic: "08. 명절 전통 - 과거 vs 현재",
    q: "Agree or disagree: 'Nowadays, people care less about holiday traditions than they did in the past.'",
    qko: "동의 또는 반대: '요즘 사람들은 과거보다 명절 전통에 덜 신경 쓴다.'",
    hints: [
      "이유1: 동의 → 경쟁 높음 → 바쁘고 시간 없음 → 나도 공부로 바쁨 → 피곤하고 스트레스받음",
      "이유2: 즐길 거리 많아짐 (인터넷, 소셜미디어) → 매우 재미있음 → 전통보다 이쪽에 집중"
    ],
    ans: "I agree that people care less about holiday traditions. First, many people are busy because competition is high, so they don't have time. I am busy with my studies, so I'm tired and stressed. Second, there are many things to enjoy, like the Internet and social media. It's very fun.",
    ansko: "사람들이 명절 전통에 덜 신경 쓴다는 것에 동의합니다. 첫째, 경쟁이 치열해서 많은 사람들이 바쁘고 시간이 없습니다. 저도 공부로 바빠서 피곤하고 스트레스를 받습니다. 둘째, 인터넷과 소셜 미디어처럼 즐길 거리가 많아졌습니다. 매우 재미있습니다.",
    sim: [
      "Agree/Disagree: Nowadays, holiday traditions are less important than in the past.",
      "Do you think people today have more time for relaxation than they did in the past?"
    ]
  },
  {
    theme: "교육/학교", tc: "#7c3aed",
    topic: "09. 외국 살 때 장단점 - 해외 경험",
    q: "Which of the following is the most effective way for university students to get experience?\n• Going abroad\n• Internship programs\n• Working as a research assistant",
    qko: "다음 중 대학생들이 경험을 쌓는 가장 효과적인 방법은?\n• 해외로 나가기\n• 인턴십 프로그램\n• 연구 보조원으로 일하기",
    hints: [
      "이유1: 해외 선택 → 새로운 사람 만나 친구됨 → 캐나다 유학 경험 → 나와 다른 사람들 만남 → 훌륭한 경험",
      "이유2: 외국어 기술 배울 수 있음 → 경력에 중요"
    ],
    ans: "I think going abroad is the most effective way for students to get experience. First, they can meet new people and become friends. When I studied in Canada, I met new people who were different from me. It was a great experience. Second, they can learn foreign language skills, which are important for their career.",
    ansko: "해외로 나가는 것이 학생들이 경험을 쌓는 가장 효과적인 방법이라고 생각합니다. 첫째, 새로운 사람들을 만나 친구가 될 수 있습니다. 캐나다에서 공부할 때 나와 다른 새로운 사람들을 만났는데, 훌륭한 경험이었습니다. 둘째, 외국어 기술을 배울 수 있으며, 경력에 중요합니다.",
    sim: [
      "What are the advantages of living in several different cities over a lifetime?",
      "If your company required you to work abroad, would you accept the offer?",
      "For students, what are the advantages of studying in a foreign country?"
    ]
  },
  {
    theme: "사회/정책", tc: "#d97706",
    topic: "10. 정부/환경 - 재활용 프로그램 지원",
    q: "Do you think the government should fund a recycling program?",
    qko: "정부가 재활용 프로그램에 자금을 지원해야 한다고 생각합니까?",
    hints: [
      "이유1: 정부 지원 = 좋음 → 환경에 좋음 → 환경 중요하지만 파괴되고 있음 → 우리가 신경 써야 함",
      "이유2: 내 나라도 비슷한 정책 있음 → 사람들이 만족함 → 매우 효과적"
    ],
    ans: "Yes, I think the government should support recycling programs. First, it's good for the environment. Environment is important, but it is being destroyed, so we must care. My country has a similar policy, and people are satisfied. I think it's very effective.",
    ansko: "네, 정부가 재활용 프로그램을 지원해야 한다고 생각합니다. 첫째, 환경에 좋습니다. 환경은 중요하지만 파괴되고 있어 신경 써야 합니다. 저의 나라도 비슷한 정책이 있고 사람들이 만족합니다. 매우 효과적입니다.",
    sim: [
      "What are the advantages of prohibiting the use of personal automobiles in a large city?",
      "What are the advantages of local governments providing students with free university education?",
      "Do you agree: Government should support filmmakers?"
    ]
  },
  {
    theme: "생활/개인", tc: "#059669",
    topic: "11. 리뷰 - 인터넷 리뷰 vs 판매원",
    q: "Do you think reading Internet reviews is more helpful than asking sales people when making a purchase?",
    qko: "구매 결정 시 인터넷 리뷰를 읽는 것이 판매원에게 묻는 것보다 더 도움이 된다고 생각합니까?",
    hints: [
      "이유1: 인터넷 리뷰 선택 → 자세한 정보 얻을 수 있음 → 사진과 함께 정보 획득 → 결정 내리는 데 도움",
      "이유2: 리뷰는 정직하고 정확함 → 신뢰 가능 → vs 판매원은 과장하는 경향 → 신뢰하기 어려움"
    ],
    ans: "First, I think reading Internet reviews is better because I can get detailed information. When I read reviews, I can get information with pictures. It's helpful for making a decision. Second, reviews are honest and accurate, so I can trust them. However, it's hard to trust sales people because they tend to exaggerate.",
    ansko: "첫째, 자세한 정보를 얻을 수 있어서 인터넷 리뷰를 읽는 것이 더 낫다고 생각합니다. 리뷰를 읽으면 사진과 함께 정보를 얻을 수 있습니다. 결정을 내리는 데 도움이 됩니다. 둘째, 리뷰는 정직하고 정확해서 신뢰할 수 있습니다. 반면 판매원은 과장하는 경향이 있어 신뢰하기 어렵습니다.",
    sim: [
      "When making a purchase, do you prefer recommendations from friends or online reviews?",
      "What are the advantages of reading customer reviews before buying a product?"
    ]
  },
  {
    theme: "생활/개인", tc: "#059669",
    topic: "12. 집 소유/월세 - 소유의 단점",
    q: "What are the disadvantages of owning a house or an apartment rather than renting?",
    qko: "임대가 아니라 집이나 아파트를 소유하는 것의 단점은 무엇입니까?",
    hints: [
      "이유1: 도시에서 집 비쌈 → 경제 나쁘고 사람들 힘든 시간 → 돈 빌리면 이자 내야 함 → 부담",
      "이유2: 집 유지하려면 시간 + 에너지 필요 → 렌트하면 유지보수 걱정 없음"
    ],
    ans: "First, buying a house is expensive in the city. In my country, the economy is bad, so people are having a hard time. Also, if you borrow money, you must pay interest, which is a burden. Second, maintaining a house takes time and energy. But if you rent, you don't have to worry about maintenance.",
    ansko: "첫째, 도시에서 집을 사는 것은 비쌉니다. 저의 나라는 경제가 나빠서 사람들이 힘든 시간을 보내고 있습니다. 또한 돈을 빌리면 이자를 내야 하는데 부담이 됩니다. 둘째, 집을 유지하려면 시간과 에너지가 필요합니다. 하지만 임대하면 유지보수를 걱정할 필요가 없습니다.",
    sim: [
      "What are the advantages of renting an apartment rather than buying one?",
      "Is it better to own or rent a home? Why?"
    ]
  },
  {
    theme: "사회/정책", tc: "#d97706",
    topic: "13. 광고 - 대중교통 광고 효과",
    q: "Do you think posting advertisements on public transportation is an effective way for companies to reach customers?",
    qko: "대중교통에 광고를 게시하는 것이 기업이 고객에게 다가가는 효과적인 방법이라고 생각합니까?",
    hints: [
      "이유1: 아니오 → 사람들이 관심 없음 + 신경 안 씀 → 대신 인터넷/소셜미디어 사용",
      "이유2: 온라인 광고가 더 효과적 → 성공적인 회사들이 소셜미디어 사용 → 젊은 사람들 끌어들임"
    ],
    ans: "No, I don't think posting ads on public transportation is effective. First, people are not interested in them; they don't care. Instead, many people use the Internet and social media. So, posting ads online is more effective. Many successful companies use social media, so they can attract young people.",
    ansko: "아니요, 대중교통에 광고를 게시하는 것이 효과적이라고 생각하지 않습니다. 첫째, 사람들이 관심이 없고 신경 쓰지 않습니다. 대신 많은 사람들이 인터넷과 소셜 미디어를 사용합니다. 따라서 온라인 광고가 더 효과적입니다. 많은 성공 기업들이 소셜 미디어로 젊은 사람들을 끌어들입니다.",
    sim: [
      "What is the most effective way for a company to advertise its products?",
      "Do you think social media is the most effective advertising platform today?"
    ]
  },
  {
    theme: "생활/개인", tc: "#059669",
    topic: "14. 도시 - 대도시 생활의 장점",
    q: "What are the advantages of living in a large city?",
    qko: "대도시에 사는 것의 장점은 무엇입니까?",
    hints: [
      "이유1: 새로운 사람 많이 만남 → 재미있음 → 대도시로 이사했을 때 똑똑한 사람들 만남 → 정보 공유 → 훌륭한 경험",
      "이유2: 즐길 거리 많음 (박물관, 식당) → 스트레스 해소 가능"
    ],
    ans: "First, they can meet many new people, which is fun. When I moved to a big city, I met smart people, and we shared information. It was a great experience. Second, there are many things to enjoy, like museums and restaurants. So, I can get rid of my stress.",
    ansko: "첫째, 많은 새로운 사람들을 만날 수 있는데, 재미있습니다. 대도시로 이사했을 때 똑똑한 사람들을 만나 정보를 공유했습니다. 훌륭한 경험이었습니다. 둘째, 박물관과 식당 같이 즐길 거리가 많습니다. 스트레스를 해소할 수 있습니다.",
    sim: [
      "What are the advantages of living in a rural area compared to a city?",
      "Would you prefer to live in a big city or a small town? Why?"
    ]
  },
  {
    theme: "생활/개인", tc: "#059669",
    topic: "15. 돈 관리 - 아이들 금융 교육",
    q: "Do you think children should be taught how to manage money? Why or why not?",
    qko: "아이들에게 돈 관리 방법을 가르쳐야 한다고 생각합니까?",
    hints: [
      "이유1: 아이들에게 유용 → 자본주의 사회에 살고 있음 → 경제 어렵고 생활비 높음 → 돈 관리 기술 중요",
      "이유2: 돈의 중요성 배움 → 낭비하지 않게 됨"
    ],
    ans: "First, it's very useful for children because we live in a capitalist society. In my country, the economy is tough and the cost of living is high, so money management skills are important. Second, they can learn the importance of money, so they won't waste it.",
    ansko: "첫째, 우리가 자본주의 사회에 살고 있기 때문에 아이들에게 매우 유용합니다. 저의 나라는 경제가 어렵고 생활비가 높아 돈 관리 기술이 중요합니다. 둘째, 돈의 중요성을 배울 수 있어 낭비하지 않게 됩니다.",
    sim: [
      "Should financial education be a required subject in schools?",
      "What are the benefits of teaching children about saving money?"
    ]
  },
  {
    theme: "사회/정책", tc: "#d97706",
    topic: "16. 운전 - 운전 나이 제한",
    q: "Do you think children under 21 should be allowed to drive? Why or why not?",
    qko: "21세 미만이 운전을 허용되어야 한다고 생각합니까?",
    hints: [
      "이유1: 아니오 → 16세 미만은 미성숙 → 운전에 집중 못함 → 위험 → 내가 운전 시작했을 때 사고 → 끔찍했음",
      "이유2: 대중교통 좋음 → 버스 이용 가능 → 운전할 필요 없음"
    ],
    ans: "No, I don't think children under 21 should be allowed to drive. First, children under 16 are immature, so they can't focus on driving. It can be dangerous. When I started driving, I had an accident, which was terrible. Second, public transportation is good, so they can use buses. They don't need to drive.",
    ansko: "아니요, 21세 미만이 운전을 허용되어야 한다고 생각하지 않습니다. 첫째, 16세 미만은 미성숙해서 운전에 집중할 수 없습니다. 위험할 수 있습니다. 제가 운전을 처음 시작했을 때 사고가 났는데 끔찍했습니다. 둘째, 대중교통이 잘 되어 있어 버스를 이용할 수 있습니다. 운전할 필요가 없습니다.",
    sim: [
      "Should the legal driving age be raised to 21?",
      "What are the dangers of allowing teenagers to drive?"
    ]
  },
  {
    theme: "생활/개인", tc: "#059669",
    topic: "17. 여행 - 여러 도시 여행의 단점",
    q: "During a vacation, what are the disadvantages of traveling to several different locations instead of staying in one location?",
    qko: "휴가 중 한 곳에 머무는 대신 여러 곳을 여행하는 것의 단점은 무엇입니까?",
    hints: [
      "이유1: 시간 + 에너지 많이 듦 → 작년에 일주일에 여러 도시 방문 → 기차/비행기에서 시간 낭비",
      "이유2: 그 지역 자세한 것 알 수 없음 → 현지인 만나기 어려움 → 언어 배우기 어려움 → 덜 흥미로움"
    ],
    ans: "First, it takes a lot of time and energy. Last year, I visited many cities in a week, and I wasted time on trains and airplanes. Second, I cannot learn details about the area. Also, it's hard to meet locals and learn their language. It's less interesting.",
    ansko: "첫째, 시간과 에너지가 많이 듭니다. 작년에 일주일 동안 여러 도시를 방문했는데 기차와 비행기에서 시간을 낭비했습니다. 둘째, 그 지역에 대한 자세한 내용을 알 수 없습니다. 또한 현지인을 만나고 언어를 배우기가 어렵습니다. 덜 흥미롭습니다.",
    sim: [
      "What are the advantages of staying in one location during a vacation?",
      "What are the disadvantages of working in a different field than what you majored in?"
    ]
  },
  {
    theme: "생활/개인", tc: "#059669",
    topic: "18. 롤모델 - 롤모델의 중요성",
    q: "Do you think it is important for young people to have a role model? Why or why not?",
    qko: "젊은 사람들에게 롤모델을 갖는 것이 중요하다고 생각합니까?",
    hints: [
      "이유1: 네 → 롤모델 있으면 더 열심히 노력함 → 목표 달성에 효과적 → 고등학교 때 메시 보고 기술 공부",
      "이유2: 동기 부여됨 → 유명한 운동선수들이 긍정적 에너지 줌 → 고난을 마주할 때 유용"
    ],
    ans: "Yes, first, if you have a role model, you will work harder to become like them. It's effective for achieving goals. When I was in high school, I watched Messi and studied his skills. Second, you get motivated. Famous athletes give positive energy. It's useful when you face hardship.",
    ansko: "네, 첫째, 롤모델이 있으면 그들처럼 되기 위해 더 열심히 노력하게 됩니다. 목표 달성에 효과적입니다. 고등학생 때 메시를 보며 기술을 공부했습니다. 둘째, 동기 부여가 됩니다. 유명한 운동선수들은 긍정적인 에너지를 줍니다. 고난을 마주할 때 유용합니다.",
    sim: [
      "Who is your role model and why?",
      "Do you agree: Famous athletes and entertainers make good role models for young people?"
    ]
  }
];
