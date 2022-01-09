type TradeItem = {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

export const tradeItems: TradeItem[] = [
  {
    id: "0000",
    imageUrl:
      "https://www.kyobostory.co.kr/resources/uploads/9c5ed3eb467a4519a31c7d476f3360e0.jpg",
    title: "minion1",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 50000,
    chat: 5,
    interest: 3,
  },
  {
    id: "0001",
    imageUrl: "http://webimage.10x10.co.kr/image/basic600/262/B002626948.jpg",
    title: "minion2",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
    chat: 2,
    interest: 10,
  },
  {
    id: "0002",
    imageUrl:
      "https://t1.daumcdn.net/liveboard/gameabout/9db9b6a200f54ed98f265a4df4022403.JPG",
    title: "minion3",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 30000,
  },
  {
    id: "0003",
    imageUrl:
      "https://i.pinimg.com/550x/ee/fd/4d/eefd4d45c0cd9dd7f3d86b4b49e7fc72.jpg",
    title: "minion4",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 15000,
  },
  {
    id: "0004",
    imageUrl:
      "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/08_04_2020_02_13_14_1320198.jpg?width=1280",
    title: "minion5",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 20000,
    chat: 14,
    interest: 27,
  },
  {
    id: "0005",
    imageUrl:
      "https://styles.redditmedia.com/t5_2tc6s/styles/communityIcon_vn92glo5ugy51.png",
    title: "minion6",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 25000,
    chat: 7,
    interest: 6,
  },
  {
    id: "0006",
    imageUrl:
      "https://s.abcnews.com/images/WNN/150710_wnn_theater_pic_4x3_992.jpg",
    title: "minion7",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 100000,
    interest: 5,
  },
  {
    id: "0007",
    imageUrl:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/11/04/12/minions2.jpg?width=982&height=726&auto=webp&quality=75",
    title: "minion8",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 80000,
    chat: 3,
    interest: 5,
  },
  {
    id: "0008",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Minions.png",
    title: "minion9",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 15000,
    interest: 8,
  },
  {
    id: "0009",
    imageUrl:
      "https://www.tampabay.com/resizer/ZUsS6CL5Wdcc6UQVUiqprulJaAY=/2280x1282/smart/arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/7PFXU5WGFQI6TCHRIBWI6S7HAY.jpg",
    title: "minion10",
    location: "seoul",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 95000,
    chat: 2,
    interest: 4,
  },
];
