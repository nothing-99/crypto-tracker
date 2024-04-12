import { ICoinPriceProps, IHistory } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { transformDate } from "../utils";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function CoinPrice({ coinId, price }: ICoinPriceProps) {
  const { isLoading, data } = useQuery<IHistory[]>({
    queryKey: ["coinChart", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  const series: ApexAxisChartSeries = [
    {
      name: "change",
      data: data?.map((history) => {
        const currentPrice = price.quotes.USD.price;
        const closePrice = +history.close;
        return +(
          ((currentPrice - closePrice) / price.quotes.USD.price) *
          100
        ).toFixed(2);
      }) as (number | null)[],
    },
  ];
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -61,
              color: "#d63031",
            },
            {
              from: -60,
              to: -41,
              color: "##e17055",
            },
            {
              from: -40,
              to: -21,
              color: "#fdcb6e",
            },
            {
              from: -20,
              to: 0,
              color: "#ffeaa7",
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + "%";
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: data?.map((price) => transformDate(price.time_close)),
      labels: {
        rotate: -90,
      },
    },
  };

  return (
    <>
      {isLoading ? (
        "Chart Loading ✈️ ✈️ ✈️ ✈️"
      ) : (
        <ReactApexChart
          series={series}
          options={options}
        />
      )}
    </>
  );
}
