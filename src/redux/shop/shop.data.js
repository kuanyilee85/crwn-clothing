const SHOP_DATA = {
  waves: {
    id: 1,
    title: "Waves",
    routeName: "waves",
    items: [
      {
        id: 1,
        name: "Point Dume State Beach, Malibu, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 25
      },
      {
        id: 2,
        name: "Huntington Beach, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1486869801134-25b6bc85fc0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 18
      },
      {
        id: 3,
        name: "Somewhere out there",
        imageUrl:
          "https://images.unsplash.com/photo-1501187099077-f209a85dfa5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        price: 35
      },
      {
        id: 4,
        name: "Jaws, Haiku-Pauwela, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1461080639469-66d73688fb21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1443&q=80",
        price: 25
      },
      {
        id: 5,
        name: "Somewhere out there",
        imageUrl:
          "https://images.unsplash.com/photo-1468931467769-06a09c69aad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 18
      },
      {
        id: 6,
        name: "Somewhere out there",
        imageUrl:
          "https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        price: 14
      },
      {
        id: 7,
        name: "Newport Beach, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        price: 18
      },
      {
        id: 8,
        name: "O‘ahu, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1471079688237-3ac9a55f1d6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        price: 14
      },
      {
        id: 9,
        name: "Mondragone, Italy",
        imageUrl:
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        price: 16
      }
    ]
  },
  creatures: {
    id: 2,
    title: "Creatures",
    routeName: "creatures",
    items: [
      {
        id: 10,
        name: "Chelonia Mydas",
        imageUrl:
          "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80 ",
        price: 220
      },
      {
        id: 11,
        name: "Cairns Aquarium, Cairns City, Australia",
        imageUrl:
          "https://images.unsplash.com/photo-1516683169270-7514e272a5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        price: 280
      },
      {
        id: 12,
        name: "Hippocampus",
        imageUrl:
          "https://images.unsplash.com/photo-1523585895729-a4bb980d5c14?ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80",
        price: 110
      },
      {
        id: 13,
        name: "Nudibranchs",
        imageUrl:
          "https://images.unsplash.com/photo-1511834757327-ae9365aeb266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        price: 160
      },
      {
        id: 14,
        name: "Cozumel, Mexico",
        imageUrl:
          "https://images.unsplash.com/photo-1510636767771-f2ef61f98721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1475&q=80",
        price: 160
      },
      {
        id: 15,
        name: "Actiniaria",
        imageUrl:
          "https://images.unsplash.com/photo-1550342029-0a5d8646f2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 160
      },
      {
        id: 16,
        name: "Bonaire National Marine Park, Caribbean Netherlands",
        imageUrl:
          "https://images.unsplash.com/photo-1510637234398-d25c9570a0a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
        price: 190
      },
      {
        id: 17,
        name: "Portunustrituberculatus",
        imageUrl:
          "https://images.unsplash.com/photo-1518960799632-ff8984f6a298?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
        price: 200
      }
    ]
  },
  islands: {
    id: 3,
    title: "Islands",
    routeName: "islands",
    items: [
      {
        id: 18,
        name: "Gold Creek Pond Trail, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1529333241880-9558d5e5e064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80",
        price: 125
      },
      {
        id: 19,
        name: "Tanah Lot, Indonesia",
        imageUrl:
          "https://images.unsplash.com/photo-1555865138-193ba536d7e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 90
      },
      {
        id: 20,
        name: "El Nido",
        imageUrl:
          "https://images.unsplash.com/photo-1438857871662-c42a0b3d232e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1247&q=80",
        price: 90
      },
      {
        id: 21,
        name: "Skellig Michael, Ireland",
        imageUrl:
          "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1398&q=80",
        price: 165
      },
      {
        id: 22,
        name: "Baa Atoll, Maldives",
        imageUrl:
          "https://images.unsplash.com/photo-1567909733427-57369737a371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        price: 185
      }
    ]
  },
  scubadiving: {
    id: 4,
    title: "Scuba diving",
    routeName: "scubadiving",
    items: [
      {
        id: 23,
        name: "Cabo Pulmo, Mexico",
        imageUrl:
          "https://images.unsplash.com/photo-1519327567471-ae47752b8089?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        price: 25
      },
      {
        id: 24,
        name: "Somewhere out there",
        imageUrl:
          "https://images.unsplash.com/flagged/photo-1563142746-c1c670ea5c3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        price: 20
      },
      {
        id: 25,
        name: "Divers through the reef, Maldives",
        imageUrl:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 80
      },
      {
        id: 26,
        name: "Meet nemo, Maldives",
        imageUrl:
          "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 80
      },
      {
        id: 27,
        name: "La Paz, Mexico",
        imageUrl:
          "https://images.unsplash.com/photo-1519329475180-feddc4230aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        price: 45
      },
      {
        id: 28,
        name: "muraenesox cinereus",
        imageUrl:
          "https://images.unsplash.com/photo-1567425773157-93380089a023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1213&q=80",
        price: 135
      },
      {
        id: 29,
        name: "Dragon Fish, Red Sea",
        imageUrl:
          "https://images.unsplash.com/photo-1567425928496-1ab66c650131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80",
        price: 20
      }
    ]
  },
  surfing: {
    id: 5,
    title: "Surfing",
    routeName: "surfing",
    items: [
      {
        id: 30,
        name: "Arrifana beach, Portugal",
        imageUrl:
          "https://images.unsplash.com/photo-1549625935-e40596ba38fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 325
      },
      {
        id: 31,
        name: "Piha, New Zealand",
        imageUrl:
          "https://images.unsplash.com/photo-1472099736066-d5b13ef12998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 20
      },
      {
        id: 32,
        name: "54th Street, Newport Beach, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1478472638765-20763df09ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 25
      },
      {
        id: 33,
        name: "Somewhere out there",
        imageUrl:
          "https://images.unsplash.com/photo-1558508640-f50c88f57e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 25
      },
      {
        id: 34,
        name: "Duranbah, Australia",
        imageUrl:
          "https://images.unsplash.com/photo-1499823382510-3990e4b8a04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 40
      },
      {
        id: 35,
        name: "North Shore, United States",
        imageUrl:
          "https://images.unsplash.com/photo-1476574898132-040f50db0a01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
