import { ResponsiveLine } from '@nivo/line';

export type CurveType =
  | 'basis'
  | 'cardinal'
  | 'catmullRom'
  | 'linear'
  | 'monotoneX'
  | 'monotoneY'
  | 'natural'
  | 'step'
  | 'stepAfter'
  | 'stepBefore';

function LineChart({
  data,
  xLabel,
  yLabel,
  curveType,
}: {
  data: any[];
  xLabel?: string;
  yLabel?: string;
  curveType: CurveType;
}) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 10, bottom: 50, left: 40 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: "linear",
        min: 'auto',
        max: 'auto',
        stacked: true,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        // legend: xLabel,
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: yLabel,
        legendOffset: -30,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'nivo' }}
      pointSize={6}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      curve={curveType}
      enableSlices={false}
    />
  );
}

export default LineChart;