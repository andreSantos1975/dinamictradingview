import React, { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

export const CandlestickSeries = props => {
  const chartRef = useRef(null);
  const candlestickSeriesRef = useRef(null);
  const { data, ...options } = props;

  useEffect(() => {
    if (!chartRef.current) {
      chartRef.current = createChart(document.body, options);
      candlestickSeriesRef.current = chartRef.current.addCandlestickSeries();
    }

    candlestickSeriesRef.current.setData(data);

    return () => {
      chartRef.current.remove();
    };
  }, [data, options]);

  return <div ref={chartRef} />;
};
