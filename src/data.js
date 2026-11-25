export const DATA = {
  id: 'dsh-frozen-shoulder',
  name: '肩周炎',
  prefix: 'shoulder',
  label: '肩周炎',
  defaultEeriness: 2,
  gain: 0.42,
  flareChance: 0.22,
  flareGain: 20,
  triggerWeight: 1.05,
  flareWeight: 0.85,
  reliefs: [
    { id: 'heat', label: '热敷肩膀', relief: 24, minutes: 30, calm: 8 },
    { id: 'wallclimb', label: '爬墙练习', relief: 16, minutes: 25, calm: 6 },
    { id: 'rub', label: '让人帮着揉一揉', relief: 18, minutes: 25, calm: 7 },
  ],
  body: {
    stiff: '右肩抬到一半就卡住，穿外套得先歪一下身子。',
    ache: '手够不到后背，梳头要换另一只手；夜里压到那边会疼醒。',
    flare: '刚才想抬手拿东西，抬到一半疼得停住了；只能用另一只手去接。',
  },
  voice: {
    base: '涉及「拿、够、举、穿、挂」的动作时，允许换一种说法或者请人帮一下；不要硬撑着说没事。',
    flare: '允许一个短促的「嘶」、允许把动作改口成「你帮我拿一下」；不要长篇解释肩周炎。',
  },
}
