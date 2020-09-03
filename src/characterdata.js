const characterdata = [
  // add id, img file and name

  {
    id: 1,
    name: "AATOX",
    role: "FIGHTER",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90&width=250",
  },
  {
    id: 2,
    name: "AHRI",
    role: "MAGE",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90&width=250",
  },
  {
    id: 3,
    name: "AKALI",
    role: "ASSASIN",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt80ff58fe809777ff/5db05fa8adc8656c7d24e7d6/RiotX_ChampionList_akali.jpg?quality=90&width=250",
  },
  {
    id: 4,
    name: "ALISTAR",
    role: "TANK",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b366925d2fd8fdb/5db05fa856458c6b3fc1750b/RiotX_ChampionList_alistar.jpg?quality=90&width=250",
  },
  {
    id: 5,
    name: "AMUNU",
    role: "TANK",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt40dfbe48a61c439f/5db05fa80b39e86c2f83dbf9/RiotX_ChampionList_amumu.jpg?quality=90&width=250",
  },
  {
    id: 6,
    name: "ANIVA",
    role: "MAGE",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3d24a1482453088a/5db05fa8df78486c826dcce8/RiotX_ChampionList_anivia.jpg?quality=90&width=250",
  },
  {
    id: 7,
    name: "ANNIE",
    role: "MAGE",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt28c708665427aef6/5db05fa89481396d6bdd01a6/RiotX_ChampionList_annie.jpg?quality=90&width=250",
  },
  {
    id: 8,
    name: "APHELIOS",
    role: "MARKSMAN",
    img:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
  },
  {
    id: 9,
    name: "ASHE",
    role: "MARKSMAN",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt943aae038e2dee98/5db05fa8e9effa6ba5295f91/RiotX_ChampionList_ashe.jpg?quality=90&width=250",
  },
  {
    id: 10,
    name: "AURELION SOL",
    role: "MAGE",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5dd3569fc67d6664/5db05fa8bd24496c390ae4d8/RiotX_ChampionList_aurelionsol.jpg?quality=90&width=250",
  },
  {
    id: 11,
    name: "AZIR",
    role: "MAGE",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0e3f847946232167/5db05fa889fb926b491ed7ff/RiotX_ChampionList_azir.jpg?quality=90&width=250",
  },
  {
    id: 12,
    name: "BARD",
    role: "SUPPORT",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbbe3ce0c0ae1305b/5db05fb23a326d6df6c0e7b3/RiotX_ChampionList_bard.jpg?quality=90&width=250",
  },
  {
    id: 13,
    name: "BLITZCRANK",
    role: "TANK",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd7ef7e56ce1fe17b/5db05fb26af83b6d7032c8f8/RiotX_ChampionList_blitzcrank.jpg?quality=90&width=250",
  },
  {
    id: 14,
    name: "BRAND",
    role: "MAGE",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc8ca2e9bba653dda/5db05fb2dc674266df3d5d30/RiotX_ChampionList_brand.jpg?quality=90&width=250",
  },
  {
    id: 15,
    name: "BRAUM",
    role: "SUPPORT",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd140e30fa86d6ddd/5db05fb2242f426df132f95d/RiotX_ChampionList_braum.jpg?quality=90&width=250",
  },
  {
    id: 16,
    name: "CAITLYN",
    role: "MARKSMAN",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt014f4b6fc9bacd10/5db05fb00b39e86c2f83dbff/RiotX_ChampionList_caitlyn.jpg?quality=90&width=250",
  },
  {
    id: 17,
    name: "CAMILLE",
    role: "FIGHTER",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt413fcd7681fe0773/5db05fb089fb926b491ed805/RiotX_ChampionList_camille.jpg?quality=90&width=250",
  },
  {
    id: 18,
    name: "CASSIOPEIA",
    role: "MAGE",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte189be8189da97ea/5db05fb1bd24496c390ae4de/RiotX_ChampionList_cassiopeia.jpg?quality=90&width=250",
  },
  {
    id: 19,
    name: "CHO'GATH",
    role: "TANK",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4dfb71de3ddc8166/5db05fb13a326d6df6c0e7ad/RiotX_ChampionList_chogath.jpg?quality=90&width=250",
  },
  {
    id: 20,
    name: "CORKI",
    role: "MARKSMAN",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdd918c4d0a86347a/5db05fb1df78486c826dccee/RiotX_ChampionList_corki.jpg?quality=90&width=250",
  },
  {
    id: 21,
    name: "DARIUS",
    role: "FIGHTER",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt38b52be4a2cb1004/5db05fb19481396d6bdd01ac/RiotX_ChampionList_darius.jpg?quality=90&width=250",
  },
  {
    id: 22,
    name: "DIANA",
    role: "FIGHTER",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt56570083d2a5e20e/5db05fbc823d426762825fdf/RiotX_ChampionList_diana.jpg?quality=90&width=250",
  },
  {
    id: 23,
    name: "DR. MUNDO",
    role: "FIGHTER",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte88a3d7e9e408904/5db05fbce9effa6ba5295f99/RiotX_ChampionList_drmundo.jpg?quality=90&width=250",
  },
  {
    id: 24,
    name: "DRAVEN",
    role: "MARKSMAN",
    img:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc0be728e4cbb8f2a/5db05fbc89fb926b491ed80b/RiotX_ChampionList_draven.jpg?quality=90&width=250",
  },
];

export default characterdata;
