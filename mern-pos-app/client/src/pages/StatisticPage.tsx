import { useEffect, useState } from "react";
import BasicArea from "../components/charts/BasicArea";
import PieCharts from "../components/charts/PieCharts";
import Header from "../components/header/Header";
import StatisticCard from "../components/statistics/StatisticCard";

const StatisticPage = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("http://localhost:5000/api/bills/get-all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const totalAmount = () => {
    const amount = data.reduce(
      (total, item: any) => item.totalAmount + total,
      0
    );
    return `${amount.toFixed(2)}₺`;
  };

  return (
    <>
      <Header />
      <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1  my-10 md:gap-10 gap-4">
            <StatisticCard
              title={"Toplam Müşteri"}
              amount={data.length.toString()}
              img={"images/user.png"}
            />
            <StatisticCard
              title={"Toplam Kazanç"}
              amount={totalAmount()}
              img={"images/money.png"}
            />
            <StatisticCard
              title={"Toplam Satış"}
              amount={data.length.toString()}
              img={"images/sale.png"}
            />
            <StatisticCard
              title={"Toplam Ürün"}
              amount={products.length.toString()}
              img={"images/product.png"}
            />
          </div>
          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
            <div className="lg:w-1/2  lg:h-full h-72">
              <BasicArea data={data} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <PieCharts data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
