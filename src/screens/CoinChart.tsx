import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../states/atoms";
import { ICoinChartProps, IHistory } from "../types";
import { ApexOptions } from "apexcharts";

export default function CoinChart({ coinId }: ICoinChartProps) {
  const { isLoading, data } = useQuery<IHistory[]>({
    queryKey: ["coinChart", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });
  const isDark = useRecoilValue(isDarkState);

  const series: ApexAxisChartSeries = [
    {
      data: data?.map((price) => [
        price.time_close,
        +price.open,
        +price.high,
        +price.low,
        +price.close,
      ]) as number[][],
    },
  ];
  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      show: false,
    },
    theme: {
      mode: isDark ? "dark" : "light",
    },
    grid: {
      show: false,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00B746",
          downward: "#EF403C",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
  };

  return (
    <>
      {isLoading ? (
        "Chart Loading ✈️ ✈️ ✈️ ✈️"
      ) : (
        <ReactApexChart
          type="candlestick"
          series={series}
          options={options}
        />
      )}
    </>
  );
}
