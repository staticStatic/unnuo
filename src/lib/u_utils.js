export const getRandomU = () => {
  const uString = ["ṵṷṹṻụủứừ⒰υṳ", "ỤỦỨỪỬῢΰῦṺṴUὺ", "ῧuṲỮỰṶṸύῠῡ", "ửữựὐὑὒὓὔὕὖὗ" ];
  const randomIndex = Math.floor(Math.random() * uString.length)
  const randomU = uString.slice(randomIndex, randomIndex + 1);
  return randomU;
}

export const getAllUs = () => {
  return "ṵṷṹṻụủứừ⒰υṳỤỦỨỪỬῢΰῦṺṴUὺῧuṲỮỰṶṸύῠῡửữựὐὑὒὓὔὕὖὗ";
}

export const getAllUpsideDownUs = () => {
  return "⒩ηṅṇṉṋἠἡἢἣἤἥἦἧὴήᾐᾑᾒᾓᾔᾕᾖᾗῂῃῄῆῇn"
}