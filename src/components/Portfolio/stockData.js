// Components
import PortfolioStock from "./PortfolioStock";

// Images
import fordlogo from "../images/fordlogo.png";
import idexlogo from "../images/idexlogo.png";
import oatlylogo from "../images/oatlylogo.png";

const stockData = [
  {
    id: 1,
    name: "Ford Motor Co.",
    initial: "Automobile industry",
    price: 17.49,
    percentChange: 2.5,
    stocks: 1,
    img: fordlogo,
  },
  {
    id: 2,
    name: "Ideanomics Inc.",
    initial: "IDEX",
    price: 7.4,
    percentChange: 0.12,
    stocks: 2,
    img: idexlogo,
  },
  {
    id: 3,
    name: "Oatly Group",
    initial: "OTLY",
    price: 6.22,
    percentChange: -5.02,
    stocks: 1,
    img: oatlylogo,
  },
];

export const renderedStocks = stockData.map((s) => (
  <PortfolioStock
    key={s.id}
    id={s.id}
    name={s.name}
    initial={s.initial}
    price={s.price}
    percentChange={s.percentChange}
    stocks={s.stocks}
    img={s.img}
  />
));
